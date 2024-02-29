<template>
  <div class="admin pt-4">
    <div class="container-fluid ">
     <h1>Products CRUD</h1>
     <AddComp/>
     <prodCRUD/>
     <!-- <AddUserComp/> -->
     <userCRUD/>

    </div>
  </div>
        
    
</template>

<script>
import prodCRUD from '@/components/prodCRUD.vue'
import userCRUD from '../components/userCRUD.vue'
import AddComp from '../components/AddComp.vue'
// import AddUserComp from '../components/AddUserComp.vue'




export default {
  components: {
    AddComp,
    prodCRUD,
    userCRUD
    // AddUserComp
    
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

</style>