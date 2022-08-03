<template>
  <div>
    <v-card class="w-full p-4">
      {{ welcome }}
      <div class="text-2xl mt-4">
        {{ count }}
      </div>
      <div class="mt-4">
        <v-btn color="primary" @click="increase">ADD +1</v-btn>
        <v-btn color="error" @click="reset">RESET</v-btn>
      </div>
    </v-card>
    <v-card class="mt-4 p-4">
      <div>Example Fetch API <v-btn icon small @click="getCatFact">
          <v-icon small>mdi-reload</v-icon>
        </v-btn>
      </div>
      <ul>
        <li class="text-3xl font-bold underline text-h1"> {{ catFact ? catFact.text : '-' }}</li>
      </ul>
    </v-card>
  </div>
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
