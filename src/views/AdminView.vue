<template>
  <div class="admin pt-4">
    <div class="container-fluid ">
       <!-- <input type="text" placeholder="Item name..." ><br><br>
       <input type="number" placeholder="Qantitiy..." >
       <input type="number" placeholder="Amount..." ><br><br>
       <input type="text" placeholder="Category..." >
       <input type="text" placeholder="img url..." ><br><br> -->
      <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
      <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button>

     
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
     <div class="modal-content">
      <div class="modal-header">
        <!-- <h5 class="modal-title" id="exampleModalLabel">Add item</h5> -->
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
        <td><button type="button" class="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
          </button>
        </td>
       
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