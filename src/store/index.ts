import { createStore } from 'vuex'
import { auth } from './modules/autmodule'

const store = createStore({
  modules: {
    auth,
  },
})

export default store