<script setup lang="ts">
  import ChallengesList from '../components/ChallengesList.vue';
</script>

<template>
  <div class="container">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <h1>iCodeThis Challenges</h1>

    <p>
      Check out
      <a href="https://icodethis.com/" target="_blank">iCodeThis</a>, for all
      the challenges
    </p>

    <ChallengesList />
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
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
