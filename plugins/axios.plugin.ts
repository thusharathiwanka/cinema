import { Plugin } from '@nuxt/types'
import { NuxtRuntimeConfig } from '@nuxt/types/config/runtime'
import type { NuxtAxiosInstance } from '@nuxtjs/axios'

const axiosPlugin: Plugin = ({
  $axios,
  $config: { authToken },
}: {
  $axios: NuxtAxiosInstance
  $config: NuxtRuntimeConfig
}) => {
  $axios.defaults.headers.common.Authorization = authToken
  $axios.defaults.headers.common['Content-Type'] = 'application/json'
}

export default axiosPlugin
