<template>
  <div class="container products" >
   <div class="row row-cols-1 row-cols-md-3 pt-5" >
    <div class="col">
      <div class="card" >
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>

   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .card{
     border: 5px solid #ddd
     
  }
  .card:hover{
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    transform: scale(1.1)
  }
  
</style>