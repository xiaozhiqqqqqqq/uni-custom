import CustomTip from './index.vue'

// 组件属性类型定义
export interface CustomTipProps {
  show?: boolean
  title?: string
  position?: 'top' | 'bottom'
  styles?: object
}

export { CustomTip }
export default CustomTip 