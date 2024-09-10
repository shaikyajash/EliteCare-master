const mongoose = require("mongoose");
const {v4:uuidv4}  = require("uuid");


const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },

    productId: {
      type: String,
      required: true,
    },

    productDescription: { type: String },
    productQuantity: { type: Number, default: 0 },
    productImage: {
      type: String,
    },

    countInStock: {
      required: true,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);


productSchema.pre('save',(next)=>{
    if(!this.productId){
        productId = uuidv4();
    }
    next();
    
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
