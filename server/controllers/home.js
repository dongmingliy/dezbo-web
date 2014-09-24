'use strict';

/**
 * Home Controller
 */
var passportConf  = require('../config/passport');

module.exports.controller = function (app) {

  app.get('/', function (req, res) {
    res.render('game/index', {
      url: req.url
    });
  });

  app.get('/comingsoon', function (req, res) {
    res.render('comingsoon/main', {
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

  var celebItems = [
    {'id': '0', 'itemTitle':'Red Couch on the Ellen Show', 'itemURL':'img/shop/ellen1.png','celebName':'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
    {'id': '1', 'itemTitle':'NFL\'s Game Ball test', 'itemURL':'img/coming_soon/NFL.png','celebName':'Pharrell Williams', 'celebURL': 'img/logo_o.png'}
  ];
  app.get('/celebItems', function (req, res) {
    res.json(celebItems);
  });
};
