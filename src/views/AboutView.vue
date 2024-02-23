<template>
  <div class="about p-4 " id="about">
    <div id="about_bod">
    </div>
  </div>
      <div id="abouttext" >
        <h1>About us</h1>
        <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus, ratione excepturi, temporibus quo cum distinctio exercitationem blanditiis pariatur alias veniam? Reprehenderit doloribus porro voluptatibus repellat rerum velit pariatur nobis.</p>
        <h3>Mission</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam suscipit excepturi libero, dolore dolorum optio beatae cumque eius sed explicabo laudantium aliquam quos mollitia quod nihil animi nemo iste maxime.</p>
        <h3>Passion</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis explicabo aperiam labore non magnam! Quae eveniet veritatis in nihil cum, itaque quasi perspiciatis, repudiandae earum, delectus possimus voluptatum culpa.</p>
      </div>
</template>

<style scoped>
  #about{
  background-image: url("https://i.ibb.co/FHFWHpp/about-background.jpg");
  margin:0;
  background-repeat:no-repeat;
  background-size:cover; 
  background-position:center;
  height:86.5vh;
  border-image:fill 0 linear-gradient(#0003,#000);
  /* filter: brightness(0.4); */
  z-index: -1;
  }

  #abouttext{
    /* text-shadow: 2px 2px 2px white; */
  color:white;
  position: fixed;
  top: 20%;
  z-index: 1;
  }
</style>  