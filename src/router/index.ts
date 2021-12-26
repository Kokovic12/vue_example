import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import { useCookies } from 'vue3-cookies'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Tea from '../components/Tea.vue'
import Selection from '../components/Selection.vue'
import Feedback from '../components/Feedback.vue'
import Contacts from '../components/Contacts.vue'
import Chat from '../components/Chat.vue'
import Login from '../components/Account/Login.vue'
import Register from '../components/Account/Register.vue'
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
    name: 'Feedback',
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
    path:'/register',
    name: 'Register',
    component: Register
  },
  {
    path:'/cabinet',
    name: 'Cabinet',
    component: Cabinet,
    meta : {
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const ETALON_TOKEN = 'qwe'

router.beforeEach(
  (to, from, next)=> {
    if(to.meta.requiresAuth) {
      const { cookies } = useCookies()
      const token = cookies.get('token')
      if(token===ETALON_TOKEN) {
        next()
      } else {
        next('/login')
      }
    }
    next()
  }
)

export default router
