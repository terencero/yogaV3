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
    .then(resp => {
      console.log("instagram res", resp);
    })
    .catch(err => console.log('log error',err));
}
export default {
  beforeMount() {
    this.getInstagramPosts();
  },
  methods: {
    getInstagramPosts
  }
};
</script>

