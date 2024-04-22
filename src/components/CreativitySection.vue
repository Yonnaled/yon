<script setup lang="ts"></script>

<template>
  <div class="creativity">
    <div class="scrolling-text">
      <div class="text">
        <span>Web design</span>
        <img src="../assets/model/logo.gif" alt="">
        <span>Responsive & animated</span>
        <img src="../assets/model/logo.gif" alt="">
        <span>Visual creativity</span>
        <img src="../assets/model/logo.gif" alt="">
        <span>Smoothness & precision</span>
        <img src="../assets/model/logo.gif" alt="">
      </div>
      <div class="text">
        <span>Web design</span>
        <img src="../assets/model/logo.gif" alt="">
        <span>Responsive & animated</span>
        <img src="../assets/model/logo.gif" alt="">
        <span>Visual creativity</span>
        <img src="../assets/model/logo.gif" alt="">
        <span>Smoothness & precision</span>
        <img src="../assets/model/logo.gif" alt="">
      </div>
    </div>



    <div class="content">
      <div class="title bandeins">{{ $t("creativity.title") }}</div>
      <div class="desc"> {{ $t("creativity.desc") }} </div>
    </div>

    <div class="finally-wrapper">
      <div class="finally">
        {{$t("creativity.finally")}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.creativity{
  padding-top:7vw;
  background-color: #fffaf1;
  position:relative;
}

.scrolling-text {
  width: 100vw;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
}

.text {
  font-size: 6vw;
  font-weight: 10;
  animation: animate_text 60s linear infinite;
}

.text span {
  font-variation-settings: "wdth" 300;
  font-family: "Bandeins";
  margin: 0 1vw;
}

img{
  height: 4vw;
}

@keyframes animate_text {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}


.content{
  display: flex;
  width: 100vw;
  justify-content: space-around;
  margin-top: 7vw;
}
.title{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  font-size: 1.6vw;
  width: 30vw;
}
.desc{
  font-size: 1.4vw;
  width: 50vw;
}


.finally-wrapper{
  padding-top: 4vw;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.finally{
  padding:2px;
  /*  color: #fffaf1;
    background-color: #a90909;*/
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8vw;

  text-align: center;
}

</style>
