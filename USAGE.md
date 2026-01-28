# 📖 使用指南

## 🚀 快速开始

生成的代码提供了**一站式的 API 调用解决方案**，包含以下几种使用方式：

---

## 📦 生成的目录结构

```
src-ts/                          # TypeScript 版本
├── index.ts                     # 🌟 统一入口文件（一站式导入）
├── api/
│   └── config.ts               # API 配置和端点
├── request/
│   └── index.ts                # 请求工具方法
├── models/                     # 数据模型
│   ├── Users/
│   ├── Products/
│   └── Files/
└── services/                   # API 服务类
    ├── base.service.ts
    ├── Users.service.ts
    ├── Products.service.ts
    └── Files.service.ts

src-js/                          # JavaScript 版本（结构相同）
```

---

## 💡 使用方式

### 方式 1: 使用服务类（推荐 ⭐）

**TypeScript:**
```typescript
import { usersService, productsService } from './src-ts';

// 获取用户列表
const users = await usersService.getUserList({ page: 1, page_size: 10 });

// 创建用户
const newUser = await usersService.createUser({
  username: 'john_doe',
  email: 'john@example.com',
  password: 'Password123!'
});

// 获取用户详情
const user = await usersService.getUserById(1, {});

// 更新用户
const updatedUser = await usersService.updateUser(1, {
  full_name: 'John Doe Updated'
});

// 删除用户
await usersService.deleteUser(1, {});

// 获取产品列表
const products = await productsService.getProductList({
  category: 'Electronics',
  min_price: 100
});
```

**JavaScript:**
```javascript
const { usersService, productsService } = require('./src-js');

// 获取用户列表
usersService.getUserList({ page: 1, page_size: 10 })
  .then(users => console.log(users))
  .catch(error => console.error(error));

// 创建用户
usersService.createUser({
  username: 'john_doe',
  email: 'john@example.com',
  password: 'Password123!'
}).then(newUser => console.log(newUser));
```

---

### 方式 2: 使用请求工具

**TypeScript:**
```typescript
import { request, API_ENDPOINTS } from './src-ts';

// GET 请求
const users = await request.get(API_ENDPOINTS.users.list, {
  page: 1,
  page_size: 10
});

// POST 请求
const newUser = await request.post(API_ENDPOINTS.users.create, {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'Password123!'
});

// PUT 请求
const updatedUser = await request.put(API_ENDPOINTS.users.update(1), {
  full_name: 'John Doe Updated'
});

// DELETE 请求
await request.delete(API_ENDPOINTS.users.delete(1));

// 上传文件
const formData = new FormData();
formData.append('file', file);
formData.append('category', 'image');
const uploadResult = await request.upload(API_ENDPOINTS.files.upload, formData);

// 下载文件
await request.download('/files/download/123', {}, 'document.pdf');
```

**JavaScript:**
```javascript
const { request, API_ENDPOINTS } = require('./src-js');

// GET 请求
request.get(API_ENDPOINTS.users.list, { page: 1 })
  .then(users => console.log(users));

// POST 请求
request.post(API_ENDPOINTS.users.create, {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'Password123!'
}).then(newUser => console.log(newUser));
```

---

### 方式 3: 使用模型类（JavaScript）

**JavaScript:**
```javascript
const { User, UserCreate, Product } = require('./src-js');

// 创建用户模型实例
const userData = new UserCreate({
  username: 'john_doe',
  email: 'john@example.com',
  password: 'Password123!'
});

console.log(userData.toJSON());

// 从 API 响应创建实例
const user = User.fromResponse({
  id: 1,
  username: 'john_doe',
  email: 'john@example.com'
});
```

---

## 🔧 配置

### 修改 API 基础地址

**TypeScript:** 编辑 `src-ts/api/config.ts`
```typescript
export const API_CONFIG = {
  baseURL: 'https://your-api-domain.com/api/v1',  // 修改这里
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
};
```

**JavaScript:** 编辑 `src-js/api/config.js`
```javascript
const API_CONFIG = {
  baseURL: 'https://your-api-domain.com/api/v1',  // 修改这里
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
};
```

### 使用环境变量

在项目中设置环境变量：
- TypeScript: `VITE_API_BASE_URL`
- JavaScript: `API_BASE_URL`

---

## 🎯 完整示例

### Vue 3 + TypeScript 项目

```typescript
// src/views/UserList.vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usersService, User } from '@/api/src-ts';

const users = ref<User[]>([]);
const loading = ref(false);

const fetchUsers = async () => {
  loading.value = true;
  try {
    const data = await usersService.getUserList({
      page: 1,
      page_size: 10
    });
    users.value = data;
  } catch (error) {
    console.error('获取用户列表失败:', error);
  } finally {
    loading.value = false;
  }
};

const createUser = async () => {
  try {
    const newUser = await usersService.createUser({
      username: 'new_user',
      email: 'new@example.com',
      password: 'Password123!'
    });
    console.log('用户创建成功:', newUser);
    fetchUsers(); // 刷新列表
  } catch (error) {
    console.error('创建用户失败:', error);
  }
};

onMounted(() => {
  fetchUsers();
});
</script>
```

### React + TypeScript 项目

```typescript
// src/pages/UserList.tsx
import React, { useEffect, useState } from 'react';
import { usersService, User } from '@/api/src-ts';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await usersService.getUserList({
        page: 1,
        page_size: 10
      });
      setUsers(data);
    } catch (error) {
      console.error('获取用户列表失败:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {loading ? '加载中...' : users.map(user => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
};

export default UserList;
```

### Node.js + JavaScript 项目

```javascript
// server/controllers/userController.js
const { usersService } = require('../api/src-js');

async function getUserList(req, res) {
  try {
    const { page = 1, page_size = 10 } = req.query;
    const users = await usersService.getUserList({ page, page_size });
    res.json({
      code: 200,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

async function createUser(req, res) {
  try {
    const userData = req.body;
    const newUser = await usersService.createUser(userData);
    res.json({
      code: 201,
      data: newUser
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

module.exports = {
  getUserList,
  createUser
};
```

---

## 🛠 高级用法

### 自定义请求配置

```typescript
import { usersService } from './src-ts';

// 传递额外的 axios 配置
const users = await usersService.getUserList({}, {
  headers: {
    'X-Custom-Header': 'value'
  },
  timeout: 5000
});
```

### 文件上传

```typescript
import { filesService } from './src-ts';

const handleFileUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('category', 'image');
  formData.append('description', 'Profile photo');

  try {
    const result = await filesService.uploadFile(formData, {});
    console.log('上传成功:', result);
  } catch (error) {
    console.error('上传失败:', error);
  }
};
```

### 批量上传

```typescript
import { filesService } from './src-ts';

const handleBatchUpload = async (files: FileList) => {
  const formData = new FormData();
  Array.from(files).forEach(file => {
    formData.append('files', file);
  });
  formData.append('category', 'document');

  try {
    const results = await filesService.uploadMultipleFiles(formData, {});
    console.log('批量上传成功:', results);
  } catch (error) {
    console.error('批量上传失败:', error);
  }
};
```

---

## 📝 注意事项

1. **Token 管理**: 请求工具会自动从 `localStorage` 或 `sessionStorage` 中获取 token
2. **错误处理**: 所有请求都已配置统一的错误拦截器
3. **类型安全**: TypeScript 版本提供完整的类型提示
4. **业务状态码**: 默认处理 200 和 201 状态码，可根据实际业务调整

---

## 🎨 自定义拦截器

如需自定义请求/响应拦截器，可以修改 `src-ts/request/index.ts` 或 `src-js/request/index.js`：

```typescript
// 自定义请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 添加自定义逻辑
    const token = getTokenFromSomewhere();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 自定义响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 自定义响应处理
    return response.data;
  },
  (error) => {
    // 自定义错误处理
    return Promise.reject(error);
  }
);
```

---

## 🌟 最佳实践

1. **使用服务类**: 推荐使用服务类进行 API 调用，代码更清晰
2. **统一错误处理**: 在应用层统一处理错误，避免重复代码
3. **类型定义**: 充分利用 TypeScript 的类型系统，提高代码质量
4. **环境配置**: 使用环境变量管理不同环境的 API 地址
5. **模块化导入**: 按需导入所需的服务和模型，减少打包体积

---

## 📚 更多资源

- [Axios 官方文档](https://axios-http.com/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Swagger/OpenAPI 规范](https://swagger.io/specification/)

---

**Happy Coding! 🎉**
