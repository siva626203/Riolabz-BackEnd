const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: String,
  type: {
    type: String,
    default: "user",
  },
  phone: {
    type: Number,
    required: true,
    min: 1000000000,
    max: 9999999999,
  },
  address: {
    type: String,
    required: true,
  },
});
var UserModel;
try {
  UserModel = mongoose.model("users", UserSchema);
} catch (error) {
  UserModel = mongoose.model("users");
}
module.exports = UserModel;
