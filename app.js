const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyparser.json());


module.exports = app;
