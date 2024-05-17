import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App.vue';
import '@arco-themes/vue-0000/index.less';
import * as VueRouter from 'vue-router';


import Home from "@/Views/Home.vue";
import Experience from "@/Views/Experience.vue";
import Studio from "@/Views/Studio.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/Lab/Experiences', component: Experience },
    { path: '/Lab/Studio', component: Studio}
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
