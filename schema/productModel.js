const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
 name:{
  type:String,
  required:true
 },
 price:{
  type:Number,
  required:true
 },
 category:{
  type:String,
  default:"food"
 }
});
var ProductModel;
try {
  ProductModel = mongoose.model("products", ProductSchema);
} catch (error) {
  ProductModel = mongoose.model("products");
}
module.exports = ProductModel;
