const express = require('express');

const router = express.Router();
const passport = require('passport');
const reportApi = require('../../../controllers/api/v1/report_api');


router.get('/:status',passport.authenticate('jwt',{session:false}), reportApi.reportByStatus);


module.exports = router;