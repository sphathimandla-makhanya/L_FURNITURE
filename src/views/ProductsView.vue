<template>
  <div>
    <div>
      <CardComp/>
    </div>
  </div>
  

</template>

<script>
import CardComp from '../components/CardComp.vue'

export default {
  
  components:{
    CardComp
  },
  methods:{
   
  },
  computed:{
    getProds(){
      this.$store.dispatch('getProducts')
    }
   
  },
  mounted(){
    this.getProds
    
  }

}
</script>

<style>
  /* .card{
     border: 5px solid #ddd
     
  }
  .card:hover{
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    transform: scale(1.1)
  }
   */
</style>