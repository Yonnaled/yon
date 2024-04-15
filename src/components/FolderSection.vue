<script setup lang="ts">
import {ref} from "vue";


const pages = ref([
  {
    id:0,
    name:'book-001',
    shown:false,
    content:'/src/assets/model/plant-01.gif'
  },
  {
    id:1,
    name:'book-002',
    shown:false,
    content:'/src/assets/model/plant-01.gif'
  },
  {
    id:2,
    name:'book-003',
    shown:false,
    content:'/src/assets/model/plant-01.gif'
  },
  {
    id:3,
    name:'art',
    shown:false,
    divider:true
  },
  {
    id:4,
    name:'human',
    shown:false,
    content:'/src/assets/model/plant-01.gif'
  },
  {
    id:5,
    name:'body',
    shown:false,
    divider:true
  },
  {
    id:6,
    name:'agfa',
    shown:false,
    content:'/src/assets/model/agfa.gif'
  },
  {
    id:7,
    name:'bandana',
    shown:false,
    content:'/src/assets/model/agfa.gif'
  },
  {
    id:8,
    name:'prince',
    shown:false,
    content:'/src/assets/model/agfa.gif'
  },
  {
    id:9,
    name:'objects',
    shown:false,
    divider:true
  },
  {
    id:10,
    name:'plant-001',
    shown:false,
    content:'/src/assets/model/plant-01.gif'
  },
  {
    id:11,
    name:'plant-002',
    shown:false,
    content:'/src/assets/model/plant-01.gif'
  },
  {
    id:12,
    name:'plant-003',
    shown:false,
    content:'/src/assets/model/plant-01.gif'
  },
  {
    id:13,
    name:'plants',
    shown:false,
    divider:true
  },
  {
    id:14,
    name:'amplifier',
    shown:false,
    content:'/src/assets/model/plant-01.gif'
  },
  {
    id:15,
    name:'harmonica',
    shown:false,
    content:'/src/assets/model/plant-01.gif'
  },
  {
    id:16,
    name:'strokes',
    shown:false,
    content:'/src/assets/model/plant-01.gif'
  },
  {
    id:17,
    name:'music',
    shown:false,
    divider:true
  },
]);




function handleShowPage(page){
  if(!page.divider){
    const e = document.getElementById('page'+page.id)
    e.style.transform= page.shown ? `translateY(${page.id*5}%) perspective(40px) translateZ(0)
  rotate3d(1,0,0,-0.1deg)` : 'translateY(-70%)';
    page.shown = !page.shown
  }
}


</script>

<template>
  <div class="folder">
    <div v-for="page in pages.reverse()" :id="'page'+page.id" :class="['page',page.divider?'page-divider':'']" :key="page.name">
      <button @click="handleShowPage(page)" :class="['btn'+page.name,'btnPage']">{{page.name}}</button>
      <img :src="page.content" alt="">
    </div>

  </div>
</template>



<style scoped>

.folder{
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fffaf1;
}

.page{
  height: 50vh;
  width: 50vw;
  background-color: #fffaf1;

  position: absolute;
  border: black 1px solid;
  border-radius: 15px;

  transition: .7s cubic-bezier(.3,1.31,.53,.95);

  transform: perspective(40px) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}

.page>button{
  margin-top: 5px;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  z-index:3;
  padding:7px 50px;
  position:absolute;
  cursor: pointer;
}
.page-divider{
   background-color: black;
 }
.page-divider>*{
  color: #fffaf1;
}
.page-divider>button{
  cursor: auto;
}

.shownPage{
  transform:  translateY(-40%);
}

/*décalage des pages*/
#page1{
  transform: perspective(40px) translateY(5%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page2{
  transform: perspective(40px) translateY(10%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page3{
  transform: perspective(40px) translateY(15%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page4{
  transform: perspective(40px) translateY(20%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page5{
  transform: perspective(40px) translateY(25%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page6{
  transform: perspective(40px) translateY(30%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page7{
  transform: perspective(40px) translateY(35%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page8{
  transform: perspective(40px) translateY(40%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page9{
  transform: perspective(40px) translateY(45%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page10{
  transform: perspective(40px) translateY(50%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page11{
  transform: perspective(40px) translateY(55%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page12{
  transform: perspective(40px) translateY(60%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page13{
  transform: perspective(40px) translateY(65%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page14{
  transform: perspective(40px) translateY(70%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page15{
  transform: perspective(40px) translateY(75%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page16{
  transform: perspective(40px) translateY(80%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
#page17{
  transform: perspective(40px) translateY(85%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}

/*emplacement before sur page*/
#page0::before, #page0::after {
  left:25vw;
}
#page1::before, #page1::after {
  left:35vw;
}
#page2::before, #page2::after {
  left:25vw;
}
#page3::before, #page3::after {
  left:15vw;
}
#page4::before, #page4::after {
  left:35vw;
}
#page5::before, #page5::after {
  left:25vw;
}
#page6::before, #page6::after {
  left: 35vw;
}
#page7::before, #page7::after {
  left: 25vw;
}
#page8::before, #page8::after {
  left: 15vw;
}
#page9::before, #page9::after {
  left: 5vw;
}
#page10::before, #page10::after {
  left: 25vw;
}
#page11::before, #page11::after {
  left: 35vw;
}
#page12::before, #page12::after {
  left: 25vw;
}
#page13::before, #page13::after {
  left: 15vw;
}
#page14::before, #page14::after {
  left: 25vw;
}
#page15::before, #page15::after {
  left: 35vw;
}
#page16::before, #page16::after {
  left: 15vw;
}
#page17::before, #page17::after {
  left: 5vw;
}

/*emplacement des boutons vers les befores*/
#page0>button{
  top:-33px;
  left:24vw;
}
#page1>button{
  top:-33px;
  left:34vw;
}
#page2>button{
  top:-33px;
  left:24vw;
}
#page3>button{
  top:-33px;
  left:14vw;
}
#page4>button{
  top:-33px;
  left:34vw;
}
#page5>button{
  top:-33px;
  left:24vw;
}
#page6>button{
  top:-33px;
  left:34vw;
}
#page7>button{
  top:-33px;
  left:24vw;
}
#page8>button{
  top:-33px;
  left:14vw;
}
#page9>button{
  top:-33px;
  left:4vw;
}
#page10>button{
  top:-33px;
  left:24vw;
}
#page11>button{
  top:-33px;
  left:34vw;
}
#page12>button{
  top:-33px;
  left:24vw;
}
#page13>button{
  top:-33px;
  left:14vw;
}
#page14>button{
  top:-33px;
  left:24vw;
}
#page15>button{
  top:-33px;
  left:34vw;
}
#page16>button{
  top:-33px;
  left:14vw;
}
#page17>button{
  top:-33px;
  left:4vw;
}


.page::before{
  content:  '';
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
.page-divider::before{
  background: black;
}
.page::after{
  content:  '';
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
.page-divider::after{
  background: #fffaf1;
}



/*video*/
.page img {
  width: 50vw;
}


@media (min-width: 1024px) {
}
</style>
