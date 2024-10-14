const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shipmentSchema = new Schema(
  {
    address: { type: String, default: "" },
    dropaddress: { type: String, default: "" },
    email: { type: String, default: "" },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    phone: { type: String, default: "" },
    type: { type: String, default: "" },
    mover_size: { type: String, default: "" },
    mover_from: { type: String, default: "" },
    remarks: { type: String, default: "" },
    dropremarks: { type: String, default: "" },
    buildingInsurance: { type: Boolean, default: false },
    dropbuildingInsurance: { type: Boolean, default: false },
    elevator: { type: Boolean, default: false },
    dropelevator: { type: Boolean, default: false },
    longCarry: { type: Number, default: 0 },
    droplongCarry: { type: Number, default: 0 },
    shuttle: { type: Boolean, default: false },
    dropshuttle: { type: Boolean, default: false },
    stairs: { type: Number, default: 0 },
    dropstairs: { type: Number, default: 0 },
    title: { type: String, default: "" },
    totalPrice: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["pending","accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = Shipment;
