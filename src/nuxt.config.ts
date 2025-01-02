export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/test-utils/module', '@nuxt/ui'],

  $development: {
    devtools: { enabled: true }
  },

  future: {
    compatibilityVersion: 4
  },

  typescript: {
    strict: false,
    tsConfig: {
      compilerOptions: {
        types: ['vitest/importMeta']
      }
    }
  },

  compatibilityDate: '2025-01-02'
});
