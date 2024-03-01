<template>
  <div class="container products" >
     <input class="mt-3 me-2 w-50" type="search" placeholder="Search" aria-label="Search" @input="find()" v-model="search">
     <button class="btn1" @click="sortfunction()">Sort</button>
     <div v-if="find().length>0">
       <div class="row row-cols-1 row-cols-md-3 pt-5 " >
         <div v-for="product in find()" :key="product" >
        <div class="col">
          <div class="card h-100 w-100 mt-5">
            <img :src="product.prodUrl" class="card-img-top h-100 w-100" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{product.prodName}}</h5>
              <p class="card-text">R{{product.amount}}</p> </div>
              <router-link @click="getProduct(product.prodID)" :to="{ name: 'product', params: { prodID: product.prodID }}" class="btn btn-dark">details</router-link>
                  </div>
        </div>
        </div>
         </div>
     </div>
    <div v-else>
    <SpinnerComp/>
    </div>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
import sweet from 'sweetalert'
export default {

    components:{
      SpinnerComp
    },
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
      if(res.length===0){
        sweet({
      title: "Error",
      text: "Item not found",
    })
  }
      console.log(res);
      return res
    },
    getProduct(prodID){
      this.$store.dispatch('getProduct',prodID)
    },
    sortfunction(){
      let p = this.$store.state.products
        if (p) {
          p.sort((a, b) => a.amount - b.amount);
        }
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

<style scoped>
  .btn1{
    background-color: #CCCC99;
  }
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