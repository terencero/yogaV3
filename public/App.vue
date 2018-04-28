<template>
  <div class="main">
    <nav-bar-component></nav-bar-component>
    <div>
    <h1>Yoga with Jiwoo</h1>
      hero placeholder
    </div>
    <!-- <router-view></router-view> -->
    <div>
      classes placeholder
    </div>
    <div>
      social images placeholder
    </div>
  </div>
</template>

<script>
import About from '../src/components/About.vue';
import NavBarComponent  from '../src/components/NavBarComponent.vue';
export default {
  name: 'app',
  data() {
    return {};
  },
  components: { NavBarComponent },
}
</script>

<style lang="sass">
html
  box-sizing: border-box

*, *:before, *:after
  box-sizing: inherit;

h1
  color: red
</style>

<style lang="sass" scoped>
  .main
    display: grid
    grid-template-rows: 40px 500px 500px 500px 30px
</style>



