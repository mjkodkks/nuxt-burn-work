import { Inject } from '@nuxt/types/app'
import { Context } from '@nuxt/types'
import { setAxiosInstance } from '~/services/axios'


export default function (ctx: Context, inject: Inject) {
  // Create a custom axios instance
  const axios = ctx.$axios.create({
    headers: {
      common: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      },
    }
  })
  const baseURL = ctx.$config.API_URL

  // Set baseURL to something different
  axios.setBaseURL(baseURL)

  // middleware for request 
  const interceptorRequest = axios.interceptors.request.use(
    (request) => {
      return request
    },
    (error) => {
      return Promise.reject(error)
    }
  )


  // middleware for response 
  const interceptorResponse = axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )


  // Inject to context as $axios
  inject('axios', axios)
  // set axios instance for use in all folder
  setAxiosInstance(axios)
}