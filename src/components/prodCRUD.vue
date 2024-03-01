<template>
  <div class="table-container">
   
           <table class="table table-hover">
        <thead>
          <tr> 
            <!-- <th scope="col"></th> -->
            <th scope="col">Item</th>
            <th scope="col">Amount</th>
            <th scope="col">Qauntity</th>
            <th scope="col">Category</th>
            <th scope="col">img</th>
          </tr>
        </thead>
        <tbody v-for="product in $store.state.products" :key="product.prodID">
      
    
          <tr scope="row">
            <!-- <th>{{product.prodID}}</th> -->
            <td>{{product.prodName}}</td>
            <td>R{{product.amount}}</td>
            <td>{{product.quantity}}</td>
            <td>{{product.category}}</td>
            <td><img :src="product.prodUrl" class="w-25" id="images"></td>
            <td><button type="button" class="btn btn-danger me" @click="delProd(product.prodID)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-trash3 " viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
              </button>
               <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" :data-bs-target="'#exampleModal2'+product.prodID"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg></button>
           
           <div class="modal fade" :id="'exampleModal2'+product.prodID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
          <div class="modal-content">
           <div class="modal-header">
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body" modal-body>
             <input type="text" placeholder="Name1" data-name name="item name" id="item name" v-model="prodName">
             <input type="text" placeholder="quantity1" data-description name="item name" id="item name" v-model="quantity">
             <input type="text" placeholder="amount1" data-amount name="item name" id="item name" v-model="amount">
             <input type="text" placeholder="category1" data-category name="item name" id="item name" v-model="category">
             <input type="text" placeholder="url1" data-url name="item name" id="item name" v-model="prodUrl">
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <button type="button" data-modal class="btn btn-primary" save @click="updateProd(product.prodID)">Save changes</button>
           </div>
         </div>
       </div>
     </div>
            </td>
           
      
          </tr>
         
        </tbody>
        </table>    
    </div>
 

</template>

<script>
import sweet from 'sweetalert'
export default {
    
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
        .then(()=>{
          sweet({
        title: "Are you sure?",
        text: "You will not be able to recover this file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: true,
      })
      .then(() => {
          // Reload the page after successful deletion
          window.location.reload();
        })
        }
      )}
}
}



</script>

<style scoped>

@media (max-width: 600px) {
  .table-container {
    overflow-x: scroll;}

    #images{
    height: 150% !important;
    width: 150% !important;
  }
}

</style>