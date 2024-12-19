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

require("../utils/dotenv");
const mongoose = require("mongoose");
const dbConnection = require("../config/connection");
const RateTable = require("../models/rateTable");

// Sample data for seeding
const sampleData = {
  rates: [
    {
      size: 201,
      rates: [
        { range: "200-500", pricePerMile: 6.55 },
        { range: "501-1000", pricePerMile: 5.38 },
        { range: "1001-1500", pricePerMile: 5.88 },
        { range: "1501-2000", pricePerMile: 5.66 },
        { range: "2001-2500", pricePerMile: 5.66 },
        { range: "2501-3000", pricePerMile: 6.53 },
        { range: "3001-3500", pricePerMile: 6.81 },
      ],
    },
    {
      size: 300,
      rates: [
        { range: "200-500", pricePerMile: 5.17 },
        { range: "501-1000", pricePerMile: 5.09 },
        { range: "1001-1500", pricePerMile: 5.59 },
        { range: "1501-2000", pricePerMile: 5.38 },
        { range: "2001-2500", pricePerMile: 5.56 },
        { range: "2501-3000", pricePerMile: 5.98 },
        { range: "3001-3500", pricePerMile: 5.89 },
      ],
    },
    {
      size: 400,
      rates: [
        { range: "200-500", pricePerMile: 4.63 },
        { range: "501-1000", pricePerMile: 4.59 },
        { range: "1001-1500", pricePerMile: 4.96 },
        { range: "1501-2000", pricePerMile: 4.86 },
        { range: "2001-2500", pricePerMile: 5.16 },
        { range: "2501-3000", pricePerMile: 6.03 },
        { range: "3001-3500", pricePerMile: 6.31 },
      ],
    },
    {
      size: 500,
      rates: [
        { range: "200-500", pricePerMile: 4.30 },
        { range: "501-1000", pricePerMile: 4.29 },
        { range: "1001-1500", pricePerMile: 4.79 },
        { range: "1501-2000", pricePerMile: 4.58 },
        { range: "2001-2500", pricePerMile: 4.86 },
        { range: "2501-3000", pricePerMile: 5.73 },
        { range: "3001-3500", pricePerMile: 6.01 },
      ],
    },
    {
      size: 600,
      rates: [
        { range: "200-500", pricePerMile: 4.26 },
        { range: "501-1000", pricePerMile: 4.23 },
        { range: "1001-1500", pricePerMile: 4.73 },
        { range: "1501-2000", pricePerMile: 4.52 },
        { range: "2001-2500", pricePerMile: 4.85 },
        { range: "2501-3000", pricePerMile: 5.68 },
        { range: "3001-3500", pricePerMile: 5.96 },
      ],
    },
    {
      size: 700,
      rates: [
        { range: "200-500", pricePerMile: 4.21 },
        { range: "501-1000", pricePerMile: 4.23 },
        { range: "1001-1500", pricePerMile: 4.73 },
        { range: "1501-2000", pricePerMile: 4.52 },
        { range: "2001-2500", pricePerMile: 4.85 },
        { range: "2501-3000", pricePerMile: 5.85 },
        { range: "3001-3500", pricePerMile: 5.96 },
      ],
    },
    {
      size: 800,
      rates: [
        { range: "200-500", pricePerMile: 4.06 },
        { range: "501-1000", pricePerMile: 4.09 },
        { range: "1001-1500", pricePerMile: 4.59 },
        { range: "1501-2000", pricePerMile: 4.38 },
        { range: "2001-2500", pricePerMile: 4.66 },
        { range: "2501-3000", pricePerMile: 5.53 },
        { range: "3001-3500", pricePerMile: 5.81 },
      ],
    },
    {
      size: 900,
      rates: [
        { range: "200-500", pricePerMile: 3.91 },
        { range: "501-1000", pricePerMile: 4.01 },
        { range: "1001-1500", pricePerMile: 4.49 },
        { range: "1501-2000", pricePerMile: 4.31 },
        { range: "2001-2500", pricePerMile: 4.55 },
        { range: "2501-3000", pricePerMile: 5.31 },
        { range: "3001-3500", pricePerMile: 5.70 },
      ],
    },
    {
      size: 1000,
      rates: [
        { range: "200-500", pricePerMile: 3.85 },
        { range: "501-1000", pricePerMile: 3.94 },
        { range: "1001-1500", pricePerMile: 4.39 },
        { range: "1501-2000", pricePerMile: 4.18 },
        { range: "2001-2500", pricePerMile: 4.46 },
        { range: "2501-3000", pricePerMile: 5.25 },
        { range: "3001-3500", pricePerMile: 5.61 },
      ],
    },
    {
      size: 1100,
      rates: [
        { range: "200-500", pricePerMile: 3.77 },
        { range: "501-1000", pricePerMile: 3.81 },
        { range: "1001-1500", pricePerMile: 4.31 },
        { range: "1501-2000", pricePerMile: 4.16 },
        { range: "2001-2500", pricePerMile: 4.36 },
        { range: "2501-3000", pricePerMile: 5.25 },
        { range: "3001-3500", pricePerMile: 5.48 },
      ],
    },
    {
      size: 1200,
      rates: [
        { range: "200-500", pricePerMile: 3.81 },
        { range: "501-1000", pricePerMile: 3.84 },
        { range: "1001-1500", pricePerMile: 4.36 },
        { range: "1501-2000", pricePerMile: 4.14 },
        { range: "2001-2500", pricePerMile: 4.49 },
        { range: "2501-3000", pricePerMile: 5.19 },
        { range: "3001-3500", pricePerMile: 5.58 },
      ],
    },
    {
      size: 1300,
      rates: [
        { range: "200-500", pricePerMile: 3.75 },
        { range: "501-1000", pricePerMile: 3.80 },
        { range: "1001-1500", pricePerMile: 4.30 },
        { range: "1501-2000", pricePerMile: 4.09 },
        { range: "2001-2500", pricePerMile: 4.43 },
        { range: "2501-3000", pricePerMile: 5.14 },
        { range: "3001-3500", pricePerMile: 5.52 },
      ],
    },
    {
      size: 1400,
      rates: [
        { range: "200-500", pricePerMile: 3.70 },
        { range: "501-1000", pricePerMile: 3.75 },
        { range: "1001-1500", pricePerMile: 4.25 },
        { range: "1501-2000", pricePerMile: 4.04 },
        { range: "2001-2500", pricePerMile: 4.33 },
        { range: "2501-3000", pricePerMile: 5.19 },
        { range: "3001-3500", pricePerMile: 5.48 },
      ],
    },
    {
      size: 1500,
      rates: [
        { range: "200-500", pricePerMile: 3.70 },
        { range: "501-1000", pricePerMile: 3.75 },
        { range: "1001-1500", pricePerMile: 4.25 },
        { range: "1501-2000", pricePerMile: 4.04 },
        { range: "2001-2500", pricePerMile: 4.33 },
        { range: "2501-3000", pricePerMile: 5.19 },
        { range: "3001-3500", pricePerMile: 5.48 },
      ],
    },
    {
      size: 1500,
      rates: [
        { range: "200-500", pricePerMile: 3.70 },
        { range: "501-1000", pricePerMile: 3.75 },
        { range: "1001-1500", pricePerMile: 4.25 },
        { range: "1501-2000", pricePerMile: 4.04 },
        { range: "2001-2500", pricePerMile: 4.33 },
        { range: "2501-3000", pricePerMile: 5.19 },
        { range: "3001-3500", pricePerMile: 5.48 },
      ],
    },
    {
      size: 1600,
      rates: [
        { range: "200-500", pricePerMile: 3.66 },
        { range: "501-1000", pricePerMile: 3.71 },
        { range: "1001-1500", pricePerMile: 4.21 },
        { range: "1501-2000", pricePerMile: 4.00 },
        { range: "2001-2500", pricePerMile: 4.29 },
        { range: "2501-3000", pricePerMile: 5.15 },
        { range: "3001-3500", pricePerMile: 5.44 },
      ],
    },
    {
      size: 1700,
      rates: [
        { range: "200-500", pricePerMile: 3.62 },
        { range: "501-1000", pricePerMile: 3.68 },
        { range: "1001-1500", pricePerMile: 4.19 },
        { range: "1501-2000", pricePerMile: 3.96 },
        { range: "2001-2500", pricePerMile: 4.25 },
        { range: "2501-3000", pricePerMile: 5.11 },
        { range: "3001-3500", pricePerMile: 5.40 },
      ],
    },
    {
      size: 1800,
      rates: [
        { range: "200-500", pricePerMile: 3.72 },
        { range: "501-1000", pricePerMile: 3.73 },
        { range: "1001-1500", pricePerMile: 4.19 },
        { range: "1501-2000", pricePerMile: 4.04 },
        { range: "2001-2500", pricePerMile: 4.29 },
        { range: "2501-3000", pricePerMile: 5.15 },
        { range: "3001-3500", pricePerMile: 5.44 },
      ],
    },
    {
      size: 2000,
      rates: [
        { range: "200-500", pricePerMile: 3.70 },
        { range: "501-1000", pricePerMile: 3.70 },
        { range: "1001-1500", pricePerMile: 4.19 },
        { range: "1501-2000", pricePerMile: 4.02 },
        { range: "2001-2500", pricePerMile: 4.32 },
        { range: "2501-3000", pricePerMile: 5.13 },
        { range: "3001-3500", pricePerMile: 5.45 },
      ],
    },
    {
      size: 2200,
      rates: [
        { range: "200-500", pricePerMile: 3.67 },
        { range: "501-1000", pricePerMile: 3.73 },
        { range: "1001-1500", pricePerMile: 4.23 },
        { range: "1501-2000", pricePerMile: 4.02 },
        { range: "2001-2500", pricePerMile: 4.31 },
        { range: "2501-3000", pricePerMile: 5.13 },
        { range: "3001-3500", pricePerMile: 5.46 },
      ],
    },
    {
      size: 2400,
      rates: [
        { range: "200-500", pricePerMile: 3.63 },
        { range: "501-1000", pricePerMile: 3.69 },
        { range: "1001-1500", pricePerMile: 4.19 },
        { range: "1501-2000", pricePerMile: 3.97 },
        { range: "2001-2500", pricePerMile: 4.28 },
        { range: "2501-3000", pricePerMile: 5.15 },
        { range: "3001-3500", pricePerMile: 5.43 },
      ],
    },
    {
      size: 2600,
      rates: [
        { range: "200-500", pricePerMile: 3.62 },
        { range: "501-1000", pricePerMile: 3.67 },
        { range: "1001-1500", pricePerMile: 4.17 },
        { range: "1501-2000", pricePerMile: 3.96 },
        { range: "2001-2500", pricePerMile: 4.26 },
        { range: "2501-3000", pricePerMile: 5.15 },
        { range: "3001-3500", pricePerMile: 5.43 },
      ],
    },
    {
      size: 2800,
      rates: [
        { range: "200-500", pricePerMile: 3.64 },
        { range: "501-1000", pricePerMile: 3.67 },
        { range: "1001-1500", pricePerMile: 4.17 },
        { range: "1501-2000", pricePerMile: 3.98 },
        { range: "2001-2500", pricePerMile: 4.26 },
        { range: "2501-3000", pricePerMile: 5.11 },
        { range: "3001-3500", pricePerMile: 5.40 },
      ],
    },
    {
      size: 3000,
      rates: [
        { range: "200-500", pricePerMile: 3.60 },
        { range: "501-1000", pricePerMile: 3.65 },
        { range: "1001-1500", pricePerMile: 4.15 },
        { range: "1501-2000", pricePerMile: 3.93 },
        { range: "2001-2500", pricePerMile: 4.24 },
        { range: "2501-3000", pricePerMile: 5.09 },
        { range: "3001-3500", pricePerMile: 5.39 },
      ],
    },
    {
      size: 3200,
      rates: [
        { range: "200-500", pricePerMile: 3.56 },
        { range: "501-1000", pricePerMile: 3.63 },
        { range: "1001-1500", pricePerMile: 4.13 },
        { range: "1501-2000", pricePerMile: 3.93 },
        { range: "2001-2500", pricePerMile: 4.21 },
        { range: "2501-3000", pricePerMile: 5.07 },
        { range: "3001-3500", pricePerMile: 5.36 },
      ],
    },
    {
      size: 3400,
      rates: [
        { range: "200-500", pricePerMile: 3.59 },
        { range: "501-1000", pricePerMile: 3.66 },
        { range: "1001-1500", pricePerMile: 4.16 },
        { range: "1501-2000", pricePerMile: 3.94 },
        { range: "2001-2500", pricePerMile: 4.25 },
        { range: "2501-3000", pricePerMile: 5.06 },
        { range: "3001-3500", pricePerMile: 5.31 },
      ],
    },
    {
      size: 3600,
      rates: [
        { range: "200-500", pricePerMile: 3.61 },
        { range: "501-1000", pricePerMile: 3.67 },
        { range: "1001-1500", pricePerMile: 4.17 },
        { range: "1501-2000", pricePerMile: 3.96 },
        { range: "2001-2500", pricePerMile: 4.25 },
        { range: "2501-3000", pricePerMile: 5.11 },
        { range: "3001-3500", pricePerMile: 5.40 },
      ],
    }

  ],
  originDestinations: [
    { destination: "0-500", fairPrice: 300 },
    { destination: "501-1000", fairPrice: 400 },
    { destination: "1001-1500", fairPrice: 500 },
    { destination: "1501-2000", fairPrice: 1000 },
    { destination: "2001-3000", fairPrice: 1500 },
    { destination: "3001-4000", fairPrice: 2000 },
  ],
  volumeConsulting: [
    { volumeRange: "300 cf", device:"Studio", consultingFee: '2100Lb' },
    { volumeRange: "350 cf", device:"1 Bedroom Apt", consultingFee: '2450Lb' },
    { volumeRange: "500 cf", device:"2 Bedroom Apt", consultingFee: '3500Lb' },
    { volumeRange: "700 cf", device:"2 Bedroom house", consultingFee: '4900Lb' },
    { volumeRange: "1000 cf", device:"3 Bedroom house", consultingFee: '7000Lb' },
    { volumeRange: "1500 cf", device:"4 Bedroom house", consultingFee: '10500Lb' },
    { volumeRange: "2000 cf", device:"5 Bedroom house", consultingFee: '14000Lb' },
    { volumeRange: "3001 cf", device:"6 Bedroom house", consultingFee: '21000Lb' },
  ],
  extraServices: [
    { service: "Extra Stop charges 5-50 Miles", charge: 250 },
    { service: "Stairs", charge: 75 },
    { service: "Long Carry", charge: 75 },
    { service: "Elevator Carry", charge: 100 },
    { service: "Shuttle charge Per C.F Min 350", charge: 1 },
  ],
  packing: [
    { item: "Full Packing Per C.F", price: 1.5 },
    { item: "Full Packing Promotion", price: 1.25 },
    { item: "Partial Packing Per C.F", price: 1.0 },
    { item: "Small box (1.5 Cf)  ", price: 12.0 },
    { item: "Medium box (3 Cf)", price: 14.0 },
    { item: "Large/Dish box (4.5 Cf)", price: 20.0 },
    { item: "Wardrobe box", price: 38.0 },
    { item: "TV 14-32 Crate", price: 30.0 },
    { item: "TV 32-60 Crate", price: 50.0 },
    { item: "TV 62 & up Crate", price: 60.0 },
    { item: "Small / Medium mirror", price: 25.0 },
    { item: "Large mirror", price: 29.0 },
    { item: "Mattress cover", price: 20.0 },
    { item: "Sofa cover", price: 20.0 },
    { item: "Small crate", price: 29.0 },
    { item: "Medium crate", price: 39.0 },
    { item: "Large crate", price: 49.0 },
    { item: "Shrink Wrap Per Item", price: 30.0 },
    { item: "Curio Cabinet Crate", price: 100.0 },
  ],
  bulkyItems: [
    { item: "Spinet/Upright piano", price: 250 },
    { item: "Baby grand/Grand piano", price: 400 },
    { item: "Motorcycle", price: 350 },
    { item: "Exercise Equipment", price: 250 },
    { item: "Jacuzzi", price: 350 },
    { item: "Hot Tab", price: 350 },
    { item: "Golf Card", price: 350 },
    { item: "Tool Box", price: 200 },
  ],
  promotionDiscounts: [
    { type: "Military Discount", discount: "6%" },
    { type: "Senior Discount", discount: "5%" },
    { type: "Medical Stuff Discount", discount: "4%" },
    { type: "Veteran Discount", discount: "3%" },
  ],
  storageSizes: [
    { size: "5*5*10", price: 250 },
    { size: "5*10*10", price: 500 },
    { size: "10*15*10", price: 1500 },
    { size: "10*20*10", price: 2000 },
    { size: "10*25*10", price: 2500 },
    { size: "10*30*10", price: 2400 },
  ],
  fuelCharge: 75,
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
      `Seeding process started in ${process.env.NODE_ENV} environment`,
    );
    await seedData(); // Await seeding process
    console.log(
      `Seeding process finished successfully in ${process.env.NODE_ENV} environment`,
    );
    console.info("Press Ctrl + C to exit!");
    mongoose.connection.close(); // Close the connection
  } else {
    console.error("Database connection failed. Unable to seed data.");
  }
});
