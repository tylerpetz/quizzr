import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import NewQuiz from "./views/NewQuiz.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/new",
      name: "NewQuiz",
      component: NewQuiz
    }
  ]
});
