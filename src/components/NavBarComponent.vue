<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/classes">Teaching Schedule</router-link>
    <router-link to="/social">Social</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang='sass'>
  nav
    display: grid
    grid-template-rows: 1fr
    grid-template-columns: repeat(4, 1fr)
    justify-items: center

    a
      text-decoration: none
    &:hover
      color: blue
</style>
