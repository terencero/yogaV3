<template>
  <div class="schedule">
    <div class="class-schedule">
      <h1>Classes</h1>
      <div class="fitness-centers">
        <h2>LA Fitness</h2>
        <p>Vinyasa Yoga</p>
        <p>Thursdays at 7pm</p>
        <p>LA Fitness (add link to map or embed?)</p>
        <p>Description of class</p>
      </div>
      <div class="studios">
        <h2>Heaven Meets Earth</h2>
        <p>Vinyasa</p>
        <p>Tuesdays and Thursdays at 9:30 am</p>
        <p>Where?</p>
      </div>
      <div class="northshore">
        <h2>Northshore Yoga</h2>
        <p></p>
        <p>Mondays at 7pm</p>
        <p>Evanston NorthShore Yoga Studio</p>
      </div>
    </div>

    <div class="workshops">
      <h1>Workshops</h1>
      <br />
      <h3>Graceful Vinyasa Transitions</h3>
      <br />
      <p>When: Date and time</p>
      <p>Where: Evanston NorthShore Yoga Studio</p>
      <br />
      <router-link 
        v-show="!details" 
        to="/classes">Details</router-link>
      <div v-show="details">
        <p>Learn how to flow and float with stability and fluidity in Surya Namaskara and other Vinyasa transitions. This class will begin with Vinyasa sequences designed to warm up an open up the body while focusing on the core. You will learn how to:</p>
        <br />
        <ul>
          <li>Utilize energy in the arms and legs, and align your body correctly to cultivate the graceful transitions.</li>
          <li>Use breath and bandha (internal lock/control of energy) to achieve stability and effortlessly move in and out of vinyasas.</li>
        </ul>
        <br />
        <p>Some of the key transitions we will practice on are:</p>
        <br />
        <ul>
          <li>Jumping back/press up to chaturanga</li>
          <li>Jumping/floating forward to uttanasana</li>
          <li>Bakasana: Jumping back to chaturanga and jumping in from downward dog</li>
          <li>Marichyasana: A pick up and jump back</li>
        </ul>
        <br />
        <p>It will be a well-rounded practice with plenty of instructions, demonstrations and opportunity to work and focus on each flow. Designed for all, but some experience in Vinyasa yoga is required. There will be modifications and use of props to suit all levels.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
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
    grid-template-columns: 1fr 1fr
    width: 800px
    justify-self: center
</style>
