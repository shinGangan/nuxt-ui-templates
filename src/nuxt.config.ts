export default defineNuxtConfig({
  modules: ['@nuxt/test-utils/module', '@nuxt/ui'],

  $development: {
    devtools: { enabled: true }
  },

  devtools: { enabled: false },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-01-02',

  typescript: {
    strict: false,
    tsConfig: {
      compilerOptions: {
        types: ['vitest/importMeta']
      }
    }
  }
});
