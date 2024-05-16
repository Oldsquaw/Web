import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import * as VueRouter from 'vue-router';


import Home from "@/Views/Home.vue";
import Experience from "@/Views/Experience.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/Lab/Experiences', component: Experience },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes,
})

const app = createApp(App);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(router)
app.mount('#app');
