import './6_shared/styles/reset.css'
import './6_shared/styles/fonts.css'
import './6_shared/styles/global.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './1_app/App.vue'
import router from './2_pages'
import { usePostsStore } from './5_entities/posts/model/store'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

const postsStore = usePostsStore();

postsStore.init();

app.mount('#app')
