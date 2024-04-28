<script setup lang="ts"></script>

<template>
  <div class="pro-exp">
    <div class="summary"></div>
    <div class="content"></div>
  </div>
</template>

<style scoped>
.pro-exp {
  padding-top: 40vh;
  position: relative;
  background-color: #fffaf1;
  display: flex;
  justify-content: space-evenly;
}

.summary {
  background-color: crimson;
  width: 20vw;
  height: 70vh;
}

.content {
  background-color: lightblue;
  width: 60vw;
  height: 70vh;
}

@media (min-width: 1024px) {
}
</style>
