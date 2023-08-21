<script setup lang="ts">
import { onMounted, ref } from "vue";

interface IProps {
  intervalTime?: number
  transitionTime?: number
  height?: number
  // data: IScrollBarInfo[]
}

const props = withDefaults(defineProps<IProps>(), {
  intervalTime: 3000,
  transitionTime: 1000,
  height: 40,
})

const containerRef = ref()

onMounted(() => {
  const container = containerRef.value // div dom结构
})

</script>


<template>
  <div class="home-scroll-bar">
    <div class="home-scroll-bar-swipe">
      <div ref="containerRef">
        <div class="swipe-item" v-for="v in props.data" :key="v.type">
          {{ v.type }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>