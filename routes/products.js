import express from "express";
import controller from '../controller/products.js'
const router = express.Router()

router
    .route('/')
        .get(controller.getAll)
        .post(controller.addProduct)
    

router
    .route('/:prodID')
    .get(controller.getSingle) 
    .delete(controller.deleteItem)  
    .patch(controller.editProduct)


export default router