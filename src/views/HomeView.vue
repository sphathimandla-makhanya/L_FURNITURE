<template>
 <div class="home" >
  <!-- <h1 class="pt-5 text-white">Luxurious Funiture</h1> -->
    <div class="conatainer-fluid " id="name"> <h1 class="text-white" id="heading">Luxurious Funiture</h1>
      <h2 class="mt-3">Your go-to spot for the most luxurious furniture </h2>
      <button type="button" class="btn btn-outline-light me-2 mt-2">Contact</button>
      <button type="button" class="btn btn-outline-light mt-2">Our products</button>
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
  background-image:url("https://i.postimg.cc/T3w238NW/lotus-design-n-print-lrk0l9w8r-I0-unsplash.jpg ");
  background-repeat:no-repeat;
  background-size:cover; 
  background-position:center;
  height:86.5vh;
 

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

}
/* #heading:hover{
   /* transform: rotateY(150deg); */

/* } */ 
/* #img_1{
  width:33% ;
  height:43vh  
}
#img_2{
  width:33% ;
  height :43vh
}
#img_3{
  width:32% ;
  height:43vh
} */






</style>