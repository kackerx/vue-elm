import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx              from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        // Vite路径别名配置
        alias: {
            '@': path.resolve('./src')
        }
    },
    server: {
        port: 3000,
        proxy: {
            '/api': 'http://localhost:8080',
            '/imgs': 'http://localhost:8080'
        }
    }
})
