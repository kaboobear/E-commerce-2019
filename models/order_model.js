const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderModel = new Schema(
  {
    cart: {
      type: Object,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    delivery: {
      type: String,
      required: true,
    },
    payment: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    // mail:{
    //     type:String,
    //     required:true,
    // },
    phone: {
      type: String,
      required: true,
    },
    // country:{
    //     type:String,
    //     required:true,
    // },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'new',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Order', OrderModel);
