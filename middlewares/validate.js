const jwt = require("jsonwebtoken");
const validate = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ");
      if (jwt.verify(token[1], process.env.JWT_SECRET)) {
        next();
      } else {
        res.send({ message: "Token Expired" });
      }
    } else {
      res.send({ message: `Token not entered` });
    }
  } catch (error) {
     res.send({ message: "Token Expired" });
  }
};
module.exports=validate