const Volunteer = require('../models/Volunteer');
const TrustItem = require('../models/TrustItem');
const ServiceRequest = require('../models/ServiceRequest');
const express = require('express');
const router = express.Router();

//create trust item
router.post('/volunteer/trust', async (req, res) => {
  try {
    const trustItem = {
      amount: req.body.amount,
      address: req.body.address,
      modeOfPayment: req.body.modeOfPayment,
    };
    const volunteer = await Volunteer.findById(req.body._id);
    const tt = new TrustItem(trustItem);
    volunteer.trustItems.push(tt);
    console.log(volunteer);
    await volunteer.save();
    res.send(volunteer);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get my profile
router.get('/volunteer/profiles/:id', async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    res.send(volunteer);
  } catch (error) {
    res.status(500).send(error);
  }
});

//update my profile
router.patch('/volunteer/updateProfile/:id', async (req, res) => {
  try {
    const user = await Volunteer.findById(req.params.id);
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

//accept patient request
router.post('/volunteer/patientRequest/:id', async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);
    const volunteer = await Volunteer.findById(req.body.volunteer);
    if (!request) {
      return res.status(404).send();
    }
    if (req.body.serviceType === 'service') {
      request.volunteers.push({
        serviceType: 'Service',
        volunteer: volunteer._id,
      });
    } else {
      request.volunteers.push({
        serviceType: 'Donation',
        volunteer: volunteer._id,
      });
    }
    await request.save();
    res.send(request);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;