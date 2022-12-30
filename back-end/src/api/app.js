require('dotenv').config();
const express = require('express');
const cors = require('cors');

const error = require('../middlewares/error');
const routes = require('../routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/orders', routes.orderRouter);
app.use('/providers', routes.providerRouter);
app.use('/buyers', routes.buyerRouter);

app.use(error);

module.exports = app;
