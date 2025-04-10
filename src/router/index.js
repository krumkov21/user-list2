import { createRouter, createWebHistory } from "vue-router";


import table from "../pages/table.vue";
import addUser from "../pages/addUser.vue";

const routes = [
  {
    path: "/",
    name: "table",
    component: table,
  },
  {
    path: "/addUser",
    name: "addUser",
    component: addUser,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
