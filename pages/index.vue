<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        Frist page
        <Welcome></Welcome>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'index',
  setup() {


    return {

    }
  },
})
</script>
