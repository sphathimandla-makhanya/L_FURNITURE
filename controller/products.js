import bcrypt from 'bcrypt'
import { getProducts, getSingle, postProduct,deleteProduct,updateProduct,getUsers,getUser,addUser, updateUser, deleteUser, checkUser } from "../models/database.js";

export default{
    getAll: async (req,res)=>{
        try{
            res.send(await getProducts())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    },
    getSingle: async (req,res)=>{
        try{
            res.send(await getSingle(+req.params.prodID))
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    }, 
    addProduct: async (req,res)=>{
        try{
            const {prodName, quantity, amount, category, prodUrl} = req.body
            const post =  await postProduct(prodName, quantity, amount, category, prodUrl)
            res.send(await getProducts())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    },
    deleteItem: async (req,res)=>{
        try{
            await deleteProduct(req.params.prodID)
            res.json(await getProducts())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    }, 
    editProduct: async (req,res)=>{
        try{
            const [product] = await getSingle(+req.params.prodID)
            let {prodName, quantity, amount, category, prodUrl} = req.body
            prodName ? prodName=prodName : {prodName}=product
            quantity ? quantity=quantity : {quantity}=product
            amount ? amount=amount : {amount}=product
            category ? category=category : {category}= product
            prodUrl ? prodUrl=prodUrl : {prodUrl}=product
            const edit = await updateProduct(prodName, quantity, amount, category, prodUrl,+req.params.prodID)
            res.json(await getProducts())
        }catch(error){
            console.log(error)
                res.status(500).json({error:'Internal server error'})
        }
        },
    users: async (req,res)=>{
        try{
            res.send(await getUsers())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    },
    getUser: async (req,res)=>{
        try{
            res.send(await getUser(+req.params.userID))
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    },
    newUser: async(req,res)=>{
        try{
            const {firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile}=req.body
            bcrypt.hash(userPass,10,async(err,hash)=>{
                if(err) throw err
                await addUser(firstName, lastName, userAge, gender, userRole,emailAdd,hash, userProfile)
                res.send({
                    msg: "You have created an account"
                })
                 })
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    },
    editUser: async (req,res)=>{
        try{
            const [user] = await getUser(+req.params.userID)
            let {firstName, lastName, userAge, gender, userRole,emailAdd,userPass, userProfile} = req.body
            firstName ? firstName=firstName : {firstName}=user
            lastName ? lastName=lastName : {lastName}=user
            userAge ? userAge=userAge : {userAge}=user
            gender ? gender=gender : {gender}= user
            userRole ? userRole=userRole : {userRole}=user
            emailAdd ? emailAdd=emailAdd : {emailAdd}=user
            userPass ? userPass=userPass : {userPass}=user
            userProfile ? userProfile=userProfile : {userProfile}=user
            const edit = await updateUser(firstName, lastName, userAge, gender, userRole,emailAdd,userPass, userProfile,+req.params.userID)
            res.json(await getUsers())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
            }
        },

    
    removeUser: async (req,res)=>{
        try{
            await deleteUser(req.params.userID)
            res.json(await getUser())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    }

}
