<template>
  <h2 class="title">{{ title }}</h2>
  <p class="text">{{ body }}</p>

  <PostActions :reactions="reactions" :id="id" :tags="tags" :userReaction="userReaction" />

</template>

<script lang="ts" setup>
import type { TPost } from '@/6_shared/config/types';
import PostActions from './PostActions.vue';

const props = defineProps<TPost>()

</script>

<style scoped>

  .title {
    font: var(--font-h1);
  }

  .text {
    margin-top: 16px;
  }

</style>
