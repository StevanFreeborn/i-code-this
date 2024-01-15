import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import App from './App.vue';
import './style.css';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./views/Greeting.vue'),
  },
  {
    path: '/one-time-pricing',
    component: () => import('./views/OneTimePricing.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
