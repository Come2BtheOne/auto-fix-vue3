<h1 align="center">auto-fix-vue3 （大屏自适应容器）</h1>
<div align="center">
  <a href="https://vuejs.org">
    <img src="https://img.shields.io/badge/vue-%3E=3.0.0-green.svg?logo=vuedotjs&style=flat&colorA=084c61&colorB=f73859" alt="Vue3" />
  </a>
  <a href="https://npmjs.org/package/@jizirui/auto-fix-vue3">
    <img src="https://img.shields.io/npm/v/@jizirui/auto-fix-vue3.svg?logo=npm&colorA=87ceeb&colorB=ffb6c1" alt="npm-version" />
  </a>
  <a href="https://npmjs.org/package/@jizirui/auto-fix-vue3">
    <img src="https://img.shields.io/bundlephobia/min/@jizirui/auto-fix-vue3.svg?colorA=8a2be2&colorB=00bdaa" alt="min-size" />
  </a>
</div>
<div align="center">
  <a href="https://github.com/Come2BtheOne/auto-fix-vue3/releases">
    <img src="https://img.shields.io/github/release/Come2BtheOne/auto-fix-vue3.svg?logo=github&logoColor=181717&colorA=ffa500&colorB=00ff7f" alt="release" />
  </a>  
  <a href="https://github.com/Come2BtheOne/auto-fix-vue3">
    <img src="https://img.shields.io/github/stars/Come2BtheOne/auto-fix-vue3.svg" alt="Stars" />
  </a>
</div>
<p align="center" style="margin-top: 40px;">
  <a style="color:#f73859;" href="https://github.com/Come2BtheOne/auto-fix-react">React 项目看这边</a>
</p>

<h2>安装</h2>

### npm

```bash
npm install @jizirui/auto-fix-vue3
```

### pnpm

```bash
pnpm add @jizirui/auto-fix-vue3
```

### yarn

```bash
yarn add @jizirui/auto-fix-vue3
```

---

<h2>引入方式</h2>

### ESM

```js
import { FullScreenContainer } from '@jizirui/auto-fix-vue3'
```

### CommonJS

```js
const { useAutoFix, FullScreenContainer } = require('@jizirui/auto-fix-vue3/dist/cjs')
```

### UMD

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://unpkg.com/@jizirui/auto-fix-vue3/dist/umd/index.js"></script>
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

<h2>HTML 部分</h2>

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
