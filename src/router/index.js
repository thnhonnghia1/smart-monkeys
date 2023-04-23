import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../components/layouts/Home.vue";
import Vietnamese from "../components/layouts/Vietnamese.vue";
import Math from "../components/layouts/Math.vue";

const routes = [
  { path: "/", redirect: '/smart-monkeys', name: "defaultview", component: Home, isLoad: false },
  { path: "/smart-monkeys", name: "Trang chủ", component: Home, isLoad: true },
  {path: "/smart-monkeys/tieng-viet", name: "Tiếng Việt", component: Vietnamese, isLoad: true},
  { path: "/smart-monkeys/toan-hoc", name: "Toán Học", component: Math, isLoad: true }
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
