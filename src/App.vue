<template>
  <div class="main">
    <nav-bar-component></nav-bar-component>
    <div class="hero">
      <h1>Yoga with Jiwoo</h1>
      hero placeholder wha?
    </div>
    <div class="divider">
      <img 
        src="./assets/lotus-640.png" 
        width="150px" 
        alt=""></div>
    <!-- <router-view></router-view> -->
    <div>
      classes placeholder
      <schedule></schedule>
    </div>
    <div class="divider">
      <img 
        src="./assets/lotus-640.png" 
        width="150px" 
        alt="">
    </div>
    <div>
      social images placeholder
      <social></social>
    </div>
  </div>
</template>

<script>
import About from './components/About.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import Social from './components/Social.vue';
import Schedule from './components/Schedule.vue';
export default {
  name: 'App',
  components: { NavBarComponent, Social, About, Schedule },
  data() {
    return {};
  },
};
</script>

<style lang="sass">
html
  box-sizing: border-box

*, *:before, *:after
  box-sizing: inherit;
  margin: 0

h1
  color: red
  
.hero
  background: url('./assets/eka.jpg')
  background-size: cover
  // background: #4f374b
</style>

<style lang="sass" scoped>
.main
  display: grid
  grid-template-rows: 40px 800px 150px 800px 150px 800px 30px

  .divider
    justify-self: center
</style>



