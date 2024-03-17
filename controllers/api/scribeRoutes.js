const router = require('express').Router();
const { Scribe, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  // find all scribes for user
  try {
    const scribeData = await Scribe.findAll({
      include: [{ model: User }]
    });

    if (scribeData) {
      res.status(200).json(scribeData);
      return;
    }

    res.status(404).json({ message: 'No scribe found with that ID!' });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find all scribes for user
  try {
    const scribeData = await Scribe.findByPk(req.params.id, {
      include: [{ model: User }]
    });

    if (scribeData) {
      res.status(200).json(scribeData);
      return;
    }

    res.status(404).json({ message: 'No scribe found with that ID!' });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newScribe = await Scribe.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newScribe);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', (req, res) => {
  // Calls the update method on the scribe model
  Scribe.update(req.body,
    {
      // Gets the scribes based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedScribe) => {
      // Sends the updated scribe as a json response
      res.json(updatedScribe);
    })
    .catch((err) => res.json(err));
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const scribeData = await Scribe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!scribeData) {
      res.status(404).json({ message: 'No Scribe found with this id!' });
      return;
    }
    res.status(200).json(scribeData);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;




















