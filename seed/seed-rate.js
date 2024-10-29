// const dbConnection = require("../config/connection");
// const RateTable = require("../models/rateTable");

// // Sample data for seeding
// const seedData = async (req, res) => {
//   const sampleData = {
//     rates: [
//       {
//         size: 201,
//         rates: [
//           { range: "201-500", pricePerMile: 6.55 },
//           { range: "501-1000", pricePerMile: 5.38 },
//           { range: "1001-2000", pricePerMile: 4.42 },
//           { range: "2001-3000", pricePerMile: 4.04 },
//         ],
//       },
//       {
//         size: 401,
//         rates: [
//           { range: "201-500", pricePerMile: 7.22 },
//           { range: "501-1000", pricePerMile: 5.83 },
//           { range: "1001-2000", pricePerMile: 5.15 },
//           { range: "2001-3000", pricePerMile: 4.89 },
//         ],
//       },
//     ],
//     originDestinations: [
//       { origin: "Chicago", destination: "Los Angeles", distance: 2000 },
//       { origin: "New York", destination: "Miami", distance: 1300 },
//     ],
//     volumeConsulting: [
//       { volumeRange: "0-500 CF", consultingFee: 150 },
//       { volumeRange: "501-1000 CF", consultingFee: 250 },
//       { volumeRange: "1001-1500 CF", consultingFee: 350 },
//     ],
//     extraServices: [
//       { service: "Assembly", charge: 50 },
//       { service: "Disassembly", charge: 40 },
//       { service: "Elevator Carry", charge: 100 },
//       { service: "Stair Carry", charge: 75 },
//     ],
//     packing: [
//       { item: "Box", pricePerCF: 2.5 },
//       { item: "Bubble Wrap", pricePerCF: 1.0 },
//       { item: "Packing Paper", pricePerCF: 0.5 },
//       { item: "Tape", pricePerCF: 0.25 },
//     ],
//     bulkyItems: [
//       { item: "Piano", price: 200 },
//       { item: "Safe", price: 150 },
//       { item: "Pool Table", price: 300 },
//       { item: "Hot Tub", price: 400 },
//     ],
//     promotionDiscounts: [
//       { type: "Holiday Discount", discount: 10 },
//       { type: "Referral Discount", discount: 5 },
//       { type: "First-Time Customer", discount: 15 },
//     ],
//     storageSizes: [
//       { size: "Small (5x5)", price: 50 },
//       { size: "Medium (10x10)", price: 100 },
//       { size: "Large (10x20)", price: 200 },
//     ],
//     fuelCharge: 75,
//   };

//   await RateTable.deleteMany({});
//   let rateData = await RateTable.create(sampleData);
//   console.log('rateData', rateData)
//   await rateData.save();
// };

// dbConnection().then(async (result) => {
//   if (result) {
//     console.log('result', result)
//     console.log(
//       `Seeding process started in ${process.env.NODE_ENV} environment`,
//     );

//    let test =  await seedData();
//    console.log('test', test)

//     console.log(
//       `Seeding process finished successfully in ${process.env.NODE_ENV} environment`,
//     );
//     console.info("Press Ctrl + C to exit!");
//   }
// });



require('../utils/dotenv')
const mongoose = require('mongoose');
const dbConnection = require("../config/connection");
const RateTable = require("../models/rateTable");

// Sample data for seeding
const sampleData = {
  rates: [
    {
      size: 201,
      rates: [
        { range: "201-500", pricePerMile: 6.55 },
        { range: "501-1000", pricePerMile: 5.38 },
        { range: "1001-2000", pricePerMile: 4.42 },
        { range: "2001-3000", pricePerMile: 4.04 },
      ],
    },
    {
      size: 401,
      rates: [
        { range: "201-500", pricePerMile: 7.22 },
        { range: "501-1000", pricePerMile: 5.83 },
        { range: "1001-2000", pricePerMile: 5.15 },
        { range: "2001-3000", pricePerMile: 4.89 },
      ],
    }
  ],
  originDestinations: [
    { origin: "Chicago", destination: "Los Angeles", distance: 2000 },
    { origin: "New York", destination: "Miami", distance: 1300 }
  ],
  volumeConsulting: [
    { volumeRange: "0-500 CF", consultingFee: 150 },
    { volumeRange: "501-1000 CF", consultingFee: 250 },
    { volumeRange: "1001-1500 CF", consultingFee: 350 }
  ],
  extraServices: [
    { service: "Assembly", charge: 50 },
    { service: "Disassembly", charge: 40 },
    { service: "Elevator Carry", charge: 100 },
    { service: "Stair Carry", charge: 75 }
  ],
  packing: [
    { item: "Box", pricePerCF: 2.5 },
    { item: "Bubble Wrap", pricePerCF: 1.0 },
    { item: "Packing Paper", pricePerCF: 0.5 },
    { item: "Tape", pricePerCF: 0.25 }
  ],
  bulkyItems: [
    { item: "Piano", price: 200 },
    { item: "Safe", price: 150 },
    { item: "Pool Table", price: 300 },
    { item: "Hot Tub", price: 400 }
  ],
  promotionDiscounts: [
    { type: "Holiday Discount", discount: 10 },
    { type: "Referral Discount", discount: 5 },
    { type: "First-Time Customer", discount: 15 }
  ],
  storageSizes: [
    { size: "Small (5x5)", price: 50 },
    { size: "Medium (10x10)", price: 100 },
    { size: "Large (10x20)", price: 200 }
  ],
  fuelCharge: 75
};

const seedData = async () => {
  try {
    await RateTable.deleteMany({}); // Clear existing data
    const rateData = await RateTable.create(sampleData);
  } catch (error) {
    console.error("Error during seeding:", error);
  }
};

// Establish database connection and then seed
dbConnection().then(async (connected) => {
  if (connected) {
    console.log(
      `Seeding process started in ${process.env.NODE_ENV} environment`
    );
    await seedData(); // Await seeding process
    console.log(
      `Seeding process finished successfully in ${process.env.NODE_ENV} environment`
    );
    console.info("Press Ctrl + C to exit!");
    mongoose.connection.close(); // Close the connection
  } else {
    console.error("Database connection failed. Unable to seed data.");
  }
});
