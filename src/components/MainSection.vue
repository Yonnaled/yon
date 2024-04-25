<script setup lang="ts">
document.addEventListener('scroll', (event) => {
  document.querySelectorAll<HTMLElement>('.scroll-1').forEach((element) => {
    element.style.transform = `translateY(${-window.scrollY / 4}px)`
  })
  document.querySelectorAll<HTMLElement>('.scroll-2').forEach((element) => {
    element.style.transform = `translateY(${-window.scrollY / 6}px)`
  })
  document.querySelectorAll<HTMLElement>('.scroll-3').forEach((element) => {
    element.style.transform = `translateY(${-window.scrollY / 2}px)`
  })
})
</script>

<template>
  <div class="main">
    <div class="bg-video scroll-3">
      <video src="../assets/video/bg-logo.mov" autoplay loop muted></video>
    </div>
    <div class="title">
      <div class="welcome scroll-1">
        <div class="feixen">{{ $t('home.welcome') }}</div>
        <div class="webyon">{{ $t('home.webyon') }}!</div>

      </div>
      <div class="brico st scroll-2">
        {{ $t('home.introduction') }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
}
.bg-video {
  display: flex;
  justify-content: center;
  z-index: 0;
  position: fixed;
}
video {
  width: 150vw;
  transform: translateY(-18vw);
  filter: brightness(60%);
}

.title {
  width: 75%;
  color: #fffaf1;
  text-shadow: 1px 1px 2px black;

  position: absolute;
  top: 35%;
  left: 50%;

  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.welcome {
  display: flex;
  font-size: 5vw;
  text-align: left;
  font-weight: bold;
}
.webyon{
  padding-left: 1.4vw;
  font-weight: 500;
  font-feature-settings: normal;
}

.st {
  font-size: 3vw;
  text-align: right;
  margin-left: 18%;
}

@media (min-width: 1024px) {
}
</style>
