<template>
  <Post
    v-if="post"
    :key="post.id"
    :id="post.id"
    :title="post.title"
    :body="post.body"
    :tags="post.tags"
    :reactions="post.reactions"
    :views="post.views"
    :userId="post.userId"
    :userReaction="post.userReaction"
  />
  <div v-else>
    Пост не найден
  </div>
</template>

<script lang="ts" setup>
  import Post from '@/5_entities/posts/ui/Post.vue';
  import { usePostsStore } from '@/5_entities/posts/model/store';
  import { useRoute } from 'vue-router';
import { computed } from 'vue';

  const route = useRoute();

  const postsStore = usePostsStore()
  const postId = Number(route.params.postId);

  const post = computed(() => postsStore.posts.find(post => post.id === postId));

</script>
