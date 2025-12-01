import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
    state: () => {
        return {
            currentLocale: 'vi',
            displaySearchCard: false,
        }
    },
    actions: {
        setDisplaySearchCard(value) {
            this.displaySearchCard = value
        },
        setCurrentLocale(locale) {
            this.currentLocale = locale
        },
    },
    persist: {
        pick: ['currentLocale'],
    },
})
