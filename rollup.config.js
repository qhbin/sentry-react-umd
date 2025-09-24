import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser'; // 更新导入
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: './node_modules/@sentry/react/build/esm/index.js',
  output: {
    file: 'dist/sentry-react.umd.js',
    format: 'umd',
    name: 'SentryReact',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    sourcemap: true,
    exports: 'auto',
    // 在产物首行添加globalThis polyfill
    banner: '// globalThis polyfill for older browsers\nif (typeof globalThis === "undefined") { var globalThis = self || window || global; }\n'
  },
  external: [
    'react',
    'react-dom',
  ],
  plugins: [
    // 在plugins数组中的replace配置修改为：
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env': '{}',
      preventAssignment: true
    }),
    resolve({
      browser: true
    }),
    commonjs(),
    // 替换当前的 babel 配置
    babel({
      babelHelpers: 'runtime',
      presets: [
        ['@babel/preset-env', { targets: { browsers: ['> 0.5% in CN', 'last 2 versions'] } }]
      ],
      plugins: [
        '@babel/plugin-transform-runtime'
      ]
    }),
    
    // 只在开发模式下启用 serve 和 livereload
    !isProduction && serve({
      port: 3000,
      contentBase: ['dist', '.'],
      open: true,
      openPage: '/index.html'
    }),
    !isProduction && livereload({
      watch: ['dist', 'index.html'],
      verbose: false
    }),
    isProduction && terser() // 使用新的 terser 插件
  ]
};