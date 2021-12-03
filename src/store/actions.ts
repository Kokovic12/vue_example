import {  useCookies } from 'vue3-cookies'
import * as Request from '../services/requests'
import state from './state'

const actions = {
  async getUser () {
    const user = await Request.getUser()
    if (user == null) return
  
    state.name = user.name
    state.username = user.username
  },
  async login(username: string, password: string) {
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
  

export default { actions }