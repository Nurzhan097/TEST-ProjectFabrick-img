<template>
  <div class="home">
    
      <b-card
        overlay
        img-src="/img/bg/search.png"
        img-alt="Card Image"
        class="text-center"

        text-variant="white"
        text-align="center"
        text-vertical-align="cneter"
        title=" "
        sub-title=" "
      >
        <b-card-text >
          <div class="text-center">
            <b-form  @submit.prevent="searchImgs(search_text)" >
                <b-form-input class="m-auto" id="search_input" v-model="search_text"  placeholder="Поиск" :state="validation" /> 
                <!-- <b-button @click="searchImgs(search_text)" variant="success">Поиск</b-button> -->
            </b-form>    
          </div>
          
        </b-card-text>
      </b-card>
      
    <!-- search form -->
    <!-- <b-form @submit.prevent="searchImgs(search_text)"> -->
      <!-- <b-form-group label-cols-sm="4" label-cols-lg="3" label="Поиск" inline> -->
        <!-- <b-form-input v-model="search_text" placeholder="Поиск" :state="validation" />  -->
      <!-- </b-form-group> -->
        <!-- <b-button @click="searchImgs(search_text)" variant="success">Поиск</b-button> -->
    <!-- </b-form> -->
    <!-- /search form -->

    <!-- remove images -->
    <!-- <b-button @click="photos=[]" variant="danger">x</b-button> -->
    <!-- /remove images -->
    <!-- <hr> -->

    <br>
    <br>

    <!-- image view -->
    <b-container fluid="md">
      <h3 v-if="search_result">Результат поиска: {{search_result}}</h3>
      <ImageTable :images="photos" />
    </b-container>
    <!-- image view -->
    
  </div>
</template>

<script>
import Splash from '@/services/splash.js'

import ImageTable from '@/components/ImageTable.vue'

export default {
  name: 'Home',
  components: {
    ImageTable,
  },

  data() {return{
    imgs: [],
    random: null,
    photos: [],

    // Search
    search_text: "",
    search_result: "",
    search_btn: false,

  }},

  mounted(){
    this.getImgs();
    this.getRandImg();
  },

  computed: {
    validation(){
      if(this.search_btn == false){
        return null;
      } else{
        return !(this.search_text == "" || this.search_text == null)
      }
    }
  },

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

    searchImgs(text, page=1) {
      this.search_btn = true;
      if(text == "" || text == null ){
        return
      }

      Splash.searchImages(text, page).then(imgs => {
        console.log(">> search photos ", imgs.data);
        this.photos = imgs.data.results;
        this.search_result = text
      }).catch(e => {
        console.error(">search photos Error", e);
      })
    },

  }
}
</script>

<style>
#search_input{
    max-width: 30rem;
}
</style>
