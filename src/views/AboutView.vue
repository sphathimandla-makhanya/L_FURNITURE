<template>
  <div class="about" id="about">
      <h1 id="abouttext">About us</h1>

  </div>
        <div class="container">
        <p class="pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus, ratione excepturi, temporibus quo cum distinctio exercitationem blanditiis pariatur alias veniam? Reprehenderit doloribus porro voluptatibus repellat rerum velit pariatur nobis.</p>
        </div>
      <div class="container row"  id="div_cont">
        
        <div class="col-md-6 " id="mission_text">
          <h3>Our Mission</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam suscipit excepturi libero, dolore dolorum optio beatae cumque eius sed explicabo laudantium aliquam quos mollitia quod nihil animi nemo iste maxime.</p>
        </div>
        
       
        <img src="https://i.ibb.co/QmGJKGs/about-img.jpg" class="about_img " >
       
       
       <div class="col-md-6 pt-5" id="text_p">
         <h3>Our Passion</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis explicabo aperiam labore non magnam! Quae eveniet veritatis in nihil cum, itaque quasi perspiciatis, repudiandae earum, delectus possimus voluptatum culpa.</p>
       </div>
       
       <div class="col-md-6 pt-5" id="passion_text">
         <h3>Our Passion</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis explicabo aperiam labore non magnam! Quae eveniet veritatis in nihil cum, itaque quasi perspiciatis, repudiandae earum, delectus possimus voluptatum culpa.</p>
       </div>
      
      </div>
</template>

<style scoped>
  #about{
  background-image:linear-gradient(rgba(225, 214, 214, 0.1),#1f1f1f), url("https://i.ibb.co/FHFWHpp/about-background.jpg");
  margin:0;
  background-repeat:no-repeat;
  background-size:cover; 
  background-position:center;
  height:45vh;
  /* border-image:fill 0 linear-gradient(rgba(32, 31, 31, 0.2),#393636); */
  /* filter: brightness(0.4); */
  /* z-index: -1; */
  }

  #abouttext{
  text-shadow: 1px 2px 2px white;
  color:white;
  /* position: fixed; */
  padding-top: 5%;
  /* z-index: 1; */
  }

  .about_img{
    padding-top:2%;
    margin-left:5%;
    width:45%;
    padding-bottom: 20px;
    margin-bottom: 20px;
    height: 400px;
    border-radius: 50%
    
  }

  #mission_text{
    padding-top:10%;
   text-shadow: 1px 1px 1px black;
   background-color: rgb(250, 250, 210)
  }

  #text_p{
    text-shadow: 1px 1px 1px black;
  }

  #passion_text{

    padding-left:6%;
   text-shadow: 1px 1px 1px black;
   background-color: rgb(250, 250, 210)

  }

  #div_cont{
    margin-left:2%
  }
</style>  