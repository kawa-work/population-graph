import _ from 'lodash'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Prefecture, Prefectures, PrefecturesResponse } from '~/types/resas'

export const state = () => ({
  prefList: [] as Prefectures,
  unselectedPrefList: [] as Prefectures,
  selectedPrefList: [] as Prefectures,
})

export type PrefListState = ReturnType<typeof state>

type SelectPrefPayload = {
  pref: Prefecture
  index: number
}

export const getters: GetterTree<PrefListState, PrefListState> = {
  getPrefList: (state) => state.prefList,
  getUnselectedPrefList: (state) => state.unselectedPrefList,
  getSelectedPrefList: (state) => state.selectedPrefList,
}

export const mutations: MutationTree<PrefListState> = {
  setPrefList: (state, prefList: Prefectures) =>
    (state.prefList = _.cloneDeep<Prefectures>(prefList)),
  setUnselectedList: (state, prefList: Prefectures) =>
    (state.unselectedPrefList = _.cloneDeep<Prefectures>(prefList)),
  selectPref: (state, payload: SelectPrefPayload) => {
    state.unselectedPrefList.splice(payload.index, 1)
    state.selectedPrefList.push(payload.pref)
  },
  unselectPref: (state, payload: SelectPrefPayload) => {
    state.selectedPrefList.splice(payload.index, 1)
    state.unselectedPrefList.splice(0, 0, payload.pref)
  },
}

export const actions: ActionTree<PrefListState, PrefListState> = {
  async fetchPrefectures({ commit }) {
    const prefecturesResponse = await this.$resas.$get<PrefecturesResponse>(
      'prefectures'
    )
    commit('setPrefList', prefecturesResponse.result)
    commit('setUnselectedList', prefecturesResponse.result)
  },
}
