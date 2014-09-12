'use strict';

/**
 * Home Controller
 */

module.exports.controller = function (app) {
  app.get('/', function (req, res) {
    if (req.user) {
      return res.redirect('home/index');
    }
    res.render('comingsoon/main', {
      url: req.url
    });
  });
  app.get('/d5', function (req, res) {
    res.render('comingsoon/d5', {
      url: req.url
    });
  });
  app.get('/el', function (req, res) {
    res.render('comingsoon/el', {
      url: req.url
    });
  });
  app.get('/nfl', function (req, res) {
    res.render('comingsoon/nfl', {
      url: req.url
    });
  });
  app.get('/db', function (req, res) {
    res.render('comingsoon/db', {
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
