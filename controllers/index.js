// const router require express

// require api routes
// in this examples require API folder and Homeroutes file
// these can be updated for other routes as needed.

const router = require("express").Router();
const userRoutes = require('./user-routes');
const scribeRoutes = require("./scribe-routes")
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/user-routes", userRoutes);
router.use("/scribe-routes", scribeRoutes);

// module.exports = router;
module.exports = router;
