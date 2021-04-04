import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home';
import Contact from '../views/contact';
import Products from '../views/products'
import PageNotFound from '../views/errors/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'index',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/products/:category',
    name: 'products',
    component: Products
  },
  { path: "*", component: PageNotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
