const express = require('express');
const app = express();
const routes = express.Router();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

// Carrega os models//
const temperature = require('./models/temperatura');

//Carrega as rotas
const indexRoutes = require('./routes/indexRoutes');
const viewTemperatura = require('./routes/viewTemperatura');
const temperatureRoute = require('./routes/temperatureRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', indexRoutes);
app.use('/temperatura', viewTemperatura);
app.use(temperatureRoute);

module.exports = app;           
