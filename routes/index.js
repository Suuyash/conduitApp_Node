const Router = require("express");
const route = Router();

route.use("/", require("./user"));
route.use("/articles", require("./article"));
route.use("/tags", require("./tags"));
module.exports = route;
