import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";


let baseTitle = import.meta.env.VITE_BASE_TITLE
const routes = [
  {
    path: "/",
    name: "Homepage",
    component: () => import('@/views/Home.vue'),

  },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

