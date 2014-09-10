'use strict';

/**
 * Home Controller
 */

module.exports.controller = function (app) {
  app.get('/comingsoon', function (req, res) {
    if (req.user) {
      return res.redirect('home/index');
    }
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
