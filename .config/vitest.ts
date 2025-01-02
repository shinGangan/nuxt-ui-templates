import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    // NOTE: テスト対象拡張時に追加する
    includeSource: ['app/composables/**/*.ts', 'server/**/*.ts']
  },
  define: {
    'import.meta.vitest': false
  }
});
