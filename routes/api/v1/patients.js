const express = require('express');

const router = express.Router();
const passport = require('passport');
const patientApi = require('../../../controllers/api/v1/patient_api');

router.post('/register',passport.authenticate('jwt',{session:false}), patientApi.register);
router.post('/:id/create-report',passport.authenticate('jwt',{session:false}), patientApi.createReport);
router.get('/:id/all-reports',passport.authenticate('jwt',{session:false}), patientApi.getAllReports);

module.exports = router;