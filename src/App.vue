<script setup lang="ts">
import { Button } from './components/Button'

const handleClick = () => {
  console.log('Button clicked!')
  uni.showToast({
    title: '按钮被点击了！',
    icon: 'success'
  })
}
</script>

<template>
  <div id="app">
    <div class="demo-container">
      <h1>Uniapp UI 组件库演示</h1>
      
      <section class="demo-section">
        <h2>Button 按钮</h2>
        
        <div class="demo-group">
          <h3>基础用法</h3>
          <div class="demo-buttons">
            <Button @click="handleClick">默认按钮</Button>
            <Button type="primary" @click="handleClick">主要按钮</Button>
            <Button type="success" @click="handleClick">成功按钮</Button>
            <Button type="warning" @click="handleClick">警告按钮</Button>
            <Button type="danger" @click="handleClick">危险按钮</Button>
            <Button type="secondary" @click="handleClick">次要按钮</Button>
          </div>
        </div>

        <div class="demo-group">
          <h3>朴素按钮</h3>
          <div class="demo-buttons">
            <Button plain @click="handleClick">朴素按钮</Button>
            <Button type="primary" plain @click="handleClick">主要按钮</Button>
            <Button type="success" plain @click="handleClick">成功按钮</Button>
            <Button type="warning" plain @click="handleClick">警告按钮</Button>
            <Button type="danger" plain @click="handleClick">危险按钮</Button>
          </div>
        </div>

        <div class="demo-group">
          <h3>圆角按钮</h3>
          <div class="demo-buttons">
            <Button round @click="handleClick">圆角按钮</Button>
            <Button type="primary" round @click="handleClick">主要按钮</Button>
            <Button type="success" round @click="handleClick">成功按钮</Button>
            <Button type="warning" round @click="handleClick">警告按钮</Button>
            <Button type="danger" round @click="handleClick">危险按钮</Button>
          </div>
        </div>

        <div class="demo-group">
          <h3>不同尺寸</h3>
          <div class="demo-buttons">
            <Button size="large" type="primary">大型按钮</Button>
            <Button size="medium" type="primary">中型按钮</Button>
            <Button size="small" type="primary">小型按钮</Button>
          </div>
        </div>

        <div class="demo-group">
          <h3>禁用状态</h3>
          <div class="demo-buttons">
            <Button disabled @click="handleClick">禁用按钮</Button>
            <Button type="primary" disabled @click="handleClick">主要按钮</Button>
            <Button type="success" disabled @click="handleClick">成功按钮</Button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
#app {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
}

.demo-section {
  margin-bottom: 40px;
}

h2 {
  color: #409eff;
  border-bottom: 2px solid #409eff;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.demo-group {
  margin-bottom: 30px;
}

h3 {
  color: #606266;
  margin-bottom: 15px;
}

.demo-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
