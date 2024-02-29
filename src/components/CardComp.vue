<template>
  <div class="container products" >
     <input class="mt-3 me-2 w-50" type="search" placeholder="Search" aria-label="Search" @input="find()" v-model="search">
     <!-- <input class="mt-3 me-2 w-50" type="search" placeholder="Search" aria-label="Search" @input="filter()" v-model="filtered"> -->
   <div class="row row-cols-1 row-cols-md-3 pt-5" >
    <div v-for="product in find()" :key="product" >
    <div class="col"> 
      <div class="card" >
        <img :src="product.prodUrl" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{product.prodName}}</h5>
           <p class="card-text">R{{product.amount}}</p>
          <!-- <button><router-link :to="{ name:'product',params:{id:prodID}}"></router-link></button> -->
        </div>
      </div>
    </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
    data(){
    return{
      search:""
    }

  },
  methods:{
    // find funtion to search for specific product
    // filter method to loop through products in the store and find specific product
    find(){
      let item = this.$store.state.products
      let found = this.search 
      let res = item.filter(p=>{
        return p.prodName.toLowerCase().includes(found.toLowerCase())|| p.category.toLowerCase().includes(found.toLowerCase())
      })
      console.log(res);
      return res
    },
    getProduct(prodID){
      this.$store.dispatch('getProduct',prodID)
    }
  },
 computed:{
    getProds(){
      this.$store.dispatch('getProducts')
    }
   
  },
  mounted(){
    this.getProds
    this.find()
  }
}
</script>

<style>
     .card{
     border: 5px solid #ddd
     
  }
  .card:hover{
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    transform: scale(1.1)
  }
  
</style>