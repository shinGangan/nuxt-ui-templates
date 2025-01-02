---
name: 'component'
root: 'src/app/components'
output: '*'
ignore: []
questions:
  name: 'コンポーネント名を入力してください. > '
  type:
    message: 'コンポーネントのタイプを選んでください (デフォルト: feature) > '
    choices:
      - 'ui'
      - 'feature'
    initial: 'feature'
---

# `{{ inputs.type }}/{{ inputs.name }}/index.vue`

```vue
<script setup lang="ts"></script>

<template>
  <div>
    {{ inputs.name }}
  </div>
</template>
```
