const jwt=require('jsonwebtoken')
const JWT_TOKEN=(value)=>{
    const token =jwt.sign({data:value}, process.env.JWT_SECRET, { expiresIn: "24h" });
    return token
}
module.exports=JWT_TOKEN