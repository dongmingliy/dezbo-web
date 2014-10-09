/**
 * Created by Louis on 2014-08-10.
 */
'use strict';

/**
 * Celeb Controller
 */


module.exports.controller = function (app) {
  app.get('/campaigns', function (req, res) {
    res.render('celeb/campaigns', {
      url: req.url
    });
  });
  app.get('/ellen', function (req, res) {
    res.render('celeb/ellen', {
      url: req.url
    });
  });
  app.get('/pharrell', function (req, res) {
    res.render('celeb/pharrell', {
      url: req.url
    });
  });
};
