const mongoose = require('mongoose');

const needySchema = new mongoose.Schema({
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
  annualIncome: {
    type: Number,
  },
  gender: {
    type: String,
  },
  profileVerified: {
    type: String,
    required: true,
  },
});

const Needy = mongoose.model('Needy', needySchema);

module.exports = Needy;