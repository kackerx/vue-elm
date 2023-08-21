import { createRouter, createWebHistory } from 'vue-router'
import TabsView                           from '@/views/tabs/TabsView.vue'
import HomeView                           from '@/views/tabs/home/HomeView.vue'
import OrderView                          from '@/views/tabs/order/OrderView.vue'
import MyView                             from '@/views/tabs/my/Animation.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/tabs',
            name: 'tabs',
            component: TabsView,
            children: [ // 子路由
                {
                    path: '/home',
                    name: 'home',
                    component: HomeView
                },
                {
                    path: '/order',
                    name: 'order',
                    component: OrderView
                },
                {
                    path: '/my',
                    name: 'my',
                    component: MyView
                }
            ]
        },
    ]
})

export default router