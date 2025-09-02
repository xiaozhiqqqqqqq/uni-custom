<template>
  <div :class="notificationDotClass" :style="notificationDotStyle">
    {{ displayText }}
  </div>
</template>
  <script setup>
import { computed } from 'vue';

const props = defineProps({
  count: {
    type: [Number, String],
    default: ''
  },
  scale: {
    type: Number,
    default: 1 // 默认比例为1，即不放大也不缩小
  }
});

// 计算显示文本
const displayText = computed(() => {
  if (!props.count) return '';
  const num = Number(props.count);
  return num >= 99 ? '99+' : String(props.count);
});

// 判断是否显示99+
const isLongText = computed(() => {
  return displayText.value === '99+';
});

const notificationDotClass = computed(() => ({
  'notification-dot': true,
  'notification-dot--long': isLongText.value,
  'notification-dot--empty': !props.count
}));

const notificationDotStyle = computed(() => ({
  transform: `scale(${props.scale})`,
  border: props.count ? "0px solid #ffffff" : "4px solid #ffffff"
}));
  </script>
  
  <style scoped>
.notification-dot {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 20px; /* 最小宽度 */
  height: 20px; /* 固定高度 */
  padding: 0 4px; /* 左右内边距确保文本不贴边 */
  background-color: red;
  color: white;
  font-size: 12px; /* 基础字体大小 */
  font-weight: bold;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease; /* 平滑过渡效果 */
  border-radius: 10px; /* 使用圆角矩形，而不是完全圆形 */
  white-space: nowrap; /* 防止文本换行 */
  box-sizing: border-box;
}

/* 空状态时保持圆形 */
.notification-dot--empty {
  width: 20px;
  min-width: 20px;
  padding: 0;
  border-radius: 50%;
}

/* 长文本时的特殊样式 */
.notification-dot--long {
  font-size: 10px; /* 稍微减小字体 */
  min-width: 28px; /* 增加最小宽度以容纳99+ */
}
</style>
  