<template>
  <view class="custom-toast-container">
    <uni-transition
      :show="visible"
      mode-class="fade"
      :duration="300"
    >
      <view 
        :class="[
          'toast-wrapper',
          `toast-${position}`,
          `toast-${type}`
        ]"
        :style="{ zIndex: zIndex }"
      >
        <view class="toast-content">

          
          <!-- 文本内容 -->
          <view class="toast-text">
            {{ message }}
          </view>
        </view>
      </view>
    </uni-transition>
  </view>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'

// 响应式数据
const visible = ref(false)
const message = ref('该功能维护中，暂不可用~')
const type = ref('default') // success, error, warning, loading, default
const position = ref('center') // top, center, bottom
const duration = ref(2000)

const zIndex = ref(999999)
const timer = ref(null)

// 计算属性

// 方法定义
/**
 * 清除定时器
 */
const clearTimer = () => {
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }
}

/**
 * 隐藏 toast
 */
const hide = () => {
  visible.value = false
  clearTimer()
}

/**
 * 显示 toast
 * @param {Object} options 配置选项
 * @param {String} options.message 提示文本
 * @param {String} options.type 类型: success/error/warning/loading/default
 * @param {String} options.position 位置: top/center/bottom
 * @param {Number} options.duration 显示时长(ms)，loading类型默认不自动关闭
 */
const show = (options = {}) => {
  // 清除之前的定时器
  clearTimer()
  
  // 设置配置
  message.value = options.message || message.value
  type.value = options.type || type.value
  position.value = options.position || 'center'
  
  // loading类型默认不自动关闭，其他类型默认2秒关闭
  if (options.duration !== undefined) {
    duration.value = options.duration
  } else {
    duration.value = type.value === 'loading' ? 0 : 2000
  }
  
  // 显示toast
  visible.value = true
  
  // 自动关闭
  if (duration.value > 0) {
    timer.value = setTimeout(() => {
      hide()
    }, duration.value)
  }
  
  return {
    hide,
    show,
    success,
    error,
    warning,
    loading,
    info
  }
}

/**
 * 成功提示
 */
const success = (message, options = {}) => {
  return show({
    message,
    type: 'success',
    ...options
  })
}

/**
 * 错误提示  
 */
const error = (message, options = {}) => {
  return show({
    message,
    type: 'error',
    ...options
  })
}

/**
 * 警告提示
 */
const warning = (message, options = {}) => {
  return show({
    message,
    type: 'warning',
    ...options
  })
}

/**
 * 加载提示
 */
const loading = (message = '加载中...', options = {}) => {
  return show({
    message,
    type: 'loading',
    duration: 0, // loading默认不自动关闭
    ...options
  })
}

/**
 * 普通提示
 */
const info = (message, options = {}) => {
  return show({
    message,
    type: 'default',
    ...options
  })
}

// 暴露给父组件的方法
defineExpose({
  show,
  hide,
  success,
  error,
  warning,
  loading,
  info
})

// 生命周期钩子
onBeforeUnmount(() => {
  clearTimer()
})
</script>

<style lang="scss" scoped>
.custom-toast-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 750rpx;
  height: 100%;
  pointer-events: none;
  z-index: 999999;
}

.toast-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: auto;
  
  // 位置样式
  &.toast-top {
    top: 10%;
  }
  
  &.toast-center {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  &.toast-bottom {
    bottom: 20%;
  }
}

.toast-content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 400rpx;
  max-width: 700rpx; 
  padding: 32rpx 20rpx;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20rpx;
  backdrop-filter: blur(10rpx);
  box-sizing: border-box;
  
  .toast-text {
    color: #ffffff;
    font-size: 26rpx;
    line-height: 1.5;
    text-align: center;
    word-break: break-all;
    min-height: 48rpx;
    display: flex;
    align-items: center;
  }
}

// 类型样式
.toast-success .toast-content {
  background: rgba(82, 196, 26, 0.9);
}

.toast-error .toast-content {
  background: rgba(255, 77, 79, 0.9);
}

.toast-warning .toast-content {
  background: rgba(250, 173, 20, 0.9);
}

.toast-loading .toast-content {
  background: rgba(24, 144, 255, 0.9);
}




</style>
