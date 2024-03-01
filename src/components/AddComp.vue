<template>
  <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog">
  <div class="modal-content">
   <div class="modal-header">
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body" modal-body>
     <input type="text" placeholder="Name" data-name name="item name" id="item name" v-model="prodName">
     <input type="text" placeholder="quantity" data-description name="item name" id="item name" v-model="quantity">
     <input type="text" placeholder="amount" data-amount name="item name" id="item name" v-model="amount">
     <input type="text" placeholder="category" data-category name="item name" id="item name" v-model="category">
     <input type="text" placeholder="url" data-url name="item name" id="item name" v-model="prodUrl">
   </div>
   <div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
     <button type="button" data-modal class="btn btn-primary" save @click="addProds">Save changes</button>
   </div>
 </div>
</div>
</div>
</template>
<script>
export default {
 data(){
 return{
   prodName:'',
   quantity:'',
   amount:'',
   category:'',
   prodUrl:''
 }
},
methods:{
},
computed:{
  addProds(){
   this.$store.dispatch('addProducts',this.$data)
 }
},
mounted(){
}
}
</script>
<style>
</style>