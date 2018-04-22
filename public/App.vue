<template>
  <div>
    <nav-bar-component></nav-bar-component>
    <h1>Build up Vue app</h1>
    
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
  h1
    color: red
</style>


