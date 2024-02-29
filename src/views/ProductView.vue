<template>
  <div class="product_single">
    <h1>Single product</h1>
     <div class="row row-cols-1 row-cols-md-3 pt-5" >
    <div v-for="product in $store.state.product" :key="product" >
    <div class="col"> 
      <div class="card" >
        <img :src="product.prodUrl" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{product.prodName}}</h5>
           <p class="card-text">R{{product.amount}}</p>
        </div>
      </div>
    </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  computed:{
    getProduct(){
      this.$store.dispatch('getProduct',this.$route.params.prodID)
    }
  },
  mounted(){
    this.getProduct
  }

}
</script>

<style>

</style>