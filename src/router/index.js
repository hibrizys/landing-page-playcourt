import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
})

export default router;
