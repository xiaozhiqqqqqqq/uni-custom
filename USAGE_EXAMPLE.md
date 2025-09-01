# 使用示例

## 1. 安装组件库

```bash
npm install @your-org/uniapp-ui
# 或者从本地安装（用于测试）
npm pack
npm install your-org-uniapp-ui-1.0.0.tgz
```

## 2. 在项目中使用

### 完整引入

```javascript
// main.js
import { createApp } from 'vue'
import UniappUI from '@your-org/uniapp-ui'
import '@your-org/uniapp-ui/style.css'

const app = createApp(App)
app.use(UniappUI)
app.mount('#app')
```

### 按需引入

```javascript
// 单个组件引入
import { Button } from '@your-org/uniapp-ui'
import '@your-org/uniapp-ui/style.css'
```

### 在组件中使用

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <ua-button @click="handleClick">默认按钮</ua-button>
    <ua-button type="primary">主要按钮</ua-button>
    <ua-button type="success">成功按钮</ua-button>
    <ua-button type="warning">警告按钮</ua-button>
    <ua-button type="danger">危险按钮</ua-button>
    
    <!-- 不同尺寸 -->
    <ua-button size="small">小按钮</ua-button>
    <ua-button size="medium">中按钮</ua-button>
    <ua-button size="large">大按钮</ua-button>
    
    <!-- 其他属性 -->
    <ua-button plain>朴素按钮</ua-button>
    <ua-button round>圆角按钮</ua-button>
    <ua-button disabled>禁用按钮</ua-button>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log('按钮点击')
}
</script>
```

## 3. 在 uni-app 项目中使用

```javascript
// main.js
import { createSSRApp } from 'vue'
import UniappUI from '@your-org/uniapp-ui'
import '@your-org/uniapp-ui/style.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(UniappUI)
  return { app }
}
```

## 4. CDN 方式使用

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://unpkg.com/@your-org/uniapp-ui/dist/index.umd.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/@your-org/uniapp-ui/dist/style.css">
</head>
<body>
  <div id="app">
    <ua-button type="primary" @click="handleClick">点击我</ua-button>
  </div>
  
  <script>
    const { createApp } = Vue
    createApp({
      methods: {
        handleClick() {
          alert('Hello!')
        }
      }
    }).use(UniappUI).mount('#app')
  </script>
</body>
</html>
```

## 5. TypeScript 支持

组件库提供完整的 TypeScript 类型定义：

```typescript
import { Button, type ButtonProps } from '@your-org/uniapp-ui'

// 类型安全的 props
const buttonProps: ButtonProps = {
  type: 'primary',
  size: 'large',
  disabled: false
}
``` 