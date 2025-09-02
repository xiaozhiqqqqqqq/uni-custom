import CustomSwitch from './index.vue'

// 组件属性类型定义
export interface CustomSwitchProps {
  open?: boolean | number
  size?: number
  color?: string
  disabled?: boolean
  beforeChange?: () => Promise<boolean>
}

export { CustomSwitch }
export default CustomSwitch 