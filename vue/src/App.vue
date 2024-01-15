<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .logo {
    box-sizing: content-box;
    display: inline-block;
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
