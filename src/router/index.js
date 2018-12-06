import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
    },
    {
      name: "about",
      path: "/about",
      component: () => import("@/views/About")
    },
    {
      name: "other",
      path: "/other",
      component: () => import("@/views/Other")
    },
  ]
});