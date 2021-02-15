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
  needyToken: {
    type: String,
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
  needy.needyToken = token;
  await needy.save();
  return token;
};

const Needy = mongoose.model('Needy', needySchema);

module.exports = Needy;
