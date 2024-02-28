<template>
  <div
    class="full-screen-container"
    :style="{
      width: canvasWidth + 'px',
      height: canvasHeight + 'px',
      ...canvasStyle
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { useAutoFix } from '@/hooks/auto-fix'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FullScreenContainer',
  props: {
    width: {
      type: Number,
      required: true,
      default: 1920
    },
    height: {
      type: Number,
      required: true,
      default: 1080
    }
  },
  setup(props: any) {
    const { canvasStyle, canvasWidth, canvasHeight } = useAutoFix({ width: props.width, height: props.height })
    return { canvasStyle, canvasWidth, canvasHeight }
  }
})
</script>

<style scoped></style>
