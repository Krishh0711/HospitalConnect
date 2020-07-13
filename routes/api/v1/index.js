const express = require('express');

const router = express.Router();

//doctor route
router.use('/doctors', require('./doctors'));
//patient route
router.use('/patients', require('./patients'));
//report route
router.use('/reports', require('./reports'));

module.exports = router;