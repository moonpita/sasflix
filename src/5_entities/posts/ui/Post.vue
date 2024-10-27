<template>
  <div class="post">
    <h2 class="title">{{ title }}</h2>
    <p class="text">{{ body }}</p>

    <PostActions :reactions="reactions" :id="id" :tags="tags" :userReaction="userReaction"
      :openComments="openComments" />
  </div>

</template>

<script lang="ts" setup>
import type { TPost } from '@/6_shared/config/types';
import PostActions from './PostActions.vue';

const props = defineProps<TPost & { openComments?: boolean }>()

</script>

<style scoped>
.post {
  margin-bottom: 32px;
}

.title {
  font: var(--font-h1);
}

.text {
  margin-top: 16px;
}
</style>
