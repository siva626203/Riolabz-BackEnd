const AdminModel = require("../schema/adminModel");
const bcrypt=require('bcrypt')
const UserModel=require('../schema/userModel')
const JWT=require('../helper/jsonwebtoken')
module.exports.admin_add=async(req,res)=>{
    try {
      const check=await AdminModel.findOne({email:req.body.email})
      if(check==null){
        const salt = 10;
        const password = await bcrypt.hash(req.body.password, salt);
        req.body.password = password;
        const admin =AdminModel(req.body);
        await admin.save();
       res.send({ message: "Register Success" });
      }else{
         res.send({ message: "email already exists" });
      }
    } catch (error) {
        res.send(error) 
    }
}
module.exports.admin_login = async (req, res) => {
  try {
    const admin = await AdminModel.findOne({email:req.query.email});
    if (bcrypt.compareSync(req.query.password, admin.password)) {
      admin.password=null
      const token=JWT(req.query.email)
      res.send({ message: "Login Success", data: admin,token:token });
    } else {
      res.send({ message: "Wrong Password" });
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports.user_promote = async (req, res) => {
  try {
    const userPromotion = await UserModel.updateOne({ email: req.body.email },{type:req.body.type});
    if (userPromotion.matchedCount !== 0) {
      res.send({
        message: `User Promoted to the ${req.body.type}`,
        data: userPromotion,
      });
    } else {
      res.send({ message: "Wrong Email" });
    }
    
  } catch (error) {
    res.send(error);
  }
};