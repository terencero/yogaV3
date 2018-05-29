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
  margin: 0 auto

h1
  color: red

.main
  max-width: 800px
  
.hero
  background: url('./assets/eka.jpg')
  background-size: cover
  width: 800px
  // background: #4f374b
</style>

<style lang="sass" scoped>
.main
  display: grid
  grid-template-rows: 600px 100px 600px 100px 800px 30px
  justify-content: center

  .divider
    justify-self: center
</style>



