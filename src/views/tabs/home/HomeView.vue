<script setup lang="ts">

import TheTop               from "@/views/tabs/home/components/TheTop.vue";
import { ISearchRecomment } from "@/types";
import SearchView           from "@/views/search/SearchView.vue";
import { useToggle }        from "@/use/useToggle";
import { watch }            from "vue";

const recomments: ISearchRecomment[] = [
  { value: 1, label: '水果' },
  { value: 2, label: '火锅' },
  { value: 3, label: '沙拉' },
]

const [isShowSearchView, toggleSearchView] = useToggle(false)

</script>

<template>
  <transition name="fade">
    <SearchView v-if="isShowSearchView" @cancel="toggleSearchView"/>
  </transition>
  <TheTop :recomments="recomments" @searchClick="toggleSearchView"/>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>