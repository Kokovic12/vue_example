import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Tea from '../components/Tea.vue'
import Selection from '../components/Selection.vue'
import Feedback from '../components/Feedback.vue'
import Contacts from '../components/Contacts.vue'
import Chat from '../components/Chat.vue'
import Login from '../components/Account/Login.vue'
import Create from '../components/Account/Create.vue'
import Cabinet from '../components/Account/Cabinet.vue'

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
