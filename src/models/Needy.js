const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

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
  needyToken: {
    type: String,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
});

needySchema.methods.generateAuthToken = async function () {
  const needy = this;
  const token = await jwt.sign(
    { _id: needy._id.toString() },
    'SecretKeyDhruv',
    {
      expiresIn: 200000,
    }
  );
  console.log(token);
  needy.needyToken = token;
  console.log(needy);
  await needy.save();
  return token;
};

const Needy = mongoose.model('Needy', needySchema);

module.exports = Needy;
