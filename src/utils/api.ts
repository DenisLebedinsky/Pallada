import axios, { AxiosError } from 'axios'
// import { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack'
import { BASE_URL } from 'src/utils/secrets'

// type ShowSnackbar = (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey

const api = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
})

const configureInterceptors = () => {
  api.interceptors.response.use(
    (config) => config,
    (error: AxiosError) => {
      if (error.message === 'Network Error') {
        console.log('REQUEST ERROR')
        // showSnackbar('Network Error', {
        //   variant: 'error',
        //   action: NotificationAction,
        // })

        return
      }

      return Promise.reject(error)
    }
  )
}

export default api

export { configureInterceptors }
