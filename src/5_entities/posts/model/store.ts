import { PublicAPI } from "@/6_shared/api";
import { USER_REACTIONS, type TPosts } from "@/6_shared/config/types";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const usePostsStore = defineStore("postsStore", () => {
  const posts: Ref<TPosts> = ref([]);

  const init = async () => {
    const data = await PublicAPI.getPosts();
    posts.value = data.posts.map(post => ({
      ...post,
      userReaction: USER_REACTIONS.NONE,
    }));
  }

  const toggleLikePost = async (id: number) => {
    const idx = posts.value.findIndex(post => post.id === id);
    const prevReaction = posts.value[idx].userReaction;
    const prevCount = posts.value[idx].reactions.likes;

    posts.value[idx].userReaction = prevReaction === USER_REACTIONS.LIKE ? USER_REACTIONS.NONE : USER_REACTIONS.LIKE;
    posts.value[idx].reactions.likes = prevReaction === USER_REACTIONS.LIKE ? +prevCount - 1 : +prevCount + 1;
  }
  const toggleDislikePost = async (id: number) => {
    const idx = posts.value.findIndex(post => post.id === id);
    const prevReaction = posts.value[idx].userReaction;
    const prevCount = posts.value[idx].reactions.dislikes;

    posts.value[idx].userReaction = prevReaction === USER_REACTIONS.DISLIKE ? USER_REACTIONS.NONE : USER_REACTIONS.DISLIKE;
    posts.value[idx].reactions.dislikes = prevReaction === USER_REACTIONS.DISLIKE ? +prevCount - 1 : +prevCount + 1;

  }


  return {
    posts,
    init,
    toggleLikePost,
    toggleDislikePost
  }
})
