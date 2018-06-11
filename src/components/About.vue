<template>
  <div class="about-container">
    <nav-bar-component class="nav-bar"></nav-bar-component>

    <h2 class="header">About my journey of yoga </h2>

    <div class="profile-image-container">
      <img 
        src="../assets/profile.jpg" 
        alt="profile picture">
    </div>

    <div class="content">
      <p>
        My yoga journey has evolved significantly over the last few years & I find that the more I delve the more there is to learn.
      </p> 
    
      <p>
        Yoga is a journey to our inner world and to the core & essence of our being. I have never asked these questions more in my life. ‘Who am I? What is the purpose of life?’
      </p>

      <p>
        I continue to inquire these questions again & again through my daily practice & teaching. I have also never been as happy as I am now. Happy not because of any material or mental conditioning, but because I have found my passion & love of yoga and because I’m able to ask questions about life with inquisitiveness & enthusiasm again & again and not drawing conclusions. 
      </p>

      <p>
        As a practice of moving meditation, yoga can be an amazing tool to develop compassionate discipline, awareness & higher consciousness through conscious breathing.The practice of conscious breathing and moving our bodies with mindfulness is to unite all parts of our body, mind and spirit in order to live our lives with more awakened energy, balance & inner peace.
      </p>

      <p>
        My goal as a teacher is to share my experience of yoga with creativity, compassion and love for the benefit of others and world at large.
      </p>

      <p>
        I’m very grateful to have met and been inspired by the many teachers I have trained with in England, South Korea and in the U.S. Some of my biggest influences have been Richard Freeman, Mary Taylor, Kino MacGregor, Tim Feldmann & Sharath Jois.
      </p>
    </div>
  </div>
  
</template>

<script>
import NavBarComponent from './NavBarComponent.vue';
export default {
  name: 'About',
  components: { NavBarComponent },
};
</script>

<style lang='sass' scoped>
.about-container
  display: grid
  grid-template-rows: 40px 100px 1fr
  grid-template-columns: 30% 70%
  grid-template-areas: "nav-bar nav-bar" "header header" "image content"
  p
    margin: 0 0 10px

  .nav-bar
    grid-area: nav-bar
    justify-self: center
  
  .header
    grid-area: header
    justify-self: center

  .profile-image-container
    grid-area: image
    justify-self: center
    img
      max-width: 100%
      height: auto

  .content
    grid-area: content
    justify-self: center
</style>
