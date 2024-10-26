<template>
  <h2 class="title">His Mother had always taught him</h2>
  <p class="text">His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.</p>

  <PostActions />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostActions from './PostActions.vue';

export default defineComponent({
  components: { PostActions },
  name: 'Post',
});

</script>

<style scoped>

  .title {
    font: var(--font-h1);
  }

  .text {
    margin-top: 16px;
  }

</style>
