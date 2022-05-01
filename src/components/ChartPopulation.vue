<template>
  <div>
    <chart v-if="getResponseStatus === 200" :options="chartOptions"></chart>
    <div v-else>
      <p v-if="getResponseStatus === 0">
        都道府県を選択して人口データを取得しましょう
      </p>
      <p v-else-if="getResponseStatus === 429">
        アクセスが集中しているようです。<br />少しお待ちいただいてから再度お試しください。
      </p>
      <p v-else>サイトに不具合が起きているようです。</p>
    </div>
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
