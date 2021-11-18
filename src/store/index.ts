import { createStore } from 'vuex'
import { auth } from './aut.module'

const store = createStore({
  modules: {
    auth,
  },
})

export default store