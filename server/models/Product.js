const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
      unique: true
    },
    product_description: {
      type: String,
      required: false
    },
    SKU: {
      type: String,
      required: true
    },
    inventory: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    NFT_id: {
      type: Schema.Types.ObjectId,
      ref: 'NFT',
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
)

const Product = model('Product', productSchema);

module.exports = Product;