const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Listing Name is Required"],
  },
  city: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  photo: {
    type: String,
    default: "",
  },
  availableUnits: {
    type: Number,
    default: 0,
  },
  wifi: {
    type: Boolean,
    default: false,
  },
  laundry: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Listing", listingSchema);
