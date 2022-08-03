<template>
  <v-container fluid>
    <v-row class="justify-center items-center">
      <v-col cols="12" sm="8" md="6">
        <WelcomeComp></WelcomeComp>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'
import WelcomeComp from '~/components/WelcomeComp.vue'
export default defineComponent({
    layout: "index",
    setup() {
        return {};
    },
})
</script>
