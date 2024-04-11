<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="bg-video">
      <video src="../assets/video/bg-logo.mov" autoplay loop muted></video>
    </div>
    <div class="title">
        <div class="welcome">
          {{ $t( "home.welcome") }}
        </div>
        <div class="st">
          {{ $t("home.introduction")}}
        </div>
    </div>
  </div>
</template>

<style scoped>
  .main{
    height: 100vh;
    width: 100vw;
    background-color: black;
  }
  .bg-video{
    display: flex;
    justify-content: center;
  }
  video{
    height: 100vh;
  }


  .title{
    width: 75%;
    color: white;
    text-shadow: 1px 1px 2px black ;

    position: absolute;
    top: 35%;
    left: 50%;

    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .welcome{
    font-size: 6vw;
    text-align: left;
    font-weight: bold;}

  .st{
    font-size: 3vw;
    text-align: right;
    margin-left: 18%;
  }



  @media (min-width: 1024px) {
  }
</style>
