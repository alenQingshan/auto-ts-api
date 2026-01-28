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
- 自动解析 Swagger/OpenAPI 3.0 规范的 JSON 文件
- 生成 TypeScript 接口定义（Models）和 API 服务类（Services）
- 生成 JavaScript 模型（Models）和 API 服务类（Services）
- 支持 TypeScript 和 JavaScript 两种输出格式
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

**生成 TypeScript 版本：**

```bash
npm run generate:api:ts
```

生成的代码将会保存在 `src-ts/models` 和 `src-ts/services` 目录下。

**生成 JavaScript 版本：**

```bash
npm run generate:api:js
```

生成的代码将会保存在 `src-js/models` 和 `src-js/services` 目录下。

**同时生成两种版本：**

```bash
npm run generate:api:all
```

**监听模式（自动生成）：**

```bash
# TypeScript 监听模式
npm run generate:api:watch:ts

# JavaScript 监听模式
npm run generate:api:watch:js
```

### 访问Swagger UI

运行以下命令启动本地Swagger UI服务器：
```bash
node swagger-server.js
```

在浏览器中打开`http://localhost:3000`，即可查看并测试您的API。

## 📁 项目结构

```
├── generate-script.js       # TypeScript 代码生成脚本
├── generate-script-js.js    # JavaScript 代码生成脚本
├── base.service.ts          # TypeScript 基础服务类模板
├── base.service.js          # JavaScript 基础服务类模板
├── swagger.json             # Swagger API定义文件
├── swagger-server.js        # Swagger UI 服务器
├── package.json             # 项目依赖配置
├── src-ts/                  # TypeScript 生成目录
│   ├── models/              # 生成的 TypeScript 接口定义
│   │   └── *.model.ts       # 数据模型文件
│   └── services/            # 生成的 TypeScript API 服务类
│       ├── base.service.ts  # 基础服务类
│       └── *.service.ts     # 各模块API服务
└── src-js/                  # JavaScript 生成目录
    ├── models/              # 生成的 JavaScript 模型类
    │   └── *.model.js       # 数据模型文件
    └── services/            # 生成的 JavaScript API 服务类
        ├── base.service.js  # 基础服务类
        └── *.service.js     # 各模块API服务
```

## 🛠 使用方法

### 模型使用

**TypeScript 模型：**

```typescript
import { UserCreate, User } from './src-ts/models/Users/User.model';

const userData: UserCreate = {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'Password123!'
};
```

**JavaScript 模型：**

```javascript
const UserCreate = require('./src-js/models/Users/UserCreate.model');

const userData = new UserCreate({
  username: 'john_doe',
  email: 'john@example.com',
  password: 'Password123!'
});
```

### API服务使用

**TypeScript API 服务：**

```typescript
import usersService from './src-ts/services/Users.service';

try {
  const response = await usersService.createUser(userData);
  console.log('用户创建成功:', response);
} catch (error) {
  console.error('用户创建失败:', error);
}
```

**JavaScript API 服务：**

```javascript
const usersService = require('./src-js/services/Users.service');

usersService.createUser(userData)
  .then(response => {
    console.log('用户创建成功:', response);
  })
  .catch(error => {
    console.error('用户创建失败:', error);
  });
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
