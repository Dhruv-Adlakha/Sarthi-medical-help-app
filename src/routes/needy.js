const express = require('express');
const router = express.Router();
const Needy = require('../models/Needy');
const ServiceRequest = require('../models/ServiceRequest');
const Doctor = require('../models/Doctor');
const mongoose = require('mongoose');
const auth = require('../middleware/auth');

//get my profile
router.get('/needy/profiles/:id', auth, async (req, res) => {
  try {
    const user = await Needy.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//update my profile
router.patch('/needy/updateProfile/:id', auth, async (req, res) => {
  try {
    const user = await Needy.findById(req.params.id);
    const updates = Object.keys(req.body);
    if (!user) {
      return res.status(404).send('User is not present');
    }
    updates.map((update) => {
      user[update] = req.body[update];
    });

    user['profileVerified'] = 'In process';
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//make a request
router.post('/needy/helpRequest', auth, async (req, res) => {
  try {
    const patient = await Needy.findById(req.body.patientId);
    const doctor = await Doctor.findById(req.body.doctorId);
    const helpRequest = new ServiceRequest({
      problem: req.body.problem,
      description: req.body.description,
      patient: patient._id,
      doctor: doctor._id,
    });
    await helpRequest.save();
    res.send(helpRequest);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
