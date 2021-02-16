const express = require('express');
const router = express.Router();
const Needy = require('../models/Needy');
const Doctor = require('../models/Doctor');
const Volunteer = require('../models/Volunteer');
const TrustItem = require('../models/TrustItem');
const auth = require('../middleware/auth');
const ServiceRequest = require('../models/ServiceRequest');

//get all doctors
router.get('/admin/doctorProfiles', async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.send(doctors);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get all volunteers
router.get('/admin/volunteerProfiles', async (req, res) => {
  try {
    const volunteers = await Volunteer.find({});
    res.send(volunteers);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get all needy
router.get('/admin/needyProfiles', async (req, res) => {
  try {
    const needy = await Needy.find({});
    res.send(needy);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get trust donators
router.get('/admin/trust', auth, async (req, res) => {
  try {
    const trustItems = await TrustItem.find({});
    res.send(trustItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get patient requests
router.get('/admin/requests', async (req, res) => {
  try {
    const requests = await ServiceRequest.find({});
    res.send(requests);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
