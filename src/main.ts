import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import App from './App.vue'
import router from './router'

App.config.productionTip = false

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
