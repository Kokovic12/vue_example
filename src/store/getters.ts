import { GetterTree } from 'vuex'
import state, { State } from './state'

type Getters = {
  isLoggedIn: () => boolean
  isAdmin:()=> boolean
}

const getters: GetterTree<State, State> & Getters = {
  isLoggedIn: () => state.username !== '',
  isAdmin:() => state.role ==='Admin'
}

export default getters
