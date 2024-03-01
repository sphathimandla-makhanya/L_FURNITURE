<template>
 <div class="home" >
  <!-- <h1 class="pt-5 text-white">Luxurious Funiture</h1> -->
    <div class="conatainer-fluid " id="name"> <h1 class="text-white" id="heading">Luxurious Funiture</h1>
      <h2 class="mt-3">Your go-to spot for the most luxurious furniture </h2>
      <button type="button" class="btn btn-outline-light me-2 mt-2"><router-link to="/contact" class="nav-link" href="contact">Contact</router-link></button>
      <button type="button" class="btn btn-outline-light mt-2"><router-link to="/products" class="nav-link " href="products">Our Products</router-link></button>
    </div>
 </div>


 <div class="scroll-container" id="scroller">
  <img src="https://i.ibb.co/5GxX2SQ/clapton-3-seater-couch-dove-grey-1.webp" alt="" >
  <img src="https://i.ibb.co/FHFWHpp/about-background.jpg" alt="" >
  <!-- <img src="https://i.ibb.co/br6d4HR/shopping-1.webp" alt="" > -->
  <img src="https://i.ibb.co/0tXfC19/img1-1.jpg" alt="" >
  <img src="https://i.ibb.co/pWDgH65/Romeo-TV-Stand-Set.jpg" alt="" >
  <img src="https://i.ibb.co/vcwgdxW/Live-160-White-TV-Unit-set.webp"  alt="" >
  <img src="https://i.ibb.co/3htMf0m/Nidouillet-set.webp"   alt="" >
</div>

 
</template>

<script>



export default {
 
 
}
</script>
<style scoped>
 .home{
  margin:0;
  background-image:url("https://cdn-images.imagevenue.com/9e/3c/f0/ME17PY7G_o.jpg");
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  /* margin-top: 0.1%; */
  height:85vh;
 }

 #scroller {
  background-color: #8b8b7c;
  overflow: auto;
  white-space: nowrap;
  padding: 10px;
  
}

#scroller img {
  padding: 9px;
  width:33%;
  height:43svh 
}

#name {
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:whitesmoke;
  text-shadow: 1px 1px 1px white;
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #F1F1F1; /* Grey text */
  width: 50%; /* Full width */
  padding: 55px; /* Some padding */
  border-radius: 5px;
}
@media (max-width: 490px){
      #name h1{
        font-size: 18px !important;
      }
      #name h2 {
        font-size: 12px !important;
        text-shadow: none !important;
        overflow: scroll;
      }
      #scroller{
        overflow: scroll;
        max-width: 100%;
        display: flex;
        flex-direction: row !important;
        justify-content: center !important;
      }
      #scroller img {
          width: 100%;
          height:30svh;
      }
}






</style>