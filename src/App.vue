<template>
  <NavComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavComp from './components/NavComp.vue'
import FooterComp from './components/FooterComp.vue'


export default {
   components: {
    NavComp,
    FooterComp
    
   
    }
}
</script>




<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Libre Baskerville';  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
