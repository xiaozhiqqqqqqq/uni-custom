import Button from './index.vue'

// 组件属性类型定义
export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  round?: boolean
  plain?: boolean
}

export { Button }
export default Button 