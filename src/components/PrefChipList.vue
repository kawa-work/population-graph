<template>
  <div class="chip">
    <ul class="chip__list">
      <li
        v-for="(pref, index) in getUnselectedPrefList"
        :key="pref.prefCode"
        class="chip__item"
        @click="selectPref({ pref, index })"
      >
        {{ pref.prefName }}
      </li>
    </ul>
    <ul class="chip__list">
      <li
        v-for="(pref, index) in getSelectedPrefList"
        :key="pref.prefCode"
        class="chip__item chip__item--active"
        @click="unselectPref({ pref, index })"
      >
        {{ pref.prefName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters('prefList', ['getUnselectedPrefList', 'getSelectedPrefList']),
  },
  created() {
    this.fetchPrefectures()
  },
  methods: {
    ...mapMutations('prefList', ['selectPref', 'unselectPref']),
    ...mapActions('prefList', ['fetchPrefectures']),
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
