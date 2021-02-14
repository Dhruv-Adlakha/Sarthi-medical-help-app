const mongoose = require('mongoose');

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
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
