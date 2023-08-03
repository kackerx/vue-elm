<script setup lang="ts">
import { Search }                from 'vant';
import { ref }                   from "vue";
import type { ISearchRecomment } from "@/types";

interface Iprops {
  recomments: ISearchRecomment[]
}

defineProps<Iprops>()

const value = ref('')

const handleSearch = (value: string) => {
  alert(value + '搜索')
}

</script>

<template>
  <div class="home-top p-2 bg-gradient-to-r from-blue-500 to-blue-300">
    <div class="flex justify-between text-white">
      <div class="top-left flex gap-2 items-center">
        <van-icon name="location" size="1.5rem"/>
        <div class="location">幸福小区东南门110</div>
      </div>

      <div class="top-right flex items-center gap-2 mr-3">
        <van-icon name="shop-o" size="1.5rem"/>
        <van-icon name="chat-o" size="1.5rem" badge="99+"/>
      </div>
    </div>

    <section class="mb-2">
      <Search v-model="value" placeholder="请输入搜索关键词" shape="round" background="transparent"
              @search="handleSearch">
        <template #right-icon>
          <div @click="">搜索</div>
        </template>
      </Search>
    </section>
    <section class="flex gap-2 mb-2">
      <span
          class="flex items-center px-2 bg-white bg-opacity-50 rounded-2xl text-white text-xs hover:bg-opacity-30">色拉</span>
      <span
          class="flex items-center px-2 bg-white bg-opacity-50 rounded-2xl text-white text-xs hover:bg-opacity-30">奶茶</span>
      <span
          class="flex items-center px-2 bg-white bg-opacity-50 rounded-2xl text-white text-xs hover:bg-opacity-30">西瓜汁</span>
    </section>


  </div>
</template>

<style lang="scss" scoped>
.van-field__right-icon div {
  //margin-right: 0px;
}
</style>