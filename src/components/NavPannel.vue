<script setup lang="ts"></script>

<template>
  <div class="navPannel">
      <div class="nav-wrapper">
        <div class="logo link" routerLink="/">
          <img src="../assets/img/logo.png">
        </div>

        <div class="nav">
          <RouterLink to="/menu">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <svg class="secondMenu" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#fffaf1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </RouterLink>
        </div>

        <div class="icons">
          <div class="lang-en icon">
            <img class="icon-img" src="../assets/img/english.png" alt="english" @click="$i18n.locale='EN'">
          </div>
          <div class="lang-fr icon">
            <img class="icon-img" src="../assets/img/french.png" alt="french" @click="$i18n.locale='FR'">
          </div>
          <div class="linkedin icon">
            <a href="https://www.linkedin.com/in/vivian-delannoy/" target="_blank">
              <img class="icon-img" src="../assets/img/linkedin.png" alt="linkedin">
            </a>
          </div>
        </div>
      </div>

    </div>

</template>

<style scoped>
.navPannel{
  height: 100vh;
  border-right: 1px solid hsla(240,3%,58%,.15);
  background: transparent;
  width: 80px;

  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}


.nav-wrapper{
  background: transparent;
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.icons{
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 3vh;
}

.logo{

  padding-top: 3vh;
}
.logo>img{
  height: 30px;
  width: 32px;
  border-radius: 2px;
  cursor: pointer;
}

.icon-img{
  height: 1.4vw;
  width: 1.5vw;
  cursor: pointer;
}
.nav{
  width:1.5vw;
}
.nav a {
  text-decoration: none;
}
.secondMenu{
  transform: translateY(-98%);
}
</style>
