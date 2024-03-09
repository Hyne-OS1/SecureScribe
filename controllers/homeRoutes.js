// const require variables for router, models, utils/auth
const router = require('express').Router();


// GET request for root URL ('/')


router.get('/', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');  
        return; 
    } else {
      req.session.save(() => {
          res.render('homepage', {
              user_name: req.session.user_name,
              logged_in: req.session.loggedIn
          });
      })
    };
});
// define route
// handle request
// try catch block
// findAll method
// include related data
// serialize data
// render homepage
// handle errrors

// GET function model id depending on what we wish to search by eg, attributes: [name],
// rest of code pending for update.


// with auth GET function 
// define a route
//  user middlewear 
// handle request
// try catch block
// find user data