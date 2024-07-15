import "./assets/main.css"
import { createApp } from "vue"
import App from './App.vue'
import EN from "./i18n/en.json"
import UZ from "./i18n/uz.json"
import { createI18n } from "vue-i18n"

// I18n ni yaratish va sozlash
const i18n = createI18n({
    locale: 'EN',
    messages: {
        EN: EN,
        UZ: UZ
    }
})

// Vue ilovasini yaratish va i18n ni ulash
const app = createApp(App)
app.use(i18n)
app.mount('#app')
