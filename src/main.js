import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { vi } from './locales/vi'
import { en } from './locales/en'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const i18n = createI18n({
    legacy: false,
    locale: 'vi',
    fallbackLocale: 'en',
    messages: {
        vi: vi,
        en: en,
    },
})

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(router)

app.mount('#app')
