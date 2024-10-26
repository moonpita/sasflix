import { PublicAPI } from "@/6_shared/api";
import type { TPosts } from "@/6_shared/config/types";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const usePostsStore = defineStore("postsStore", () => {
  const posts: Ref<TPosts> = ref([]);

  const toggleLikePost = async (id) => {

  }
  const toggleDislikePost = async (id) => {

  }


  return {
    posts,
    toggleLikePost,
    toggleDislikePost
  }
})
