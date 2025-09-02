<template>
  <div class="custom-switch" :style="outStyles" @click="handleSwitch">
    <div class="round" :style="roundStyles" />
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: [Boolean, Number],
      default: false
    },
    size: {
      type: Number,
      default: 20 // px
    },
    color: {
      type: String,
      default: '#006BFF'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    beforeChange: {
      type: Function
    }
  },
  emits: ['update:open', 'change', 'failed'],
  computed: {
    width() {
      return (this.size * 2 + 4) * 2 + 'rpx'
    },
    height() {
      return this.size * 2 + 4 + 'rpx'
    },
    outStyles() {
      return {
        width: (this.size * 2 + 4) * 2 + 'rpx',
        height: this.size * 2 + 8 + 'rpx',
        backgroundColor: this.open ? this.color : 'rgba(125,139,159,0.20)',
        borderRadius: this.size + 4 + 'rpx',
        opacity: this.disabled ? 0.4 : 1
      }
    },
    roundStyles() {
      return {
        width: this.size * 2 + 'rpx',
        height: this.size * 2 + 'rpx',
        float: this.open ? 'right' : 'left'
      }
    }
  },
  methods: {
    handleSwitch() {
      if (this.disabled) {
        this.$emit('failed', this.getChangedOpenVal())
        return
      }
      if (this.beforeChange) {
        this.beforeChange().then(valid => {
          if (valid) {
            this.$emit('update:open', this.getChangedOpenVal())
            this.$emit('change', this.getChangedOpenVal())
          } else {
            this.$emit('failed', this.getChangedOpenVal())
          }
        })
      } else {
        this.$emit('update:open', this.getChangedOpenVal())
        this.$emit('change', this.getChangedOpenVal())
      }
    },
    switch() {
      
    },
    getChangedOpenVal() {
      if (typeof this.open === 'boolean') {
        return !this.open
      } else if (typeof this.open === 'number') {
        return this.open === 1 ? 0 : 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-switch {
  display: inline-block;
  padding: 4rpx;
  box-sizing: border-box;
  .round {
    border-radius: 50%;
    background-color: #fff;
  }
}
</style>