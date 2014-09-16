'use strict';

/**
 * Home Controller
 */
var passportConf  = require('../config/passport');

module.exports.controller = function (app) {

  app.get('/', function (req, res) {
//    var url_tt_d5 = 'http://urls.api.twitter.com/1/urls/count.json?url=www.dezbo.com/d5';
//    var url_fb_d5 = 'http://graph.facebook.com/?ids=http%3a%2f%2fdezbo.com%2Fd5';
//    var tweets_d5 = {};
//    request.get(url_tt_d5, function (error, request, body) {
//      // NYT occasionally sends bad data :(
//      if (error){
//        req.flash('error', { msg: error });
//      }
//      try {
//        tweets_d5 = JSON.parse(body);
//      }
//      catch (err) {
//        tweets_d5.results = '';
//        req.flash('error', { msg: err.message });
//      }
//
//    });
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
  app.get('/home', passportConf.isAuthenticated, function (req, res) {
//    if (req.user) {
//      return res.redirect('/home');
//    }
    res.render('home/index', {
      url: req.url
    });
  });
};
