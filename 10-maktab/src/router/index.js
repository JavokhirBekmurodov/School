import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import NewsView from "../views/NewsView.vue"
import ContactView from "../views/Contact.vue"
import LoginView from "../views/LoginView.vue"
import Imgs from "../views/ImgsView.vue"
import Malumotlart from "../views/MamulotlarView.vue"
import New from "../views/New.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/imgs',
      name: 'imgs',
      component: Imgs
    },
    {
      path: '/malumotlar',
      name: 'malumotlar',
      component: Malumotlart
    },
    {
      path: "/news/:id",
      name: "new",
      component: New
    },
    
   
  ]
})

export default router
