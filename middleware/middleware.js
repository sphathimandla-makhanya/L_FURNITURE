// import {checkUser} from '../models/database.js'
// import jwt from 'jsonwebtoken'

// jwt.verify(token, 'my_secret_key',(err, user)=>{
//     if(err) return res.sendStatus(403)
//     req.user = user
//     next()
// })

// const compareUser = async(req,res,next)=>{
//     const {userPass,emailAdd} = req.body 
//     const hashed = await checkUser(emailAdd) 
//     bcrypt.compare(userPass, hashed, (err,result)=>{
//         if (err) throw err 
//         if(result === true){
//             const {emailAdd} = req.body
//             const token = jwt.sign({emailAdd:emailAdd}, 
//             process.env.SECRET_KEY,{expiresIn:'2h'}) 
//             res.send({
//                 token:token, 
//                 msg: 'You have logged in!!! YAY!'
//             })
//             next()
//         }else{
//             res.send({msg:'The username or password is incorrect'})
//         }
//     })
// }

// export {compareUser}
