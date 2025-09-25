# auto-ts-api

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger">
</p>

## 📋 项目介绍

**auto-ts-api** 是一个高效的API代码生成工具，能够自动从Swagger/OpenAPI JSON文件中生成TypeScript接口代码，为前端开发者提供类型安全的API调用体验。
[github项目地址](https://github.com/alenQingshan/auto-ts-api)

[gitee项目地址](https://gitee.com/alenliuqingshan/auto-ts-api)

### ✨ 主要功能
- 自动解析Swagger/OpenAPI 3.1.x规范的JSON文件
- 生成TypeScript接口定义（Models）
- 生成类型安全的API服务类（Services）
- 支持自定义扩展配置
- 一键生成，快速集成到前端项目

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 配置Swagger文件

确保在项目根目录下有一个有效的Swagger JSON文件，命名为`swagger.json`。
参考官方swagger标准格式https://petstore.swagger.io/v2/swagger.json
如果swagger的标准格式不对，需要先转换为标准格式
再将你要使用的json复制到本地文件，或者修改generate-script中的地址

### 生成API代码

运行以下命令生成TypeScript API代码：

```bash
node generate-script.js
```

生成的代码将会保存在`src/models`和`src/services`目录下。

## 📁 项目结构

```
├── generate-script.js       # 代码生成脚本
├── swagger.json             # Swagger API定义文件
├── package.json             # 项目依赖配置
└── src/
    ├── models/              # 生成的TypeScript接口定义
    │   ├── *.model.ts       # 数据模型文件
    └── services/            # 生成的API服务类
        ├── base.service.ts  # 基础服务类
        └── *.service.ts     # 各模块API服务
```

## 🛠 使用方法

### 模型使用

生成的模型文件可以直接导入使用，获得完整的类型提示：

```typescript
import { LoginRequest, TokenResponse } from './models';

const loginData: LoginRequest = {
  // 获得完整的类型提示
};
```

### API服务使用

使用生成的API服务类进行网络请求：

```typescript
import authService from './services/auth.service';

// 调用登录API
try {
  const response = await authService.loginAuthLoginPost(loginData);
  console.log('登录成功:', response);
} catch (error) {
  console.error('登录失败:', error);
}
```

## 🔧 自定义配置

### 修改生成脚本

如果需要调整代码生成的规则，可以编辑`generate-script.js`文件中的配置：

- 修改输出目录
- 调整命名规则
- 自定义生成的代码模板
- 添加额外的请求拦截器或响应处理

### 调整Swagger版本

当前支持的Swagger/OpenAPI版本为3.1.x。如果您的Swagger文件版本有问题可直接手动修改generate-script.js中的swagger版本号。

## 🤝 贡献指南

1. Fork 本仓库
2. 新建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 注意事项

- 确保您的Swagger文件格式正确且符合OpenAPI 3.1.x规范
- 生成代码前请备份已有文件，避免覆盖重要修改
- 可以根据项目需求自定义`base.service.ts`中的请求逻辑
- 再此特别鸣谢裴工的技术支持！


---

<p align="center">
  Made with ❤️ for TypeScript developers
</p>
