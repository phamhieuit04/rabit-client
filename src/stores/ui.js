import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
    state: () => {
        return {
            displaySearchCard: false,
        }
    },
    actions: {
        setDisplaySearchCard(value) {
            this.displaySearchCard = value
        },
    },
})
