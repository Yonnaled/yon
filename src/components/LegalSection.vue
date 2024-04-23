<script setup lang="ts">
import {onMounted} from "vue";

let count = 0;
onMounted( () => {
  let cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function(e) {
    if (count==3){
      cursor.style.left = e.clientX + "px",
          cursor.style.top = e.clientY + "px";
      count=0;
    } else {
      count++
    }
  });
})

</script>

<template>
  <div class="legal">

    <div class="header-wrapper">
      <div class="header">
        {{$t("legal.header")}}
      </div>
    </div>

    <div class="divider bandeins">(1)</div>
    <div class="content">
      <div class="title bandeins">{{ $t("legal.links-label") }}*</div>
      <div class="desc"> {{ $t("legal.links") }} </div>
    </div>

    <div class="divider bandeins">(2)</div>
    <div class="content">
      <div class="title bandeins">{{ $t("legal.host-label") }}*</div>
      <div class="desc">{{ $t("legal.host") }}</div>
    </div>

    <div class="divider bandeins">(3)</div>
    <div class="content">
      <div class="title bandeins">{{ $t("legal.cookies-label") }}*</div>
      <div class="desc">{{ $t("legal.cookies") }}</div>
    </div>
  </div>
  <div class='cursor' id="cursor"></div>
</template>

<style scoped>

.legal{
  height: 100vh;
  width: 100vw;
  background-color: #fffaf1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;
}

.header-wrapper{
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header{
  padding:2px;
  /*  color: #fffaf1;
    background-color: #a90909;*/
  width: 70vw;
  display: flex;
  justify-content: center;
  font-size: 1.8vw;

  text-align: left;
}

.divider{
  margin: 3vw 0 2vw;
  font-size: 1vw;
  font-weight: 500;
}

.content{
  display: flex;
  width: 70vw;
  justify-content: space-between;
}
.title{
  display: flex;
  align-items: flex-start;
  height: 100%;
  font-size: 1.4vw;
  width: 30vw;
}
.desc{
  font-size: 1.2vw;
  width: 50vw;
}

.cursor {
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: 50vw;
  top: 50vh;
  mix-blend-mode: difference;
  background-color: #fffaf1;
  z-index: 10000;
  border: 2px solid white;
  height: 40px;
  width: 40px;
  transition: all 300ms ease-out;
}

</style>
