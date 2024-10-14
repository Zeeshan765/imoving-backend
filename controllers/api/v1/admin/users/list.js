const { aysncMiddleware } = require("../../../../../middleware/async");
const User = require('../../../../../models/user');
const { pagyParams, pagyRes } = require("../../../../../utils/pagination");
const { successResponse } = require("../../../../../utils/response");

const list = aysncMiddleware(async (req, res, next) => {
  const { page, perPage } = pagyParams(req.query.page, req.query.perPage);
  const { first_name, last_name, email,  sort, sortAs } = req.query;
  const query = {};
  const sortQuery = {};

  if (first_name) {
    query.first_name = { $regex: first_name, $options: "i" };
  }
  if (last_name) {
    query.last_name = { $regex: last_name, $options: "i" };
  }
  if (email) {
    query.email = { $regex: email, $options: "i" };
  }


  if (
    sort &&
    sortAs &&
    ["asc", "desc"].includes(sortAs) &&
    ["first_name", "last_name", "email"].includes(sort)
  ) {
    sortQuery[sort] = sortAs === "asc" ? 1 : -1;
  } else {
    sortQuery.first_name = 1;
  }

  const users = await User.find(query).select({ first_name: 1, last_name:1, email: 1 })
    .sort(sortQuery)
    .skip((page - 1) * perPage)
    .limit(perPage)
    .lean();

  const count = await User.countDocuments(query);
  const pagyUsers = pagyRes(users, count, page, perPage);

  return successResponse(res, "User Listing", { users: pagyUsers });
});

module.exports = list;
