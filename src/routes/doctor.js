const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

//get my profile
router.get('/doctor/profiles/:id', async (req, res) => {
  try {
    const user = await Doctor.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
