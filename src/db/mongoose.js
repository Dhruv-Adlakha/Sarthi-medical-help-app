const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://DHRUV:dhruv@cluster0.4xry4.mongodb.net/Sarthi?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected to mongodb atlas');
  }
);
