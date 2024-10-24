import './6_shared/styles/reset.css'
import './6_shared/styles/fonts.css'
import './6_shared/styles/global.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './1_app/App.vue'
import router from './2_pages'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
