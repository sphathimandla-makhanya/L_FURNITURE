import { getProducts, getSingle, postProduct,deleteProduct,updateProduct,getUsers } from "../models/database.js";

export default{
    getAll: async (req,res)=>{
        res.send(await getProducts())
    },
    getSingle: async (req,res)=>{
        res.send(await getSingle(+req.params.prodID))
    }, 
    addProduct: async (req,res)=>{
        const {prodName, quantity, amount, category, prodUrl} = req.body
        const post =  await postProduct(prodName, quantity, amount, category, prodUrl)
        res.send(await getProducts())
    },
    deleteItem: async (req,res)=>{
        await deleteProduct(req.params.prodID)
        res.json(await getProducts())
    }, 
    editProduct: async (req,res)=>{
        const [product] = await getSingle(+req.params.prodID)
        let {prodName, quantity, amount, category, prodUrl} = req.body
        prodName ? prodName=prodName : {prodName}=product
        quantity ? quantity=quantity : {quantity}=product
        amount ? amount=amount : {amount}=product
        category ? category=category : {category}= product
        prodUrl ? prodUrl=prodUrl : {prodUrl}=product
        const edit = await updateProduct(prodName, quantity, amount, category, prodUrl,+req.params.prodID)
        res.json(await getProducts())
    },
    users: async (req,res)=>{
        res.send(await getUsers())
    }
}