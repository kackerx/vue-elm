import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import 'vant/lib/index.css'
import router from './router'
import './style.css'
import { Icon } from 'vant';


createApp(App)
    .use(createPinia())
    .use(Icon)
    .use(router)
    .mount('#app')


