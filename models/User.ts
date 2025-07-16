import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" }, // <-- add this line
  createdAt: { type: Date, default: Date.now },
},
{collection: "users"});


export default mongoose.models.User || mongoose.model("User", UserSchema);
