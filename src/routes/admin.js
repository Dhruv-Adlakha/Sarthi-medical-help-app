const express = require('express');
const doctor = require('../models/doctor');
const router = express.Router();

router.get('/admin/doctors', async (req, res) => {
  const doctor1 = new doctor({
    name: 'ricky',
  });
  await doctor1.save();
  res.send(doctor1);
});

module.exports = router;
