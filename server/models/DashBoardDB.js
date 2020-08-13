const mongoose = require("mongoose")

const DashBoardSchema = mongoose.Schema({
  goods: {
    type: String,
  },
  price: {
    type: Number,
  },
  explan: {
    type: String,
  },
})

const DashBoard = mongoose.model("DashBoard", DashBoardSchema)

module.exports = { DashBoard }
