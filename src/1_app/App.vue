<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="header__title">ikakprosto.ru</h1>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
  .header__title {
    color: var(--primary);
    font-size: 40px;
    font-weight: 700;
    text-align: center;
  }
</style>
