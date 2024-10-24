<template>
  <div class="posts">
    <Post />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Post from '@/5_entities/post/ui/Post.vue';

export default defineComponent({
  components: { Post },
  name: 'HomePage',
});
</script>
