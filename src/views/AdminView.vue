<template>
  <div class="admin pt-4">
    <div class="container-fluid ">
       <!-- <input type="text" placeholder="Item name..." ><br><br>
       <input type="number" placeholder="Qantitiy..." >
       <input type="number" placeholder="Amount..." ><br><br>
       <input type="text" placeholder="Category..." >
       <input type="text" placeholder="img url..." ><br><br> -->
     
      <button type="button" class="btn btn-primary m-2 " data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add item</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" modal-body>
        <input type="text" placeholder="Name" data-name name="item name" id="item name">
        <input type="text" placeholder="description" data-description name="item name" id="item name">
        <input type="text" placeholder="quantity" data-Q name="item name" id="item name">
        <input type="text" placeholder="price" data-price name="item name" id="item name">
        <input type="text" placeholder="url" data-url name="item name" id="item name">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" data-modal class="btn btn-primary" save>Save changes</button>
      </div>
    </div>
  </div>
</div>

    <table class="table table-hover">
    <thead>
      <tr>
    
        <th scope="col">Item</th>
        <th scope="col">Quantity</th>
        <th scope="col">Amount</th>
        <th scope="col">Category</th>
        <th scope="col">img</th>
      </tr>
    </thead>
    <tbody>
      <tr scope="row">
        <th>1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td><img src=""></td>
        <!-- <td> -->
          <!-- <button>x</button> -->
          <!-- <button class="m-2">edit</button> -->
        <!-- </td> -->
        <!-- <td><button>edit</button></td> -->
      </tr>
     
     
    </tbody>
  
    </table>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>