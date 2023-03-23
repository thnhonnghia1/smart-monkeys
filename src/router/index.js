import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../components/layouts/Home.vue";
import Vietnamese from "../components/layouts/Vietnamese.vue";
import Math from "../components/layouts/Math.vue";
import English from "../components/layouts/English.vue";
import InformationTechnology from "../components/layouts/InformationTechnology.vue";

const routes = [
  { path: "/smart-monkeys", name: "Trang chủ", component: Home, isLoad: true },
  {path: "/smart-monkeys/tieng-viet", name: "Tiếng Việt", component: Vietnamese, isLoad: true},
  { path: "/smart-monkeys/toan-hoc", name: "Toán Học", component: Math, isLoad: true },
  { path: "/smart-monkeys/tieng-anh", name: "Tiếng Anh", component: English, isLoad: true },
  { path: "/smart-monkeys/tin-hoc", name: "Tin học", component: InformationTechnology, isLoad: true },
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
