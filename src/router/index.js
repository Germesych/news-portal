import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import ArticlePage from "../views/ArticlePage";
import SearchPage from "../views/SearchPage";
import BlogPage from "../views/BlogPage";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog/:id',
    name: 'blog',
    component: BlogPage
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage
  },
  {
    path: '/article',
    name: 'article',
    component: ArticlePage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
