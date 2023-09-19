import Vue from "vue";
import VueRouter from "vue-router";
import Movies from "../views/Movies.vue";
import TodoList from "../views/TodoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
