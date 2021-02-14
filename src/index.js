const entryRouter = require('./routes/entry');
const adminRouter = require('./routes/admin');
const needyRouter = require('./routes/needy');
require('./db/mongoose');

const express = require('express');
const app = express();
app.use(express.json());
app.use(entryRouter);
app.use(adminRouter);
app.use(needyRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
