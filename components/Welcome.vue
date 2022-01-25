<template>
  <v-card class="w-full pa-8">
      {{ mainStore.welcome }}
      <v-btn>hello</v-btn>
  </v-card>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'
import { useStore } from '~/store/main'
export default defineComponent({
  setup() {
     const mainStore = useStore()

    return {
        mainStore
    }
  },
})
</script>

<style>
</style>
