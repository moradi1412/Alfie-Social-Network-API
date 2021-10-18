const router = require('express').Router();

const UserRoutes = require('./User-routes');
const ThoughtRoutes = require ('./thought-routes'); 


router.use('/User', UserRoutes);
router.use('/thoughts', ThoughtRoutes);

module.exports = router;
