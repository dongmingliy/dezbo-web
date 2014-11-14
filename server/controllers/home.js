'use strict';

/**
 * Home Controller
 */
var passportConf  = require('../config/passport');

module.exports.controller = function (app) {

  app.get('/vote', function (req, res) {
    res.render('game/index', {
      url: req.url
    });
  });

  app.get('/home/youtube', function (req, res) {
    res.render('home/youtube');
  });
  app.get('/comingsoon', function (req, res) {
    res.render('comingsoon/main', {
      url: req.url
    });
  });
  app.get('/', function (req, res) {
//    if (req.user) {
//      return res.redirect('/home');
//    }
    res.render('comingsoon/main', {
      url: req.url
    });
  });
  app.get('/directive/rafflebox', function (req, res) {
    res.render('directive/rafflebox', {
      url: req.url
    });
  });
  app.get('/directive/biddingbox', function (req, res) {
    res.render('directive/biddingbox', {
      url: req.url
    });
  });
};
