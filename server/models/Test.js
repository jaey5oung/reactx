const mongoose = require("mongoose")

const testSchema = mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
})

const Test = mongoose.model("Test", testSchema)

module.exports = { Test }
