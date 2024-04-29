<script setup lang="ts">
document.addEventListener('scroll', () => {
  if (!window.matchMedia('(max-width: 700px)').matches) {
    document.querySelectorAll<HTMLElement>('.scroll-3').forEach((element) => {
      element.style.transform = `translateY(${-window.scrollY / 2}px)`
    })
  }
})

// for resizing window on mobile browser
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
let resized = false
window.addEventListener('resize', () => {
  if (!resized) {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    resized = true
  }
})
</script>

<template>
  <div class="main">
    <div class="bg-video scroll-3">
      <video
        class="video"
        src="../assets/video/bg-logo.mov"
        playsinline
        autoplay
        loop
        muted
      ></video>
      <video
        class="video-mobile"
        src="../assets/video/bg-logo-mobile.mp4"
        playsinline
        autoplay
        loop
        muted
      ></video>
    </div>
    <div class="title">
      <div class="welcome scroll-3">
        <div class="feixen">{{ $t('home.welcome') }}</div>
        <div class="webyon">{{ $t('home.webyon') }}!</div>
      </div>
      <div class="brico st scroll-3">
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
.video-mobile {
  display: none;
}

.title {
  width: 75%;
  color: #fffaf1;
  text-shadow: 1px 1px 2px black;

  position: fixed;
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
.feixen {
  font-variation-settings:
    'wght' 600,
    'wdth' 125;
}
.webyon {
  padding-left: 1.4vw;
  font-weight: 500;
  font-feature-settings: normal;
}

.st {
  font-size: 3vw;
  text-align: right;
  margin-left: 18%;
}

@media only screen and (max-width: 600px) {
  .main {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    overflow: hidden;
  }
  .bg-video {
    overflow: hidden;
    width: 100vw;
  }
  .video-mobile {
    display: block;
  }
  .video {
    display: none;
  }
  video {
    height: 100vh;
    filter: brightness(60%);
    transform: translateY(-10vh);
    max-width: 100vw;
  }

  .title {
    top: 60vh;
    width: 95vw;
    max-width: 100vw;
    transform: translateX(-50%);
    position: relative;
  }
  .welcome {
    font-size: 7vw;
  }
  .feixen {
    font-variation-settings:
      'wght' 700,
      'wdth' 125 !important;
    padding-bottom: 2vh;
  }
  .webyon {
    font-variation-settings: 'wght' 600 !important;
    width: 90vw;
  }
  .st {
    width: 95%;
    font-size: 5vw;
    margin-left: 0;
  }
}
</style>
