'use strict';

/**
 * Game Controller
 */
var ItemVote = require('../models/itemvotes');
module.exports.controller = function (app) {

  var celebItems = [
    {'id': '0', 'itemTitle': 'Red Couch on the Ellen Show', 'itemURL': 'img/shop/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
    {'id': '1', 'itemTitle': 'Snoop Dogg\'s Mic', 'itemURL': 'img/game/snoopmic.png', 'celebName': 'Snoop Dog', 'celebURL': 'img/game/snoop_face.png'},
    {'id': '2', 'itemTitle': 'Signed Beats by Dre', 'itemURL': 'img/game/beatsdre.png', 'celebName': 'Dr.Dre', 'celebURL': 'img/game/dre.png'},
    {'id': '3', 'itemTitle': 'Ariana Grande\'s Signed White Mic', 'itemURL': 'img/game/arianawhitemic.png', 'celebName': 'Ariana Grande', 'celebURL': 'img/game/arianaface.png'},
    {'id': '4', 'itemTitle': 'Cristiano Ronaldo\'s Signed Nike Mercurial Superfly', 'itemURL': 'img/game/ronaldoshoe.png', 'celebName': 'Cristiano Ronaldo', 'celebURL': 'img/game/ronaldoface.png'},
    {'id': '7', 'itemTitle': 'Sheldon\'s laptop', 'itemURL': 'img/game/TBBTSheldonlaptop.png', 'celebName': 'Jim Parsons', 'celebURL': 'img/game/TBBT.png'},
    {'id': '8', 'itemTitle': 'Frank Underwood\'s typewriter', 'itemURL': 'img/game/HOCtypewriter.png', 'celebName': 'Kevin Spacey', 'celebURL': 'img/game/HOC.png'}
//    {'id': '7', 'itemTitle': 'Red Couch on the Ellen Show', 'itemURL': 'img/game/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
//    {'id': '8', 'itemTitle': 'Red Couch on the Ellen Show', 'itemURL': 'img/game/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
//    {'id': '9', 'itemTitle': 'Red Couch on the Ellen Show', 'itemURL': 'img/game/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
//    {'id': '10', 'itemTitle': 'Red Couch on the Ellen Show', 'itemURL': 'img/game/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
//    {'id': '11', 'itemTitle': 'Red Couch on the Ellen Show', 'itemURL': 'img/game/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
//    {'id': '12', 'itemTitle': 'Red Couch on the Ellen Show', 'itemURL': 'img/game/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
//    {'id': '13', 'itemTitle': 'Red Couch on the Ellen Show', 'itemURL': 'img/game/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
//    {'id': '14', 'itemTitle': 'Red Couch on the Ellen Show', 'itemURL': 'img/game/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
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
