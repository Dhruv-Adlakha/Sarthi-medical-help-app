const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const volunteerSchema = new mongoose.Schema({
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
  age: {
    type: Number,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  profileVerified: {
    type: String,
    required: true,
  },
  trustItems: [
    {
      trustItem: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'TrustItem',
      },
    },
  ],
  volunteerToken: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
});

volunteerSchema.methods.generateAuthToken = async function () {
  const volunteer = this;
  const token = await jwt.sign(
    { _id: volunteer._id.toString() },
    'SecretKeyDhruv',
    {
      expiresIn: 200000,
    }
  );
  volunteer.volunteerToken = token;
  await volunteer.save();
  return token;
};

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
