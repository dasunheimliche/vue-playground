import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home-view.vue";
import contactView from "@/views/contact-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: contactView,
    },
  ],
});

export default router;
