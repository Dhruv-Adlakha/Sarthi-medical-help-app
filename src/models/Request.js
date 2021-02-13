const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Needy',
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
  problem: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  prescription: [
    {
      medicines: {
        type: String,
      },
    },
  ],
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
