const entryRouter = require('./routes/entry');
const adminRouter = require('./routes/admin');
const needyRouter = require('./routes/needy');
const doctorRouter = require('./routes/doctor');
const volunteerRouter = require('./routes/volunteer');
const utilRouter = require('./routes/utils');
require('./db/mongoose');

const express = require('express');
const app = express();
app.use(express.json());
app.use(entryRouter);
app.use(adminRouter);
app.use(needyRouter);
app.use(doctorRouter);
app.use(volunteerRouter);
app.use(utilRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
