/*global require:true */
var arduino = require('./arduino');
arduino.openDoor();
// arduino.buildStatus(false);

var express = require('express');
var app = express();

app
  .use(express.logger('dev'))
  .use(express['static']('public'))
  .use(function (req, res, next) {
    if (req.url === '/openDoor') {
      arduino.openDoor();
      res.redirect('/success.html');
      return;
    }
    next();
  })
  .listen(3000);
