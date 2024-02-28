<template>
  <div class="admin pt-4">
    <div class="container-fluid ">
     <h1>Products CRUD</h1>
     <AddComp/>
     <table class="table table-hover">
    <thead>
      <tr>
        
        <th scope="col"></th>
        <th scope="col">Item</th>
        <th scope="col">Amount</th>
        <th scope="col">Qauntity</th>
        <th scope="col">Category</th>
        <th scope="col">img</th>
      </tr>
    </thead>
    <tbody v-for="product in $store.state.products" :key="product.prodID">
  

      <tr scope="row">
        <th>{{product.prodID}}</th>
        <td>{{product.prodName}}</td>
        <td>R{{product.amount}}</td>
        <td>{{product.quantity}}</td>
        <td>{{product.category}}</td>
        <td><img :src="product.prodUrl" class="w-25"></td>
        <td><button type="button" class="btn btn-secondary me-2" @click="delProd(product.prodID)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
          </button>
          <!-- <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button> -->
         <!-- <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button> -->
         <button class="btn btn-secondary" @click="updateProd(product.prodID)">edit</button>
        </td>
       
  
      </tr>
<!--      
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
     <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" modal-body>
        <input type="text" placeholder="Name" data-name name="item name" id="item name" v-model="prodName">
        <input type="text" placeholder="quantity" data-description name="item name" id="item name" v-model="quantity">
        <input type="text" placeholder="amount" data-Q name="item name" id="item name" v-model="amount">
        <input type="text" placeholder="category" data-price name="item name" id="item name" v-model="category">
        <input type="text" placeholder="url" data-url name="item name" id="item name" v-model="prodUrl">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" data-modal class="btn btn-primary" save @click="updateProd(product.prodID)">Save changes</button>
      </div>
    </div>
  </div>
</div> -->
     
    </tbody>
  
    </table>
    <h1>Edit Product</h1>
    <p>Fill in what you'd like to edit , after that indicate which product you'd like to edit.</p>
      <input type="text" placeholder="item.." v-model="prodName"><br><br>
     <input type="number" placeholder="quantity.. " v-model="quantity" >
     <input type="number" placeholder="amount.." v-model="amount"><br><br>
     <input type="text" placeholder="category.." v-model="category" >
     <input type="text" placeholder="img url.." v-model="prodURL"><br><br>
    
    <h1 class="pt-5">Users CRUD</h1>
     <table class="table table-hover">
    <thead>
      <tr>
    
        <th scope="col"></th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Age</th>
        <th scope="col">Gender</th>
        <th scope="col">User Role</th>
        <th scope="col">Email</th>
        <th scope="col">password</th>
        <th scope="col">Profile Img</th>
      </tr>
    </thead>
    <tbody v-for="user in $store.state.users" :key="user.userID">
      <tr scope="row">
        <th>{{user.userID}}</th>
        <td>{{user.firstName}}</td>
        <td>R{{user.userAge}}</td>
        <td>{{user.gender}}</td>
        <td>{{user.userRole}}</td>
        <td>{{user.emailAdd}}</td>
        <td>{{user.userPass}}</td>
        <td><img :src="user.userProfile" class="w-25"></td>
        <!-- <td><button type="button" class="btn btn-secondary me-2" @click="delProd(product.prodID)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
          </button> -->
          <!-- <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button> -->
         <!-- <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button> -->
         <!-- <button class="btn btn-secondary" @click="updateProd(product.prodID)">edit</button>
        </td> -->
       
  
      </tr>

    </tbody>
  
    </table>
    </div>
  </div>
        
    
</template>

<script>

import AddComp from '../components/AddComp.vue'


export default {
  components: {
    AddComp
    
  },
 
  methods:{
      updateProd(id){
        let edit={
          prodID:id,
          prodName:this.prodName,
          quantity:this.quantity,
          amount:this.amount,
          category:this.category,
          prodUrl:this.prodUrl
        }
        this.$store.dispatch('updateProduct',edit)
      },
      delProd(prodID){
        this.$store.dispatch('deleteProduct',prodID)
      }
   },
  computed:{
    getProds(){
      this.$store.dispatch('getProducts')
    },
    getUsers(){
      this.store.dispatch('getUsers')
    }
    // getSingleProd(prodID){
    //   this.store.dispatch('getSingleProduct',prodID)
    // }
    //  addProds(){
    //   this.$store.dispatch('addProducts',this.$data)
    // }
  },
  mounted(){
    this.getProds
    
    // this.getSingleProd
  }

}


</script>

<style>

</style>