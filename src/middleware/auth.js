const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const Needy = require('../models/Needy');
const Volunteer = require('../models/Volunteer');
const Admin = require('../models/Admin');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'SecretKeyDhruv');

    const doctor = await Doctor.findOne({
      _id: decoded._id,
      doctorToken: token,
    });
    const needy = await Needy.findOne({
      _id: decoded._id,
      needyToken: token,
    });
    const volunteer = await Volunteer.findOne({
      _id: decoded._id,
      volunteerToken: token,
    });
    const admin = await Admin.findOne({
      _id: decoded._id,
      adminToken: token,
    });

    if (doctor) {
      req.user = doctor;
    } else if (needy) {
      req.user = needy;
    } else if (volunteer) {
      req.user = volunteer;
    } else if (admin) {
      req.user = admin;
    } else {
      throw new Error();
    }

    next();
  } catch (error) {
    res.status(401).send('Please authenticate');
  }
};

module.exports = auth;
