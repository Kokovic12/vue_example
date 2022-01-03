import { createApp } from 'vue'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'       
import 'primevue/resources/primevue.min.css'                 
import 'primeicons/primeicons.css'                          
import 'primeflex/primeflex.css'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'    
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import FileUpload from 'primevue/fileupload'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import RadioButton from 'primevue/radiobutton'
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'
import Rating from 'primevue/rating'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { globalCookiesConfig, useCookies } from 'vue3-cookies'
import store from './store'
import App from './App.vue'
import router from './router'


globalCookiesConfig({ 
  expireTimes: '30d',
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None',
})

const app = createApp(App)
app
  .use(router)
  .use(BootstrapVue3)
  .use(PrimeVue, { ripple:true })
  .use(ToastService)
  .use(useCookies)
  .use(store)

  .component('Toast', Toast)
  .component('DataTable', DataTable)
  .component('Column', Column)
  .component('ColumnGroup', ColumnGroup)
  .component('Toolbar', Toolbar)
  .component('Button', Button)
  .component('FileUpload', FileUpload)
  .component('InputText', InputText)
  .component('InputNumber', InputNumber)
  .component('Textarea', Textarea)
  .component('RadioButton', RadioButton)
  .component('Dropdown', Dropdown)
  .component('Dialog', Dialog)
  .component('Rating', Rating)

  .mount('#app') 