<template>
  <div>
    empty
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
  </div>
</template>

<script>
import axios from "axios";
function getInstagramPosts() {
  axios
    .get("/yogaInstagram")
    .then(res => {
      console.log("instagram res", res);
    })
    .catch(err => console.log("log error", err));
}

function getYouTubePosts() {
  axios
    .get("/yogaYouTube")
    .then(res => {
      console.log("youtube res", res);
    })
    .catch(err => console.log("log error", err));
}
export default {
  beforeMount() {
    this.getInstagramPosts();
    this.getYouTubePosts();
  },
  methods: {
    getInstagramPosts,
    getYouTubePosts
  }
};
</script>

