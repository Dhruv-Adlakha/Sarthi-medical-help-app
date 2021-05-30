const mongoose = require('mongoose');

const trustItemSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  contributer: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  modeOfPayment: {
    type: String,
  },
});

const trustItem = mongoose.model('TrustItem', trustItemSchema);

module.exports = trustItem;
