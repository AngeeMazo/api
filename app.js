require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const { databaseService } = require('./services/databaseService');

const app = express();
const cors = require('cors');
app.use(cors({
    origin:'*'
}))

app.use(bodyParser.json());

const dbService = databaseService();
require('./routes')(app, dbService);


app.listen(8080, function () {
    console.log('App listening on port 8080!');
});