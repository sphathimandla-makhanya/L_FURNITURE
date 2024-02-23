import { getProducts } from "../models/database.js";

export default{
    getAll: async (req,res)=>{
        res.send(await getProducts())
    }
}