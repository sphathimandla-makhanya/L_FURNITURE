import {pool} from '../config/config.js'

const getProducts = async ()=>{
    const [response] = await pool.query(`
    SELECT * FROM products`)
    return response
}

export {getProducts}
