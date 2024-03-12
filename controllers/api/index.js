const router = require('express').Router();
const userRoutes = require('./userRoutes');
const scribeRoutes = require('./scribeRoutes');

router.use('/users', userRoutes);
router.use('/scribes', scribeRoutes);

module.exports = router;
