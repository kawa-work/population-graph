<template>
  <div>
    <!-- 
			TODO: add other case such as 429 Too Many Request
			ref: https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html
		 -->
    <chart v-if="responseStatus === 200" :options="chartOptions"></chart>
    <p v-else>データ取得中</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Chart } from 'highcharts-vue'
import { CompositionResponse } from '~/types/resas'
import { convertCompositionToSeries } from '~/utils/convert'

export default Vue.extend({
  components: {
    Chart,
  },
  data() {
    return {
      series: [] as Number[][],
      responseStatus: 0 as Number,
    }
  },
  computed: {
    chartOptions(): Object {
      return {
        title: { text: '人口推移' },
        xAxis: { title: { text: '年' } },
        yAxis: { title: { text: '人口' } },
        series: [{ data: this.series }],
      }
    },
  },
  created() {
    this.fetchComposition()
  },
  methods: {
    async fetchComposition() {
      const { status, data: compositionResponse } =
        await this.$resas.get<CompositionResponse>(
          'population/composition/perYear',
          {
            params: {
              cityCode: '-', // All city data
              prefCode: 1,
            },
          }
        )
      this.responseStatus = status
      enum compositionDataEnum {
        '総人口',
        '年少人口',
        '生産年齢人口',
        '老年人口',
      }
      this.series = convertCompositionToSeries(
        compositionResponse.result.data[compositionDataEnum['総人口']]
      )
    },
  },
})
</script>
