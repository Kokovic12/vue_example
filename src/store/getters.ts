import { reactive, computed } from 'vue'
import state from './state'


const getters = reactive ({
  isLoggedIn: computed(() => state.username !== '')
})
  
export default { getters }