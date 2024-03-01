<template>

<div class="sticky-top" id="top-nav">
<div class="container-fluid" >
<div class="row justify-content-between">

<div class="col d-flex justify-content-center ">
<div class="social-media">
<p class="mb-0 d-flex">
<a href="" class="d-flex align-items-center justify-content-center me-2"><span class="facebook"><img src="https://cdn-thumbs.imagevenue.com/0a/27/3e/ME17OP7S_t.png" alt="" id="logo"></span></a>
<a href="" target="blank" class="d-flex align-items-center justify-content-center me-2"><span class="email"><img src="https://cdn-thumbs.imagevenue.com/07/51/ba/ME17OP8P_t.png" alt="" id="logo"></span></a>
<a href="" target="blank" class="d-flex align-items-center justify-content-center "><span class="whatsapp"><img src="https://cdn-thumbs.imagevenue.com/8a/d3/70/ME17OP7G_t.png" alt="" id="logo"></span></a>
</p>
</div>
</div>
</div>  

</div>
    <nav class="navbar navbar-expand-lg p-3" id="nav">
  <div class="container-fluid ">
   
    <a class="navbar-brand" href="#">CSM</a>
    <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation ">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
      <div class="navbar-nav  ">
         <li class="nav-item">
            <router-link to="/" class="nav-link  text-white"  href="home">Home</router-link>
         </li>       
         <li class="nav-item">
             <router-link to="/about" class="nav-link text-white" >About</router-link>
        </li>
         <li class="nav-item">
            <router-link to="/products" class="nav-link text-white" href="products">Products</router-link>
        </li>
    <!-- <li class="nav-item">
    <router-link to="/product" class="nav-link text-white" href="product"></router-link>
    </li> -->
      <li class="nav-item">
        <router-link to="/admin" class="nav-link text-white" href="testimonials">Admin</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact" class="nav-link text-white" href="contact">Contact</router-link>
      </li>
      
      </div>
    </div>
  </div>
</nav>
    

</div>

</template>

<script>
export default {

}
</script>

<style scoped>
#logo {
    width: 25px;
    height: 25px;
    padding: 2px;
    mix-blend-mode: multiply;
    transition: transform 0.3s;
  } 
 #logo:hover{
      transform: scale(1.2);
    }
#top-nav{
    background-color: #CCCC99;
    }    

#nav{
    background-color: #8b8b7c ;
}
/* #353515 */
 /* #8b8b7c */
</style>