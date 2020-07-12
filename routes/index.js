const express = require('express');

const router = express.Router();

console.log('route is  running');


//for api routes
router.use('/api',require('./api'));


module.exports = router;