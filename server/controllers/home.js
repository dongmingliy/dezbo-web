'use strict';

/**
 * Home Controller
 */

module.exports.controller = function (app) {
  app.get('/', function (req, res) {
    if (req.user) {
      return res.redirect('home/index');
    }
    res.render('home/comingSoon', {
      url: req.url
    });
  });
  app.get('/d5', function (req, res) {
    res.render('home/comingSoon', {
      url: req.url
    });
  });
  app.get('/el', function (req, res) {
    res.render('home/comingSoon', {
      url: req.url
    });
  });
  app.get('/nfl', function (req, res) {
    res.render('home/comingSoon', {
      url: req.url
    });
  });
  app.get('/bh', function (req, res) {
    res.render('home/comingSoon', {
      url: req.url
    });
  });
  app.get('/home', function (req, res) {
    if (req.user) {
      return res.redirect('home/index');
    }
    res.render('home/index', {
      url: req.url
    });
  });
};
