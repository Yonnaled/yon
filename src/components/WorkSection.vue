<script setup lang="ts">
import {ref} from "vue";

let work = ref([
  {
    name: 'Aftermath',
    desc: "aftermath",
    stack:['Angular', 'GSAP', 'Lennis smooth scroll'],
    showImg: false,
    url:'https://aftermath.yonnaled.com',
    img:"/src/assets/img/aftermath-illu.png"
  },
  {
    name: 'Blur',
    desc: "blur",
    stack:['Angular'],
    showImg: false,
    url:'https://blur.yonnaled.com',
    img:"/src/assets/img/blur-illu.png"
  },
  {
    name: 'Weather',
    desc: "weather",
    stack:['React'],
    showImg: false,
    url:'https://weather.yonnaled.com',
    img:"/src/assets/img/weather-illu.png"
  },
  {
    name: 'Portfolio',
    desc: "portfolio",
    stack:['Vue.js', 'GSAP', 'Lennis smooth scroll'],
    showImg: false,
    url:'',
    img:"/src/assets/model/logo.gif"
  }
]);

let showImg = ref([
  work.value[0].showImg,
  work.value[1].showImg,
  work.value[2].showImg,
  work.value[3].showImg,
])

</script>

<template>
  <div class="work">
    <h1>{{ $t("work.featured-work")}}</h1>
    <div class="table">
      <a class="row" v-for="row in work" :key="row.name"
           @mouseenter="row.showImg=true" @mouseleave="row.showImg=false"
            :href="row.url" target="_blank">
        <div class="name">{{ row.name }}</div>
        <Transition>
          <img :src="row.img" :class="['img'+row.name]" alt="" v-show="row.showImg">
        </Transition>
        <div class="desc">{{ $t( "work."+row.desc ) }}</div>
        <div class="stack">
          <div class="stack-element" v-for="stack in row.stack" :key="stack">
            {{stack}}
          </div>
        </div>
      </a>
    </div>

    <div class="illustrations">
      <Transition>
        <img  src="../assets/img/aftermath-illu.png" alt="" v-show="work[0].showImg">
      </Transition>
      <Transition>
        <img  src="../assets/img/blur-illu.png" alt="" v-show="work[1].showImg">
      </Transition>
      <Transition>
        <img  src="../assets/img/weather-illu.png" alt="" v-show="work[2].showImg">
      </Transition>
      <Transition>
        <img src="../assets/model/logo.gif" alt="" v-show="work[3].showImg">
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.work{
  background-color: #fffaf1;
  width: 100vw;
  z-index: 1;
  position: relative;
  padding-top: 5vw;
}

h1{
  margin-left: 7vw;
  margin-bottom: 0.5vw;
  font-weight: 200;
  font-size: 1.2vw;
}

.table{
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row{
  color:black;
  text-decoration: none;
  width: 86vw;
  height: 8vw;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 400;
  font-size: 1.2vw;
  cursor: pointer;
}

.row:hover > .bandeins{
  font-variation-settings: "wdth" 100 !important;
}

.name{
  transition: ease-in-out all 500ms;
  font-size: 2.8vw;
  font-weight: 100;
  width: 40vw;
  font-family: Bandeins;
}
.desc{
  width: 10vw;
}

.stack{
  width: 25vw;
  display: flex;
  justify-content: flex-start;
}
.stack-element{
  padding-left: 1vw;
}

img{
  width: 24vw;
}

.imgAftermath{
  position: absolute;
  transform: translate(18vw,12vw);
}
.imgBlur{
  position: absolute;
  transform: translate(18vw,4vw);
}
.imgWeather{
  position: absolute;
  transform: translate(18vw,-4vw);
}
.imgPortfolio{
  position: absolute;
  transform: translate(18vw,-12vw);
}

.illustrations{
  display: none;
}

/*.illustrations img{
  position:absolute;
  width: 24vw;
  height: 30vw;
  z-index: 0;
  cursor: pointer;
}*/

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


@media (min-width: 1024px) {
}
</style>
