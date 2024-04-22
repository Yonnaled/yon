<script setup lang="ts">
import {ref} from "vue";

const work = ref([
  {
    name: 'Aftermath',
    personal: true,
    stack:['Angular', 'GSAP']
  },
  {
    name: 'Kiabi',
    personal: false,
    stack:['Angular', 'SpringBoot', 'PostgreSQL', 'GCP']
  },
  {
    name: 'ACDC',
    personal: false,
    stack:['AngularJS', 'Node.js', 'MongoDB', 'Express.js']
  }
])

</script>

<template>
  <div class="work">
    <h1>{{ $t("work.featured-work")}}</h1>
    <div class="table">
      <div class="row" v-for="row in work" :key="row.name">
        <div class="name bandeins">{{ row.name }}</div>
        <div class="isPersonal">{{ $t( row.personal ? "work.personal-work" : "work.pro-work" ) }}</div>
        <div class="stack">
          <div class="stack-element" v-for="stack in row.stack" :key="stack">
            {{stack}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.work{
  background-color: #fffaf1;
  width: 100vw;
  z-index: 1;
  position: relative;
  padding-top: 10vh;
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
  width: 86vw;
  height: 15vh;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 200;
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
}
.isPersonal{
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

@media (min-width: 1024px) {
}
</style>
