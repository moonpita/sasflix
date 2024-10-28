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
    :openComments="false"
  />
  <div v-if="post" class="comments-count">{{ postsStore.getPostCommentsLength(post.id) }} комментариев</div>
  <Comment v-if="post" v-for="comment in postsStore.commentsById[post.id]"
    :id="comment.id"
    :body="comment.body"
    :postId="comment.postId"
    :likes="comment.likes"
    :user="comment.user"
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
  import { onMounted } from 'vue';
  import Comment from '@/5_entities/posts/ui/Comment.vue';

  const route = useRoute();

  const postsStore = usePostsStore()
  const postId = Number(route.params.postId);

  const post = computed(() => postsStore.posts.find(post => post.id === postId));

  onMounted(() => {
    postsStore.loadPostComments(postId);
  })

</script>

<style scoped>

  .comments-count {
    font: var(--font-h1);
    color: #000;
    margin: 24px 0px;
  }


</style>
