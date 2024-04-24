const mongoose = require("mongoose");
const bcrypt=require('bcrypt')

const AdminSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
  },
  type: {
    type: String,
    default: "admin",
  },
});
var AdminModel;
try {
    AdminModel=mongoose.model('admin',AdminSchema)
} catch (error) {
    AdminModel = mongoose.model("admin");   
}
module.exports=AdminModel