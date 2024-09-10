const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Reference to the Product model
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
    min: 1, // Ensure quantity is at least 1
    default: 1,
  }
  
});



const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  items: [cartItemSchema],
});

module.exports = mongoose.model('User', UserSchema);