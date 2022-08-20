/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-19 16:25:08
 * @LastEditTime: 2022-08-20 10:39:05
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // {
  //   path: '/',
  //   name: 'header',
  //   component: () => import('../sections/Header/Header.vue'),
  // },
  // {
  //   path: '/aboutMe',
  //   name: 'aboutMe',
  //   component: () => import('../sections/AboutMe/AboutMe.vue'),
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../sections/Home/Home.vue'),
  // },
  // {
  //   path: '/project',
  //   name: 'project',
  //   component: () => import('../sections/project/Project.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
