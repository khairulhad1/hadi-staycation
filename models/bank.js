const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  rekeningNumber: {
    type: String,
    required: true,
  },

  bankName: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bank", bankSchema);
