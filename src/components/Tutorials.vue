<template>
  <div class="tutorials-container">
    <nav-bar-component class="nav-bar"></nav-bar-component>
    <h1 class="header">Tutorials</h1>
    <div class="media-columns">
      <div class="media-column">
        <video-card
          :source="youTubePosts.videoUrl"
        >{{ youTubePosts}}</video-card>
      </div>
      <div class="media-colums">empty</div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';

import NavBarComponent from './NavBarComponent.vue';
import VideoCard from './video-card/VideoCard.vue';

export default {
  name: 'Tutorials',
  components: { NavBarComponent, VideoCard },
  data() {
    return {
      instaPosts: [],
      youTubePosts: {},
    };
  },
  beforeMount() {
    this.getYouTubePosts();
  },
  methods: {
    getYouTubePosts,
    assignMedia
  }
};

function getYouTubePosts() {
  axios
    .get('/yogaYouTube')
    .then(res => {
      console.log('youtube res', res);
      this.assignMedia(res.data, 'youtube');
    })
    .catch(err => console.log('log error', err));
}

function assignMedia(data, type) {
  if (type === 'instagram') {
    data.map(item => {
      this.instaPosts.push({
        id: item.id,
        imageUrl: item.images.thumbnail.url
      });
    });
  } else if (type === 'youtube') {
    this.youTubePosts = {
      id: data.items[0].id,
      videoUrl: data.items[0].snippet.thumbnails.high.url
    };
  }
}
</script>

<style lang='sass' scoped>
.tutorials-container
  display: grid
  grid-template-rows: 40px 100px 355px
  grid-template-columns: 1fr 1fr
  grid-template-areas: "nav-bar nav-bar" "header header" "column1 column2"
  p
    margin: 0 0 10px

  .nav-bar
    grid-area: nav-bar
    justify-self: center
  
  .header
    grid-area: header
    justify-self: center

  .media-columns
    grid-area: column1 column2
    justify-self: center
</style>
