const { aysncMiddleware } = require("../../../../../middleware/async");
const RateTable = require('../../../../../models/rateTable');


const getTable = aysncMiddleware(async (req, res, next) => {
  try {
    const rateTable = await RateTable.findOne(); 
    res.status(200).json(rateTable);
  } catch (error) {
    console.log('error', error)
  }
});

module.exports = getTable;
