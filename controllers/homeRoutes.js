// const require variables for router, models, utils/auth
const router = require('express').Router();
const { Scribe, User } = require('../models');
const withAuth = require('../utils/auth');


// THIS ROUTE IS OPERATIONAL 
// ( '/' ) TAKES YOU TO LANDING PAGE AUTOMATICALLY AT BASE ROUTE
// GET request for root URL ('/')
router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const scribeData = await Scribe.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
      // Serialize data so that it is suitable to be rendered in templates
      const scribe = scribeData.map((scribes) => scribes.get({ plain: true }));
      // Pass serialized data and session flag into template
      res.render('landingpage', {
        scribe,

      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // GET route for LOGIN handlebars page, will check if user is logged in or not.
    router.get('/login', (req, res) => {
      // Assuming you set up sessions middleware before this route handler
      req.session.user_id = '1'; // Just an example user id
      req.session.logged_in = true;
  
      console.log(req.session.logged_in);
      const logged_in = req.session.logged_in;
      // If the user is already logged in, redirect them to profile
      if (req.session.logged_in) {
          console.log("success user logged in");
           res.render('profile', {logged_in});
      }
  
      // If the user is not logged in, render the login page
      res.render('login');
  });

  // this is a basic route handler to grab the profile page this is needed for the get method on line 53
  router.get('/profile', (req, res) => {
    // Check if the user is logged in
    if (!req.session.logged_in) {
        // If not logged in, redirect to the login page
        return res.redirect('/login');
    }

    // Render the profile page
    res.render('profile');
});


// GET router for CREATEACCOUNT Handlebars page direct
router.get('/signup', (req, res) => {
  res.render('signup');
});


// POST method for CREATEACCOUNT based off user input fields
// router.post('/createAccount',  async (req, res) => {
//   const { name, email, password} = req.body;
//   try {

//   const newAccount = Account ({
//     name,
//     email,
//     password,
//   });
//   await newAccount.save();
//   res.redirect('profile');
  
// } catch (error) {
//   console.error('error cannot create account', error);
//   res.status(500).send('Error creating accoun. try again.');
// }
// });


module.exports = router;

