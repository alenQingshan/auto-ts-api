const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 读取swagger.json文件
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'swagger.json'), 'utf8'));

// 配置swagger-ui
const swaggerOptions = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'API文档',
  swaggerOptions: {
    persistAuthorization: true,
    tryItOutEnabled: true,
    filter: true,
    showExtensions: true
  }
};

// 设置swagger-ui路由
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

// 设置静态文件目录，方便查看生成的文件
app.use('/src', express.static(path.join(__dirname, 'src')));

// 添加欢迎页面路由
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API文档服务器</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          line-height: 1.6;
        }
        h1 {
          color: #333;
          text-align: center;
        }
        .container {
          text-align: center;
          padding: 40px 20px;
          background-color: #f5f5f5;
          border-radius: 8px;
          margin-top: 20px;
        }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          background-color: #3498db;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-size: 16px;
          transition: background-color 0.3s;
        }
        .btn:hover {
          background-color: #2980b9;
        }
        .links {
          margin-top: 30px;
        }
        .link-item {
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <h1>API文档服务器</h1>
      <div class="container">
        <p>这是一个用于可视化swagger.json的服务器</p>
        <div class="links">
          <div class="link-item">
            <a href="/api-docs" class="btn">查看API文档</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Swagger文档服务器已启动，访问 http://localhost:${PORT} 查看`);
  console.log(`API文档地址: http://localhost:${PORT}/api-docs`);
});