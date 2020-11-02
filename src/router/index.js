import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Index from '../views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/product')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/detail')
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order'),
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: () => import('../views/orderList')
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('../views/orderConfirm')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('../views/orderPay')
      },
      {
        path: 'aliPay',
        name: 'ali-pay',
        component: () => import('../views/aliPay')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
