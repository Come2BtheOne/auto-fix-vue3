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

## 使用方式

### Hook 写法

```js
// JavaScript 代码
import { useAutoFix } from 'auto-fix-vue3'

const { canvasStyle, canvasWidth, canvasHeight } = useAutoFix({
  width: 1920, //设计图宽度
  height: 1080 //设计图高度
})
```

```html
<!-- HTML 代码 -->

<!-- 用一个div包裹你的html代码 -->
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

### 组件形式

```js
// JavaScript 代码
import { FullScreenContainer } from 'auto-fix-vue3'
```

```html
<!-- HTML 代码 -->
<full-screen-container>
  <div>柱状图</div>
  <div>饼图</div>
  ...
</full-screen-container>
```

### UMD

```html
<div id="app">
  <full-screen-container>
    <div>{{ message }}</div>
  </full-screen-container>
</div>

<script src="https://unpkg.com/vue@>3.2.0/dist/vue.global.js"></script>
<script src="./node_modules/@jizirui/auto-fix-vue3/dist/umd/index.js"></script>
<script>
  const { createApp, ref } = Vue

  // 创建 Vue 实例
  createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  })
    .component('full-screen-container', window.autoFix.FullScreenContainer)
    .mount('#app')
</script>
```
