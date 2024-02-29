<template>
  <div class="about mb-5" id="about">
      <h1 id="abouttext">WHO ARE WE?</h1>

  </div>
       
      <div class="container row"  id="div_cont">
        
        <div class="col-md-6" id="mission_text">
          <h3>About Us</h3>
           Founded in 2024, Luxurious Furniture began with a simple mission: to make stylish and affordable furniture accessible to     everyone. What started as a small family-owned business has grown into a trusted destination for furniture enthusiasts across the globe.
          <p>At Luxurious Furniture, we believe that every home deserves to be a reflection of its inhabitants – a space that is not only functional but also beautiful, comfortable, and inspiring. That's why we're dedicated to providing high-quality furniture and home decor that helps our customers turn their houses into homes they love.
          </p>       
         
          </div>
        
       
        <img src="https://i.ibb.co/QmGJKGs/about-img.jpg" class="about_img " >
       
       
       <div class="col-md-6 pt-5" id="text_p">
         <h3>Our Mission</h3>
         <p>At Luxurious Furniture, our mission is to enhance the lives of our customers by providing them with high-quality furniture that elevates their homes and inspires their daily lives.By helping our customers create homes they love, we aim to foster a sense of comfort, joy, and inspiration in their everyday lives. Additionally, we strive to contribute positively to our community by supporting local artisans and fostering a culture of creativity and innovation.

        </p> </div>
       
       <div class="col-md-6 pt-5" id="passion_text">
         <h3>Our Passion</h3>
         <p>At Luxurious Furniture, furniture isn't just our business – it's our passion, our obsession, and our way of life. From the moment you step into our showroom or browse our online catalog, you'll feel the palpable energy and excitement that drives us to curate the most exquisite pieces for your home.</p>       </div>
      
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
    padding-top:5%;
   text-shadow: 1px 1px 1px black;
   background-color: rgb(250, 250, 210)
  }

  #text_p{
    text-shadow: 1px 1px 1px black;
  }

  #passion_text{
   text-shadow: 1px 1px 1px black;
   background-color: rgb(250, 250, 210)

  }

  #div_cont{
    padding-left:15%
  }
</style>  