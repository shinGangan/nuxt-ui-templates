<h1 style='display: flex; justify-content: center;'>
  nuxt-ui-templates
</h1>

<div style='display: flex; justify-content: center;'>
  <div style='display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 1rem'>
    <a href="https://github.com/nuxt/nuxt">
      <img
        src="https://img.shields.io/npm/v/nuxt.svg?style=plastic&colorA=18181B&colorB=00DC82&logo=nuxt&label=Nuxt"
        alt="Nuxt Version Badge"
      />
    </a>
    <a href="https://github.com/nuxt/ui">
      <img
        src="https://img.shields.io/npm/v/@nuxt/ui.svg?style=plastic&colorA=18181B&colorB=00DC82&logo=nuxt&label=Nuxt UI"
        alt="Nuxt UI Version Badge"
      />
    </a>
    <a href="https://github.com/vitest-dev/vitest">
      <img
        src="https://img.shields.io/npm/v/vitest.svg?style=plastic&logo=vitest&colorB=6E9F18&label=Vitest"
        alt="Vitest Version Badge"
      />
    </a>
    <a href="https://github.com/pnpm/pnpm">
      <img
        src="https://img.shields.io/npm/v/pnpm.svg?style=plastic&logo=pnpm&colorB=F69220&label=pnpm"
        alt="pnpm Version Badge"
      />
    </a>
    <a href="./LICENSE">
      <img
        src="https://img.shields.io/github/license/shinGangan/nuxt-nuxtui-templates.svg?style=plastic&color=28CFFD"
        alt="License"
      >
    </a>
  </div>
</div>

## ⚡️ About

Nuxt + Nuxt UI の GitHub Repo templates

## ✅ Installation

**pnpm** および **pnpm workspace** を採用しています.

```sh
# use pnpm
pnpm install
```

## 🔥 Usage

### Run the UI in development mode

Run the following command and check http://localhost:3000 .

```sh
# use pnpm
pnpm ui dev

# use antfu/ni
nr ui dev
```

### 🔨 Generate

Nuxt CLI および scaffdog を用いることでファイルの生成が容易です.

#### component

```sh
# use pnpm
pnpm gen:cm

# use antfu/ni
nr gen:cm
```

#### page

```sh
# use pnpm
pnpm ui gen:page [ファイル名]

# use antfu/ni
nr ui gen:page [ファイル名]

# e.g.)
# nr ui gen:page users
```

#### api

```sh
# use pnpm
pnpm ui gen:api [ファイル名]

# use antfu/ni
nr ui gen:api [ファイル名]

# e.g.)
# nr ui gen:api --method get users
```

## ⚖️ LICENSE

This repository is licensed under the [MIT License](/LICENSE).
