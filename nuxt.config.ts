import { NuxtConfig } from '@nuxt/types'
import themes from './theme/colors'

const config: NuxtConfig = {
  
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
  
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
  
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      titleTemplate: '%s - nuxt-burn-work-starter-kit',
      title: 'nuxt-burn-work-starter-kit',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '~/style/global.scss'
    ],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      '~/plugins/axios.ts'
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/typescript
      '@nuxt/typescript-build',
      // https://go.nuxtjs.dev/vuetify
      '@nuxt/postcss8',
      '@nuxtjs/vuetify',
      '@nuxtjs/composition-api/module',
      ['@pinia/nuxt', { disableVuex: true }],
    ],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
    ],
  
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},
  
    router: {
      base: '/',
    },
  
    server: {
      port: process.env.PORT || 3000, // default: 3000
      host: '0.0.0.0', // default: localhost,
      timing: false,
    },
  
    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      treeShake: true,
      theme: {
        dark: false,
        themes
      },
      options: {
        customProperties: true
      }
    },
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  
    publicRuntimeConfig: {
      BASE_URL: process.env.BASE_URL || '',
      API_URL: process.env.VUE_APP_API_URL || '',
    },
  
}

export default config