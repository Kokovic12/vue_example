import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VeeValidate from 'vee-validate'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import App from './App.vue'
import router from './router'

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt)

App.config.productionTip = false

App.use(VeeValidate)
App.component('FontAwesomeIcon', FontAwesomeIcon)

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(store)
  .mount('#app')
