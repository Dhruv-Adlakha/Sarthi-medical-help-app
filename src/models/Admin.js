const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
  adminToken: {
    type: String,
  },
});

adminSchema.methods.generateAuthToken = async function () {
  const admin = this;
  const token = await jwt.sign(
    { _id: admin._id.toString() },
    'SecretKeyDhruv',
    {
      expiresIn: 200000,
    }
  );
  admin.adminToken = token;
  await admin.save();
  return token;
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
