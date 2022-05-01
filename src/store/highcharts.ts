import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { convertCompositionToSeries } from '~/utils/convert'
import { Series } from '~/types/highcharts'
import { CompositionResponse, Prefecture } from '~/types/resas'

export const state = () => ({
  series: [] as Series,
  responseStatus: 0,
  boundaryYear: 0,
})

export type highchartsState = ReturnType<typeof state>

enum compositionDataEnum {
  '総人口',
  '年少人口',
  '生産年齢人口',
  '老年人口',
}

export const getters: GetterTree<highchartsState, highchartsState> = {
  getSeries: (state) => state.series,
  getResponseStatus: (state) => state.responseStatus,
  getBoundaryYear: (state) => state.boundaryYear,
}

export const mutations: MutationTree<highchartsState> = {
  setResponseStatus: (state, status: number) => (state.responseStatus = status),
  pushSeries: (state, series) => {
    state.series.push(series)
  },
  pullSeries: (state, pref: Prefecture) => {
    const prefName = pref.prefName
    state.series = state.series.filter((v) => v.name !== prefName)
  },
  setBoundaryYear: (state, boundaryYear) => {
    state.boundaryYear = boundaryYear
  },
}

export const actions: ActionTree<highchartsState, highchartsState> = {
  async fetchComposition({ commit }, payload) {
    const pref = payload.pref
    const { status, data: compositionResponse } =
      await this.$resas.get<CompositionResponse>(
        'population/composition/perYear',
        {
          params: {
            cityCode: '-', // All city data
            prefCode: pref.prefCode,
          },
        }
      )
    commit('setResponseStatus', status)
    const seriesItemData = convertCompositionToSeries(
      compositionResponse.result.data[compositionDataEnum['総人口']]
    )
    commit('pushSeries', { name: pref.prefName, data: seriesItemData })
    commit('setBoundaryYear', compositionResponse.result.boundaryYear)
  },
}
