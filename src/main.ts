import { createApp } from 'vue'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'       // theme
import 'primevue/resources/primevue.min.css'                 // core css
import 'primeicons/primeicons.css'                           // icons
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'     // optional for column grouping
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

import AutoComplete from 'primevue/autocomplete'
import Accordion from 'primevue/accordion'
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'
import Badge from 'primevue/badge'
import BlockUI from 'primevue/blockui'
import Breadcrumb from 'primevue/breadcrumb'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import CascadeSelect from 'primevue/cascadeselect'
import Carousel from 'primevue/carousel'
import Checkbox from 'primevue/checkbox'
import Chip from 'primevue/chip'
import Chips from 'primevue/chips'
import ColorPicker from 'primevue/colorpicker'
import ConfirmDialog from 'primevue/confirmdialog'
import ConfirmPopup from 'primevue/confirmpopup'
import ConfirmationService from 'primevue/confirmationservice'
import ContextMenu from 'primevue/contextmenu'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import DeferredContent from 'primevue/deferredcontent'
import Divider from 'primevue/divider'
import Dock from 'primevue/dock'
import Fieldset from 'primevue/fieldset'
import Galleria from 'primevue/galleria'
import Image from 'primevue/image'
import InlineMessage from 'primevue/inlinemessage'
import Inplace from 'primevue/inplace'
import InputSwitch from 'primevue/inputswitch'
import InputMask from 'primevue/inputmask'
import Knob from 'primevue/knob'
import Listbox from 'primevue/listbox'
import MegaMenu from 'primevue/megamenu'
import Menu from 'primevue/menu'
import Menubar from 'primevue/menubar'
import Message from 'primevue/message'
import MultiSelect from 'primevue/multiselect'
import OrderList from 'primevue/orderlist'
import OrganizationChart from 'primevue/organizationchart'
import OverlayPanel from 'primevue/overlaypanel'
import Paginator from 'primevue/paginator'
import Panel from 'primevue/panel'
import PanelMenu from 'primevue/panelmenu'
import Password from 'primevue/password'
import PickList from 'primevue/picklist'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import Ripple from 'primevue/ripple'
import Row from 'primevue/row'
import SelectButton from 'primevue/selectbutton'
import ScrollPanel from 'primevue/scrollpanel'
import ScrollTop from 'primevue/scrolltop'
import Skeleton from 'primevue/skeleton'
import Slider from 'primevue/slider'
import Sidebar from 'primevue/sidebar'
import SpeedDial from 'primevue/speeddial'
import SplitButton from 'primevue/splitbutton'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Steps from 'primevue/steps'
import StyleClass from 'primevue/styleclass'
import TabMenu from 'primevue/tabmenu'
import TieredMenu from 'primevue/tieredmenu'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Tag from 'primevue/tag'
import Terminal from 'primevue/terminal'
import Timeline from 'primevue/timeline'
import ToggleButton from 'primevue/togglebutton'
import Tooltip from 'primevue/tooltip'
import Tree from 'primevue/tree'
import TreeSelect from 'primevue/treeselect'
import TreeTable from 'primevue/treetable'
import TriStateCheckbox from 'primevue/tristatecheckbox'
import VirtualScroller from 'primevue/virtualscroller'



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
  .use(PrimeVue)
  .use(useCookies)
  .use(store)

  .use(ToastService)
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

  

