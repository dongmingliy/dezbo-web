'use strict';

/**
 * Game Controller
 */
var ItemVote = require('../models/itemvotes');
module.exports.controller = function (app) {

  var celebItems = [
    {'id': '0', 'itemTitle': 'Red Couch on the Ellen Show', 'itemURL': 'img/shop/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
    {'id': '1', 'itemTitle': 'Snoop Dog\'s Stage Mic', 'itemURL': 'img/game/snoopmic.png', 'celebName': 'Snoop Dog', 'celebURL': 'img/game/snoop_face.png'}
  ];
  app.get('/celebItems', function (req, res) {
    res.json(celebItems);
  });

  app.post('/voteitem', function (req, res) {
    var vote = req.body;
    var voteID = req.body.id;
    var voteValue = req.body.vote;
    // save user vote
    var query = { 'id': voteID };
    ItemVote.findOneAndUpdate( query,{ vote:voteValue }, { upsert: true }, function (err, document) {
      if (err) {
        console.log(err);
      }
    });

  });
};
