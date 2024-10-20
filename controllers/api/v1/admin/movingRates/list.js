const { aysncMiddleware } = require("../../../../../middleware/async");
const Moving = require('../../../../../models/moving');
const User = require('../../../../../models/user');
const { pagyParams, pagyRes } = require("../../../../../utils/pagination");
const { successResponse } = require("../../../../../utils/response");

const list = aysncMiddleware(async (req, res, next) => {
  const { page, perPage } = pagyParams(req.query.page, req.query.perPage);
  const { source_cty, destination_city, relocation_company,  sort, sortAs } = req.query;
  const query = {};
  const sortQuery = {};

  if (source_cty) {
    query.source_cty = { $regex: source_cty, $options: "i" };
  }
  if (destination_city) {
    query.destination_city = { $regex: destination_city, $options: "i" };
  }
  if (relocation_company) {
    query.relocation_company = { $regex: relocation_company, $options: "i" };
  }

  console.log('req.query', req.query)

  if (
    sort &&
    sortAs &&
    ["asc", "desc"].includes(sortAs) &&
    ["source_cty", "destination_city", "relocation_company"].includes(sort)
  ) {
    sortQuery[sort] = sortAs === "asc" ? 1 : -1;
  } else {
    sortQuery.source_cty = 1;
  }

  const users = await Moving.find(query).select({ source_cty: 1, destination_city:1, relocation_company: 1 })
    .sort(sortQuery)
    .skip((page - 1) * perPage)
    .limit(perPage)
    .lean();

    console.log('users', users)

  const count = await Moving.countDocuments(query);
  const pagyUsers = pagyRes(users, count, page, perPage);

  return successResponse(res, "Moving Listing", { users: pagyUsers });
});

module.exports = list;
