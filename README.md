# Sentry React UMD Bundle

这是一个将 sentry-react 打包成 UMD 格式的项目，方便在浏览器中通过 `<script>` 标签直接使用。

## 项目介绍

本项目使用 Rollup 将 sentry-react 打包成一个单独的 UMD 文件，可以在不使用 npm 或模块打包工具的情况下直接在浏览器中使用 Sentry 的 React 集成功能。

## 安装依赖

```bash
npm install
```

## 开发模式

启动开发服务器，支持热重载：

```bash
npm run dev
```

这将在 `http://localhost:3000` 启动一个开发服务器。

## 构建生产版本

构建压缩后的生产版本：

```bash
npm run build
```

构建后的文件将输出到 dist/sentry-react.umd.js。

## 使用方法

在 HTML 文件中直接引入：

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sentry React UMD Example</title>
</head>
<body>
    <div id="root"></div>
    
    <!-- 引入 React 和 ReactDOM -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- 引入打包好的 Sentry React -->
    <script src="dist/sentry-react.umd.js"></script>
    
    <!-- 使用 -->
    <script>
        // 初始化 Sentry
        SentryReact.init({
            dsn: 'YOUR_SENTRY_DSN',
            integrations: [
                // 可以添加其他集成
            ],
            tracesSampleRate: 1.0
        });
        
        // 使用 ErrorBoundary
        const { ErrorBoundary } = SentryReact;
        
        function App() {
            // 示例组件
            return React.createElement(
                ErrorBoundary,
                { fallback: React.createElement('div', null, '发生错误') },
                React.createElement('h1', null, 'Sentry React UMD 示例')
            );
        }
        
        ReactDOM.render(React.createElement(App), document.getElementById('root'));
    </script>
</body>
</html>
```

## 项目结构

```
├── dist/                    # 构建输出目录
├── node_modules/           # 依赖包
├── package.json            # 项目配置
├── rollup.config.js        # Rollup 配置文件
└── index.html              # 示例 HTML 文件
```

## 技术栈

- [Rollup](https://rollupjs.org/) - 模块打包工具
- [Sentry React](https://reactrouter.com/) - React 路由库
- Babel - JavaScript 编译器
- Terser - JavaScript 压缩工具

## 注意事项

1. 本项目将 `react` 和 `react-dom` 标记为外部依赖，使用时需要单独引入
2. 构建后的包通过 `SentryReact` 全局变量暴露所有导出
3. 开发模式下会启动本地服务器并监听文件变化
4. 生产模式下会生成压缩后的代码

## 自定义配置

如需修改打包配置，可以编辑 rollup.config.js 文件：

- 修改入口文件路径
- 更改输出文件名和全局变量名
- 调整 Babel 配置
- 添加或移除插件

## License

MIT