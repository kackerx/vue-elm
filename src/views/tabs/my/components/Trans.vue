<script setup lang="ts">
import { useTransition } from "@/use/useTransition";

interface IProps {
  len: number
  array: number[]
}

const props = defineProps<IProps>()


const { shows } = useTransition(props.len)

</script>

<template>
  <div class="h-12">
    <transition v-for="(item, index) in props.array" :key="index">
      <slot name="temp">
        <span v-show="shows[index]">{{ item }}</span>
      </slot>
    </transition>
  </div>
</template>

<style lang="scss" scoped>

.v-enter-from {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: opacity 3s;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-from {
  // 可省略 opacity: 1;
}

.v-leave-to {
  opacity: 0;
}


</style>