<template>
  <div
    class="auto-fix"
    :style="{
      width: canvasWidth + 'px',
      height: canvasHeight + 'px',
      ...canvasStyle
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useAutoFix } from '@/hooks/auto-fix'

export interface Props {
  width?: number
  height?: number
}

defineOptions({
  name: 'FullScreenContainer'
})

const props = withDefaults(defineProps<Props>(), {
  width: 1920,
  height: 1080
})
const { canvasStyle, canvasWidth, canvasHeight } = useAutoFix({ width: props.width, height: props.height })
</script>

<style scoped></style>
