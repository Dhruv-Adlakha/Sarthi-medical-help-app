const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
  },
  speciality: {
    type: String,
  },
  hospital: {
    type: String,
  },
  education: {
    type: String,
  },
  profileVerified: {
    type: Boolean,
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
