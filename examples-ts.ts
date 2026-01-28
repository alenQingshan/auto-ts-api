// ============================================
// TypeScript 使用示例
// ============================================

// 方式 1: 一站式导入（推荐）
import { usersService, productsService, filesService } from './src-ts';
import { request, API_ENDPOINTS } from './src-ts';
import type { User, UserCreate } from './src-ts';

// ============================================
// 示例 1: 用户管理
// ============================================

// 获取用户列表
async function getUserList() {
  try {
    const users = await usersService.getUserList({
      page: 1,
      page_size: 10,
      keyword: 'john'
    });
    console.log('用户列表:', users);
    return users;
  } catch (error) {
    console.error('获取失败:', error);
  }
}

// 创建用户
async function createUser() {
  try {
    const newUser = await usersService.createUser({
      username: 'john_doe',
      email: 'john@example.com',
      password: 'Password123!',
      full_name: 'John Doe'
    });
    console.log('创建成功:', newUser);
    return newUser;
  } catch (error) {
    console.error('创建失败:', error);
  }
}

// 更新用户
async function updateUser(userId: number) {
  try {
    const updatedUser = await usersService.updateUser(userId, {
      full_name: 'John Doe Updated',
      avatar: 'https://example.com/avatar.jpg'
    });
    console.log('更新成功:', updatedUser);
    return updatedUser;
  } catch (error) {
    console.error('更新失败:', error);
  }
}

// 删除用户
async function deleteUser(userId: number) {
  try {
    await usersService.deleteUser(userId, {});
    console.log('删除成功');
  } catch (error) {
    console.error('删除失败:', error);
  }
}

// ============================================
// 示例 2: 产品管理
// ============================================

// 获取产品列表（带筛选）
async function getProductList() {
  try {
    const products = await productsService.getProductList({
      page: 1,
      page_size: 20,
      category: 'Electronics',
      min_price: 100,
      max_price: 1000
    });
    console.log('产品列表:', products);
    return products;
  } catch (error) {
    console.error('获取失败:', error);
  }
}

// 创建产品
async function createProduct() {
  try {
    const newProduct = await productsService.createProduct({
      name: 'MacBook Pro',
      description: 'High performance laptop',
      price: 2999.99,
      category: 'Electronics',
      stock: 50,
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg'
      ]
    });
    console.log('创建成功:', newProduct);
    return newProduct;
  } catch (error) {
    console.error('创建失败:', error);
  }
}

// ============================================
// 示例 3: 文件上传
// ============================================

// 单文件上传
async function uploadSingleFile(file: File) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', 'image');
    formData.append('description', 'Profile photo');

    const result = await filesService.uploadFile(formData, {});
    console.log('上传成功:', result);
    return result;
  } catch (error) {
    console.error('上传失败:', error);
  }
}

// 批量上传
async function uploadMultipleFiles(files: FileList) {
  try {
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('files', file);
    });
    formData.append('category', 'document');

    const results = await filesService.uploadMultipleFiles(formData, {});
    console.log('批量上传成功:', results);
    return results;
  } catch (error) {
    console.error('批量上传失败:', error);
  }
}

// ============================================
// 示例 4: 使用请求工具（更灵活）
// ============================================

async function useRequestTool() {
  // GET 请求
  const users = await request.get(API_ENDPOINTS.users.list, {
    page: 1,
    page_size: 10
  });

  // POST 请求
  const newUser = await request.post(API_ENDPOINTS.users.create, {
    username: 'jane_doe',
    email: 'jane@example.com',
    password: 'Password123!'
  });

  // PUT 请求
  const updatedUser = await request.put(API_ENDPOINTS.users.update(1), {
    full_name: 'Jane Doe Updated'
  });

  // DELETE 请求
  await request.delete(API_ENDPOINTS.users.delete(1));

  // 文件下载
  await request.download('/files/download/123', {}, 'document.pdf');
}

// ============================================
// 示例 5: 在 Vue 3 组件中使用
// ============================================

/*
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usersService, User } from '@/api/src-ts';

const users = ref<User[]>([]);
const loading = ref(false);

const fetchUsers = async () => {
  loading.value = true;
  try {
    const data = await usersService.getUserList({ page: 1, page_size: 10 });
    users.value = data;
  } catch (error) {
    console.error('获取失败:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchUsers();
});
</script>
*/

// ============================================
// 示例 6: 在 React 组件中使用
// ============================================

/*
import React, { useEffect, useState } from 'react';
import { usersService, User } from '@/api/src-ts';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await usersService.getUserList({ page: 1, page_size: 10 });
        setUsers(data);
      } catch (error) {
        console.error('获取失败:', error);
      } finally {
        setLoading(false);
      }
    };

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
*/

// ============================================
// 示例 7: 自定义配置
// ============================================

async function withCustomConfig() {
  // 传递自定义 axios 配置
  const users = await usersService.getUserList({}, {
    headers: {
      'X-Custom-Header': 'custom-value'
    },
    timeout: 5000,
    // 其他 axios 配置...
  });
}

// ============================================
// 执行示例
// ============================================

async function runExamples() {
  console.log('=== 开始执行示例 ===\n');

  // 用户管理
  await getUserList();
  await createUser();
  
  // 产品管理
  await getProductList();
  await createProduct();

  console.log('\n=== 示例执行完成 ===');
}

// 取消注释以运行示例
// runExamples();

export {
  getUserList,
  createUser,
  updateUser,
  deleteUser,
  getProductList,
  createProduct,
  uploadSingleFile,
  uploadMultipleFiles,
  useRequestTool,
  withCustomConfig
};
