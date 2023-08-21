<script setup lang="ts">


import { reactive, ref } from "vue";
import Trans             from "@/views/tabs/my/components/Trans.vue";

const show = ref(true)

const handleClick = () => {
  show.value = !(show.value)
}

const res = [0, 1, 2, 3, 4, 5]


</script>

<template>
  <Trans :len="res.length" :array="res" />
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

.v-leave-from { // 可省略
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
}


</style>