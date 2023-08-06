<script setup lang="ts">

import { ref }             from "vue";
import { fetchSearchData } from "@/api/search";

interface IEmits {
  (e: 'cancel'): void
}

const emits = defineEmits<IEmits>()
const searchValue = ref('')
const loading = false

const resList = [
  'a',
  'b',
  'c',
  'd',
]

const handleSearch = async () => {
  const { list } = await fetchSearchData(searchValue.value);
}

</script>

<template>
  <div class="absolute top-0 left-0 right-0 bottom-0 bg-white z-10">
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" shape="round" background="transparent"
                @search="handleSearch"
                show-action
                clearable
                @cancel="emits('cancel')"
    >
    </van-search>

    <van-list
        v-model:loading="loading"
        :finished="true"
        finished-text="没有更多了"
    >
      <van-cell v-for="item in resList" :key="item" :title="item"/>
    </van-list>

  </div>
</template>

<style scoped>

</style>