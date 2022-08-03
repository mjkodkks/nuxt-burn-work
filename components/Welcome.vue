<template>
  <v-card class="w-full pa-8">
    {{ welcome }}
    <v-card>
      {{ count }}
    </v-card>
    <v-btn @click="increase">ADD +1</v-btn>
    <v-btn @click="reset">RESET</v-btn>
    <div>Example Fetch API <v-btn icon small @click="getCatFact">
        <v-icon small>mdi-reload</v-icon>
      </v-btn>
    </div>
    <div>
      <ul>
        <li> {{ catFact ? catFact.text : '-' }}</li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import {
  defineComponent, ref, toRefs,
} from '@nuxtjs/composition-api'
import { getCatFactService } from '~/services/catFact'
import { useStore } from '~/store/main'
export default defineComponent({
  setup() {
    const mainStore = useStore()

    // doc via : https://pinia.vuejs.org/core-concepts/#using-the-store
    // and issue https://github.com/vuejs/pinia/issues/852
    const { increase, reset } = mainStore
    const { count, welcome } = toRefs(mainStore)

    const catFact = ref()
    function init() {
      getCatFact()
    }

    async function getCatFact() {
      const { isSuccess, data, err } = await getCatFactService()
      if (isSuccess) {
        catFact.value = data
      }
    }

    init()

    return {
      welcome,
      count,
      catFact,
      increase,
      reset,
      getCatFact
    }
  },
})
</script>

<style>
</style>
