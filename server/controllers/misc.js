'use strict';

/**
 * Misc Controller
 */

module.exports.controller = function (app) {

  /**
   * GET /terms
   * View site terms
   */

  app.get('/terms', function (req, res) {
    res.render('misc/terms', {
      url: req.url
    });
  });
  app.get('/faq', function (req, res) {
    res.render('misc/faq', {
      url: req.url
    });
  });
};
