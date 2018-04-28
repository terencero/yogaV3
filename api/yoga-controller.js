// GET requests to https url
const rp = require('request-promise-native');
const express = require('express');
// dependency for request-promise
const request = require('request');
const keys = require('../keys');
// call Router function on express and assign to const router to export on "router" file with all route paths
const router = express.Router();

const instagramKey = keys.instagramKeys.access_token;
const youTubeKey = keys.youTubeKeys.key;

router.get('/yogaInstagram', function (req, res) {
  let options = {
    method: 'GET',
    uri: `https://api.instagram.com/v1/users/self/media/recent?count=6&access_token=${instagramKey}`,
    qs: {
      access_token: instagramKey
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically stringifies the body to JSON 
  };

  rp(options)
    .then(function (response) {
      // POST succeeded... 
      // console.log(response.data[0].images);
      // console.log(response.data[0].caption);
      console.log('insta', response.data);
      res.json(response.data);
    })
    .catch(function (err) {
      // POST failed... 
      console.log(err);
    });
});

router.get('/yogaYouTube', function(req, res) {
  let options = {
    method: 'GET',
    uri: `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=oLZ0GFg9hgk&key=${youTubeKey}`,
    qs: {
      access_token: youTubeKey
    },
    headers: {
      'User-Agent': 'Request-Promise' // is this request promise syntax?
    },
    json: true // Automatically stringifies the body to JSON
  };

  rp(options).then( function(response) {
    console.log('youtube data>>',response);
    res.json(response);
  }).catch((err) => {
    console.log(err);
  });

  // 'https://www.youtube.com/embed?listType=user_uploads&list=USERNAME'
});

module.exports = router;