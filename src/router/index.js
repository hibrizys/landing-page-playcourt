import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Overview from '../components/Overview.vue'; 
import Features from '../components/Features.vue';
import Steps from '../components/Steps.vue';
import Order from '../components/Order.vue'; 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Overview',
    name: 'overview',
    component: Overview
  },
  {
    path: '/Features', 
    name: 'Features',
    component: Features 
  },
  {
    path: '/Steps', 
    name: 'Steps',
    component: Steps 
  },
  {
    path: '/Order', 
    name: 'Order',
    component: Order 
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
})

export default router;
