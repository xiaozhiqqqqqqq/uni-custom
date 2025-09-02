<template>
  <view class="nav-bg">
    <view
      class="container"
      :style="{
        marginTop: info.navTop + 'px',
        height: info.navHeight + 'px',
        width: info.navWidth + 'px'
      }"
    >
      <view>
        <uni-icons type="left" @tap="handleBack"></uni-icons>
        {{ title }}
      </view>
      <slot></slot>
    </view>
  </view>
</template>

<script setup>
import usePageBack from '@/hooks/usePageBack'
defineProps({
  title: {
    type: String,
    required: true
  }
})
const info = reactive({
  navTop: 0,
  navHeight: 0,
  navWidth: 0,
  navBottom: 0
})
let systemInfo = uni.getSystemInfoSync()
let navTop = 0
let navWidth = systemInfo.screenWidth
let navHeight = 44
// #ifdef MP-WEIXIN
const menuButtonInfo = wx.getMenuButtonBoundingClientRect()
navTop = menuButtonInfo.top
navWidth = menuButtonInfo.left
navHeight = menuButtonInfo.height
// #endif
info.navTop = navTop
info.navWidth = navWidth
info.navHeight = navHeight
info.navBottom = navTop + navHeight
function handleBack() {
  const { back } = usePageBack()
  back()
}
defineExpose({
  info
})
</script>

<style>
.nav-bg {
  background: white;
  width: 750rpx;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30rpx;
  box-sizing: border-box;
  font-size: 32rpx;
}
</style>
