import express from "express";
import controller from '../controller/products.js'
const router = express.Router()

router
    .route('/')
        .get(controller.users)
        .post(controller.newUser)

router
    .route('/:userID')
        .get(controller.getUser) 
        .patch(controller.editUser)
        .delete(controller.removeUser) 

        export default router