<template>
  <div class="schedule">
    <nav-bar-component 
      v-if="details" 
      class="nav-bar"
    ></nav-bar-component>
    <h1 class="header">Teaching Schedule</h1>
    <div class="class-schedule">
      <h2>Classes</h2>
      <div class="fitness-centers">
        <h3>LA Fitness</h3>
        <p>Vinyasa Yoga</p>
        <p>Thursdays at 7pm</p>
        <p>LA Fitness (add link to map or embed?)</p>
        <p>Description of class</p>
      </div>
      <div class="studios">
        <h3>Heaven Meets Earth</h3>
        <p>Vinyasa</p>
        <p>Tuesdays and Thursdays at 9:30 am</p>
        <p>Where?</p>
      </div>
    </div>

    <div class="workshops">
      <h2>Workshops</h2>
      <h3>Graceful Vinyasa Transitions</h3>
      <p>When: Date and time</p>
      <p>Where: Evanston NorthShore Yoga Studio</p>
      <router-link 
        v-show="!details" 
        to="/classes">Details</router-link>
      <div v-show="details">
        <p>Learn how to flow and float with stability and fluidity in Surya Namaskara and other Vinyasa transitions. This class will begin with Vinyasa sequences designed to warm up an open up the body while focusing on the core. You will learn how to:</p>
        <ul>
          <li>Utilize energy in the arms and legs, and align your body correctly to cultivate the graceful transitions.</li>
          <li>Use breath and bandha (internal lock/control of energy) to achieve stability and effortlessly move in and out of vinyasas.</li>
        </ul>
        <p>Some of the key transitions we will practice on are:</p>
        <ul>
          <li>Jumping back/press up to chaturanga</li>
          <li>Jumping/floating forward to uttanasana</li>
          <li>Bakasana: Jumping back to chaturanga and jumping in from downward dog</li>
          <li>Marichyasana: A pick up and jump back</li>
        </ul>
        <p>It will be a well-rounded practice with plenty of instructions, demonstrations and opportunity to work and focus on each flow. Designed for all, but some experience in Vinyasa yoga is required. There will be modifications and use of props to suit all levels.</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarComponent from './NavBarComponent.vue';
export default {
  name: 'Schedule',
  components: { NavBarComponent },
  props: {
    details: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang='sass'>
  .schedule
    display: grid
    grid-template-rows: 40px 100px 1fr
    grid-template-columns: 1fr 1fr
    grid-template-areas: "nav-bar nav-bar" "header header" "class-schedule workshops"
    justify-items: center
    max-width: 800px
    margin: 0 auto

    .nav-bar
      grid-area: nav-bar

    .header
      grid-area: header

    .class-schedule, .workshops
      h2:first-child
        text-align: center

    .class-schedule
      grid-area: class-schedule

    .workshops
      grid-area: workshops

    @media (max-width: 1008px)
      grid-template-columns: 1fr
</style>
