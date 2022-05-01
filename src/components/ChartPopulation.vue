<template>
  <div>
    <!-- 
			TODO: add other case such as 429 Too Many Request
			ref: https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html
		 -->
    <chart v-if="getResponseStatus === 200" :options="chartOptions"></chart>
    <p v-else>データ取得中</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { Chart } from 'highcharts-vue'
import { ChartOptions } from '~/types/highcharts'

export default Vue.extend({
  components: {
    Chart,
  },
  computed: {
    ...mapGetters('prefList', ['getSelectedPrefList']),
    ...mapGetters('highcharts', ['getSeries', 'getResponseStatus']),
    chartOptions(): ChartOptions {
      const options = {
        title: { text: '人口推移' },
        xAxis: { title: { text: '年' } },
        yAxis: { title: { text: '人口' } },
        series: this.getSeries,
      }
      return options
    },
  },
  methods: {
    ...mapActions('highcharts', ['fetchComposition']),
  },
})
</script>
