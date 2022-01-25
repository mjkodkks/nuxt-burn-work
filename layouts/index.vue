<template>
    <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div></div>
    </v-app-bar>
    <v-main>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent, ref,
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
      const title = ref("Nuxt 2 Typescript + Composition API + Pinia 🍍 + Vuetify (Starter kit)")

    return {
        title
    }
  },
})
</script>
