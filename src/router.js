import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import IsSignUp from "./views/IsSignUp.vue";
import Find from "./views/Find.vue";
import StageCheck from "./views/StageCheck.vue";
import TheF2E from "./views/TheF2E.vue";
import Week1 from "./views/Week1.vue";
import Week2 from "./views/Week2.vue";
import Week3 from "./views/Week3.vue";
import Week4 from "./views/Week4.vue";
import Week5 from "./views/Week5.vue";
import Week6 from "./views/Week6.vue";
import Week7 from "./views/Week7.vue";
import Week8 from "./views/Week8.vue";

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
      name: "is-sign-up",
      meta: { title: "報名查詢" },
      component: IsSignUp
    },
    {
      path: "/find",
      name: "find",
      meta: { title: "查看其他作品" },
      component: Find
    },
    {
      path: "/stage-check",
      name: "stage-check",
      meta: { title: "關卡查詢" },
      component: StageCheck
    },
    {
      path: "thef2e",
      name: "thef2e",
      meta: { title: "精神時光屋作品集" },
      component: TheF2E,
      children: [
        {
          path: "week1",
          name: "week1",
          meta: { title: "TodoList" },
          component: Week1
        },
        {
          path: "week2",
          name: "week2",
          meta: { title: "Filter" },
          component: Week2
        },
        {
          path: "week3",
          name: "week3",
          meta: { title: "Admin Order" },
          component: Week3
        },
        {
          path: "week4",
          name: "week4",
          component: Week4
        },
        {
          path: "week5",
          name: "week5",
          component: Week5
        },
        {
          path: "week6",
          name: "week6",
          component: Week6
        },
        {
          path: "week7",
          name: "week7",
          component: Week7
        },
        {
          path: "week8",
          name: "week8",
          component: Week8
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    // 動態變更index.html 的 title
    document.title = to.meta.title;
    next();
  } else {
    // nothing
    next();
  }
});
