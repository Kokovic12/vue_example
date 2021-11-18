import axios from 'axios'

const API_URL = 'http://localhost:8080/api/auth/'

export default {
  login(username: string, password: string) {
    return axios
      .post(`${API_URL  }signin`, {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  },

  logout() {
    localStorage.removeItem('user')
  },

  register(username: string, mobilenumber:string, email: string, password: string) {
    return axios.post(`${API_URL  }signup`, {
      username,
      mobilenumber,
      email,
      password
    })
  }
}