const express = require('express');
const app = express();
const knex = require('./knex/config/database');

app.use(express.json());

const usersRouter = require('./routes/routes');
const servicesRouter = require('./routes/routes');
const ordersRouter = require('./routes/routes');

app.use('/users', usersRouter);
app.use('/services', servicesRouter);
app.use('/orders', ordersRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
