import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './home/HomePage.vue'
import PostPage from './post/PostPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/:postId',
      component: PostPage
    },
  ]
})

export default router
