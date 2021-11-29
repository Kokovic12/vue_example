import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { globalCookiesConfig, useCookies } from 'vue3-cookies'
import App from './App.vue'
import router from './router'

globalCookiesConfig({
  expireTimes: '30d',
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None',
})

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(useCookies)
  .mount('#app')
  
