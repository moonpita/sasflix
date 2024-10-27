<template>
  <div class="comment">
    <div class="image"></div>
    <div class="content">
      <div class="name">{{ user.username }}</div>
      <div class="text">{{ body }}</div>
      <div class="bottom">
        <div class="date">Today(net v api)</div>
        <button class="remove" @click="removeComment">Удалить</button>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { type TComment } from '@/6_shared/config/types';
import { usePostsStore } from '../model/store';

const props = defineProps<TComment>()

const postsStore = usePostsStore();

const removeComment = () => {
  postsStore.removePostComment(props.postId, props.id);
}

</script>

<style scoped>

  .comment {
    display: flex;
    margin-bottom: 27px;
  }
  .image {
    width: 46px;
    height: 46px;
    min-width: 46px;
    min-height: 46px;
    border: 3px solid var(--black);
    border-radius: 50%;
    margin-right: 8px;
  }
  .name {
    font: var(--font-body);
    font-weight: 600;
  }
  .text {
    margin-top: 12px;
    font: var(--font-body);
  }

  .bottom {
    display: flex;
    margin-top: 16px;
  }

  .date {
    font: var(--font-caption);
    color: rgba(04, 04, 05, 0.22);
    margin-right: 20px;
  }

  .remove {
    color: var(--red);
    position: relative;
    background: none;
  }
  .remove::after {
    z-index: 99;
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: var(--red);
    opacity: 0.5;
    top: 100%;
    left: 0;
  }

</style>
