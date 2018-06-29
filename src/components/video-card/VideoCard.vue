<template>
  <div class="video-card">
    <div class="title">Eka Padasana</div>
    <div class="video-container">
      <div 
        class="youtube-post"
      >
        <iframe 
          :src="source" 
          frameborder="0"
          height="360"
          width="480"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoCard',
  components: {},
  props: {
    id: {
      type: String,
      default: null,
    },
    source: {
      type: String,
      default: null,
    },
  },
  data() {
    return{

    };
  }
};
</script>

<style lang='sass' scoped>
.video-card
  border: 2px solid grey
  width: 500px
  
  .video-container
    display: grid
    justify-content: center
</style>
