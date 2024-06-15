import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App.vue';
import '@arco-themes/vue-0000/index.less';
import * as VueRouter from 'vue-router';


import Home from "@/Views/Home.vue";
import Experience from "@/Views/Experience.vue";
import Studio from "@/Views/Studio.vue";
import Login from "@/Views/Auth/Login.vue";
import About from "@/Views/Auth/About.vue";
import Register from "@/Views/Auth/Register.vue";
import Run from "@/Views/Run.vue";
import PlusServices from "@/Views/PlusServices.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/Auth', redirect: '/Auth/LogIn' },
    { path: '/Auth/LogIn', component: Login },
    { path: '/Auth/Register', component: Register },
    { path: '/Auth/About', component: About },
    { path: '/Lab/Experiences', component: Experience },
    { path: '/Lab/Experiences/Run', component: Run},
    { path: '/Lab/Studio', component: Studio},
    { path: '/Plus/Main', component: PlusServices},
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
app.mount('#app');

console.log(`
   ____  __    __                               
  / __ \\/ /___/ /________ ___  ______ __      __
 / / / / / __  / ___/ __ \`/ / / / __ \`/ | /| / /
/ /_/ / / /_/ (__  ) /_/ / /_/ / /_/ /| |/ |/ / 
\\____/_/\\__,_/____/\\__, /\\__,_/\\__,_/ |__/|__/  
                     /_/                        
    ___
  / __ \\____  / (_)___  ___                     
 / / / / __ \\/ / / __ \\/ _ \\                    
/ /_/ / / / / / / / / /  __/                    
\\____/_/ /_/_/_/_/ /_/\\___/                     
                                      
\\_________________________________________________/                                                           
                     
GitHub: https://github.com/Oldsquaw/Web
Welcome to create PR&Issue!

WARN:
This console is ONLY FOR DEBUG!
Please DO NOT type or paste anything here!
If anyone say you need to do something at here, please report it to Oldsquaw Team!
`)
