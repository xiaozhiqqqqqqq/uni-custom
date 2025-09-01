<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, defineComponent } from 'vue'

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  round?: boolean
  plain?: boolean
}

defineOptions({
  name: 'UaButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'medium',
  disabled: false,
  round: false,
  plain: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  return [
    'ua-button',
    `ua-button--${props.type}`,
    `ua-button--${props.size}`,
    {
      'ua-button--disabled': props.disabled,
      'ua-button--round': props.round,
      'ua-button--plain': props.plain
    }
  ]
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.ua-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  user-select: none;
  box-sizing: border-box;
}

/* 尺寸 */
.ua-button--small {
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 3px;
}

.ua-button--medium {
  padding: 10px 16px;
  font-size: 14px;
}

.ua-button--large {
  padding: 14px 20px;
  font-size: 16px;
  border-radius: 6px;
}

/* 类型 */
.ua-button--primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #ffffff;
}

.ua-button--primary:hover:not(.ua-button--disabled) {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

.ua-button--primary:active:not(.ua-button--disabled) {
  background-color: #3a8ee6;
  border-color: #3a8ee6;
}

.ua-button--secondary {
  background-color: #ffffff;
  border-color: #dcdfe6;
  color: #606266;
}

.ua-button--secondary:hover:not(.ua-button--disabled) {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.ua-button--success {
  background-color: #67c23a;
  border-color: #67c23a;
  color: #ffffff;
}

.ua-button--success:hover:not(.ua-button--disabled) {
  background-color: #85ce61;
  border-color: #85ce61;
}

.ua-button--warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #ffffff;
}

.ua-button--warning:hover:not(.ua-button--disabled) {
  background-color: #ebb563;
  border-color: #ebb563;
}

.ua-button--danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #ffffff;
}

.ua-button--danger:hover:not(.ua-button--disabled) {
  background-color: #f78989;
  border-color: #f78989;
}

/* 圆角 */
.ua-button--round {
  border-radius: 20px;
}

/* 朴素 */
.ua-button--plain.ua-button--primary {
  background-color: #ecf5ff;
  border-color: #b3d8ff;
  color: #409eff;
}

.ua-button--plain.ua-button--success {
  background-color: #f0f9ff;
  border-color: #c2e7b0;
  color: #67c23a;
}

.ua-button--plain.ua-button--warning {
  background-color: #fdf6ec;
  border-color: #f5dab1;
  color: #e6a23c;
}

.ua-button--plain.ua-button--danger {
  background-color: #fef0f0;
  border-color: #fbc4c4;
  color: #f56c6c;
}

/* 禁用状态 */
.ua-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style> 