const { aysncMiddleware } = require("../../../../../middleware/async");
const { successResponse } = require("../../../../../utils/response");
const Moving = require("../../../../../models/moving");

const create = aysncMiddleware(async (req, res, next) => {
  const moving = new Moving(req.body);
  await moving.save()

  return successResponse(res, "moving rates added Successfully", {
    moving,
  });
});

module.exports = create;
