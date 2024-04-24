const mongoose = require("mongoose");
const Connection = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => {
      console.log("Database Connection Success");
    })
};
module.exports=Connection
