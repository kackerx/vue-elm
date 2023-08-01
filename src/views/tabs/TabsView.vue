<script setup lang="ts">

import { ref, watch }          from 'vue'
import { Tabbar, TabbarItem }  from 'vant'
import { useRoute, useRouter } from 'vue-router'

const active = ref('home')
const route = useRoute()
const router = useRouter()

watch(active, (nv) => {
  router.push({
    name: nv
  })
})

</script>

<template>
  <RouterView></RouterView>
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
    <TabbarItem name="order" icon="bars">订单</TabbarItem>
    <TabbarItem name="my" icon="contact">我的</TabbarItem>
  </Tabbar>
</template>


<style scoped>

</style>