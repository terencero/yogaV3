<template>
  <div class="main">
    <nav-bar-component></nav-bar-component>
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
  grid-template-rows: 40px 500px 100px 600px 100px 800px 30px
  max-width: 800px
  margin: 0 auto
  justify-content: center
  // justify-content: center

  .hero
    background: url('./assets/eka.jpg')
    background-size: cover
    width: 800px
    justify-self: center
    text-align: center
    // background: #4f374b
    h1
      color: white

  .divider
    justify-self: center
    align-self: center

  // schedule
  //   justify-self: center
</style>



