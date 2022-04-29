<template>
  <div>
    <ul>
      <li v-for="pref in prefectures" :key="pref.prefCode">
        {{ pref.prefName }}
      </li>
    </ul>
    <div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Chart } from 'highcharts-vue'
import { CompositionResponse, PrefecturesResponse } from '~/types/resas'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      prefectures: {},
      composition: {},
      chartOptions: {
        series: [
          {
            data: [1, 2, 3], // sample data
          },
        ],
      },
    }
  },
  created() {
    this.fetchPrefectures()
    this.fetchComposition()
  },
  methods: {
    async fetchPrefectures() {
      const prefecturesResponse = await this.$resas.$get<PrefecturesResponse>(
        'prefectures'
      )
      this.prefectures = prefecturesResponse.result
    },
    async fetchComposition() {
      const compositionResponse = await this.$resas.$get<CompositionResponse>(
        'population/composition/perYear',
        {
          params: {
            cityCode: '-', // All city data
            prefCode: 1,
          },
        }
      )
      this.composition = compositionResponse.result
    },
  },
})
</script>
