// const require variables for router, models, utils/auth
const router = require('express').Router();
const { Scribe, User } = require('../models');
const withAuth = require('../utils/auth');



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
      res.render('homepage', {
        scribe,
        // logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/scribe/:id', async (req, res) => {
    try {
      const scribeData = await Scribe.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });

  



      router.get('/scribe', withAuth, async (req, res) => {
        try {
          // Find the logged in user based on the session ID
          const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Project }],
          });
          const user = userData.get({ plain: true });
          res.render('scribe', {
            ...user,
            logged_in: true
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });
      router.get('/login', (req, res) => {
        // If the user is already logged in, redirect the request to another route
        if (req.session.logged_in) {
          res.redirect('/profile');
          return;
        }
        res.render('login');
      });
  
  
  
  
  const scribe = ScribeData.get({ plain: true });
      res.render('Scribe', {
        ...project,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
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

module.exports = router;