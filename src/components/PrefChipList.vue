<template>
  <ul>
    <li v-for="pref in prefectures" :key="pref.prefCode">
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
