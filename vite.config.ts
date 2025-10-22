import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import copy from 'rollup-plugin-copy'
import fs from 'fs'

export default defineConfig(({ mode }) => {
  const isDev = mode !== 'lib'
  
  // 共享的CSS配置
  const cssConfig = {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        silenceDeprecations: ['legacy-js-api']
      }
    }
  }
  
  if (isDev) {
    // 开发模式配置
    return {
      plugins: [vue()],
      css: cssConfig,
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
      }
    }
  } else {
    // 组件库构建配置
    return {
      plugins: [
        vue()
      ],
      css: cssConfig,
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'UniappUI',
          fileName: (format) => `index.${format}.js`,
          formats: ['es', 'umd']
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            }
          },
          plugins: [
            copy({
              targets: [
                { src: 'src/components/Button', dest: 'dist/components' },
                { src: 'src/components/CustomCheck', dest: 'dist/components' },
                { src: 'src/components/CustomSwitch', dest: 'dist/components' },
                { src: 'src/components/CustomTip', dest: 'dist/components' },
                { src: 'src/components/customToast', dest: 'dist/components' },
                { src: 'src/components/customHeader', dest: 'dist/components' },
                { src: 'src/components/Dot', dest: 'dist/components' }
              ],
              hook: 'writeBundle'
            }),
            {
              name: 'emit-sfc-entry',
              writeBundle() {
                const entry = [
                  // 导入 .vue 源码
                  "import Button from './components/Button/index.vue'",
                  "import Dot from './components/Dot/index.vue'",
                  "import CustomToast from './components/customToast/index.vue'",
                  "import CustomTip from './components/CustomTip/index.vue'",
                  "import CustomCheck from './components/CustomCheck/index.vue'",
                  "import CustomHeader from './components/customHeader/index.vue'",
                  "import CustomSwitch from './components/CustomSwitch/index.vue'",
                  // 命名导出组件
                  "export { Button, Dot, CustomToast, CustomTip, CustomCheck, CustomHeader, CustomSwitch }",
                  // 组合安装函数
                  "const components = [Button, Dot, CustomToast, CustomTip, CustomCheck, CustomHeader, CustomSwitch]",
                  "export const install = (app) => {",
                  "  components.forEach((component) => {",
                  "    const name = (component && (component.name || component.__name)) || 'UnknownComponent'",
                  "    app.component(name, component)",
                  "  })",
                  "}",
                  "export default { install }"
                ].join('\n')
                // 将原构建产物重命名为 index.es.built.js，再写入新的 index.es.js
                const builtEsm = path.resolve(__dirname, 'dist/index.es.js')
                const renamedBuilt = path.resolve(__dirname, 'dist/index.es.built.js')
                if (fs.existsSync(builtEsm)) {
                  fs.renameSync(builtEsm, renamedBuilt)
                }
                const outFile = path.resolve(__dirname, 'dist/index.es.js')
                fs.writeFileSync(outFile, entry, 'utf-8')

                // 生成 CommonJS 入口，确保 require() 端也走 .vue 源码
                const cjsLines = [
                  "const _interop = (m) => (m && m.__esModule ? m.default : m)",
                  "const Button = _interop(require('./components/Button/index.vue'))",
                  "const Dot = _interop(require('./components/Dot/index.vue'))",
                  "const CustomToast = _interop(require('./components/customToast/index.vue'))",
                  "const CustomTip = _interop(require('./components/CustomTip/index.vue'))",
                  "const CustomCheck = _interop(require('./components/CustomCheck/index.vue'))",
                  "const CustomHeader = _interop(require('./components/customHeader/index.vue'))",
                  "const CustomSwitch = _interop(require('./components/CustomSwitch/index.vue'))",
                  // 组合安装函数（CJS）
                  "const components = [Button, Dot, CustomToast, CustomTip, CustomCheck, CustomHeader, CustomSwitch]",
                  "const install = (app) => {",
                  "  components.forEach((component) => {",
                  "    const name = (component && (component.name || component.__name)) || 'UnknownComponent'",
                  "    app.component(name, component)",
                  "  })",
                  "}",
                  "module.exports = { Button, Dot, CustomToast, CustomTip, CustomCheck, CustomHeader, CustomSwitch, default: { install } }"
                ].join('\n')
                const outCjs = path.resolve(__dirname, 'dist/source.cjs')
                fs.writeFileSync(outCjs, cjsLines, 'utf-8')
              }
            }
          ]
        }
      }
    }
  }
})
