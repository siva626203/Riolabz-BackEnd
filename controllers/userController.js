const UserModel = require("../schema/userModel");
const bcrypt = require("bcrypt");
const JWT=require('../helper/jsonwebtoken')
module.exports.user_add = async (req, res) => {
  try {
    const check = await UserModel.findOne({ email: req.body.email });
    if (check == null) {
      const salt = 10;
      const password = await bcrypt.hash(req.body.password, salt);
      req.body.password = password;
      const user =UserModel(req.body);
      await user.save();
      res.send({message:"Register Success"});
    } else {
      res.send({ message: "email already exists" });
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports.user_login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.query.email });
    if(user===null){
      res.send({message:"Wrong Email"})
    }else{
      if (bcrypt.compareSync(req.query.password, user.password)) {
        user.password = null;
         const token =JWT(req.query.address);
        res.send({ message: "Login Success", data: user ,token:token});
      } else {
        res.send({ message: "Wrong Password" });
      }
    }
    
  } catch (error) {
    res.send(error);
  }
};
module.exports.user_update = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (user === null) {
      res.send({ message: "Wrong Email" });
    }else{
    const user = await UserModel.updateOne({ email: req.body.email },req.body)
    res.send({message:"Update Success",data:user})
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports.user_get= async (req, res) => {
  try {
    const user = await UserModel.find({});
    res.send(user)
  } catch (error) {
    res.send(error);
  }
};
