<template>
  <div class="video-card">
    <div class="title">Test</div>
    <div class="video-container">
      <div 
        :key="youTubePosts.id"
        class="youtube-post"
      >
        <iframe 
          :src="youTubePosts.videoUrl" 
          frameborder="0"
          height="360"
          width="480"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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

export default {
  data() {
    return {
      instaPosts: [],
      youTubePosts: null
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
</script>

<style>
</style>
