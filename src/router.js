import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/is-sign-up",
      name: "is-sign-up"
    },
    {
      path: "/search",
      name: "search"
    },
    {
      path: "/stage-check",
      name: "stage-check"
    },
    {
      path: "thef2e",
      name: "thef2e",
      children: [
        {
          path: "week1",
          name: "week1",
          meta: { title: "TodoList" }
        },
        {
          path: "week2",
          name: "week2",
          meta: { title: "Filter" }
        },
        {
          path: "week3",
          name: "week3",
          meta: { title: "Admin Order" }
        },
        {
          path: "week4",
          name: "week4"
        },
        {
          path: "week5",
          name: "week5"
        },
        {
          path: "week6",
          name: "week6"
        },
        {
          path: "week7",
          name: "week7"
        },
        {
          path: "week8",
          name: "week8"
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.title) {
    document.title = to.meta.title;
    next();
  }
});
