const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Volunteer = require('../models/Volunteer');
const Needy = require('../models/Needy');
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');

//signup based on role of the user
router.post('/signup', async (req, res) => {
  if (req.body.password !== req.body.confirmPassword) {
    return res.status(500).send('Password mismatch');
  }
  try {
    let user;
    const content = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      password: req.body.password,
      profileVerified: 'Not verified',
    };
    if (req.body.role === 'doctor') {
      user = new Doctor(content);
    } else if (req.body.role === 'volunteer') {
      user = new Volunteer(content);
    } else if (req.body.role === 'needy') {
      user = new Needy(content);
    } else {
      user = new Admin(content);
    }

    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password.toString(), 8);
    user.password = hashedPassword;

    const token = await user.generateAuthToken();
    await user.save();
    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err);
  }
});

//login user based on role of the user
router.post('/auth/login', async (req, res) => {
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
    const passwordEntered = req.body.password;
    const match = await bcrypt.compare(
      passwordEntered.toString(),
      user.password
    );
    if (!match) {
      return res.status(401).send('Invalid credentials');
    }
    const token = await user.generateAuthToken();

    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err);
  }
});

//logging out a user
router.post('/logout', auth, async (req, res) => {
  try {
    let user;
    if (req.body.role === 'doctor') {
      user = await Doctor.findOne({ email: req.body.email });
      user.doctorToken = '';
    } else if (req.body.role === 'volunteer') {
      user = await Volunteer.findOne({ email: req.body.email });
      user.volunteerToken = '';
    } else if (req.body.role === 'needy') {
      user = await Needy.findOne({ email: req.body.email });
      user.needyToken = '';
    } else if (req.body.role === 'admin') {
      user = await Admin.findOne({ email: req.body.email });
      user.adminToken = '';
    } else {
      return res.status(404).send('user not found');
    }
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
