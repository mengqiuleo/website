/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-19 16:25:08
 * @LastEditTime: 2022-08-21 04:13:53
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
