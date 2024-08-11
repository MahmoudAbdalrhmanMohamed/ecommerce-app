import './assets/base.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import validation from './includes/validation'
import '@/includes/firebase'
import LoginComponent from './components/LoginComponent.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(pinia)
app.use(router)
app.use(validation)
app.component('LoginComponent', LoginComponent)

app.mount('#app')
