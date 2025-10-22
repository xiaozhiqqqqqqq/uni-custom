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
npm install suji-uniapp-ui
# 或
yarn add suji-uniapp-ui
# 或
pnpm add suji-uniapp-ui
```

## 使用

### 完整引入

```typescript
import { createApp } from 'vue'
import UniappUI from 'suji-uniapp-ui'
import 'suji-uniapp-ui/style.css'

const app = createApp(App)
app.use(UniappUI)
```

### 按需引入

```typescript
import { Button, Dot, CustomCheck, CustomHeader, CustomSwitch } from 'suji-uniapp-ui'
import 'suji-uniapp-ui/style.css'
```

### 组件使用

```vue
<template>
  <div>
    <Button type="primary" @click="handleClick">点击我</Button>
  </div>
</template>

<script setup>
import { Button } from 'suji-uniapp-ui'

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

### Dot 提示点

消息提示点组件，用于显示未读消息数量。

#### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| count | `number \| string` | `''` | 提示数字，空则显示红点 |
| scale | `number` | `1` | 缩放比例 |

### CustomCheck 自定义复选框

自定义样式的复选框组件。

#### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| checked | `boolean` | `false` | 是否选中 |
| size | `number` | `20` | 图标尺寸(px) |

#### 事件

| 事件名 | 参数 | 说明 |
|-------|------|------|
| update:checked | `boolean` | 选中状态更新 |
| change | `boolean` | 选中状态改变 |

### CustomHeader 自定义头部

自定义导航头部组件，适配小程序导航栏。

#### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | - | 标题文字 |

### CustomSwitch 自定义开关

自定义样式的开关组件。

#### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| open | `boolean \| number` | `false` | 开关状态 |
| size | `number` | `20` | 开关尺寸(px) |
| color | `string` | `'#006BFF'` | 开启时的颜色 |
| disabled | `boolean` | `false` | 是否禁用 |
| beforeChange | `() => Promise<boolean>` | - | 状态改变前的异步验证 |

#### 事件

| 事件名 | 参数 | 说明 |
|-------|------|------|
| update:open | `boolean \| number` | 开关状态更新 |
| change | `boolean \| number` | 开关状态改变 |
| failed | `boolean \| number` | 状态改变失败(禁用或验证失败) |

### CustomToast 自定义提示框

全局提示消息组件。

### CustomTip 自定义提示气泡

气泡提示框组件。

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
