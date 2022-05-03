import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    welcome: "Welcome to land of pinia 🍍",
    count: 0
  }),
  getters: {
  },
  actions: {
    increase() {
      this.count++
    },
    reset() {
      this.count = 0
    }
  },
})
