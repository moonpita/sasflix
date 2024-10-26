<template>
  <div class="posts">
    <Post v-for="(post) in postsStore.posts"
      :key="post.id"
      :title="post.title"
      :text="post.body"
      :tags="post.tags"
    />
  </div>
</template>

<script lang="ts" setup>
  import { defineComponent, onMounted, ref } from 'vue';
  import Post from '@/5_entities/posts/ui/Post.vue';
  import { usePostsStore } from '@/5_entities/posts/model/store';
  import { PublicAPI } from '@/6_shared/api';

  const postsStore = usePostsStore()
  const posts = ref([])

  onMounted(async () => {
    const data = await PublicAPI.getPosts();
    postsStore.posts = data;
    console.log(data, postsStore)
  })

</script>
