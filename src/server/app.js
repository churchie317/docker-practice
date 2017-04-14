const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./controllers/routes');
const middlewares = require('./controllers/middlewares');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middlewares.attachInfluxClient);

routes(app); 

module.exports = app;
