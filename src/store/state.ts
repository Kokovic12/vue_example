import { reactive } from 'vue'

export type State = {
  name: string
  username: string
  error: string
  role:string
}
const state: State = reactive ({
  name: '',
  username: '',
  error: '',
  role:''
})

// export type State = typeof state
export default state
