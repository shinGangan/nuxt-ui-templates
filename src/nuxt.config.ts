export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],

  $development: {
    devtools: { enabled: true }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-01-02'
});