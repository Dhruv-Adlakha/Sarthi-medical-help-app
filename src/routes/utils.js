const ServiceRequest = require('../models/ServiceRequest');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.patch('/updateRequest/:id', auth, async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).send('Not found');
    }

    if (req.body.applicationStatus === 3) {
      request.applicationStatus = 3;
      request.volunteers[0] = req.user;
    }
    console.log(request);
    await request.save();
    res.send(request);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
