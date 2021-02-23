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
    if (req.body.medicine === 'done') {
      request.applicationStatus = 4;
    } else request.prescription.push({ medicine: req.body.medicine });
    await request.save();
    res.send(request);
  } catch (error) {
    res.status(500).send(error);
  }
});

//accept patient request
router.patch('/doctor/patientRequests/:id', auth, async (req, res) => {
  try {
    const patientRequest = await ServiceRequest.findById(req.params.id);
    if (!patientRequest) {
      return res.status(404).send('No such request found');
    }
    // console.log(patientRequest);
    patientRequest.doctor = req.user._id;
    patientRequest.applicationStatus = 2;
    await patientRequest.save();
    res.send(patientRequest);
  } catch (error) {
    res.status(500).send(err);
  }
});

//delete own profile
router.delete('/doctor/delete/:id', auth, async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).send('Doctor not found');
    }
    await doctor.delete();
    res.send(doctor);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
