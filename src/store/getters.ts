import { GetterTree } from 'vuex'
import state, { State } from './state'

type Getters = {
  isLoggedIn: () => boolean
}

const getters: GetterTree<State, State> & Getters = {
  isLoggedIn: () => state.username !== ''
}
  
export default getters