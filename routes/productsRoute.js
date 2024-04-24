const express = require("express");
const ProductController=require('../controllers/productController')
const Validate = require("../middlewares/validate");
const app = express.Router();
app.get("/get", ProductController.product_get);
app.post("/add",ProductController.product_add)
app.put("/update", Validate,ProductController.product_update);
app.delete("/delete", Validate, ProductController.product_delete);
module.exports=app
