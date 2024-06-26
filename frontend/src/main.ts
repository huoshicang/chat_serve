import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import { router } from "./router/index"

import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App);
app.use(ArcoVue);
app.use(router);
app.use(pinia)
app.mount('#app');
