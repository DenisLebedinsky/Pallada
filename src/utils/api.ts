import axios from 'axios'
import Router from 'next/router'
import { BASE_URL } from 'src/utils/secrets'

const api = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
})

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('ids')
  config.headers.Authorization = `bearer ${token}`

  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.message == 'Request failed with status code 403') {
      Router.push('/admin/login')
      return
    }

    return Promise.reject(error)
  }
)

export default api
