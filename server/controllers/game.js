'use strict';

/**
 * Game Controller
 */
var ItemVote = require('../models/itemvotes');
module.exports.controller = function (app) {

  var celebItems = [
    {'id': '0', 'itemTitle': 'Red Couch on the Ellen Show', 'itemURL': 'img/shop/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/ellen_head.png'},
    {'id': '1', 'itemTitle': 'Snoop Dogg\'s Mic', 'itemURL': 'img/game/snoopmic.png', 'celebName': 'Snoop Dogg', 'celebURL': 'img/game/snoop_face.png'},
    {'id': '2', 'itemTitle': 'Signed Beats by Dre', 'itemURL': 'img/game/beatsdre.png', 'celebName': 'Dr.Dre', 'celebURL': 'img/game/dre.png'},
    {'id': '3', 'itemTitle': 'Ariana Grande\'s Signed White Mic', 'itemURL': 'img/game/arianawhitemic.png', 'celebName': 'Ariana Grande', 'celebURL': 'img/game/arianaface.png'},
    {'id': '4', 'itemTitle': 'Cristiano Ronaldo\'s Signed Nike Mercurial Superfly', 'itemURL': 'img/game/ronaldoshoe.png', 'celebName': 'Cristiano Ronaldo', 'celebURL': 'img/game/ronaldoface.png'},
    {'id': '5', 'itemTitle': 'Leo Messi\'s Signed FCB Jersey', 'itemURL': 'img/game/messijersey.png', 'celebName': 'Leo Messi', 'celebURL': 'img/game/messiface.png'},
    {'id': '6', 'itemTitle': 'adidas Brazuca 2014 FIFA World Cup Official Match Ball ', 'itemURL': 'img/game/FIFAball.png', 'celebName': 'FIFAball', 'celebURL': 'img/game/FIFA.png'},
    {'id': '7', 'itemTitle': 'Sheldon\'s laptop', 'itemURL': 'img/game/TBBTSheldonlaptop.png', 'celebName': 'The Big Bang Theory', 'celebURL': 'img/game/TBBT.png'},
    {'id': '8', 'itemTitle': 'Frank Underwood\'s typewriter', 'itemURL': 'img/game/HOCtypewriter.png', 'celebName': 'House of Cards', 'celebURL': 'img/game/HOC.png'},
    {'id': '9', 'itemTitle': 'Jax Teller\'s President Jacket', 'itemURL': 'img/game/SOAjacket.png', 'celebName': 'Sons of Anarchy', 'celebURL': 'img/game/SOA.png'},
    {'id': '10', 'itemTitle': 'NFL\'s 2014 Season Premiere Game Ball', 'itemURL': 'img/game/NFL_ball.png', 'celebName': 'NFL', 'celebURL': 'img/game/NFL.png'},
    {'id': '11', 'itemTitle': 'Lebron James Signed Basketball', 'itemURL': 'img/game/Lebronball.png', 'celebName': 'Lebron James', 'celebURL': 'img/game/lebronface.png'},
    {'id': '12', 'itemTitle': 'Sidney Crosby Signed Hockey Stick', 'itemURL': 'img/game/Sidneystick.png', 'celebName': 'Sidney Crosby', 'celebURL': 'img/game/sidneyface.png'},
    {'id': '13', 'itemTitle': 'Tony Hawk Signed Skateboard', 'itemURL': 'img/game/Tonyboard.png', 'celebName': 'Tony Hawk', 'celebURL': 'img/game/tony.png'}
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
