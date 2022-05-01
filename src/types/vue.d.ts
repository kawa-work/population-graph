import type { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $resas: NuxtAxiosInstance
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $resas: NuxtAxiosInstance
  }
}
