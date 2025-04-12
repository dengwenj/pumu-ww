<script setup lang="ts" name="p-icon">
import { createNamespace } from '@pumu-ww/utils'
import { computed } from 'vue'
import { type IconProps } from './icon'

const name = createNamespace('icon')

const props = defineProps<IconProps>()

const style = computed(() => {
  if (!props.color && !props.size) {
    return {}
  }

  const color = props.color
  const size = props.size
  return {
    ...(color ? { color } : {}),
    ...(size ? { fontSize: `${size}px` } : {})
  }
})
</script>

<!-- <script lang="ts">
export default {
  name: 'p-icon'
}
</script> -->

<template>
  <i :class="name.b()" :style="style">
    <slot></slot>
  </i>
</template>
