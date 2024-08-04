import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import validation from './includes/validation'
import '@/includes/firebase'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(validation)

app.mount('#app')
