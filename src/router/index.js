import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home-page.vue'
import ArticlePage from "../views/Article-page";
import SearchPage from "../views/Search-page";
import BlogPage from "../views/Blog-page";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
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
