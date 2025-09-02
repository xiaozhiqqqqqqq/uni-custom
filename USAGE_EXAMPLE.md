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
import { Button, Dot, CustomToast, CustomTip, CustomCheck, CustomHeader, CustomSwitch } from '@your-org/uniapp-ui'
import '@your-org/uniapp-ui/style.css'
```

### 在组件中使用

#### Button 组件

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
```

#### Dot 组件（消息提示点）

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <dot></dot>
    
    <!-- 带数字的提示点 -->
    <dot :count="5"></dot>
    <dot :count="99"></dot>
    <dot :count="100"></dot>
    
    <!-- 自定义缩放 -->
    <dot :count="3" :scale="1.5"></dot>
    <dot :count="8" :scale="0.8"></dot>
  </div>
</template>
```

#### CustomToast 组件（自定义提示框）

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <custom-toast ref="toastRef"></custom-toast>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const toastRef = ref(null)

const showToast = () => {
  toastRef.value.show('这是一个提示消息')
}

const showSuccessToast = () => {
  toastRef.value.show('操作成功！', 'success')
}

const showErrorToast = () => {
  toastRef.value.show('操作失败！', 'error', 3000)
}
</script>
```

#### CustomTip 组件（自定义提示气泡）

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <custom-tip 
      :show="showTip" 
      title="这是一个提示"
      :styles="{ top: '100px', left: '50px' }"
    ></custom-tip>
    
    <!-- 不同位置的气泡 -->
    <custom-tip 
      :show="showBottomTip" 
      title="底部气泡提示"
      position="bottom"
      :styles="{ bottom: '100px', left: '50px' }"
    ></custom-tip>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showTip = ref(false)
const showBottomTip = ref(false)

const handleClick = () => {
  console.log('按钮点击')
}
</script>
```

#### CustomCheck 组件（自定义复选框）

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <custom-check 
      v-model:checked="isChecked"
      @change="handleChange"
    ></custom-check>
    
    <!-- 不同尺寸 -->
    <custom-check 
      v-model:checked="isChecked1"
      :size="16"
    ></custom-check>
    
    <custom-check 
      v-model:checked="isChecked2"
      :size="24"
    ></custom-check>
    
    <custom-check 
      v-model:checked="isChecked3"
      :size="32"
    ></custom-check>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isChecked = ref(false)
const isChecked1 = ref(true)
const isChecked2 = ref(false)
const isChecked3 = ref(true)

const handleChange = (value) => {
  console.log('复选框状态改变:', value)
}
</script>
```

#### CustomHeader 组件（自定义头部导航）

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <custom-header title="页面标题"></custom-header>
    
    <!-- 带插槽的用法 -->
    <custom-header title="设置页面">
      <template #default>
        <view class="right-content">
          <text>保存</text>
        </view>
      </template>
    </custom-header>
  </div>
</template>

<style>
.right-content {
  color: #007aff;
  font-size: 32rpx;
}
</style>
```

#### CustomSwitch 组件（自定义开关）

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <custom-switch 
      v-model:open="isOpen1"
      @change="handleChange"
    ></custom-switch>
    
    <!-- 不同尺寸 -->
    <custom-switch 
      v-model:open="isOpen2"
      :size="16"
    ></custom-switch>
    
    <custom-switch 
      v-model:open="isOpen3"
      :size="24"
      color="#ff6b6b"
    ></custom-switch>
    
    <!-- 禁用状态 -->
    <custom-switch 
      v-model:open="isOpen4"
      :disabled="true"
      @failed="handleFailed"
    ></custom-switch>
    
    <!-- 使用数字类型 -->
    <custom-switch 
      v-model:open="switchValue"
      :size="18"
      color="#4ecdc4"
    ></custom-switch>
    
    <!-- 带异步验证 -->
    <custom-switch 
      v-model:open="isOpen5"
      :before-change="beforeChangeHandler"
      @failed="handleFailed"
    ></custom-switch>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen1 = ref(false)
const isOpen2 = ref(true)
const isOpen3 = ref(false)
const isOpen4 = ref(true)
const isOpen5 = ref(false)
const switchValue = ref(0) // 使用数字类型：0 或 1

const handleChange = (value) => {
  console.log('开关状态改变:', value)
}

const handleFailed = (value) => {
  console.log('操作失败，目标值:', value)
  uni.showToast({
    title: '操作失败',
    icon: 'none'
  })
}

// 异步验证示例
const beforeChangeHandler = () => {
  return new Promise((resolve) => {
    // 模拟异步操作
    uni.showModal({
      title: '确认',
      content: '确定要改变开关状态吗？',
      success: (res) => {
        resolve(res.confirm)
      }
    })
  })
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
    <dot :count="5"></dot>
    <custom-tip :show="true" title="欢迎使用组件库！"></custom-tip>
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
import { 
  Button, 
  Dot, 
  CustomToast, 
  CustomTip,
  CustomCheck,
  CustomHeader,
  CustomSwitch,
  type ButtonProps,
  type DotProps,
  type CustomToastProps,
  type CustomTipProps,
  type CustomCheckProps,
  type CustomHeaderProps,
  type CustomSwitchProps
} from '@your-org/uniapp-ui'

// 类型安全的 props
const buttonProps: ButtonProps = {
  type: 'primary',
  size: 'large',
  disabled: false
}

const dotProps: DotProps = {
  count: 10,
  scale: 1.2
}

const toastProps: CustomToastProps = {
  message: '操作成功',
  type: 'success',
  duration: 3000,
  position: 'center'
}

const tipProps: CustomTipProps = {
  show: true,
  title: '这是一个提示',
  position: 'top',
  styles: { top: '100px', left: '50px' }
}

const checkProps: CustomCheckProps = {
  checked: false,
  size: 20
}

const headerProps: CustomHeaderProps = {
  title: '页面标题'
}

const switchProps: CustomSwitchProps = {
  open: false,
  size: 20,
  color: '#006BFF',
  disabled: false,
  beforeChange: async () => {
    return new Promise(resolve => resolve(true))
  }
}
```

## 6. 组件说明

### Button 组件
- **类型**：`primary | secondary | success | warning | danger`
- **尺寸**：`small | medium | large`
- **特性**：支持禁用、圆角、朴素样式

### Dot 组件
- **用途**：消息提示点，常用于显示未读消息数量
- **特性**：支持数字显示、自定义缩放
- **数字显示**：超过99显示"99+"

### CustomToast 组件
- **用途**：全局提示消息
- **类型**：`default | success | error | warning | loading`
- **位置**：`top | center | bottom`
- **特性**：支持自定义持续时间、层级

### CustomTip 组件
- **用途**：气泡提示框
- **位置**：`top | bottom`
- **特性**：支持自定义样式、位置定位
- **场景**：引导提示、操作说明

### CustomCheck 组件
- **用途**：自定义样式复选框
- **特性**：支持自定义尺寸、双向绑定
- **事件**：支持 v-model 和 change 事件
- **场景**：表单选择、设置开关

### CustomHeader 组件
- **用途**：自定义导航头部
- **特性**：自动适配小程序导航栏高度
- **功能**：内置返回按钮、支持插槽自定义右侧内容
- **场景**：小程序页面导航、自定义头部

### CustomSwitch 组件
- **用途**：自定义样式开关
- **类型支持**：支持 boolean 和 number 两种数据类型
- **特性**：自定义尺寸、颜色、禁用状态
- **高级功能**：支持异步验证、失败回调
- **场景**：设置开关、状态切换、权限控制 