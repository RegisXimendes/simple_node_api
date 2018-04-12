
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const http = require('http');
const config = require('./config.js');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(config.connectionString,{ useMongoClient: true });

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended:false}));

//habilita cors
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    res.header("Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS");
    next();
});

consign().include('./src/routes')
          .then('./src/models')
          .then('./src/controllers')
          .then('./src/repositories')
          .into(app);

module.exports = app;