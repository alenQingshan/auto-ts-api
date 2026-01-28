/**
 * 自动生成的 API SDK
 * 提供一站式的 API 调用解决方案
 */

// 导出所有服务
export { default as usersService } from './services/Users.service';
export { default as productsService } from './services/Products.service';
export { default as filesService } from './services/Files.service';

// 导出请求工具
export { request } from './request';
export { default as request } from './request';

// 导出 API 配置
export { API_CONFIG, API_ENDPOINTS } from './api/config';

// 导出所有模型类型
export * from './models/Users/User.model';
export * from './models/Users/UserCreate.model';
export * from './models/Users/UserUpdate.model';
export * from './models/Products/Product.model';
export * from './models/Products/ProductCreate.model';
export * from './models/Products/ProductUpdate.model';
export * from './models/Files/FileInfo.model';
export * from './models/Users/Error.model';

/**
 * 使用示例：
 * 
 * // 方式1: 使用服务类（推荐）
 * import { usersService } from './index';
 * const users = await usersService.getUserList({});
 * 
 * // 方式2: 使用请求工具
 * import { request, API_ENDPOINTS } from './index';
 * const users = await request.get(API_ENDPOINTS.users.list);
 */
