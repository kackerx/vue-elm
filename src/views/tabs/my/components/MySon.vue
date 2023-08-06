<script setup lang="ts">

// const props = defineProps()
const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);

</script>

<template>
  <h2>hehe</h2>
  <input type="text" :value="props.modelValue" @input='(e) => emits("update:modelValue", e.target.value)'>
</template>

<style scoped>

</style>