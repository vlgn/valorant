import MainPage from "@/pages/MainPage";
import LeaderboardPage from "@/pages/LeaderboardPage";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/leaderboard",
    component: LeaderboardPage,
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});

export default router;
