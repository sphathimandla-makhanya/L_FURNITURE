<template>
  <div class="product_single">
    <h1>Single product</h1>
     <div class="row row-cols-1 row-cols-md-3 pt-3 justify-content-center" >
    <div v-for="product in $store.state.singleProd" :key="product.prodID" >
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

.card{
     border: 5px solid #ddd
     
  }
  .card:hover{
    box-shadow: 0 0 2px 1px rgba(59, 97, 70, 0.741);
    /* transform: scale(1.1) */
  }
  .col{
    padding-left:10%
  }
  img:hover {
  transform: scaleX(-1);
  /* transform: scaleX(-1); */
}
</style>