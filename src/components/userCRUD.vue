<template>
<div class="container-fluid" id="table-container">

  <h1 class="pt-5">Users CRUD</h1>
  <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" :data-bs-target="'#exampleModal4'+user">Add</button>
       
       <div class="modal fade" :id="'exampleModal4'+user" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog">
      <div class="modal-content">
       <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body" modal-body>
    
      <input type="text" placeholder="firstname.." v-model="firstName"><br><br>
     <input type="text" placeholder="lastname.. " v-model="lastName" >
     <input type="number" placeholder="age.." v-model="userAge"><br><br>
     <input type="text" placeholder="gender.." v-model="gender" >
     <input type="email" placeholder="email@gmail.com.." v-model="emailAdd"><br><br>
     <input type="text" placeholder="role.." v-model="userRole">
     <input type="text" placeholder="password.." v-model="userPass"><br><br>
     <input type="text" placeholder="img url.." v-model="userProfile"><br><br>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" data-modal class="btn btn-primary" save @click="addUser">Save changes</button>
       </div>
     </div>
   </div>
 </div>
     <table id="table" class="table table-hover">
    <thead>
      <tr>
    
       
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Age</th>
        <th scope="col">Gender</th>
        <th scope="col">User Role</th>
        <th scope="col">Email</th>
        <!-- <th scope="col">password</th> -->
        <th scope="col">Profile Img</th>
      </tr>
    </thead>
    <tbody v-for="user in $store.state.users" :key="user.userID">
      <tr scope="row">
        <td>{{user.firstName}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.userAge}}</td>
        <td>{{user.gender}}</td>
        <td>{{user.userRole}}</td>
        <td>{{user.emailAdd}}</td>
        <!-- <td>{{user.userPass}}</td> -->
        <td><img :src="user.userProfile"  id="img"></td>
        <td><button type="button" class="btn btn-danger me" @click="delUser(user.userID)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
          </button>
           <button type="button"  class="btn btn-secondary m-2 " data-bs-toggle="modal" :data-bs-target="'#exampleModal3'+user.userID"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg></button>
       
            <div class="modal fade" :id="'exampleModal3'+user.userID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" modal-body>
          
            <input type="text" placeholder="firstname.." v-model="firstName"><br><br>
          <input type="text" placeholder="lastname.. " v-model="lastName" >
          <input type="number" placeholder="age.." v-model="userAge"><br><br>
          <input type="text" placeholder="gender.." v-model="gender" >
          <input type="email" placeholder="email@gmail.com.." v-model="emailAdd"><br><br>
          <input type="text" placeholder="role.." v-model="userRole">
          <input type="text" placeholder="password.." v-model="userPass"><br><br>
          <input type="text" placeholder="img url.." v-model="userProfile"><br><br>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" data-modal class="btn btn-primary" save @click="updateUser(user.userID)">Save changes</button>
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
     data(){
    return{
          firstName:'',
          lastName:'',
          userAge:'',
          gender:'',
          emailAdd:'',
          userRole:'',
          userPass:'',
          userProfile:''
    }
     },
    methods:{
        updateUser(id){
        let edit={
          userID:id,
          firstName:this.firstName,
          lastName:this.lastName,
          userAge:this.userAge,
          gender:this.gender,
          emailAdd:this.emailAdd,
          userRole:this.userRole,
          userPass:this.userPass,
          userProfile:this.userProfile

        }
        this.$store.dispatch('updateUser',edit)
      },
      delUser(userID){
        this.$store.dispatch('deleteUser',userID)
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
      },
    computed:{
    getUsers(){
      this.$store.dispatch('getUsers')
    },
     addUser(){
        this.$store.dispatch('addUser',this.$data)
    }
    },
    mounted(){
      this.getUsers
    
    }  
}


</script>

<style>
@media (max-width: 400px) {
  #table-container {
    overflow-x: scroll;}
}
#img{
  height: 80px;
    width: 80px;
}
</style>