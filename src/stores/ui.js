import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
    state: () => {
        return {
            currentLocale: 'vi',
            displaySearchCard: false,
            displayProductQuickView: false,
        }
    },
    actions: {
        setDisplaySearchCard(value) {
            this.displaySearchCard = value
        },
        setCurrentLocale(locale) {
            this.currentLocale = locale
        },
        setDisplayProductQuickView(value) {
            this.displayProductQuickView = value
        },
    },
    persist: {
        pick: ['currentLocale'],
    },
})
