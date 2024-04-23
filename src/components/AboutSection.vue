<script setup lang="ts"></script>

<template>
  <div class="about">

    <div class="header-wrapper">
      <div class="header">
        {{$t("about.header")}}
      </div>
    </div>
    <div class="content">
      <div class="title bandeins">{{ $t("menu.about") }}</div>
      <div class="desc"> {{ $t("about.about1") }} </div>
    </div>
    <div class="content">
      <div class="title bandeins">{{ $t("about.formations") }}</div>
      <div class="desc">
        <div class="master">{{ $t("about.master") }}</div>
        <div class="licence">{{ $t("about.licence") }}</div>
        <div class="bac">{{ $t("about.bac") }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.about{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header-wrapper{
  padding-top: 8vw;
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

.content{
  display: flex;
  width: 70vw;
  justify-content: space-between;
  margin-top: 6vw;
}
.title{
  display: flex;
  align-items: flex-start;
  height: 100%;
  font-size: 1.6vw;
  width: 30vw;
}
.desc{
  font-size: 1.4vw;
  width: 50vw;
}

</style>
