<script setup lang="ts">
import {ref} from "vue";

const pages = ref([
  {
    id:0,
    name:'plant-003',
    shown:false
  },
  {
    id:1,
    name:'oil-lamp',
    shown:false
  },
  {
    id:2,
    name:'lava-lamp',
    shown:false
  },
]);

function handleShowPage(page){
  const e = document.getElementById('page'+page.name)
  e.style.transform= page.shown ? `translateY(${page.id*5}%) perspective(40px) translateZ(0)
  rotate3d(1,0,0,-0.1deg)` : 'translateY(-90%) perspective(40px) translateZ(0)' +
      '  rotate3d(1,0,0,-0.1deg)';
  page.shown = !page.shown
}


</script>

<template>
  <div class="folder">
    <div v-for="page in pages" :id="'page'+page.name" :class="['page'+page.name,'page']" :key="page.name">
      <button @click="handleShowPage(page)" :class="['btn'+page.name,'btnPage']">{{page.name}}</button>
    </div>

  </div>
</template>



<style scoped>
.folder{
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  background-color: #fffaf1;
}

.page{
  margin-bottom: 10vh;
  height: 50vh;
  width: 50vw;
  background-color: #fffaf1;

  position: absolute;
  border: black 1px solid;
  border-radius: 15px;

  transition: .5s ease-in-out;

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

.shownPage{
  transform:  translateY(-40%);
}

/*décalage des pages*/
.pageplant-003{
}
.pageoil-lamp{
  transform: perspective(40px) translateY(5%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}
.pagelava-lamp{
  transform: perspective(40px) translateY(10%) translateZ(0)
  rotate3d(1,0,0,-0.1deg);
}

/*emplacement before sur page*/
.pageplant-003::before, .pageplant-003::after {
  left:5vw;
}
.pageoil-lamp::before, .pageoil-lamp::after {
  left:15vw;
}
.pagelava-lamp::before, .pagelava-lamp::after {
  left:25vw;
}





.pageplant-003>button{
  top:-33px;
  left:4vw;
}
.pageoil-lamp>button{
  top:-33px;
  left:14.8vw;
}
.pagelava-lamp>button{
  top:-33px;
  left:24.8vw;
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
  clip-path: path('M 0 28 C 11 28 7 0 17 0 T 130 0 C 139 0 137 28 147 28 L 0 28 Z');

  z-index: 2;
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




@media (min-width: 1024px) {
}
</style>
