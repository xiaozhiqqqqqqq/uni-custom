<template>
  <uni-transition
    :show="show"
    mode-class="fade"
  >
    <div class="guide" :style="styles">
      {{ title }}

      <div :class="['angle', position]" />
    </div>
  </uni-transition>
</template>

<script>
export default {
  props: ['show', 'title', 'position', 'styles']
}
</script>

<style lang="scss">
.guide {
  position: absolute;
  display: flex;
  align-items: center;
  background: #1e293b;
  height: 61rpx;
  padding: 0 30rpx;
  border-radius: 30rpx;
  font-size: 14px;
  color: #ffffff;
  z-index: 9;

  .angle {
    position: absolute;
    width: 0;
    height: 0;
    bottom: -14px;
    border-top: 7px solid #1e293b; 
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    border-bottom: 7px solid transparent;
    &.bottom {
      top: -14px;
      border-top: 7px solid transparent; 
      border-right: 7px solid transparent;
      border-left: 7px solid transparent;
      border-bottom: 7px solid #1e293b;
    }
  }
}
</style>