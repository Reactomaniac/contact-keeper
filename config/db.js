const mongoose = require("mongoose")
const config = require("config")

const db = config.get("mongoURI")

const connectDB = async () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      user: "junaid",
      pass: "junaid",
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log("Trying to connect to MongoDB")
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  } finally {
    console.log("MongoDB connected..")
  }
}

module.exports = connectDB
