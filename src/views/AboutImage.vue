<template>
<b-card>
  <SplashImage :img="image" />

</b-card>
</template>


<script>
import SplashImage from '@/components/SplashImage.vue'
import Splash from '@/services/splash.js'

export default ({
  components: {
    SplashImage,
  },
  data(){return{
      image: null
  }},

    created() {
      const id = this.$route.params.image_id
      Splash.getImage(id).then(img => {
          this.image = img.data
      }).catch(e=> {
          console.error(">>> on created", e);
      })
    },

})
</script>
