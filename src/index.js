const adminRouter = require('./routes/admin');
require('./db/mongoose');

const express = require('express');
const app = express();

app.use(adminRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
