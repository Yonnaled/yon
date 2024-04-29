<script setup lang="ts">
import { ref } from 'vue'

const pages = ref([
  {
    id: 0,
    name: 'book-001',
    shown: false,
    content: 'model/klimt.gif'
  },
  {
    id: 1,
    name: 'book-002',
    shown: false,
    content: 'model/monet.gif'
  },
  {
    id: 2,
    name: 'book-003',
    shown: false,
    content: 'model/rochat.gif'
  },
  {
    id: 3,
    name: 'art',
    shown: false,
    divider: true
  },
  {
    id: 4,
    name: 'human',
    shown: false,
    content: 'model/plant-01.gif'
  },
  {
    id: 5,
    name: 'body',
    shown: false,
    divider: true
  },
  {
    id: 6,
    name: 'agfa',
    shown: false,
    content: 'model/agfa.gif'
  },
  {
    id: 7,
    name: 'bandana',
    shown: false,
    content: 'model/bandana.gif'
  },
  {
    id: 8,
    name: 'motherboard',
    shown: false,
    content: 'model/motherboard.gif'
  },
  {
    id: 9,
    name: 'objects',
    shown: false,
    divider: true
  },
  {
    id: 10,
    name: 'plant-001',
    shown: false,
    content: 'model/plant-01.gif'
  },
  {
    id: 11,
    name: 'plant-002',
    shown: false,
    content: 'model/plant-02.gif'
  },
  {
    id: 12,
    name: 'plant-003',
    shown: false,
    content: 'model/plant-03.gif'
  },
  {
    id: 13,
    name: 'plants',
    shown: false,
    divider: true
  },
  {
    id: 14,
    name: 'amplifier',
    shown: false,
    content: 'model/plant-01.gif'
  },
  {
    id: 15,
    name: 'harmonica',
    shown: false,
    content: 'model/harmonica.gif'
  },
  {
    id: 16,
    name: 'strokes',
    shown: false,
    content: 'model/plant-01.gif'
  },
  {
    id: 17,
    name: 'music',
    shown: false,
    divider: true
  }
])

function handleShowPage(page) {
  if (!page.divider) {
    const all = document.querySelectorAll<HTMLElement>('.page')
    all.forEach((e) => {
      let eIdNumber = e.id.split('page')[1]
      let ePage = pages.value[+eIdNumber]

      if (page.id === +ePage.id) {
        e.style.transform = !page.shown
          ? `translateY(${eIdNumber * 5 - 70}%)`
          : `translateY(${eIdNumber * 5}%) perspective(40px) translateZ(0) rotate3d(1,0,0,-0.1deg)`
        page.shown = !page.shown
      } else {
        e.style.transform = `translateY(${eIdNumber * 5}%) perspective(40px) translateZ(0) rotate3d(1,0,0,-0.1deg)`
        ePage.shown = false
      }
    })
  }
}

const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<template>
  <div class="title only-mobile">{{ $t('folder.title') }}</div>
  <div class="folder">
    <div
      v-for="page in pages"
      :id="'page' + page.id"
      :class="['page', page.divider ? 'page-divider' : '']"
      :key="page.name"
    >
      <button
        @click="handleShowPage(page)"
        :class="['btn' + page.name, 'btnPage', page.divider ? 'feixen-short' : 'brico']"
      >
        {{ $t('folder.' + page.name + '.title') }}
      </button>
      <div class="subtitle">{{ $t('folder.' + page.name + '.subtitle') }}</div>
      <div class="details">{{ $t('folder.' + page.name + '.details') }}</div>
      <div class="img-container">
        <img :src="getImageUrl(page.content)" alt="" />
      </div>
    </div>
    <div class="drawer-wall"></div>
    <div class="drawer">
      <div class="secret-files">
        {{ $t('folder.secret-files') }}
      </div>
    </div>
    <div class="cover-drawer-invisible"></div>
  </div>
</template>

<style scoped>
.only-mobile{
  display:none;
}
.folder {
  position: relative;
  z-index: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40vh;

  background-color: #fffaf1;
}

.page {
  height: 50vh;
  width: 50vw;
  background-color: #fffaf1;

  position: absolute;
  border: black 1px solid;
  border-radius: 15px;
  z-index: 2;

  transition: 0.7s cubic-bezier(0.3, 1.31, 0.53, 0.95);

  transform: perspective(40px) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}

.page > button {
  margin-top: 5px;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  z-index: 3;
  padding: 7px 50px;
  position: absolute;
  cursor: pointer;

  font-size: 0.8vw;
  font-weight: 450;
}
.page-divider {
  background-color: black;
}
.page-divider > * {
  color: #fffaf1;
  text-transform: uppercase;
}
.page-divider > button {
  cursor: auto;
}

.subtitle {
  font-weight: 500;
  margin: 1.5vw 2vw 0;
}
.details {
  font-weight: 450;
  margin-left: 2vw;
  color: #c5c5c5;
}

.shownPage {
  transform: translateY(-40%);
}

/*décalage des pages*/
#page1 {
  transform: perspective(40px) translateY(5%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page2 {
  transform: perspective(40px) translateY(10%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page3 {
  transform: perspective(40px) translateY(15%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page4 {
  transform: perspective(40px) translateY(20%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page5 {
  transform: perspective(40px) translateY(25%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page6 {
  transform: perspective(40px) translateY(30%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page7 {
  transform: perspective(40px) translateY(35%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page8 {
  transform: perspective(40px) translateY(40%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page9 {
  transform: perspective(40px) translateY(45%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page10 {
  transform: perspective(40px) translateY(50%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page11 {
  transform: perspective(40px) translateY(55%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page12 {
  transform: perspective(40px) translateY(60%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page13 {
  transform: perspective(40px) translateY(65%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page14 {
  transform: perspective(40px) translateY(70%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page15 {
  transform: perspective(40px) translateY(75%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page16 {
  transform: perspective(40px) translateY(80%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}
#page17 {
  transform: perspective(40px) translateY(85%) translateZ(0) rotate3d(1, 0, 0, -0.1deg);
}

/*emplacement before sur page*/
#page0::before,
#page0::after {
  left: 25vw;
}
#page1::before,
#page1::after {
  left: 35vw;
}
#page2::before,
#page2::after {
  left: 25vw;
}
#page3::before,
#page3::after {
  left: 15vw;
}
#page4::before,
#page4::after {
  left: 35vw;
}
#page5::before,
#page5::after {
  left: 25vw;
}
#page6::before,
#page6::after {
  left: 35vw;
}
#page7::before,
#page7::after {
  left: 25vw;
}
#page8::before,
#page8::after {
  left: 15vw;
}
#page9::before,
#page9::after {
  left: 5vw;
}
#page10::before,
#page10::after {
  left: 25vw;
}
#page11::before,
#page11::after {
  left: 35vw;
}
#page12::before,
#page12::after {
  left: 25vw;
}
#page13::before,
#page13::after {
  left: 15vw;
}
#page14::before,
#page14::after {
  left: 25vw;
}
#page15::before,
#page15::after {
  left: 35vw;
}
#page16::before,
#page16::after {
  left: 15vw;
}
#page17::before,
#page17::after {
  left: 5vw;
}

/*emplacement des boutons vers les befores*/
#page0 > button {
  top: -33px;
  left: 25vw;
}
#page1 > button {
  top: -33px;
  left: 34.9vw;
}
#page2 > button {
  top: -33px;
  left: 24.9vw;
}
#page3 > button {
  top: -33px;
  left: 13vw;
}
#page4 > button {
  top: -33px;
  left: 36.1vw;
}
#page5 > button {
  top: -33px;
  left: 23vw;
}
#page6 > button {
  top: -33px;
  left: 36.9vw;
}
#page7 > button {
  top: -33px;
  left: 25.2vw;
}
#page8 > button {
  top: -33px;
  left: 13.6vw;
}
#page9 > button {
  top: -33px;
  left: 3vw;
}
#page10 > button {
  top: -33px;
  left: 24.8vw;
}
#page11 > button {
  top: -33px;
  left: 34.7vw;
}
#page12 > button {
  top: -33px;
  left: 24.7vw;
}
#page13 > button {
  top: -33px;
  left: 13vw;
}
#page14 > button {
  top: -33px;
  left: 25.2vw;
}
#page15 > button {
  top: -33px;
  left: 34.5vw;
}
#page16 > button {
  top: -33px;
  left: 15.6vw;
}
#page17 > button {
  top: -33px;
  left: 3vw;
}

.page::before {
  content: '';
  position: absolute;
  /*border:1px solid black;*/
  top: -27px;

  width: 200px;
  height: 100px;
  background: #fffaf1;
  /*clip-path: path('M 0 25 C 8 25 11 0 17 0 T 130 0 C 138 0 139 25 147 25 L 0 25 Z');*/
  /*clip-path: path('M 0 25 C 10 25 7 0 17 0 T 130 0 C 140 0 137 25 147 25 L 0 25 Z');*/
  clip-path: path('M 0 28 C 11 28 7 0 17 0 T 130 0 C 139 0 137 28 147 28 L 0 30 Z');

  z-index: 2;
}
.page-divider::before {
  background: black;
}
.page::after {
  content: '';
  position: absolute;
  /*border:1px solid black;*/
  top: -28px;

  width: 200px;
  height: 100px;
  background: black;
  /*clip-path: path('M 0 25 C 8 25 11 0 17 0 T 130 0 C 138 0 139 25 147 25 L 0 25 Z');*/
  /*clip-path: path('M 0 25 C 10 25 7 0 17 0 T 130 0 C 140 0 137 25 147 25 L 0 25 Z');*/
  clip-path: path('M 0 28 C 10 28 7 0 17 0 T 130 0 C 140 0 137 28 147 28 L 0 28 Z');
}
.page-divider::after {
  background: #fffaf1;
}

/*3d models*/
.img-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.page > .img-container > img {
  margin: auto;
  max-height: 30vh;
  object-fit: cover;
}

.drawer-wall {
  width: 51vw;
  height: 50vh;
  z-index: 1;
  border: 1px solid black;

  transform: perspective(40px) translateZ(0) translateY(2%) rotate3d(1, 0, 0, 0.05deg);
}

.drawer {
  width: 55vw;
  height: 15vh;
  z-index: 9;
  background-color: #fffaf1;
  border: 1px solid black;

  transform: perspective(40px) translateZ(0) translateY(-20%) rotate3d(1, 0, 0, -0.4deg);

  display: flex;
  align-items: center;
  justify-content: center;
}
/*
.drawer::after{
  content:  '';
  position: absolute;
  !*border:1px solid black;*!
  top: -16px;
  background-color: #fffaf1;

  width: 55vw;
  height: 100px;
  clip-path: path('M 6 2 L 1049 2 L 1053 15 L 2 15 Z');
}
.drawer::before{
  content:  '';
  position: absolute;
  !*border:1px solid black;*!
  top: -15px;
  background-color: black;

  width: 55vw;
  height: 100px;
  clip-path: path('M 5 0 L 1050 0 L 1055 15 L 0 15 Z');
}
*/

.secret-files {
  padding: 15px;
  border: 1px solid black;
  transform: perspective(40px) translateZ(0) rotate3d(1, 0, 0, -0.8deg);
}
.cover-drawer-invisible {
  width: 60vw;
  height: 40vh;
  z-index: 9;
  background-color: #fffaf1;
  transform: translateY(-10%);
}

@media only screen and (max-width: 600px) {
  .title{
    position: relative;
    background-color: #fffaf1;
    display:block;
    padding: 10vh 5vw 0;
    font-size: 7vw;
  }
  .folder{
    height: auto;
    width: 100vw;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap:wrap;

    padding-top: 0;
    padding-bottom: 10vh;
  }
  .secret-files, .drawer, .drawer-wall, .cover-drawer-invisible, .page::before, .page::after,
  .page-divider{
    display:none;
  }
  button{
    color: black !important;
    margin: 0 !important;
    padding:0 !important;
    position: relative !important;
    top: auto !important;
    left: auto !important;
    transform: none !important;
    font-size: 5vw !important;
  }
  .subtitle{
    margin: 0  !important;
  }
  .details{
    margin: 0  !important;
  }
  .page{
    height: 45vw;
    width: 42vw;
    position:relative;
    transform: none !important;
    padding: 2vh 0 10vh;
    border: none;
  }
  .img-container{
    height: 80%;
  }
  img{
    max-height: 45vw;
    max-width: 45vw;
  }
}
</style>
