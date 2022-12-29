require('dotenv').config();
const express = require('express');

const routes = require('../routes');

const app = express();

app.use(express.json());

app.use('/orders', routes.orderRouter);

module.exports = app;
