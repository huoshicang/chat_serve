import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../page/home/Home.vue'
import LogView from '../page/log/Log.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/log', component: LogView },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})