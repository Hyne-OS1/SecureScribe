const router = require('express').Router();
const { Scribe } = require('../../models');
const withAuth = require('../../utils/auth');






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







router.delete('/:id', withAuth, async (req, res) => {
  try {
    const ScribeData = await Scribe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!ScribeData) {
      res.status(404).json({ message: 'No Scribe found with this id!' });
      return;
    }
    res.status(200).json(ScribeData);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;




















