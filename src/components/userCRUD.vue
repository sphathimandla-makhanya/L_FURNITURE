<template>
<div class="container-fluid">

  <h1 class="pt-5">Users CRUD</h1>
   <!-- <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" data-bs-target="#userModal" >Add</button>
       
      <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
    <div class="modal-dialog">
     <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" modal-body>
        
        <input type="text" placeholder="firstname.." data-name name="firstname" id="firstname" v-model="firstName">
        <input type="text" placeholder="lastname.. "  data-lastname name="lastname" id="lastname" v-model="lastName" >
        <input type="number" placeholder="age.." data-age name="age" id="age" v-model="userAge">
        <input type="text" placeholder="gender.." data-gender name="gender" id="gender" v-model="gender" >
        <input type="email" placeholder="email@gmail.com.." data-email name="email" id="email"  v-model="emailAdd">
        <input type="text" placeholder="role.." data-role name="role" id="role"  v-model="userRole">
        <input type="number" placeholder="password.." data-password name="password" id="password" v-model="userPass">
        <input type="text" placeholder="img url.." data-img name="img" id="img" v-model="userProfile">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" data-modal class="btn btn-primary" save @click="addUser">Save changes</button>
      </div>
    </div>
  </div>
</div> -->
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
        <td>{{user.lastName}}</td>
        <td>{{user.userAge}}</td>
        <td>{{user.gender}}</td>
        <td>{{user.userRole}}</td>
        <td>{{user.emailAdd}}</td>
        <td>{{user.userPass}}</td>
        <td><img :src="user.userProfile" class="w-25"></td>
        <td><button type="button" class="btn btn-secondary me-2" @click="delUser(user.userID)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
          </button>
           <button class="btn btn-secondary" @click="updateUser(user.userID)">edit</button>
        </td>
      </tr>

    </tbody>
  
    </table>
    <h1>Edit User</h1>
    <p>Fill in what you'd like to edit , after that indicate which user you'd like to edit.</p>
      <input type="text" placeholder="firstname.." v-model="firstName"><br><br>
     <input type="text" placeholder="lastname.. " v-model="lastName" >
     <input type="number" placeholder="age.." v-model="userAge"><br><br>
     <input type="text" placeholder="gender.." v-model="gender" >
     <input type="email" placeholder="email@gmail.com.." v-model="emailAdd"><br><br>
     <input type="text" placeholder="role.." v-model="userRole">
     <input type="text" placeholder="password.." v-model="userPass"><br><br>
     <input type="text" placeholder="img url.." v-model="userProfile"><br><br>
     <button class="btn btn-secondary" @click="addUser">add</button>
</div>
</template>

<script>
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
      }
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

</style>