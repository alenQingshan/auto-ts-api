/**
 * 自动生成的 API SDK
 * 提供一站式的 API 调用解决方案
 */

// 导出所有服务
const usersService = require('./services/Users.service');
const productsService = require('./services/Products.service');
const filesService = require('./services/Files.service');

// 导出请求工具
const request = require('./request');

// 导出 API 配置
const { API_CONFIG, API_ENDPOINTS } = require('./api/config');

// 导出所有模型
const User = require('./models/Users/User.model');
const UserCreate = require('./models/Users/UserCreate.model');
const UserUpdate = require('./models/Users/UserUpdate.model');
const Product = require('./models/Products/Product.model');
const ProductCreate = require('./models/Products/ProductCreate.model');
const ProductUpdate = require('./models/Products/ProductUpdate.model');
const FileInfo = require('./models/Files/FileInfo.model');
const Error = require('./models/Users/Error.model');

module.exports = {
  // 服务
  usersService,
  productsService,
  filesService,
  
  // 请求工具
  request,
  
  // API 配置
  API_CONFIG,
  API_ENDPOINTS,
  
  // 模型
  User,
  UserCreate,
  UserUpdate,
  Product,
  ProductCreate,
  ProductUpdate,
  FileInfo,
  Error
};

/**
 * 使用示例：
 * 
 * // 方式1: 使用服务类（推荐）
 * const { usersService } = require('./index');
 * usersService.getUserList({}).then(users => console.log(users));
 * 
 * // 方式2: 使用请求工具
 * const { request, API_ENDPOINTS } = require('./index');
 * request.get(API_ENDPOINTS.users.list).then(users => console.log(users));
 * 
 * // 方式3: 使用模型类
 * const { UserCreate } = require('./index');
 * const user = new UserCreate({ username: 'test', email: 'test@example.com' });
 */
