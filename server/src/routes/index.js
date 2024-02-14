const { Router } = require("express");
const routerCountries = require("./routesCountries")
const routerActivities = require("./routesActivities")

const router = Router();

router.use("/countries",routerCountries)
router.use("/activities",routerActivities)

module.exports = router;
