const fs = require('fs-extra');
const path = require('path');
const SwaggerParser = require('@apidevtools/swagger-parser');

class SwaggerToTsGenerator {
  constructor(swaggerPath, outputDir) {
    this.swaggerPath = swaggerPath;
    this.outputDir = outputDir;
    this.api = null;
  }

  async generate() {
    try {
      this.api = await SwaggerParser.parse(this.swaggerPath);
      await this.ensureOutputDirs();
      
      // 生成所有模型
      await this.generateModels();
      
      // 生成所有服务
      await this.generateServices();
      
      console.log('生成完成！');
    } catch (error) {
      console.error('生成错误:', error);
    }
  }

  async ensureOutputDirs() {
    const dirs = [
      path.join(this.outputDir, 'models'),
      path.join(this.outputDir, 'services')
    ];
    
    for (const dir of dirs) {
      await fs.ensureDir(dir);
    }
  }

  async generateModels() {
    // 兼容 Swagger 2.0 和 OpenAPI 3.0
    const schemas = this.api.definitions || (this.api.components && this.api.components.schemas);
    if (!schemas) return;

    for (const [modelName, schema] of Object.entries(schemas)) {
        // 简化复杂的schema名称
        const simplifiedModelName = this.simplifySchemaName(modelName);
        
        // 修改schema中的$ref引用
        const updatedSchema = JSON.parse(JSON.stringify(schema));
        
        const interfaceCode = this.generateInterface(simplifiedModelName, updatedSchema);
        const fileName = `${this.toCleanFileName(simplifiedModelName)}.model.ts`;
        const filePath = path.join(this.outputDir, 'models', fileName);
        
        await fs.writeFile(filePath, interfaceCode);
        console.log(`生成模型: ${fileName}`);
    }
  }

  async generateServices() {
    if (!this.api.paths) return;

    for (const [routePath, methods] of Object.entries(this.api.paths)) {
      for (const [method, operation] of Object.entries(methods)) {
        if (typeof operation === 'object' && operation.tags) {
          for (const tag of operation.tags) {
            await this.generateServiceForTag(tag);
          }
        }
      }
    }
  }

  async generateServiceForTag(tagName) {
    const serviceName = `${this.toPascalCase(tagName)}Service`;
    const serviceCode = this.generateServiceCode(serviceName, tagName);
    const fileName = `${this.toCleanFileName(tagName)}.service.ts`;
    const filePath = path.join(this.outputDir, 'services', fileName);
    
    await fs.writeFile(filePath, serviceCode);
    console.log(`生成服务: ${fileName}`);
  }

  generateInterface(modelName, schema) {
    let propertiesCode = '';
    const imports = new Set();
    // 使用清理后的名称作为接口名
    const cleanInterfaceName = this.toCleanFileName(modelName);
    
    if (schema.properties) {
      for (const [propName, propSchema] of Object.entries(schema.properties)) {
        const type = this.getTypescriptType(propSchema);
        const isOptional = !schema.required || !schema.required.includes(propName);
        
        // 检查类型是否是对其他模型的引用
        if (type !== 'string' && type !== 'number' && type !== 'boolean' && type !== 'any' && !type.includes('[]')) {
          // 避免导入自身
          if (type !== modelName) {
            imports.add(`import { ${type} } from './${this.toCleanFileName(type)}.model';`);
          }
        }
        
        // 处理数组类型中的引用
        if (type.includes('[]')) {
          const elementType = type.replace('[]', '');
          if (elementType !== 'string' && elementType !== 'number' && elementType !== 'boolean' && elementType !== 'any') {
            if (elementType !== modelName) {
              imports.add(`import { ${elementType} } from './${this.toCleanFileName(elementType)}.model';`);
            }
          }
        }
        
        // 添加属性描述注释
        const description = propSchema.description || `${propName}`;
        propertiesCode += `  /**
   * ${description}
   */
  ${propName}${isOptional ? '?' : ''}: ${type} | null;
`;
      }
    }

    // 生成导入语句
    const importStatements = imports.size > 0 ? Array.from(imports).join('\n') + '\n\n' : '';

    return `${importStatements}export interface ${cleanInterfaceName} {
${propertiesCode}}`;
  }

  generateServiceCode(serviceName, tagName) {
    const methods = this.getMethodsByTag(tagName);
    let methodsCode = '';

    for (const method of methods) {
      methodsCode += this.generateServiceMethod(method);
    }

    return `import { BaseService, ExtOptions } from './base.service';
${this.generateImports(methods)}

class ${serviceName} extends BaseService {
  constructor() {
    super();
  }
${methodsCode}
}

export default new ${serviceName}();`;
  }

  generateServiceMethod(method) {
    const { operation, path, httpMethod } = method;
    const methodName = this.getMethodName(operation.operationId || httpMethod + path);
    const params = this.getMethodParams(path);
    const requestBodyType = this.getRequestBodyType(operation);
    const returnType = this.getReturnType(operation);
    const url = this.generateUrl(path, params);

    // 处理参数在 URL 中的情况
    let paramArgs = '';
    
    if (params.length > 0) {
      paramArgs = params.map(param => `${param}: string | number`).join(', ') + ', data: ' + requestBodyType;
    } else {
      paramArgs = `data: ${requestBodyType}`;
    }

    // 生成参数注释
    const paramComments = params.length > 0 
      ? params.map(param => `   * @param ${param} string | number`).join('\n') + '\n' 
      : '';

    return `
  /**
   * ${operation.summary || '无描述'}
${paramComments}   * @param data ${requestBodyType}
   */
  ${methodName}(${paramArgs}, extOptions?: ExtOptions): Promise<${returnType}> {
    const url = \`${url}\`;
    return this.request<${returnType}>('${httpMethod}', url, data, extOptions);
  }
`;
  }

  getMethodsByTag(tagName) {
    const methods = [];
    
    for (const [routePath, pathMethods] of Object.entries(this.api.paths)) {
      for (const [httpMethod, operation] of Object.entries(pathMethods)) {
        if (operation.tags && operation.tags.includes(tagName)) {
          methods.push({
            path: routePath,
            httpMethod,
            operation
          });
        }
      }
    }
    
    return methods;
  }

  getMethodParams(path) {
    const params = [];
    const paramRegex = /\{(\w+)\}/g;
    let match;
    
    while ((match = paramRegex.exec(path)) !== null) {
      params.push(match[1]);
    }
    
    return params;
  }

  generateUrl(path, params) {
    let url = path;
    // 替换大括号参数为模板字符串格式
    for (const param of params) {
      url = url.replace(`{${param}}`, `\${${param}}`);
    }
    // 直接返回处理后的路径，不再添加额外的/api前缀
    return url;
  }

  getMethodName(operationId) {
    // 改进的操作ID转换逻辑，保留下划线并正确处理特殊字符
    // 首先将所有非字母数字字符（除了下划线）替换为下划线
    let normalizedId = operationId.replace(/[^a-zA-Z0-9_]/g, '_');
    // 然后调用toCamelCase处理下划线
    return this.toCamelCase(normalizedId);
  }

  getRequestBodyType(operation) {
    // 兼容 Swagger 2.0 和 OpenAPI 3.0
    if (operation.requestBody && operation.requestBody.content) {
      const content = operation.requestBody.content;
      if (content['application/json'] && content['application/json'].schema) {
        return this.getTypescriptType(content['application/json'].schema);
      }
    } else if (operation.parameters) {
      const bodyParam = operation.parameters.find(p => p.in === 'body');
      if (bodyParam && bodyParam.schema) {
        return this.getTypescriptType(bodyParam.schema);
      }
    }
    return 'any';
  }

  getReturnType(operation) {
    if (operation.responses && operation.responses['200']) {
      const response = operation.responses['200'];
      // 兼容 Swagger 2.0 和 OpenAPI 3.0
      if (response.content && response.content['application/json'] && response.content['application/json'].schema) {
        return this.getTypescriptType(response.content['application/json'].schema);
      } else if (response.schema) {
        return this.getTypescriptType(response.schema);
      }
    }
    return 'any';
  }

  generateImports(methods) {
    const imports = new Set();
    
    for (const method of methods) {
      const requestBodyType = this.getRequestBodyType(method.operation);
      const returnType = this.getReturnType(method.operation);
      
      // 处理请求体类型
      if (requestBodyType !== 'any' && !requestBodyType.includes('[]')) {
        imports.add(`import { ${requestBodyType} } from '../models/${this.toCleanFileName(requestBodyType)}.model';`);
      }
      
      // 处理返回类型，跳过数组类型的导入
      if (returnType !== 'any' && !returnType.includes('[]')) {
        imports.add(`import { ${returnType} } from '../models/${this.toCleanFileName(returnType)}.model';`);
      }
    }
    
    return Array.from(imports).join('\n');
  }

  getTypescriptType(schema) {
    if (schema.$ref) {
      const refName = schema.$ref.split('/').pop();
      // 先简化名称，再清理特殊字符
      const simplifiedName = this.simplifySchemaName(refName);
      return this.toCleanFileName(simplifiedName);
    }
    
    switch (schema.type) {
      case 'string': return 'string';
      case 'number': return 'number';
      case 'integer': return 'number';
      case 'boolean': return 'boolean';
      case 'array': 
        return `${this.getTypescriptType(schema.items)}[]`;
      case 'object': return 'any';
      default: return 'any';
    }
  }

  toKebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  // 生成没有点号、中划线、下划线(末尾)和其他特殊字符的合法文件名
  toCleanFileName(str) {
    // 替换所有点号、中划线为空白
    let cleanStr = str.replace(/[.-]/g, '');
    // 移除所有非字母数字字符（除了下划线）
    cleanStr = cleanStr.replace(/[^a-zA-Z0-9_]/g, '');
    // 移除文件名末尾的下划线
    cleanStr = cleanStr.replace(/_+$/, '');
    return cleanStr;
  }

  // 简化复杂的schema名称
  simplifySchemaName(str) {
    // 处理ResponseSchema_List_app.schemas.tenant_schema.CoreTenantRead__这样的名称
    if (str.startsWith('ResponseSchema_') && str.includes('List_')) {
      const match = str.match(/_List_.+_(\w+)__$/);
      if (match && match[1]) {
        return `ResponseSchemaList${this.toPascalCase(match[1])}`;
      }
    }
    // 处理其他ResponseSchema_开头的名称
    if (str.startsWith('ResponseSchema_')) {
      const parts = str.split('_');
      if (parts.length > 1) {
        // 移除ResponseSchema_前缀，并将剩余部分转换为驼峰命名
        const rest = parts.slice(1).join('_');
        return `ResponseSchema${this.toPascalCase(rest)}`;
      }
    }
    return str;
  }

  toCamelCase(str) {
    return str.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase().replace('-', '').replace('_', '');
    }).replace(/^[A-Z]/, (first) => first.toLowerCase());
  }

  toPascalCase(str) {
    const camelCase = this.toCamelCase(str);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  }
}

// 使用示例
const generator = new SwaggerToTsGenerator('./swagger.json', './src');
generator.generate();