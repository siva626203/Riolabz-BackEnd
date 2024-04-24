const express=require('express')
const app=express()
const AdminRoute=require('./routes/adminRoute')
const UserRoute=require('./routes/userRoute')
const ProductRoute=require('./routes/productsRoute')
const Connection=require('./mongodb')
require("dotenv").config();
var cors = require("cors");
app.use(cors())
app.use(express.json())
app.use("/api/admin",AdminRoute)
app.use("/api/user", UserRoute);
app.use("/api/product", ProductRoute);
app.listen(4000,async()=>{
    Connection()
    console.log("Server Started 4000")
})
