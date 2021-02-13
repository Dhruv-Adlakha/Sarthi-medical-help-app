const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Volunteer = require('../models/Volunteer');
const Needy = require('../models/Needy');
const Admin = require('../models/Admin');

//signup based on role of the user
router.post('/signup', async (req, res) => {
  if (req.body.password !== req.body.confirmPassword) {
    return res.status(500).send('Password mismatch');
  }
  try {
    let user;
    if (req.body.role === 'doctor') {
      user = new Doctor(req.body);
    } else if (req.body.role === 'volunteer') {
      user = new Volunteer(req.body);
    } else if (req.body.role === 'needy') {
      user = new Needy(req.body);
    } else {
      user = new Admin(req.body);
    }
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//login user based on role of the user
router.post('/login', async (req, res) => {
  try {
    let user;
    if (req.body.role === 'doctor') {
      user = await Doctor.findOne({ email: req.body.email });
    } else if (req.body.role === 'volunteer') {
      user = await Volunteer.findOne({ email: req.body.email });
    } else if (req.body.role === 'needy') {
      user = await Needy.findOne({ email: req.body.email });
    } else {
      user = await Admin.findOne({ email: req.body.email });
    }
    if (!user) {
      return res.status(404).send('User not found');
    }
    if (user.password !== req.body.password) {
      return res.status(500).send('Invalid password');
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
