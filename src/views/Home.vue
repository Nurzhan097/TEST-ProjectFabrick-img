<template>
  <div class="home">
    <div class="m-4"></div>
    <h1>Home</h1>
    <b-button @click="getRandImg">rand img</b-button>
    <b-button @click="getImgById()">test img id</b-button>
    <b-button @click="random=null" variant="danger">x</b-button>
    <SplashImage :img="random" />


    <b-button @click="getImgs">TEST many</b-button>
    <b-button @click="photos=[]" variant="danger">x</b-button>

    <hr>

    <b-container fluid="md">
      <b-row >
        <template v-for="(photo, ind) in photos">
          <b-col :key="photo.id" md="4" sm="12">
            {{ind+1}}
            <SplashImage :img="photo" />
          </b-col>
        </template>
      </b-row>
    </b-container>
    <!-- {{ photos }} -->

    
  </div>
</template>

<script>
// @ is an alias to /src
import Splash from '@/services/splash.js'

import SplashImage from '@/components/SplashImage.vue'

export default {
  name: 'Home',
  components: {
    SplashImage
  },

  data() {return{
    imgs: [],
    random: null,
    photos: [],

  }},

  methods: {
    getRandImg() {
      Splash.getRandomImage().then(imgs => {
        console.log(">> get rand ", imgs.data);
        this.random = imgs.data;

      }).catch(e => {
        console.error(">get rand Error", e);
      })
    },

    getImgById(id="gDvAzan-aAw") {
      Splash.getImage(id).then(img => {
        console.log(">> get img ", img.data);
        this.random = img.data;

      }).catch(e => {
        console.error(">get img Error", e);
      })
    },

    getImgs() {
      Splash.getImages().then(imgs => {
        console.log(">> get photos ", imgs.data);
        this.photos = imgs.data;

      }).catch(e => {
        console.error(">get photos Error", e);
      })
    },




  }
}
</script>
