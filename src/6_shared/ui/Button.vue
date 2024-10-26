<template>

  <button :class="[className, 'btn']"> <slot></slot> </button>

</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

const props = defineProps({
  className: {
    type: String,
    default: '',
  }
})

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
