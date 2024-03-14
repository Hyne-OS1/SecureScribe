// const router require express

// require api routes
// in this examples require API folder and Homeroutes file
// these can be updated for other routes as needed.

const router = require("express").Router();


const apiRoutes = require('./api');


const homeRoutes = require("./homeRoutes")


//localhost:3001/
router.use("/", homeRoutes);



//localhost:3001/api
//localhost:3001/users
router.use("/api", apiRoutes);


// module.exports = router;
module.exports = router;
