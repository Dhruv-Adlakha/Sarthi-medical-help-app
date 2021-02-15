const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const ServiceRequest = require('../models/ServiceRequest');
const auth = require('../middleware/auth');

//get my profile
router.get('/doctor/profiles/:id', auth, async (req, res) => {
  try {
    const user = await Doctor.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//update my profile
router.patch('/doctor/updateProfile/:id', auth, async (req, res) => {
  try {
    const user = await Doctor.findById(req.params.id);
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

//prescribe medicine
router.post('/doctor/prescribeMedicines/:id', auth, async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).send('Request not found');
    }
    request.prescription.push({ medicine: req.body.medicine });
    await request.save();
    res.send(request);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
