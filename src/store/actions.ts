import {  useCookies } from 'vue3-cookies'
import { ActionTree } from 'vuex'
import * as Request from '../services/requests'
import  state, { State } from './state'
// import { ActionTypes } from './actions_types'


type Actions = {
  getUser: () => Promise<void>
  login: ({ commit }: any,
    payload: {username: string; password: string}) => Promise<boolean>
}

const actions: ActionTree<State, State> & Actions = {
  async getUser () : Promise<void> {
    const user = await Request.getUser()
    if (user == null) return
  
    state.name = user.name
    state.username = user.username
  },
  async login(_, { username, password }) : Promise<boolean> {
    const user = await Request.login(username, password)
    if (user == null) {
      state.error= 'Could not find user.'
      return false
    }
    state.name = user.name
    state.username = username
    const { cookies } = useCookies()
    cookies.set('token', user.token)    
    state.error = ''
  
    return true
  },
  // async logout() {
  //   state.name = ''
  //   state.username = ''
  //   state.token = ''
  // }
}
  

export default actions