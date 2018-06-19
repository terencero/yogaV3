<template>
  <div class="main">
    <div class="logo">
      <img src="./assets/lotus-logo.png" height="80px" alt="logo">
    </div>
    <div class="nav-bar">
      <nav-bar-component></nav-bar-component>
    </div>
    <div class="hero">
    </div>
    <div class="divider">
      <img 
        src="./assets/lotus-640.png" 
        width="100px" 
        alt="">
    </div>
    <schedule :details="details"></schedule>
    <div class="divider">
      <img 
        src="./assets/lotus-640.png" 
        width="100px" 
        alt="">
    </div>
    <div>
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
    return {
      details: false,
    };
  },
};
</script>

<style lang="sass">
html
  box-sizing: border-box

*, *:before, *:after
  box-sizing: inherit;
</style>

<style lang="sass" scoped>
.main
  display: grid
  grid-template-rows: 80px 40px 500px 100px 600px 100px 800px 30px
  // max-width: 800px
  margin: 0 auto
  justify-content: center

  .nav-bar
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-areas: "nav-bar nav-bar"
    border: grey solid 2px
    border-right-width: 0
    border-left-width: 0
    > nav
      grid-area: nav-bar
      justify-self: center

  .logo
    justify-self: center

  .hero
    background: url('./assets/eka.jpg')
    background-size: cover
    width: 800px
    justify-self: center
    text-align: center
    h1
      color: white

  .divider
    justify-self: center
    align-self: center
</style>



