<template>
     <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" data-bs-target="#userModal" >Add</button>
       
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

  },
  computed:{
    addUser(){
        this.$store.dispatch('addUser',this.$data)
    }
  },
  mounted(){
 
  }
}
</script>

<style>

</style>