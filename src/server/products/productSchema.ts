import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000,
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
        sold: {
          type: Number,
          required: false,
        },
      },
    ],
    nutritionalValue: {
      squirrels: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 10,
      },
      fats: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 10,
      },
      carbohydrates: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 10,
      },
      energyValue: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 10,
      },
    },
    statusLabel: {
      type: [String],
      required: false,
      minlength: 1,
      maxlength: 255,
    },
    category: {
      type: [String],
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    visited: {
      type: Number,
      required: false,
      default: 0,
    },
    menu: {
      type: [String],
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    composition: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
)

export const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)
