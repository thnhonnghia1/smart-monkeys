import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/layouts/Home.vue";
import Vietnamese from "../components/layouts/Vietnamese.vue";
import Math from "../components/layouts/Math.vue";
import English from "../components/layouts/English.vue";
import InformationTechnology from "../components/layouts/InformationTechnology.vue";

const routes = [
  { path: "/", name: "Trang chủ", component: Home, isLoad: true },
  {path: "/tieng-viet", name: "Tiếng Việt", component: Vietnamese, isLoad: true},
  { path: "/toan-hoc", name: "Toán Học", component: Math, isLoad: true },
  { path: "/tieng-anh", name: "Tiếng Anh", component: English, isLoad: true },
  { path: "/tin-hoc", name: "Tin học", component: InformationTechnology, isLoad: true },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
