import express from 'express' 
import Product from '../model/productModel.js'
const seedRouter = express.Router() 
import data from '../data.js'  
import User from '../model/userModel.js'

seedRouter.get('/', async(req, res) => {
    
   const user = await Product.insertMany(data.products) 
   res.send(user)
})

export default seedRouter