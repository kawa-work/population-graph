<template>
  <ul class="chip__list">
    <li v-for="pref in prefectures" :key="pref.prefCode" class="chip___item">
      {{ pref.prefName }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Prefectures } from '~/types/resas'

export default Vue.extend({
  props: {
    prefectures: {
      type: Array,
      default: () => [],
    } as PropOptions<Prefectures>,
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

  &___item {
    padding: 8px 12px;
    margin: 4px 8px;
    background-color: rgb(0 0 0 / 0.1);
    border-radius: 100px;
    writing-mode: vertical-rl;
  }
}
</style>
