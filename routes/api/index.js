const router = require('express').Router();

const UserRoutes = require('./User-routes');


router.use('/User', UserRoutes);

module.exports = router;
