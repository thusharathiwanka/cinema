export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cinema',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios.plugin.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Deployment target: https://v2.nuxt.com/docs/configuration-glossary/configuration-target/
  target: 'static',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: process.env.BASE_URL,
    https: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Runtime configs
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    imageBaseUrl: process.env.IMAGE_BASE_URL,
    authToken: process.env.AUTH_TOKEN,
  },

  typescript: {
    typeCheck: true,
  },
}
