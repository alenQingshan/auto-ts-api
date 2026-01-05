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
      // 清空输出目录
      await this.cleanOutputDirs();
      
      this.api = await SwaggerParser.parse(this.swaggerPath);
      await this.ensureOutputDirs();
      
      // 分析 schema 到 tag 的映射关系
      this.analyzeSchemaToTagMapping();
      
      // 生成所有模型
      await this.generateModels();
      
      // 生成所有服务
      await this.generateServices();
      
      // 复制 base.service.ts 到 services 目录
      await this.copyBaseService();
      
      console.log('生成完成！');
    } catch (error) {
      console.error('生成错误:', error);
    }
  }

  async cleanOutputDirs() {
    const dirs = [
      path.join(this.outputDir, 'models'),
      path.join(this.outputDir, 'services')
    ];
    
    for (const dir of dirs) {
      if (await fs.pathExists(dir)) {
        // 清空目录及其所有子目录
        await fs.emptyDir(dir);
        console.log(`已清空目录: ${dir}`);
      }
    }
  }

  async copyBaseService() {
    const baseServicePath = path.join(process.cwd(), 'base.service.ts');
    const targetPath = path.join(this.outputDir, 'services', 'base.service.ts');
    
    if (await fs.pathExists(baseServicePath)) {
      await fs.copy(baseServicePath, targetPath);
      console.log(`已复制 base.service.ts 到 ${targetPath}`);
    } else {
      console.warn(`警告: 未找到 base.service.ts 文件 (${baseServicePath})`);
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

  // 分析 swagger，建立 schema 到 tag 的映射关系
  analyzeSchemaToTagMapping() {
    this.schemaToTagMap = {}; // schema名称 -> tag名称
    this.tagToSchemasMap = {}; // tag名称 -> [schema名称列表]
    
    if (!this.api.paths) return;
    
    // 遍历所有路径，找出每个 tag 使用的 schemas
    for (const [routePath, pathMethods] of Object.entries(this.api.paths)) {
      for (const [httpMethod, operation] of Object.entries(pathMethods)) {
        if (!operation.tags || !Array.isArray(operation.tags)) continue;
        
        const tags = operation.tags;
        const schemas = new Set();
        
        // 收集请求体中的 schema
        if (operation.requestBody && operation.requestBody.content) {
          const content = operation.requestBody.content;
          for (const contentType of Object.values(content)) {
            if (contentType.schema) {
              this.extractSchemaRefs(contentType.schema, schemas);
            }
          }
        } else if (operation.parameters) {
          for (const param of operation.parameters) {
            if (param.schema) {
              this.extractSchemaRefs(param.schema, schemas);
            }
          }
        }
        
        // 收集响应中的 schema
        if (operation.responses) {
          for (const response of Object.values(operation.responses)) {
            if (response.content) {
              for (const contentType of Object.values(response.content)) {
                if (contentType.schema) {
                  this.extractSchemaRefs(contentType.schema, schemas);
                }
              }
            } else if (response.schema) {
              this.extractSchemaRefs(response.schema, schemas);
            }
          }
        }
        
        // 将 schema 关联到对应的 tag
        for (const tag of tags) {
          if (!this.tagToSchemasMap[tag]) {
            this.tagToSchemasMap[tag] = new Set();
          }
          for (const schemaName of schemas) {
            const simplifiedName = this.simplifySchemaName(schemaName);
            const cleanName = this.toCleanFileName(simplifiedName);
            this.tagToSchemasMap[tag].add(cleanName);
            
            // 如果 schema 还没有关联到 tag，或者当前 tag 更具体，则更新映射
            if (!this.schemaToTagMap[cleanName] || this.isMoreSpecificTag(tag, this.schemaToTagMap[cleanName])) {
              this.schemaToTagMap[cleanName] = tag;
            }
          }
        }
      }
    }
  }

  // 从 schema 中提取所有引用的 schema 名称
  extractSchemaRefs(schema, schemas) {
    if (schema.$ref) {
      const refName = schema.$ref.split('/').pop();
      const simplifiedName = this.simplifySchemaName(refName);
      const cleanName = this.toCleanFileName(simplifiedName);
      schemas.add(cleanName);
    } else if (schema.items) {
      this.extractSchemaRefs(schema.items, schemas);
    } else if (schema.properties) {
      for (const propSchema of Object.values(schema.properties)) {
        this.extractSchemaRefs(propSchema, schemas);
      }
    } else if (schema.anyOf || schema.oneOf || schema.allOf) {
      const schemasToCheck = schema.anyOf || schema.oneOf || schema.allOf;
      for (const subSchema of schemasToCheck) {
        this.extractSchemaRefs(subSchema, schemas);
      }
    }
  }

  // 判断 tag1 是否比 tag2 更具体（用于选择更合适的分类）
  isMoreSpecificTag(tag1, tag2) {
    // 如果 tag1 包含 tag2，说明 tag1 更具体
    return tag1.includes(tag2) && tag1 !== tag2;
  }

  // 根据 schema 名称获取对应的 tag（用于分类）
  getTagForSchema(schemaName) {
    if (!this.schemaToTagMap) return null;
    const cleanName = this.toCleanFileName(this.simplifySchemaName(schemaName));
    return this.schemaToTagMap[cleanName] || null;
  }

  // 将 tag 名称转换为文件夹名称
  tagToFolderName(tag) {
    return tag.replace(/-/g, '_');
  }

  async generateModels() {
    // 兼容 Swagger 2.0 和 OpenAPI 3.0
    const schemas = this.api.definitions || (this.api.components && this.api.components.schemas);
    if (!schemas) return;

    // 存储每个 tag 文件夹需要创建的目录
    const tagFolders = new Set();

    for (const [modelName, schema] of Object.entries(schemas)) {
        // 简化复杂的schema名称
        const simplifiedModelName = this.simplifySchemaName(modelName);
        const cleanModelName = this.toCleanFileName(simplifiedModelName);
        
        // 根据映射关系获取 tag，如果没有则根据名称推断
        let tag = this.getTagForSchema(modelName);
        if (!tag) {
          // 如果没找到映射，尝试根据名称推断
          tag = this.inferTagFromName(cleanModelName);
        }
        
        const folderName = this.tagToFolderName(tag);
        tagFolders.add(folderName);
        
        // 确保文件夹存在
        const folderPath = path.join(this.outputDir, 'models', folderName);
        await fs.ensureDir(folderPath);
        
        // 修改schema中的$ref引用
        const updatedSchema = JSON.parse(JSON.stringify(schema));
        
        const interfaceCode = this.generateInterface(simplifiedModelName, updatedSchema, folderName);
        const fileName = `${cleanModelName}.model.ts`;
        const filePath = path.join(folderPath, fileName);
        
        await fs.writeFile(filePath, interfaceCode);
        console.log(`生成模型: ${folderName}/${fileName}`);
    }
  }

  // 根据 schema 名称推断 tag（当没有找到映射时使用）
  inferTagFromName(schemaName) {
    const name = schemaName.toLowerCase();
    
    if (name.startsWith('core')) return 'users'; // CoreUser, CoreRole 等
    if (name.startsWith('cultural')) return 'cultural_products';
    if (name.startsWith('lib')) return 'library_books';
    if (name.startsWith('news')) return 'news_articles';
    if (name.startsWith('veg')) return 'veg_articles';
    if (name.startsWith('email')) return 'email_templates';
    if (name.startsWith('sms')) return 'sms_templates';
    if (name.startsWith('automation')) return 'automation';
    if (name.startsWith('conf') || name.startsWith('config')) return 'config_region';
    if (name.startsWith('datadict')) return 'config_data_dict';
    if (name.startsWith('security')) return 'security';
    if (name.startsWith('sensitiveword')) return 'config_sensitive_word';
    if (name.startsWith('tts')) return 'TTS';
    if (name.startsWith('aichat')) return 'AI-chat';
    
    return 'common';
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

  generateInterface(modelName, schema, currentFolder) {
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
          if (type !== cleanInterfaceName) {
            const targetFolder = this.getTagForSchema(type) || this.inferTagFromName(type);
            const targetFolderName = this.tagToFolderName(targetFolder);
            const importPath = this.getModelImportPath(currentFolder, targetFolderName, type);
            imports.add(`import { ${type} } from '${importPath}';`);
          }
        }
        
        // 处理数组类型中的引用
        if (type.includes('[]')) {
          const elementType = type.replace('[]', '');
          if (elementType !== 'string' && elementType !== 'number' && elementType !== 'boolean' && elementType !== 'any') {
            if (elementType !== cleanInterfaceName) {
              const targetFolder = this.getTagForSchema(elementType) || this.inferTagFromName(elementType);
              const targetFolderName = this.tagToFolderName(targetFolder);
              const importPath = this.getModelImportPath(currentFolder, targetFolderName, elementType);
              imports.add(`import { ${elementType} } from '${importPath}';`);
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

  // 获取模型导入路径（从当前文件夹导入目标文件夹的模型）
  getModelImportPath(currentFolder, targetFolder, modelName) {
    if (currentFolder === targetFolder) {
      // 同一文件夹，使用相对路径
      return `./${this.toCleanFileName(modelName)}.model`;
    } else {
      // 不同文件夹，需要回到 models 目录再进入目标文件夹
      return `../${targetFolder}/${this.toCleanFileName(modelName)}.model`;
    }
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
        const targetFolder = this.getTagForSchema(requestBodyType) || this.inferTagFromName(requestBodyType);
        const targetFolderName = this.tagToFolderName(targetFolder);
        imports.add(`import { ${requestBodyType} } from '../models/${targetFolderName}/${this.toCleanFileName(requestBodyType)}.model';`);
      }
      
      // 处理返回类型，跳过数组类型的导入
      if (returnType !== 'any' && !returnType.includes('[]')) {
        const targetFolder = this.getTagForSchema(returnType) || this.inferTagFromName(returnType);
        const targetFolderName = this.tagToFolderName(targetFolder);
        imports.add(`import { ${returnType} } from '../models/${targetFolderName}/${this.toCleanFileName(returnType)}.model';`);
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
    // 特殊处理带有下划线的字符串，如email_channels
    if (str.includes('_')) {
      return str.split('_').map(part => 
        part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
      ).join('');
    }
    // 对于没有下划线的字符串，使用原来的逻辑
    const camelCase = this.toCamelCase(str);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  }
}

// 使用示例
const generator = new SwaggerToTsGenerator('./swagger.json', './src');
generator.generate();