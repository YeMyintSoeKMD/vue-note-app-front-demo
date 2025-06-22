import { createRouter, createWebHistory } from "vue-router";

// Import components
import LoginPage from "./../views/LoginPage.vue";
import SignupPage from "./../views/SignupPage.vue";
import DashboardPage from "./../views/DashboardPage.vue";
import NewNotePage from "./../views/NewNotePage.vue";
import CategoriesPage from "./../views/CategoriesPage.vue";
import ArchivePage from "./../views/ArchivePage.vue";

const routes = [
    { path: "/", redirect: "/dashboard" },
    { path: "/auth/login", component: LoginPage },
    { path: "/auth/signup", component: SignupPage },
    { path: "/dashboard", component: DashboardPage },
    { path: "/dashboard/notes/new", component: NewNotePage },
    { path: "/dashboard/categories", component: CategoriesPage },
    { path: "/dashboard/archive", component: ArchivePage },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;