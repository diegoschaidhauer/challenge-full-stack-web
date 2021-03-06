import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import { authGuard } from "../auth/authGuard";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/student/:id",
      name: "studentSingle",
      component: () => import("../views/StudentSingle.vue"),
      beforeEnter: authGuard,
    },
  ],
});
