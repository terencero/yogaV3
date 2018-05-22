// GET requests to https url
const axios = require('axios');
const express = require('express');
// dependency for request-promise
const request = require('request');
const keys = require('../../keys');
// call Router function on express and assign to const router to export on "router" file with all route paths
const router = express.Router();

const instagramKey = keys.keyMap.instagramKeys.access_token;
const youTubeKey = keys.keyMap.youTubeKeys.key;

router.get('/yogaInstagram', function (req, res) {

  axios.get(`https://api.instagram.com/v1/users/self/media/recent?count=6&access_token=${instagramKey}`)
  .then((response) => {
    console.log(response.data);
    res.send(response.data.data);
  })
  .catch((err) => console.log(err));
});

router.get('/yogaYouTube', function (req, res) {

  axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=oLZ0GFg9hgk&key=${youTubeKey}`)
  .then((response) => {
    // console.log(response.data);
    res.send(response.data);
  })
  .catch((err) => console.log(err));
});
// 'https://www.youtube.com/embed?listType=user_uploads&list=USERNAME'

module.exports = router;