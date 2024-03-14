// const router require express

// require api routes
// in this examples require API folder and Homeroutes file
// these can be updated for other routes as needed.

const router = require("express").Router();

const userRoutes = require('./api/userRoutes');
const scribeRoutes = require("./api/scribeRoutes")
const homeRoutes = require("./homeRoutes")



router.use("/", homeRoutes);




router.use("/userRoutes", userRoutes);
router.use("/scribeRoutes", scribeRoutes);

// module.exports = router;
module.exports = router;
