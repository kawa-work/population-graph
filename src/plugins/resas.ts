import { Plugin } from '@nuxt/types'

const resasPlugin: Plugin = ({ $axios, $config }, inject): void => {
  const api = $axios.create({
    baseURL: 'https://opendata.resas-portal.go.jp/api/v1/',
    headers: {
      'X-API-KEY': $config.RESAS_API_KEY,
      Accept: 'application/json; charset=UTF-8',
    },
  })

  inject('resas', api)
}

export default resasPlugin
