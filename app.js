require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const { databaseService } = require('./services/databaseService');

const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const dbService = databaseService();
require('./routes')(app, dbService);


app.listen(8080, function () {
    console.log('App listening on port 8080!');
});