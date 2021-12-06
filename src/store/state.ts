import { reactive } from 'vue'

export type State = {
  name: string
  username: string
  error: string
}
const state: State = reactive ({
  name: '',
  username: '',
  error: '',
})
  
// export type State = typeof state  
export default state 