<template>
  <div class="chip">
    <ul class="chip__list">
      <li
        v-for="(pref, index) in unselectedPrefList"
        :key="pref.prefCode"
        class="chip__item"
        @click="selectPref(pref, index)"
      >
        {{ pref.prefName }}
      </li>
    </ul>
    <ul class="chip__list">
      <li
        v-for="(pref, index) in selectedPrefList"
        :key="pref.prefCode"
        class="chip__item chip__item--active"
        @click="unselectPref(pref, index)"
      >
        {{ pref.prefName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prefecture, Prefectures, PrefecturesResponse } from '~/types/resas'

export default Vue.extend({
  data() {
    return {
      unselectedPrefList: [] as Prefectures,
      selectedPrefList: [] as Prefectures,
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
      this.unselectedPrefList = prefecturesResponse.result
    },
    selectPref(pref: Prefecture, index: number) {
      this.unselectedPrefList.splice(index, 1)
      this.selectedPrefList.push(pref)
    },
    unselectPref(pref: Prefecture, index: number) {
      this.selectedPrefList.splice(index, 1)
      this.unselectedPrefList.splice(0, 0, pref)
    },
  },
})
</script>

<style lang="scss" scoped>
.chip {
  &__list {
    display: flex;
    overflow-x: scroll;
    font-size: 14px;
    list-style-type: none;
  }

  &__item {
    padding: 8px 12px;
    margin: 4px 8px;
    cursor: pointer;
    background-color: rgb(0 0 0 / 0.1);
    border-radius: 100px;
    writing-mode: vertical-rl;

    &--active {
      background-color: rgb(0 0 255 / 0.1);
    }
  }
}
</style>
