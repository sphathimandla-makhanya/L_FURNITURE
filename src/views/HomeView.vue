<template>
 <div class="home" >
  <h1 class="pt-5 text-white">Luxurious Funiture</h1>
 </div>
 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, aliquid! Dolorum porro perspiciatis ex quas rem placeat nisi consequuntur omnis quod nostrum aliquid, corrupti voluptate consequatur harum blanditiis ea hic.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem vero error deleniti a praesentium incidunt veritatis dolores quam! Magni quas quis perspiciatis consequuntur nostrum consectetur minima ullam deleniti in aspernatur!
 </p>

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
  background-image: url("https://i.postimg.cc/T3w238NW/lotus-design-n-print-lrk0l9w8r-I0-unsplash.jpg ");
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