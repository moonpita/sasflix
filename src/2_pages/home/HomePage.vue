<template>
  <div class="posts">
    <Post
      v-for="post in postsStore.posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :body="post.body"
      :tags="post.tags"
      :reactions="post.reactions"
      :views="post.views"
      :userId="post.userId"
      :userReaction="post.userReaction"
      :openComments="true"
    />
  </div>
</template>

<script lang="ts" setup>
  import Post from '@/5_entities/posts/ui/Post.vue';
  import { usePostsStore } from '@/5_entities/posts/model/store';

  const postsStore = usePostsStore()

</script>
