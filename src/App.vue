<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted }  from 'vue'
import { fetchTest }  from '@/api/test'

onMounted(() => {
  fetchTest()
})
</script>

<template>
  <RouterView/>
</template>

<style scoped>
</style>
