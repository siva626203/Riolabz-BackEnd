const express=require('express')
const AdminController=require('../controllers/adminController')
const Validate=require('../middlewares/validate')
const app=express.Router()
app.post('/register',AdminController.admin_add)
app.get("/login", AdminController.admin_login);
app.put('/promote',Validate,AdminController.user_promote)
module.exports=app