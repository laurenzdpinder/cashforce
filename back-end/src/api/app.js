require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('../routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/orders', routes.orderRouter);
app.use('/providers', routes.providerRouter);
app.use('/buyers', routes.buyerRouter);

module.exports = app;
