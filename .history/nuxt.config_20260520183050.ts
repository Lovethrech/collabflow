// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:["./app/assets/css/main.css"],
  modules:['@/'],
  future:{
    compatibilityVersion: 4
  },
  routeRules: {
    '/': { prerender: true }
  }
})
