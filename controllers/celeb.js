/**
 * Created by Louis on 2014-08-10.
 */
'use strict';

/**
 * Celeb Controller
 */

module.exports.controller = function (app) {
  app.get('/campaigns', function (req, res) {
    if (req.user) {
      return res.redirect('/campaigns');
    }
    res.render('celeb/campaigns', {
      url: req.url
    });
  });
  app.get('/ellen', function (req, res) {
    if (req.user) {
      return res.redirect('/ellen');
    }
    res.render('celeb/ellen', {
      url: req.url
    });
  });
};
