import { createStore } from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'


const store = createStore({
  modules:{
    state,
    getters,
    actions
  }
})

export default store



