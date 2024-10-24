<template>

  <div class="actions">
      <button class="btn btn-like">Like</button>
      <button class="btn btn-trash">Trash</button>
      <button class="actions__comments">Open comments</button>

      <div class="tags">
        <div class="tags__item">history</div>
        <div class="tags__item">american</div>
        <div class="tags__item">crime</div>
      </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostActions',
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
