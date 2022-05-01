<template>
  <div class="chart">
    <div v-if="getResponseStatus === 200" class="chart__figure">
      <chart :options="chartOptions"></chart>
      <p class="chart__annotation">
        {{ getBoundaryYear }}年が実績値と推計値の区切り年
      </p>
    </div>
    <div v-else class="chart__message">
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
    ...mapGetters('highcharts', [
      'getSeries',
      'getResponseStatus',
      'getBoundaryYear',
    ]),
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

<style lang="scss" scoped>
.chart {
  width: 90%;
  margin: auto;
  margin-top: 10vh;

  &__annotation {
    margin-top: 8px;
    font-size: 8px;
    color: rgb(0 0 0 / 0.7);
  }

  &__message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    font-size: 14px;
    text-align: center;
    border: 1px solid rgb(0 0 0 / 0.4);
    border-radius: 32px;
  }
}
</style>
