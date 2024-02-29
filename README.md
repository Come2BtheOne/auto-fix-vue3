<h1 align="center">auto-fix-vue3 （大屏自适应容器）</h1>
<p align="center">
  <a href="https://npmjs.org/package/@jizirui/auto-fix-vue3">
    <img src="https://img.shields.io/npm/v/@jizirui/auto-fix-vue3.svg" alt="LICENSE" />
  </a>
  <a href="https://npmjs.org/package/@jizirui/auto-fix-vue3">
    <img src="https://img.shields.io/bundlephobia/min/@jizirui/auto-fix-vue3.svg" alt="LICENSE" />
  </a>
  <a href="https://github.com/Come2BtheOne/auto-fix-vue3/releases">
    <img src="https://img.shields.io/github/release/Come2BtheOne/auto-fix-vue3.svg" alt="LICENSE" />
  </a>  
  <a href="https://github.com/Come2BtheOne/auto-fix-vue3">
    <img src="https://img.shields.io/github/stars/Come2BtheOne/auto-fix-vue3.svg" alt="LICENSE" />
  </a>
</p>

[React 项目看这边](https://github.com/Come2BtheOne/auto-fix-react)

## 安装

### npm

```js
npm install @jizirui/auto-fix-vue3
```

### pnpm

```js
pnpm add @jizirui/auto-fix-vue3
```

### yarn

```js
yarn add @jizirui/auto-fix-vue3
```

---

## 引入方式

### ESM

```js
import { FullScreenContainer } from '@jizirui/auto-fix-vue3'
```

### CommonJS

```js
const { useAutoFix, FullScreenContainer } = require('@jizirui/auto-fix-vue3/dist/cjs')
```

### UMD

```js
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="./node_modules/@jizirui/auto-fix-vue3/dist/umd/index.js"></script>
<script>
  const { createApp } = Vue
  const { canvasStyle, canvasWidth, canvasHeight } = window.autoFix.useAutoFix({
  width: 1920, //设计图宽度
  height: 1080 //设计图高度
})

  // 创建 Vue 实例
  createApp().component('full-screen-container', window.autoFix.FullScreenContainer).mount('#app')
</script>
```

---

## HTML 部分

```html
<!-- 组件形式 -->
<full-screen-container :width="1920" :height="1080">
  <div>柱状图</div>
  <div>饼图</div>
  ...
</full-screen-container>
```

或

```html
<!-- Hook -->
<div
  :style="{
    width: canvasWidth + 'px',
    height: canvasHeight + 'px',
    ...canvasStyle
  }"
>
  <div>柱状图</div>
  <div>饼图</div>
  ...
</div>
```
