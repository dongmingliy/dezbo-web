'use strict';

/**
 * Home Controller
 */
var passportConf  = require('../config/passport');

module.exports.controller = function (app) {

  app.get('/', function (req, res) {
    res.render('game/index', {
      url: req.url
    });
  });

  app.get('/comingsoon', function (req, res) {
    res.render('comingsoon/main', {
      url: req.url
    });
  });
  app.get('/home', passportConf.isAuthenticated, function (req, res) {
//    if (req.user) {
//      return res.redirect('/home');
//    }
    res.render('home/index', {
      url: req.url
    });
  });
};
