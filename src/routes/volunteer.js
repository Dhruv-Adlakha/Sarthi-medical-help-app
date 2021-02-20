const Volunteer = require('../models/Volunteer');
const TrustItem = require('../models/TrustItem');
const ServiceRequest = require('../models/ServiceRequest');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

//create trust item
router.post('/volunteer/trust', auth, async (req, res) => {
  try {
    //console.log(req.body);
    const trustItem = {
      amount: req.body.amount,
      address: req.body.address,
      modeOfPayment: req.body.modeOfPayment,
      contributer: req.body.contributer,
    };
    const tt = new TrustItem(trustItem);
    // console.log(tt);
    await tt.save();
    res.send(tt);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get my profile
router.get('/volunteer/profiles/:id', auth, async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    res.send(volunteer);
  } catch (error) {
    res.status(500).send(error);
  }
});

//update my profile
router.patch('/volunteer/updateProfile/:id', auth, async (req, res) => {
  try {
    const user = await Volunteer.findById(req.params.id);
    const updates = Object.keys(req.body);
    if (!user) {
      return res.status(404).send('User is not present');
    }
    updates.map((update) => {
      user[update] = req.body[update];
    });
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//accept patient request
router.post('/volunteer/patientRequest/:id', auth, async (req, res) => {
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

//delete own profile
router.delete('/volunteer/delete/:id', auth, async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).send('Volunteer not found');
    }
    await volunteer.delete();
    res.send(volunteer);
  } catch (error) {
    res.status(500).send(err);
  }
});

module.exports = router;
