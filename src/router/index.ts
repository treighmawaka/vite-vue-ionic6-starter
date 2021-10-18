import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';
import { home, triangle } from 'ionicons/icons';
import i18n from '../../i18n';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
      subtitle: 'Home page subtitle',
      description: 'This is a description',
      icon: home,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: Home,
    meta: {
      title: 'About Us',
      subtitle: 'About Us page subtitle',
      description: 'This is a description',
      icon: triangle,
    },
  },

  // tabs
  {
    path: '/tabs/',
    component: () => import('@/views/Tabs.vue'),
    children: [
      {
        path: '',
        redirect: '/tabs/tab1',
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
      },
      {
        path: 'tab1/:id',
        component: () => import('@/views/Tab1Parameter.vue'),
        props: true,
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
      },
      {
        path: 'tab3',
        // beforeEnter: (to, from, next) => {
        //   next({ path: '/tabs/tab1' });
        // },
        component: () => import('@/views/Tab3.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
