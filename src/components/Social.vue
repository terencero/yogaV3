<template>
  <div class="post-container">
    <div class="instagram-container">
      <div
        v-for="post in instaPosts"
        :key="post.id"
        class="instagram-post"
      >
        <img :src="post.imageUrl" alt="">
      </div>
    </div>
    <div class="youtube-container">
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
import axios from "axios";
function getInstagramPosts() {
  axios
    .get("/yogaInstagram")
    .then(res => {
      console.log("instagram res", res);
      this.assignMedia(res.data, "instagram");
    })
    .catch(err => console.log("log error", err));
}

function getYouTubePosts() {
  axios
    .get("/yogaYouTube")
    .then(res => {
      console.log("youtube res", res);
      this.assignMedia(res.data, "youtube");
    })
    .catch(err => console.log("log error", err));
}

function assignMedia(data, type) {
  if (type === "instagram") {
    data.map(item => {
      this.instaPosts.push({
        id: item.id,
        imageUrl: item.images.thumbnail.url
      });
    });
  } else if (type === "youtube") {
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
    this.getInstagramPosts();
    this.getYouTubePosts();
  },
  methods: {
    getInstagramPosts,
    getYouTubePosts,
    assignMedia
  }
};
</script>

<style lang="sass" scoped>
  .post-container
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: 1fr

    .instagram-container
      display: grid
      grid-template-columns: repeat(3, 150px)
      grid-column-gap: 5px
      grid-template-rows: 1fr 1fr
</style>

