import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ mode }) => {
  const isDev = mode !== 'lib'
  
  if (isDev) {
    // 开发模式配置
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
      }
    }
  } else {
    // 组件库构建配置
    return {
      plugins: [vue()],
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
          }
        }
      }
    }
  }
})
