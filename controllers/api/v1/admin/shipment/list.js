const { aysncMiddleware } = require("../../../../../middleware/async");
const Shipment = require('../../../../../models/shipment');
const User = require('../../../../../models/user');
const { pagyParams, pagyRes } = require("../../../../../utils/pagination");
const { successResponse } = require("../../../../../utils/response");

const list = aysncMiddleware(async (req, res, next) => {
  const { page, perPage } = pagyParams(req.query.page, req.query.perPage);
  const { type, totalPrice, status,  sort, sortAs } = req.query;
console.log('called-------------')
  console.log('req.query', req.query)
  const query = {};
  const sortQuery = {};

  if (type) {
    query.type = { $regex: type, $options: "i" };
  }
  if (totalPrice) {
    query.totalPrice = { $regex: totalPrice, $options: "i" };
  }
  if (status) {
    query.status = { $regex: status, $options: "i" };
  }


  if (
    sort &&
    sortAs &&
    ["asc", "desc"].includes(sortAs) &&
    ["type", "totalPrice", "status"].includes(sort)
  ) {
    sortQuery[sort] = sortAs === "asc" ? 1 : -1;
  } else {
    sortQuery.type = 1;
  }

  const users = await Shipment.find(query).select({ type: 1, totalPrice:1, status: 1 })
    .sort(sortQuery)
    .skip((page - 1) * perPage)
    .limit(perPage)
    .lean();

  const count = await Shipment.countDocuments(query);
  const pagyUsers = pagyRes(users, count, page, perPage);

  return successResponse(res, "Shipment Listing", { users: pagyUsers });
});

module.exports = list;
