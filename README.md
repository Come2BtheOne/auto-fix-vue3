# auto-fix-vue3 （大屏适配方案） [![NPM Version][npm-image]][npm-url] [![NPM Size][size-image]][size-url] [![NPM Download][downloads-image]][downloads-url]

[size-image]: https://badgen.net/bundlephobia/minzip/@jizirui/auto-fix-vue3
[size-url]: https://bundlephobia.com/result?p=@jizirui/auto-fix-vue3
[npm-image]: https://badgen.net/npm/v/@jizirui/auto-fix-vue3
[npm-url]: https://npmjs.org/package/@jizirui/auto-fix-vue3
[downloads-image]: https://badgen.net/npm/dt/auto-fix-vue3
[downloads-url]: https://npmjs.org/package/@jizirui/auto-fix-vue3

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
const { useAutoFix, FullScreenContainer } = require('@jizirui/auto-fix-vue3')
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
