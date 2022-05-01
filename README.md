# population-graph

[RESAS API](https://opendata.resas-portal.go.jp/)を使った都道府県別の総人口推移グラフ Web アプリ

## 開発環境

- Windows 10
- WSL2
- Ubuntu 20.04
- Node v16.15.0
- Nuxt v2.15.8

## Features

- [x] [Highcharts](https://www.highcharts.com/)
- [x] [RESAS](https://resas.go.jp/#/13/13101)

## Dev Features

- [x] Eslint
- [x] Prettier
- [x] Stylelint
- [x] Commitlint
- [x] lint-staged
- [x] husky
- [x] TypeScript
- [x] Jest
- [x] axios
- [x] SCSS
- [x] Vuex

## Build Setup

### Environment Variables

ルートディレクトリに`.env`を作成し、以下の形式で RESAS API key を記載する

```
RESAS_API_KEY=<Your RESAS API key>
```

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```
