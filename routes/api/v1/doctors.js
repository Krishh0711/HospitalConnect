const express = require('express');

const router = express.Router();
const doctorApi = require('../../../controllers/api/v1/doctor_api');

router.post('/create', doctorApi.create);
router.post('/create-session', doctorApi.createSession);
module.exports = router;