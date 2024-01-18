const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  country: {
    type: String,
    default: "indonesia",
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  isPopular: {
    type: Boolean,
    default: false,
  },

  description: {
    type: String,
    required: true,
  },

  unit: {
    type: String,
    default: "nigth",
  },

  sumBooking: {
    type: Number,
    default: 0,
  },

  categoryId: {
    type: ObjectId,
    ref: "Category",
  },
  imageId: [
    {
      type: ObjectId,
      ref: "Image",
    },
  ],

  featureId: [
    {
      type: ObjectId,
      ref: "Feature",
    },
  ],

  activityId: [
    {
      type: ObjectId,
      ref: "Activity",
    },
  ],
});

module.exports = mongoose.model("Item", itemsSchema);
