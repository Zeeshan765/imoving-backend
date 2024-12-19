const mongoose = require('mongoose');


const rateSchema = new mongoose.Schema({
  size: Number,
  rates: [
    {
      range: String,
      pricePerMile: Number
    }
  ]
});

const originDestinationSchema = new mongoose.Schema({
  destination: String,
  fairPrice: Number
});

const volumeConsultingSchema = new mongoose.Schema({
  volumeRange: String,
  device:String,
  consultingFee: String
});

// Extra Service Schema
const extraServiceSchema = new mongoose.Schema({
  service: String,
  charge: Number
});

// Packing Schema
const packingSchema = new mongoose.Schema({
  item: String,
  price: Number
});

// Bulky Item Schema
const bulkyItemSchema = new mongoose.Schema({
  item: String,
  price: Number
});

// Promotion Discount Schema
const promotionDiscountSchema = new mongoose.Schema({
  type: String,
  discount: String
});

// Storage Schema
const storageSchema = new mongoose.Schema({
  size: String,
  price: Number
});

// Main Rate Table Schema
const rateTableSchema = new mongoose.Schema({
  rates: [rateSchema],
  originDestinations: [originDestinationSchema],
  volumeConsulting: [volumeConsultingSchema],
  extraServices: [extraServiceSchema],
  packing: [packingSchema],
  bulkyItems: [bulkyItemSchema],
  promotionDiscounts: [promotionDiscountSchema],
  storageSizes: [storageSchema],
  fuelCharge: Number
});

const RateTable = mongoose.model('RateTable', rateTableSchema);

module.exports = RateTable;
