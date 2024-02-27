import bcrypt from 'bcrypt'
import { getProducts, getSingle, postProduct,deleteProduct,updateProduct,getUsers,getUser,addUser, updateUser, deleteUser } from "../models/database.js";

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
    },
    getUser: async (req,res)=>{
        res.send(await getUser(+req.params.userID))
    },
    newUser: async(req,res)=>{
        const {firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile}=req.body
        bcrypt.hash(userPass,10,async(err,hash)=>{
            if(err) throw err
            await addUser(firstName, lastName, userAge, gender, userRole,emailAdd,hash, userProfile)
            res.send({
                msg: "You have created an account"
            })
    })
    },
    editUser: async (req,res)=>{
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
    },
    removeUser: async (req,res)=>{
        await deleteUser(req.params.userID)
        res.json(await getUser())
    }

}