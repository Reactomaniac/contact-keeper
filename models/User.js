const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    requried: true
  },
  email: {
    type: String,
    requried: true,
    unique: true
  },
  password: {
    type: String,
    requried: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("user", UserSchema)
