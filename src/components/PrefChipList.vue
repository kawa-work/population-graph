<template>
  <div class="chip">
    <ul class="chip__list">
      <li
        v-for="(pref, index) in getUnselectedPrefList"
        :key="pref.prefCode"
        class="chip__item"
        @click="addPref(pref, index)"
      >
        {{ pref.prefName }}
      </li>
    </ul>
    <ul class="chip__list">
      <li
        v-for="(pref, index) in getSelectedPrefList"
        :key="pref.prefCode"
        class="chip__item chip__item--active"
        @click="removePref(pref, index)"
      >
        {{ pref.prefName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { Prefecture } from '~/types/resas'

export default Vue.extend({
  computed: {
    ...mapGetters('prefList', ['getUnselectedPrefList', 'getSelectedPrefList']),
  },
  created() {
    this.fetchPrefectures()
  },
  methods: {
    ...mapMutations('prefList', ['selectPref', 'unselectPref']),
    ...mapMutations('highcharts', ['pullSeries']),
    ...mapActions('prefList', ['fetchPrefectures']),
    ...mapActions('highcharts', ['fetchComposition']),
    addPref(pref: Prefecture, index: number) {
      this.selectPref({ pref, index })
      this.fetchComposition({ pref })
    },
    removePref(pref: Prefecture, index: number) {
      this.unselectPref({ pref, index })
      this.pullSeries(pref)
    },
  },
})
</script>

<style lang="scss" scoped>
.chip {
  &__list {
    display: flex;
    height: 100px;
    margin: 12px;
    overflow-x: scroll;
    font-size: 14px;
    list-style-type: none;
  }

  &__item {
    padding: 8px 12px;
    margin: 4px 8px;
    font-weight: bold;
    color: rgb(0 0 0 / 0.7);
    cursor: pointer;
    background-color: rgb(0 0 0 / 0.1);
    border-radius: 100px;
    writing-mode: vertical-rl;

    &--active {
      color: rgb(0 0 255 / 0.7);
      background-color: rgb(0 0 255 / 0.1);
    }
  }
}
</style>
