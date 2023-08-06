<script setup lang="ts">
import { Search }                from 'vant';
import { ref }                   from "vue";
import type { ISearchRecomment } from "@/types";

interface Iprops {
  recomments: ISearchRecomment[]
}

interface IEmits {
  (e: 'searchClick'): void
}

const props = defineProps<Iprops>();

const emits = defineEmits<IEmits>()

const value = ref('')


const handleSearch = (value: string) => {
  console.log('handleSearch')
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
              @search="handleSearch"
              @click-input="emits('searchClick')"
      >
        <template #right-icon>
          <div @click="emits('searchClick')">搜索</div>
        </template>
      </Search>
    </section>
    <section class="flex gap-2 mb-2">

      <span v-for="v of props.recomments" :key="v.value"
            class="flex items-center px-2 bg-white bg-opacity-50 rounded-2xl text-white text-xs hover:bg-opacity-30">
        {{ v.label }}
      </span>
    </section>


  </div>
</template>

<style lang="scss" scoped>
.van-field__right-icon div {
  //margin-right: 0px;
}
</style>