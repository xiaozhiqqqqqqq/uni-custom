import CustomToast from './index.vue'

// 组件属性类型定义
export interface CustomToastProps {
  message?: string
  type?: 'default' | 'success' | 'error' | 'warning' | 'loading'
  position?: 'top' | 'center' | 'bottom'
  duration?: number
  zIndex?: number
}

export { CustomToast }
export default CustomToast 