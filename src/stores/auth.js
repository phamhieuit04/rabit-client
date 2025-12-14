import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            isLoggedIn: false,
            currentUser: null,
        }
    },
    actions: {
        setLoggedInState(value) {
            this.isLoggedIn = value
        },
        setCurrentUser(value) {
            this.currentUser = value
        },
    },
    persist: true,
})
