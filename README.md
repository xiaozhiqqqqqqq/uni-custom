# Uniapp UI 组件库

一个基于 Vue 3 + TypeScript + Vite 构建的 uni-app 组件库。

## 特性

- 🚀 基于 Vue 3 Composition API
- 💪 TypeScript 支持
- ⚡️ Vite 构建
- 📱 uni-app 兼容
- 🎨 现代化 UI 设计

## 安装

```bash
npm install @your-org/uniapp-ui
# 或
yarn add @your-org/uniapp-ui
# 或
pnpm add @your-org/uniapp-ui
```

## 使用

### 完整引入

```typescript
import { createApp } from 'vue'
import UniappUI from '@your-org/uniapp-ui'
import '@your-org/uniapp-ui/style.css'

const app = createApp(App)
app.use(UniappUI)
```

### 按需引入

```typescript
import { Button } from '@your-org/uniapp-ui'
import '@your-org/uniapp-ui/style.css'
```

### 组件使用

```vue
<template>
  <div>
    <Button type="primary" @click="handleClick">点击我</Button>
  </div>
</template>

<script setup>
import { Button } from '@your-org/uniapp-ui'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

## 组件

### Button 按钮

基础的按钮组件。

#### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | 按钮类型 |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |
| round | `boolean` | `false` | 是否圆角 |
| plain | `boolean` | `false` | 是否朴素按钮 |

#### 事件

| 事件名 | 参数 | 说明 |
|-------|------|------|
| click | `(event: MouseEvent)` | 点击事件 |

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build:lib

# 预览构建结果
npm run preview
```

## 许可证

MIT
