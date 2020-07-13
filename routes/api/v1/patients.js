const express = require('express');

const router = express.Router();
const passport = require('passport');
const patientApi = require('../../../controllers/api/v1/patient_api');

//register patient route
router.post('/register',passport.authenticate('jwt',{session:false}), patientApi.register);
//create report of patient
router.post('/:id/create-report',passport.authenticate('jwt',{session:false}), patientApi.createReport);
//generate all report of particular patient..
router.get('/:id/all-reports',passport.authenticate('jwt',{session:false}), patientApi.getAllReports);

module.exports = router;