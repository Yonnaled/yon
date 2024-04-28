<script setup lang="ts"></script>

<template>
  <div class="creativity">
    <div class="scrolling-text">
      <div class="text">
        <span>Web design</span>
        <img class="yon-gif" src="../assets/model/logo.gif" alt="" />
        <span>Responsive & animated</span>
        <img class="earth-gif" src="../assets/model/earth.gif" alt="" />
        <span>Visual creativity</span>
        <img class="yon-gif" src="../assets/model/logo.gif" alt="" />
        <span>Smoothness & precision</span>
        <img class="earth-gif" src="../assets/model/earth.gif" alt="" />
      </div>
      <div class="text">
        <span>Web design</span>
        <img class="yon-gif" src="../assets/model/logo.gif" alt="" />
        <span>Responsive & animated</span>
        <img class="earth-gif" src="../assets/model/earth.gif" alt="" />
        <span>Visual creativity</span>
        <img class="yon-gif" src="../assets/model/logo.gif" alt="" />
        <span>Smoothness & precision</span>
        <img class="earth-gif" src="../assets/model/earth.gif" alt="" />
      </div>
    </div>

    <div class="content">
      <div class="title brico">{{ $t('creativity.title') }}</div>
      <div class="desc">{{ $t('creativity.desc') }}</div>
    </div>

    <div class="finally-wrapper">
      <div class="finally brico">
        {{ $t('creativity.finally') }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.creativity {
  padding-top: 10vw;
  background-color: #fffaf1;
  position: relative;
}

.scrolling-text {
  width: 100vw;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  transition: 500ms ease-out;
}

.text {
  font-size: 6vw;
  font-weight: 10;
  animation: animate_text 60s linear infinite;
}

.scrolling-text:hover {
  transform: translateX(-1vw);
}
.scrolling-text:hover > * {
  animation-play-state: paused;
}

.text span {
  font-family: Brico;
  font-weight: 300;
  margin: 0 2vw;
}

img {
  height: 5vw;
}
.yon-gif {
  transform: translateY(0.7vw);
}
.earth-gif {
  filter: grayscale(100%);
  height: 3vw;
  padding-bottom: 0.4vw;
}

@keyframes animate_text {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

.content {
  display: flex;
  width: 100vw;
  justify-content: space-around;
  margin-top: 12vw;
}
.title {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  font-size: 1.6vw;
  width: 30vw;
}
.desc {
  font-size: 1.4vw;
  width: 50vw;
}

.finally-wrapper {
  padding-top: 4vw;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.finally {
  padding: 2px;
  /*  color: #fffaf1;
    background-color: #a90909;*/
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4vw;

  text-align: center;
}

@media only screen and (max-width: 600px){
  .creativity{
    color:#fffaf1;
    background-color: #131313;
    padding: 20vw 0 30vw;
  }
  .text{
    font-size:12vw;
    animation: animate_text 30s linear infinite;
  }
  .text span {
   margin: 0 4vw;
 }
  .scrolling-text:hover > * {
    animation-play-state: unset;
  }
  img{
    height: 10vw;
  }
  .earth-gif{
    height: 6vw;
  }

  .content{
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
  .title{
    font-size: 8vw;
    width: 90vw;
    padding-bottom: 10vw;
  }
  .desc{
    width: 90vw;
    font-size: 5vw;
  }
  .finally{
    text-align: left;
    width: 90vw;
    font-size: 6vw;
  }
}
</style>
