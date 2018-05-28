<template>
  <div class="main">
    <div class="hero">
      <h1>Yoga with Jiwoo</h1>
    </div>
    <div class="divider">
      <img 
        src="./assets/lotus-640.png" 
        width="100px" 
        alt="">
    </div>
    <div>
      <schedule :details="details"></schedule>
    </div>
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
  grid-template-rows: 600px 100px 600px 100px 800px 30px

  .divider
    justify-self: center
</style>



