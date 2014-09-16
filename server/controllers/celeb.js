/**
 * Created by Louis on 2014-08-10.
 */
'use strict';

/**
 * Celeb Controller
 */

var passportConf  = require('../config/passport');
module.exports.controller = function (app) {
  app.get('/campaigns', passportConf.isAuthenticated, function (req, res) {
    res.render('celeb/campaigns', {
      url: req.url
    });
  });
  app.get('/ellen', passportConf.isAuthenticated, function (req, res) {
    res.render('celeb/ellen', {
      url: req.url
    });
  });
};
