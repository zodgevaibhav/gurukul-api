const express = require('express');

const app = express();

const courseRoute = require('./api/cource/course');

app.use('/course',courseRoute);

module.exports = app;