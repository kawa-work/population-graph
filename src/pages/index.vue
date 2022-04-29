<template>
  <div>
    <ul>
      <li v-for="pref in prefectures" :key="pref.prefCode">
        {{ pref.prefName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PrefecturesResponse } from '~/types/resas'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      prefectures: {},
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const prefecturesResponse = await this.$resas.$get<PrefecturesResponse>(
        'prefectures'
      )
      this.prefectures = prefecturesResponse.result
    },
  },
})
</script>
