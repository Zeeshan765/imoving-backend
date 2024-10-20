const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movingSchema = new Schema(
  {
    source_cty: { type: String, default: "" },
    destination_city: { type: String, default: "" },
    total_price: { type: Number, default: 0 },
    self_packing: { type: Number, default: 0 },
    full_packing: { type: Number, default: 0 },
    packing_unpacking: { type: Number, default: 0 },
    exactDay_pickup: { type: Number, default: 0 },
    twoday_pickup: { type: Number, default: 0 },
    threeday_pickup: { type: Number, default: 0 },
    standard_deleivery: { type: Number, default: 0 },
    expedite_deleivery: { type: Number, default: 0 },
    straight_deleivery: { type: Number, default: 0 },
    distance: { type: Number, default: 0 },
    relocation_company: { type: String, default: "" },
  },
  {
    timestamps: true,
  },
);

const Moving = mongoose.model("Moving", movingSchema);

module.exports = Moving;
