# Sentry React UMD Bundle

一个将 @sentry/react 打包成 UMD 格式的库，可以直接在浏览器中通过 `<script>` 标签引入使用。

## 项目介绍

该项目使用 Rollup 将 @sentry/react 打包成 UMD（Universal Module Definition）格式，使得可以在不使用模块打包工具的环境中直接使用 Sentry 的 React 集成功能。

## 安装

```bash
# 克隆项目
git clone <repository-url>

# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 生产构建
pnpm build
```

## 使用方法

### 浏览器直接引入

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sentry React UMD Example</title>
</head>
<body>
    <div id="root"></div>
    
    <!-- 引入依赖 -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- 引入 Sentry React UMD 包 -->
    <script src="dist/sentry-react.umd.js"></script>
    
    <script>
        // 使用 Sentry React
        const { init, withErrorBoundary } = SentryReact;
        
        // 初始化 Sentry
        init({
            dsn: "YOUR_DSN_HERE",
            // 其他配置...
        });
        
        // 使用 withErrorBoundary 等功能
        // ...
    </script>
</body>
</html>
```

### 构建产物

构建后会生成以下文件：
- dist/sentry-react.umd.js - UMD 格式的主文件
- dist/sentry-react.umd.js.map - Source map 文件（用于调试）

## 开发

### 目录结构

```
.
├── dist/                 # 构建产物目录
├── rollup.config.js      # Rollup 配置文件
├── package.json          # 项目配置文件
└── README.md            # 项目说明文档
```

### 命令

```bash
# 开发模式（带热重载）
pnpm dev

# 生产构建（压缩代码）
pnpm build
```

开发模式下会启动一个本地服务器（默认端口 3000），并自动打开浏览器。修改代码后会自动重新构建并刷新页面。

## 配置说明

### Rollup 配置

- 入口文件：@sentry/react 的 CJS 构建版本
- 输出格式：UMD
- 全局变量名：`SentryReact`
- 外部依赖：`react` 和 `react-dom`（不会被打包进最终文件）
- 浏览器环境兼容性：支持市场份额大于 0.5% 的中国浏览器及各浏览器最新 2 个版本

### 环境变量替换

构建过程中会将 `process.env.NODE_ENV` 替换为 `"production"`，以启用生产环境优化。

## 注意事项

1. 使用时需要确保在引入 sentry-react.umd.js 之前先引入 React 和 ReactDOM
2. React 和 ReactDOM 不会被打包进最终文件，需要单独引入
3. 构建产物仅适用于浏览器环境，不支持 Node.js 环境
4. 该包导出 @sentry/react 的所有功能，使用方式与原包一致

## 依赖说明

- @sentry/react: ^10.12.0 - Sentry React 集成库
- @sentry/browser: ^10.12.0 - Sentry 浏览器 SDK
- Rollup 相关工具用于构建 UMD 包

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。