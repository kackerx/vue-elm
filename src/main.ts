import { createApp }   from 'vue'
import { createPinia } from 'pinia'
import App             from './App.vue'
import 'vant/lib/index.css'
import router          from './router'
import './style.css'
import { Icon, Search, List, Cell }        from 'vant';



// const rootValue = 16
// const rootWidth = 390
// const deviceWidth = document.documentElement.clientWidth
// document.documentElement.style.fontSize = deviceWidth / rootWidth * rootValue + 'px'

createApp(App)
    .use(createPinia())
    .use(Icon)
    .use(Search)
    .use(List)
    .use(Cell)
    .use(router)
    .mount('#app')


