import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    img: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    variables: [
      {
        weight: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        newPrice: {
          type: Number,
          required: false,
        },
        currency: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 10,
        },
        count: {
          type: Number,
          required: true,
        },
        statusLabel: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 255,
        },
        sold: {
          type: Number,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    visited: {
      type: Number,
      required: true,
      default: 0,
    },
    menu: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    composition: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000,
    },
  },
  { timestamps: true },
)

export const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)
