// import jwt from 'jsonwebtoken'
import {checkUser} from '../models/database.js'

const auth= async(req,res,next)=>{
    const {userPass,emailAdd} = req.body 
    const hashed = await checkUser(username) 
    bcrypt.compare(userPass, hashed, (err,result)=>{
        if (err) throw err 
        if(result === true){
            const {emailAdd} = req.body
            const token = jwt.sign({emailAdd:emailAdd}, 
            process.env.SECRET_KEY,{expiresIn:'1h'}) 
            res.send({
                token:token, 
                msg: 'You have logged in!!! YAY!'
            })
            next()
        }else{
            res.send({msg:'The username or password is incorrect'})
        }
    })
}

