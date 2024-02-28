import express from "express";
import controller from '../controller/products.js'
const router = express.Router()

router
    .route('/login')
        .post(controller.users)
    

export default router