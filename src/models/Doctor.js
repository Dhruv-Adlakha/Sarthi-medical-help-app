const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

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
    type: String,
    required: true,
  },
  doctorToken: {
    type: String,
  },
});

doctorSchema.methods.generateAuthToken = async function () {
  const doctor = this;
  const token = await jwt.sign(
    { _id: doctor._id.toString() },
    'SecretKeyDhruv',
    {
      expiresIn: 200000,
    }
  );
  doctor.doctorToken = token;
  await doctor.save();
  return token;
};

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
