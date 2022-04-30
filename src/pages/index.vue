<template>
  <div>
    <PrefChipList :prefectures="prefectures"></PrefChipList>
    <div>
      <ChartPopulation></ChartPopulation>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prefectures, PrefecturesResponse } from '~/types/resas'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      prefectures: [] as Prefectures,
    }
  },
  created() {
    this.fetchPrefectures()
  },
  methods: {
    async fetchPrefectures() {
      const prefecturesResponse = await this.$resas.$get<PrefecturesResponse>(
        'prefectures'
      )
      this.prefectures = prefecturesResponse.result
    },
  },
})
</script>
