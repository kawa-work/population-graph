import type { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $resas: NuxtAxiosInstance
  }
}
