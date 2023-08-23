import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isLoggedIn: { type: Boolean, default: false },
  isAdmin: Boolean,
  registeredAT: Date,
});

//This is important to manage existing models, otherwise you will get error.
const User = mongoose.models.User || mongoose.model("User", userSchema);
// here model name is 'User', and it will be converted to lowercase plural 'user'
export default User;
