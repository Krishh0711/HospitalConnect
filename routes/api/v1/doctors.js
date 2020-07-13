const express = require('express');

const router = express.Router();
const doctorApi = require('../../../controllers/api/v1/doctor_api');

//create new report
router.post('/create', doctorApi.create);
//log in doctor
router.post('/create-session', doctorApi.createSession);


module.exports = router;