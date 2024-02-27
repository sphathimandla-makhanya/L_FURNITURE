import {pool} from '../config/config.js'

const getProducts = async ()=>{
    const [response] = await pool.query(`
    SELECT * FROM products`)
    return response
}
const getSingle = async(prodID)=>{
    let [response]= await pool.query(`
    SELECT * FROM products 
    WHERE prodID=?
    `, [prodID])
    return response
}

const postProduct= async(prodName, quantity, amount, category, prodUrl)=>{
    let [item] = await pool.query(`
    INSERT INTO products (prodName, quantity, amount, category, prodUrl) VALUES (?,?,?,?,?)
    `,[prodName, quantity, amount, category, prodUrl])
    return getProducts(item.insertID)
}

const deleteProduct = async(prodID)=>{
    const [item] = await pool.query(`
    DELETE FROM products where prodID =?
    `,[prodID])
    return getProducts()
}

const updateProduct = async(prodName, quantity, amount, category, prodUrl,prodID)=>{
    const [product] = await pool.query(`
    UPDATE products 
    SET prodName=?, quantity=?, amount=?, category=?, prodUrl=?
    WHERE (prodID=?)`,
    [prodName, quantity, amount, category, prodUrl,prodID])
    return updateProduct
}

// Creating users
const addUser = async(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile)=>{
    const [user] = await pool.query(`
    INSERT INTO users (firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile)
    VALUES(?,?,?,?,?,?,?,?)`,
    [firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile])
}

const getUsers = async()=>{
    const [result] = await pool.query(`
        SELECT *
        FROM users
    `)
    return result
}

const getUser = async(userID)=>{
    let [response]= await pool.query(`
    SELECT * FROM users 
    WHERE userID=?
    `, [userID])
    return response
}

const updateUser = async(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile,userID)=>{
    const [user] = await pool.query(`
    UPDATE users 
    SET firstName=?, lastName=?, userAge=?, gender=?, userRole=?, emailAdd=?, userPass=?, userProfile=?
    WHERE (userID=?)`,
    [firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile,userID])
    return updateUser
}

const checkUser = async(emailAdd)=>{
    const [[{userPass}]] = await pool.query(`
    SELECT userPass FROM users WHERE emailAdd = ?`,
    [emailAdd])
    return userPass
}
console.log(await checkUser('tauhs@gmail.com'));

const deleteUser = async(userID)=>{
    const [item] = await pool.query(`
    DELETE FROM users where userID =?
    `,[userID])
    return getUsers()
}


export {getProducts,getSingle,postProduct,deleteProduct,updateProduct,getUsers,getUser,addUser,updateUser,checkUser,deleteUser}
