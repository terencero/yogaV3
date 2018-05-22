<template>
  <div class="main">
    <nav-bar-component></nav-bar-component>
    <div class="hero">
    <h1>Yoga with Jiwoo</h1>
      hero placeholder wha?
    </div>
    <!-- <router-view></router-view> -->
    <div>
      classes placeholder
    </div>
    <div>
      social images placeholder
      <social></social>
    </div>
  </div>
</template>

<script>
import About from './components/About.vue';
import NavBarComponent  from './components/NavBarComponent.vue';
import Social from './components/Social.vue';
export default {
  name: 'app',
  data() {
    return {};
  },
  components: { NavBarComponent, Social },
}
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
  background: url('./assets/mat.jpg')
  // background: #4f374b
</style>

<style lang="sass" scoped>
.main
  display: grid
  grid-template-rows: 40px 500px 500px 500px 30px
</style>



