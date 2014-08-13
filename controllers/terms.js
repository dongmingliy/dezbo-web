'use strict';

/**
 * Terms Controller
 */

module.exports.controller = function (app) {

  /**
   * GET /terms
   * View site terms
   */

  app.get('/terms', function (req, res) {
    res.render('terms/terms', {
      url: req.url
    });
  });
  app.get('/faq', function (req, res) {
    res.render('terms/faq', {
      url: req.url
    });
  });
};
