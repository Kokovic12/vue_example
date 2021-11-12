import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tea from '../views/Tea.vue'
import Selection from '../views/Selection.vue'
import Feedback from '../views/Feedback.vue'
import Contacts from '../views/Contacts.vue'
import Chat from '../views/Chat.vue'
import Login from '../views/Account/Login.vue'
import Create from '../views/Account/Create.vue'
import Cabinet from '../views/Account/Cabinet.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/about',
    name: 'About',
    component: About
  },
  {
    path:'/tea',
    name: 'Tea',
    component: Tea
  },
  {
    path:'/selection',
    name: 'Selection',
    component: Selection
  },
  {
    path:'/feedback',
    name: 'Feeddback',
    component: Feedback
  },
  {
    path:'/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path:'/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/create',
    name: 'Create',
    component: Create
  },
  {
    path:'/cabinet',
    name: 'Cabinet',
    component: Cabinet
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
