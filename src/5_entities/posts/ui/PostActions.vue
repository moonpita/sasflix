<template>

  <div class="actions">
      <Button className="like">
        <Heart />
        <span class="btn-text"> Like </span>
        <span class="btn-count">192</span>
      </Button>
      <Button className="dislike">
        <Dislike />
        <span class="btn-text"> Trash </span>
        <span class="btn-count">192</span>
      </Button>

      <button class="comments-btn">Open comments</button>
      <div class="comments-last">Today</div>

      <div class="tags">
        <div class="tags__item">history</div>
        <div class="tags__item">american</div>
        <div class="tags__item">crime</div>
      </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/6_shared/ui/Button.vue';
import Heart from '@/6_shared/icons/Heart.vue';
import Dislike from '@/6_shared/icons/Dislike.vue';

export default defineComponent({
  name: 'PostActions',
  components: { Button, Heart, Dislike },
});
</script>

<style>

  .actions {
    margin-top: 24px;
    display: flex;
    align-items: center;
  }

  .tags {
    display: flex;
    align-items: center;
  }

  .like {
    border-radius: 30px 0px 0px 30px;
    margin-right: 1px;
  }
  .dislike {
    border-radius: 0px 30px 30px 0px;
    margin-right: 8px;
  }

  .btn-count {
    color: #040405;
  }

  .btn-text {
    margin: 0px 6px 0px 4px;
  }

  .comments-btn {
    background: none;
    color: var(--primary);
    position: relative;
    overflow: visible;
    margin-right: 8px;
  }
  .comments-btn::after {
      z-index: 99;
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: var(--primary);
      opacity: 0.5;
      top: 100%;
      left: 0;
  }

  .comments-last {
    font: var(--font-caption);
    color: rgba(4, 4, 5, 0.22)
  }

  .tags__item {
    font: var(--font-caption);
    width: max-content;
    border-radius: 3px;
    background: var(--gray);
    padding: 4px;
  }

  .tags__item:not(:last-child) {
    margin-right: 8px;
  }
  .tags__item:first-child {

  }

</style>
