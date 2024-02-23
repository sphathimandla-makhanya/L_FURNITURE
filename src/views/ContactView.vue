<template>
  <div>
    <h1 class="mt-5 mb-5" >Contact me</h1>
  <div class="container">

    <div class="row">
      <!-- Form Column -->
      <div class="col-md-6">
        <div class="container-form" id="formContainer">
          <form action="https://formspree.io/f/xrgwdqyv" target="_blank" method="post">
            <div class="mb-3">
              <label for="fname" class="form-label">First name:</label>
              <input type="text" class="form-control" id="fname" name="fname" placeholder="Your name.." required />
            </div>

            <div >
              <label for="lname" class="form-label">Last name:</label>
              <input type="text" class="form-control" id="lname" name="lname" placeholder="Your surname.." required />
            </div>

            <div >
              <label for="email" class="form-label">Email:</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="Your email.." required />
            </div>

            <div >
              <label for="comment" class="form-label">Comment:</label>
              <textarea class="form-control" id="comment" name="comment" placeholder="Type your message.." required></textarea>
            </div>

            <button type="submit" class="btn btn-dark">Submit</button>
          </form>
        </div>
      </div>

       <div class="col-md-6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur vitae praesentium eum rerum nemo aperiam. Quaerat, officia hic quae mollitia quia officiis suscipit aliquam, voluptatibus magnam minus, fugiat rem.</p>
      </div>

      <!-- Map Column -->
      <div class="col-md-6" id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6616.981553282911!2d18.5047453!3d-33.97992575000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4345b43aff1b%3A0xe95be7164febc1c5!2sCrawford%2C%20Cape%20Town%2C%207780!5e0!3m2!1sen!2sza!4v1705052153501!5m2!1sen!2sza" width="55%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
  </div>
  

</template>

<script>
export default {
}
</script>

<style scoped>
.container-form {
  max-width: 100%;
  padding: 2%;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}



/* #logoC {
    width: 25px;
    height: 30px;
    padding: 2px;
    mix-blend-mode: multiply;
    transition: transform 0.3s;
  } 
 #logoC:hover{
      transform: scale(1.2);
    }
    #infoCard{
      width:15%
    } */
    /* #logoI{
      max-width: 100%;
      border: 2px solid #ccc;
     background-color: white;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    } */

</style>
