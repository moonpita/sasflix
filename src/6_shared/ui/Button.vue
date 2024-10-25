<template>

  <button :class="[className, 'btn']"> <slot></slot> </button>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    className: {
      type: String,
      default: '',
    },
  }
});

</script>

<style>

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--gray);
    height: 27px;
    width: 95px;
    cursor: pointer;
  }

</style>
