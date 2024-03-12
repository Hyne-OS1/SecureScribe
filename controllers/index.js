// const router require express

// require api routes
// in this examples require API folder and Homeroutes file
// these can be updated for other routes as needed.

const router = require("express").Router();
const userRoutes = require('./api/userRoutes');
const scribeRoutes = require("./api/scribeRoutes");
const Homeroutes = require('./homeRoutes');



router.use("/", Homeroutes);
router.use("/user-routes", userRoutes);
router.use("/scribe-routes", scribeRoutes);

// module.exports = router;
module.exports = router;
