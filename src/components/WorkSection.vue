<script setup lang="ts">
import { ref } from 'vue'

function isMobile() {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth < 600
  )
}

let work = ref([
  {
    name: 'Aftermath',
    desc: 'aftermath',
    stack: ['Angular', 'GSAP', 'Lennis smooth scroll'],
    showImg: false,
    url: 'https://aftermath.yonnaled.com',
    img: 'img/aftermath-illu.png'
  },
  {
    name: 'Attempt',
    desc: 'attempt',
    stack: ['Angular','SpringBoot','PostgreSQL'],
    showImg: false,
    url: 'https://attempt.yonnaled.com',
    img: 'img/attempt-illu.png'
  },
  {
    name: 'Weather',
    desc: 'weather',
    stack: ['React'],
    showImg: false,
    url: 'https://weather.yonnaled.com',
    img: 'img/weather.png'
  },
  {
    name: 'Coriandoli',
    desc: 'coriandoli',
    stack: ['Vue.js'],
    showImg: false,
    url: 'https://coriando.li/',
    img: 'img/coriandoli-mappa.jpg'
  },
  {
    name: 'Portfolio',
    desc: 'portfolio',
    stack: ['Vue.js', 'GSAP', 'Lennis smooth scroll'],
    showImg: false,
    url: '',
    img: 'model/logo.gif'
  }
])

let showImg = ref([
  work.value[0].showImg,
  work.value[1].showImg,
  work.value[2].showImg,
  work.value[3].showImg,
  work.value[4].showImg
])

const getImageUrl = (name:string) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<template>
  <div class="work">
    <h1>{{ $t('work.featured-work') }}</h1>
    <div class="table">
      <a
        class="row"
        v-for="row in work"
        :key="row.name"
        @mouseenter="row.showImg = true"
        @mouseleave="row.showImg = false"
        :href="row.url"
        target="_blank"
      >
        <div class="name">{{ row.name }}</div>
        <Transition>
          <img
            :src="getImageUrl(row.img)"
            :class="['img' + row.name]"
            alt=""
            v-show="row.showImg || isMobile()"
          />
        </Transition>
        <div class="desc">{{ $t('work.' + row.desc) }}</div>
        <div class="stack">
          <div class="stack-element" v-for="stack in row.stack" :key="stack">
            {{ stack }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.work {
  background-color: #fffaf1;
  width: 100vw;
  z-index: 1;
  position: relative;
  padding-top: 10vw;
}

h1 {
  margin-left: 7vw;
  margin-bottom: 0.5vw;
  font-weight: 200;
  font-size: 1.2vw;
}

.table {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  color: black;
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

.row:hover > .brico {
  font-variation-settings: 'wdth' 100 !important;
}

.name {
  transition: ease-in-out all 500ms;
  font-size: 2.8vw;
  font-weight: 300;
  width: 40vw;
  font-family: Brico;
}
.desc {
  width: 10vw;
}

.stack {
  width: 25vw;
  display: flex;
  justify-content: flex-start;
}
.stack-element {
  padding-left: 1vw;
}

img {
  width: 24vw;
}

.imgAftermath {
  position: absolute;
  transform: translate(18vw, 16vw);
}
.imgAttempt {
  position: absolute;
  transform: translate(18vw, 8vw);
}
.imgWeather {
  position: absolute;
  transform: translate(18vw, 0vw);
}
.imgCoriandoli {
  position: absolute;
  transform: translate(18vw, -8vw);
}
.imgPortfolio {
  position: absolute;
  transform: translate(18vw, -16vw);
}

.illustrations {
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

@media only screen and (max-width: 600px) {
  .table {
    padding-bottom: 20vw;
  }
  h1 {
    /*font-size: 5vw;
    text-decoration: underline;
    text-underline-offset: 1.2vw;
    text-decoration-thickness: 1px;*/
    display: none;
  }
  .row {
    border-top: none;
    border-bottom: 1px solid black;
    display: block;
    height: auto;
  }
  .table > .row:nth-last-child(1) {
    border-bottom: 0px;
  }
  .name {
    font-size: 12vw;
    padding-top: 4vw;
  }
  .desc {
    font-size: 4vw;
    width: auto;
    padding-top: 2vw;
  }
  .stack {
    font-size: 4vw;
    width: auto;
    padding-bottom: 2vw;
  }
  .stack-element {
    padding: 0 2vw 0 0;
  }
  img {
    position: relative !important;
    transform: none !important;
    width: 100%;
    padding-top: 1vw;
  }
}
</style>
