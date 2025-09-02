<template>
  <img
    class="icon"
    :src="url"
    :style="{
      width: `${size}px`,
      height: `${size}px`
    }"
    alt=""
    @click="toggleCheck"
  >
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 20
    }
  },
  emits: ['update:checked', 'change'],
  computed: {
    url() {
      const baseUrl = 'https://swsjbusiness.oss-cn-hangzhou.aliyuncs.com/zyhswsj/newimages/icons/'
      if (this.checked) {
        return baseUrl + 'icon-checked.png'
      } else {
        return baseUrl + 'icon-uncheck.png'
      }
    }
  },
  methods: {
    toggleCheck() {
      this.$emit('update:checked', !this.checked)
      this.$emit('change', !this.checked)
    }
  }
}
</script>
