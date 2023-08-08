<script setup lang="ts">

import TheTop                          from "@/views/tabs/home/components/TheTop.vue";
import { IHomeInfo, ISearchRecomment } from "@/types";
import SearchView                      from "@/views/search/SearchView.vue";
import { useToggle }                   from "@/use/useToggle";
import { onMounted, watch }            from "vue";
import { useAsync }                    from "@/use/useAsync";
import { fetchHomeData }               from "@/api/home";
import OpLoadingView                   from "@/components/OpLoadingView.vue";

const recomments: ISearchRecomment[] = [
  { value: 1, label: '水果' },
  { value: 2, label: '火锅' },
  { value: 3, label: '沙拉' },
]

const [isShowSearchView, toggleSearchView] = useToggle(false)

const { data, pending, execute } = useAsync<IHomeInfo>(fetchHomeData, {} as IHomeInfo)

</script>

<template>
  <div class="home-page">
    <transition name="fade">
      <SearchView v-if="isShowSearchView" @cancel="toggleSearchView"/>
    </transition>
    <TheTop :recomments="recomments" @searchClick="toggleSearchView"/>

    <OpLoadingView :loading="pending" type="loading">
<!--      <template #template><div>loading custom default</div></template>-->
      {{ data }}
    </OpLoadingView>
    {{ pending }}
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>