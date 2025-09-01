import type { App } from 'vue'
import { Button } from './components/Button'

// 所有组件
const components = [Button]

// 组件库安装函数
const install = (app: App) => {
  components.forEach(component => {
    const name = (component as any).name || (component as any).__name || 'UnknownComponent'
    app.component(name, component)
  })
}

// 导出组件库
export default {
  install
}

// 导出单个组件
export { Button }

// 导出类型
export type { ButtonProps } from './components/Button'

// 支持 CDN 引入
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
} 