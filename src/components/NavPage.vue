<script setup lang="ts"></script>

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
</style>
