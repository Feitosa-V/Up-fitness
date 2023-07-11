import axios from 'axios'
import PATHS from '@/router/routesMap'
import store from '@/store'

const api = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL_API}`,
})

api.interceptors.request.use(
  (config) => {
    const cfg = config
    cfg.headers = {
      Authorization: `Bearer ${localStorage.getItem('tokenUpFitness')}`,
    }
    return cfg
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data)
  },
  (error) => {
    if (error instanceof axios.Cancel) {
      const err = error
      err.message = 'Cancelado pelo usuário'
      return Promise.reject(err)
    }

    const res = error.response

    if (!res) {
      return Promise.reject()
    }
    if (res.status === 401) {
      if (res.config.url !== '/sign-in') {
        store.dispatch('logout').then(() => {
          localStorage.setItem(
            'sessionError',
            'Sua sessão expirou! Faça o login novamente para continuar.',
          )
          window.location.href = PATHS.AUTH
        })
      }
      return Promise.reject(res.data)
    }
    if (res.status === 403) {
      window.location.href = PATHS.UNAUTHORIZED
      return Promise.reject(res.data)
    }
    if (!(res.status >= 200 && res.status < 400)) {
      return Promise.reject(res.data)
    }
    return Promise.reject(res.data)
  },
)

export default api
