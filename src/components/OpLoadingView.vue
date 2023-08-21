<script setup lang="ts">
import { Loading, Skeleton } from 'vant'

interface IProps {
  loading: boolean
  type: 'loading' | 'skeleton'
}

defineProps<IProps>()
</script>

<template>
  <div v-if="loading" class="loading-view">
    <slot name="template">

      <div v-if="type === 'loading'" class="loading-wrapper flex justify-center items-center h-24">
        <Loading/>
      </div>
      <div v-if="type === 'skeleton'" class="skeleton-wrapper p-4">
        <Skeleton :row="10"/>
        <Skeleton title avatar :row="5"/>
        <Skeleton title :row="5"/>
      </div>

    </slot>
  </div>

<!--  <slot v-else>-->
<!--  </slot>-->
</template>

<style scoped>

</style>