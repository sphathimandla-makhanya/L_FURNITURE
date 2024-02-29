import express from "express";
import controller from '../controller/products.js'
const router = express.Router()

router
    .route('/login')
        .post(controller.compareUser)
    

export default router