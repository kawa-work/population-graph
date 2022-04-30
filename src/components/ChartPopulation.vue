<template>
  <chart :options="chartOptions"></chart>
</template>

<script lang="ts">
import Vue from 'vue'
import { Chart } from 'highcharts-vue'
import { Composition, CompositionResponse } from '~/types/resas'

export default Vue.extend({
  components: {
    Chart,
  },
  data() {
    return {
      composition: {} as Composition,
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
    this.fetchComposition()
  },
  methods: {
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
