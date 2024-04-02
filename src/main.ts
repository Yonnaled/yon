import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { i18nStore } from './stores/i18n.js'
import App from './App.vue'
import router from './router'
import EN from './i18n/en.json'
import FR from './i18n/fr.json'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

const i18nHandle = i18nStore()

const i18n = createI18n({
  locale: i18nHandle.locale,
  messages: {
    EN: EN,
    FR: FR
  }
})
app.use(i18n)

app.use(router)

app.mount('#app')
