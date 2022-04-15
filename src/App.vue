<template>
  <div id="app">
    <Navbar/>
    <router-view/>

  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  mounted(){
    this.$store.dispatch("getOldFavorits")
  }
}

</script>
