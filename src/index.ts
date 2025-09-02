import type { App } from 'vue'
import { Button } from './components/Button'
import { Dot } from './components/Dot'
import { CustomToast } from './components/customToast'
import { CustomTip } from './components/CustomTip'
import { CustomCheck } from './components/CustomCheck'
import { CustomHeader } from './components/customHeader'
import { CustomSwitch } from './components/CustomSwitch'

// 所有组件
const components = [Button, Dot, CustomToast, CustomTip, CustomCheck, CustomHeader, CustomSwitch]

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
export { Button, Dot, CustomToast, CustomTip, CustomCheck, CustomHeader, CustomSwitch }

// 导出类型
export type { ButtonProps } from './components/Button'
export type { DotProps } from './components/Dot'
export type { CustomToastProps } from './components/customToast'
export type { CustomTipProps } from './components/CustomTip'
export type { CustomCheckProps } from './components/CustomCheck'
export type { CustomHeaderProps } from './components/customHeader'
export type { CustomSwitchProps } from './components/CustomSwitch'

// 支持 CDN 引入
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
} 