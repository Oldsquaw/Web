import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { firebaseApp } from "@/firebase.js";
import { VueFire, VueFireAuth } from "vuefire";
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App.vue';
import '@arco-themes/vue-0000/index.less';
import * as VueRouter from 'vue-router';


import Home from "@/Views/Home.vue";
import Experience from "@/Views/Experience.vue";
import Studio from "@/Views/Studio.vue";
import Login from "@/Views/Auth/Login.vue";
import Register from "@/Views/Auth/Register.vue";
import Run from "@/Views/Run.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/Auth', redirect: '/Auth/LogIn' },
    { path: '/Auth/LogIn', component: Login },
    { path: '/Auth/Register', component: Register },
    { path: '/Lab/Experiences', component: Experience },
    { path: '/Lab/Experiences/Run', component: Run},
    { path: '/Lab/Studio', component: Studio}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes,
})

const app = createApp(App);
const pinia = createPinia();
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(router);
app.use(pinia)
app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth],
});
app.mount('#app');
