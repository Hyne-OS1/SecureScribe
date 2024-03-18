const router = require('express').Router();
const { User } = require('../../models');

// login/create account api route

// This function creates a new user from the request body, saves the user's ID and login status in the session, and sends back the user data if successful, or an error message if not.
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post function for log-in, checks password and email validation. If both params are filled, saves to session.
// login route - if the session variable 'user_id' is set, then we are already logged in
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST method for CREATEACCOUNT based off user input fields
router.post('/signup',  async (req, res) => {
  console.log("user post")
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  console.log(name);
  console.log(req.body);
  try {

  const newUser = await User.create({
    name, 
    email,
    password,
  });

  req.session.save(() => {
    req.session.user_id = newUser.id;
    req.session.logged_in = true;


    res.status(200).json(newUser);
  });
  
} catch (error) {
  console.error('error cannot create account', error);
  res.status(500).send('Error creating account. try again.');
}
});



//  logout route - clear out the session variables and redirect to the homepage.
// this will be on homepage handlebar
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;







