import "./assets/main.css"

import { createApp } from 'vue'
import App from './App.vue'
import EN from "./i18n/en.json"
import UZ from "./i18n/uz.json"
createApp(App).mount('#app')

import { createI18n, useI18n } from "vue-i18n"

const i18n = createI18n({
    locale:'EN',
    messages:{
        EN:EN,
        UZ:UZ
    }    
})

