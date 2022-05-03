<template>
  <v-card class="w-full pa-8">
      {{ welcome }}
      <v-card>
        {{ count }}
      </v-card>
      <v-btn @click="increase">ADD +1</v-btn>
      <v-btn @click="reset">RESET</v-btn>
  </v-card>
</template>

<script lang="ts">
import {
  defineComponent, toRefs,
} from '@nuxtjs/composition-api'
import { useStore } from '~/store/main'
export default defineComponent({
  setup() {
     const mainStore = useStore()

     // doc via : https://pinia.vuejs.org/core-concepts/#using-the-store
     // and issue https://github.com/vuejs/pinia/issues/852
     const { increase, reset } = mainStore
     const { count, welcome } = toRefs(mainStore)

    return {
        welcome,
        count,
        increase,
        reset
    }
  },
})
</script>

<style>
</style>
