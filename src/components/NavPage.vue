<script setup lang="ts">
</script>

<template>
  <div class="navPage ">
    <div class="pageLink home">
      <RouterLink class="bandeins" to="/">
        {{$t('menu.home')}}
      </RouterLink>
    </div>
    <div class="pageLink about">
      <RouterLink class="bandeins" to="/about">
        {{$t('menu.about')}}
      </RouterLink>
    </div>
    <div class="pageLink legal">
      <RouterLink class="bandeins" to="/legal">
        {{$t('menu.legal')}}
      </RouterLink>
    </div>
    <div class="pageLink contact">
      <RouterLink class="bandeins" to="/contact">
        {{$t('menu.contact')}}
      </RouterLink>
    </div>


    <a href="/src/assets/pdf/VivianDELANNOY_CV.pdf" download="VivianDELANNOY_CV" class="cv">
      <img src="../assets/img/profile-pic.jpg" alt="">
      <div class="content">
        <div class="title">curriculum</div>
        <div class="name">Vivian DELANNOY</div>
        <div class="dev">Front-end web developer</div>
        <div class="dl-icon">
          <img src="../assets/icon/download.png" alt="">
        </div>
      </div>
    </a>


  </div>
</template>

<style scoped>
.navPage{
  width: 100vw;
  height: 100vh;
  background-color: #fffaf1;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pageLink{
  margin-left: 40vw;

  text-transform: uppercase;
  font-size: 4vw;
  cursor: pointer;
  font-weight: 400;

  width: fit-content;

  transition: ease-in-out all 500ms;

  font-family: "Bandeins";
}
a{
  transition: ease-in-out all 500ms;
  color:black;
  text-decoration: none;
}
.pageLink:hover a{
  font-variation-settings: "wdth" 100 !important;
  font-weight: 500;
}

.cv{
  cursor: pointer;
  border-radius: 18px;
  padding: 16px;
  right: 1.5vw;
  top: 1.5vw;
  position: absolute;
  background-color: #1a1a1a;
  width: 18vw;
  height: 7vw;
  box-shadow: 2px 11px 13px rgba(0, 0, 0, .5);

  display: flex;
  justify-content: space-between;
}

.cv img{
  height: 100%;
  border-radius: 10px;
}

.content{
  width: 100%;
  padding-left: .8vw;
  color: #fffaf1;
}
.title{
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 1vw;
}
.name{
  padding-bottom: .2vw;
}
.dev{
  padding-bottom: 1vw;
}
.dl-icon{
  display: flex;
  justify-content: center;
}

.dl-icon img{
  width: 1.5vw;
  transition: ease 500ms;
}

.cv:hover .dl-icon img{
  transform: translateY(.2vw);
}

</style>
