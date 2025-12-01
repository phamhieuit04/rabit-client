import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { vi } from './locales/vi'
import { en } from './locales/en'
import { useUiStore } from './stores/ui'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)

const uiStore = useUiStore()

export const i18n = createI18n({
    legacy: false,
    locale: uiStore.currentLocale,
    fallbackLocale: 'en',
    messages: {
        vi: vi,
        en: en,
    },
})

app.use(i18n)
app.use(router)

app.mount('#app')
