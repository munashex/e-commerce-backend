import express from 'express' 
import cors from 'cors' 
import dotenv from 'dotenv' 
import mongoose from 'mongoose'
dotenv.config()
import seedRouter from './routes/seedRoutes.js' 
import ProductRoute from './routes/Product.js' 
import userRoute from './routes/UserRoute.js' 
import OrderRoute from './routes/Order.js'


const app = express()   
app.use(express.json())  
app.use(express.urlencoded({extended: true}))  
app.use(cors()) 

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('connected')) 
.catch((err) => console.log(err))

app.get('/api/keys/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

app.use('/api/seed', seedRouter) 
app.use('/api/products', ProductRoute)  
app.use('/api/users', userRoute) 
app.use('/api/orders', OrderRoute)

    



app.listen(3000, () => console.log('server is running on port 3000'))