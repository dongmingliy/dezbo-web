'use strict';

/**
 * Game Controller
 */
var ItemVote = require('../models/itemvotes');
var UserEmail = require('../models/useremail');
var config = require('../config/config');
var nodemailer = require('nodemailer');

module.exports.controller = function (app) {

  var celebItems = [
    // sports
    {'id': 's1', 'itemTitle': 'Ronaldo’s Signed Nike Boots', 'itemURL': 'img/game/Sports/ronaldoshoe.png', 'celebName': 'Cristiano Ronaldo', 'celebURL': 'img/game/Sports/ronaldoface.png'},
//    {'id': 's2', 'itemTitle': 'Messi’s Signed FCB Jersey', 'itemURL': 'img/game/Sports/messijersey.png', 'celebName': 'Leo Messi', 'celebURL': 'img/game/Sports/messiface.png'},
//    {'id': 's3', 'itemTitle': 'Brazuca Match Ball', 'itemURL': 'img/game/Sports/FIFAball.png', 'celebName': 'FIFAball', 'celebURL': 'img/game/Sports/FIFA.png'},
//    {'id': 's4', 'itemTitle': '2014 CL Official Match Ball', 'itemURL': 'img/game/Sports/CLball.png', 'celebName': 'UEFA Champions League', 'celebURL': 'img/game/Sports/CL.png'},
    {'id': 's5', 'itemTitle': 'Season Premiere Game Ball', 'itemURL': 'img/game/Sports/NFLball.png', 'celebName': 'NFL', 'celebURL': 'img/game/Sports/NFL.png'},
    {'id': 's8', 'itemTitle': 'Lebron’s Signed Basketball', 'itemURL': 'img/game/Sports/Lebronball.png', 'celebName': 'Lebron James', 'celebURL': 'img/game/Sports/lebronface.png'},
    {'id': 's9', 'itemTitle': 'Kobe’s Signed Jersey', 'itemURL': 'img/game/Sports/Kobejersey.png', 'celebName': 'Kobe Bryant', 'celebURL': 'img/game/Sports/Kobeface.png'},
//    {'id': 's10', 'itemTitle': 'Crosby’s Signed Hockey Stick', 'itemURL': 'img/game/Sports/Sidneystick.png', 'celebName': 'Sidney Crosby', 'celebURL': 'img/game/Sports/sidneyface.png'},
    {'id': 's11', 'itemTitle': 'Tony’s Autographed Skateboard', 'itemURL': 'img/game/Sports/Tonyboard.png', 'celebName': 'Tony Hawk', 'celebURL': 'img/game/Sports/tony.png'},
//    {'id': 's13', 'itemTitle': 'Dale’s Nascar gloves', 'itemURL': 'img/game/Sports/DEJgloves.png', 'celebName': 'Dale Earnhardt Jr.', 'celebURL': 'img/game/Sports/DEJ.png'},
    // movies
    {'id': 'm1', 'itemTitle': 'Katniss’ Bow ', 'itemURL': 'img/game/Movies/hungergamesbow.png', 'celebName': 'The Hunger Games', 'celebURL': 'img/game/Movies/Hungergames.png'},
    {'id': 'm2', 'itemTitle': 'The Lion’s Head', 'itemURL': 'img/game/Movies/herculeshat.png', 'celebName': 'Hercules', 'celebURL': 'img/game/Movies/rock.png'},
//    {'id': 'm3', 'itemTitle': 'Thor’s Hammer', 'itemURL': 'img/game/Movies/Thorhammer.png', 'celebName': 'Thor', 'celebURL': 'img/game/Movies/Thor.png'},
//    {'id': 'm4', 'itemTitle': 'Wilson The Volleyball ', 'itemURL': 'img/game/Movies/castball.png', 'celebName': 'Castaway', 'celebURL': 'img/game/Movies/castaway.png'},
    {'id': 'm5', 'itemTitle': 'Raquel Welch Poster', 'itemURL': 'img/game/Movies/shawposter.png', 'celebName': 'Shawshank Redemption', 'celebURL': 'img/game/Movies/shawshank.png'},
//    {'id': 'm6', 'itemTitle': 'The Axe', 'itemURL': 'img/game/Movies/shiningaxe.png', 'celebName': 'The Shining', 'celebURL': 'img/game/Movies/shining.png'},
//    {'id': 'm7', 'itemTitle': 'Blue Or Red Pill', 'itemURL': 'img/game/Movies/Matrixpills.png', 'celebName': 'The Matrix', 'celebURL': 'img/game/Movies/Matrix.png'},
//    {'id': 'm8', 'itemTitle': 'Hockey Mask', 'itemURL': 'img/game/Movies/friday13mask.png', 'celebName': 'Fridy the 13th', 'celebURL': 'img/game/Movies/friday13.png'},
    {'id': 'm9', 'itemTitle': 'Lightsaber', 'itemURL': 'img/game/Movies/starwarssaber.png', 'celebName': 'Star Wars', 'celebURL': 'img/game/Movies/starwars.png'},
    {'id': 'm10', 'itemTitle': 'The One Ring', 'itemURL': 'img/game/Movies/lordofringsring.png', 'celebName': 'Lord of the Rings', 'celebURL': 'img/game/Movies/lordofrings.png'},
//    {'id': 'm11', 'itemTitle': 'Bullwhip', 'itemURL': 'img/game/Movies/indianajoneswhip.png', 'celebName': 'Indiana Jones', 'celebURL': 'img/game/Movies/indianajones.png'},
//    {'id': 'm12', 'itemTitle': 'Dorothy’s Red Shoes', 'itemURL': 'img/game/Movies/WOZshoes.png', 'celebName': 'The Wizard of Oz', 'celebURL': 'img/game/Movies/WOZ.png'},

    // tv shows
    {'id': 't1', 'itemTitle': 'Ellen Show’s Red Couch', 'itemURL': 'img/game/TVShows/ellen1.png', 'celebName': 'Ellen Degeneres', 'celebURL': 'img/game/TVShows/ellen_head.png'},
    {'id': 't2', 'itemTitle': 'Jax’s President Jacket', 'itemURL': 'img/game/TVShows/SOAjacket.jpg', 'celebName': 'Sons of Anarchy', 'celebURL': 'img/game/TVShows/SOA.png'},
    {'id': 't3', 'itemTitle': 'Heisenberg’s Hat', 'itemURL': 'img/game/TVShows/BBhat.png', 'celebName': 'Breaking Bad', 'celebURL': 'img/game/TVShows/BB.png'},
    {'id': 't6', 'itemTitle': 'Frank Underwood’s Typewriter', 'itemURL': 'img/game/TVShows/HOCtypewriter.png', 'celebName': 'House of Cards', 'celebURL': 'img/game/TVShows/HOC.png'},
    {'id': 't11', 'itemTitle': 'Sheldon’s Laptop', 'itemURL': 'img/game/TVShows/TBBTSheldonlaptop.png', 'celebName': 'The Big Bang Theory', 'celebURL': 'img/game/TVShows/TBBT.png'},
    // music
    {'id': 's1', 'itemTitle': 'Snoop Dogg’s Mic', 'itemURL': 'img/game/Music/snoopmic.png', 'celebName': 'Snoop Dogg', 'celebURL': 'img/game/Music/snoopface.png'},
    {'id': 's2', 'itemTitle': 'Signed Beats by Dre', 'itemURL': 'img/game/Music/beatsdre.png', 'celebName': 'Dr.Dre', 'celebURL': 'img/game/Music/dre.png'},
    {'id': 's5', 'itemTitle': 'Pharrell’s Hat', 'itemURL': 'img/game/Music/Pharrellhat.png', 'celebName': 'Pharrell Williams', 'celebURL': 'img/game/Music/pharrell.png'},
    {'id': 's8', 'itemTitle': 'Kesha’s Yarn Ball', 'itemURL': 'img/game/Music/Keshayarn.png', 'celebName': 'Kesha', 'celebURL': 'img/game/Music/Kesha.png'},
    {'id': 's6', 'itemTitle': 'Deadmau5 Head ', 'itemURL': 'img/game/Music/deadmau5head.png', 'celebName': 'Deadmau5', 'celebURL': 'img/game/Music/deadmau5.png'}
//    {'id': 's4', 'itemTitle': 'Ariana’s Signed White Mic', 'itemURL': 'img/game/Music/arianawhitemic.png', 'celebName': 'Ariana Grande', 'celebURL': 'img/game/Music/arianaface.png'}

  ];

  app.get('/celebItems', function (req, res) {
    res.json(celebItems);
  });

  app.get('/game/signup', function (req, res) {
    res.render('game/signup', {
      url: req.url
    });
  });

  app.post('/voteitem', function (req, res) {
    var voteID = req.body.id;
    var voteValue = req.body.vote;
    var itemTitle = req.body.itemTitle;
    // save user vote
    var query = { 'id': voteID, 'title': itemTitle };
    if (voteValue == 1) {
      ItemVote.findOneAndUpdate(query, { $inc: {voteup: 1} }, { upsert: true }, function (err, doc) {
        if (err) {
          console.log(err);
        }
      });
    }
    else if (voteValue == -1) {
      ItemVote.findOneAndUpdate(query, { $inc: {votedown: 1} }, { upsert: true }, function (err, doc) {
        if (err) {
          console.log(err);
        }
      });
    }
    res.send('success!');
  });

  app.get('/result', function (req, res) {
    res.render('game/result', {
      url: req.url
    });
  });

  app.get('/voteresult', function (req, res) {
    var data;
    ItemVote.find({}).sort({voteup: -1, votedown: 1}).limit(5).exec(
      function (err, doc) {
        data = doc;
        res.json(data);
      }
    );
  });

  app.post('/gamesignup', function (req, res, next) {

    var emailAddress = req.body.email;
    // Create a workflow
    var workflow = new (require('events').EventEmitter)();

    /**
     * Step 1: Save User Email to database
     * */

    workflow.on('saveUserEmail', function () {
      var userEmail = new UserEmail({
        email: req.body.email.toLowerCase()
      });
      // save user email
      userEmail.save(function (err) {
        if (err) {
          console.log(err);
        }
      });
      // next step
      workflow.emit('sendComingsoonEmail');
    });

    /**
     * Step 2: Send a coming soon email
     * */
    workflow.on('sendComingsoonEmail', function () {

      // Create reusable transporter object using SMTP transport
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: config.gmail.user,
          pass: config.gmail.password
        }
      });

      // Render HTML to send using .jade mail template (just like rendering a page)
      res.render('mail/comingsoon', {
        name: 'Dear fan'
      }, function (err, html) {
        if (err) {
          req.flash('error', { msg: err });
        }
        else {
          // Create email
          var mailOptions = {
            to: emailAddress,
            from: config.smtp.name + ' <' + config.smtp.address + '>',
            subject: 'Welcome to Dezbo!',
            html: html
          };

          // Send email
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              req.flash('error', { msg: err });
            } else {
              req.flash('info', { msg: 'Thanks for signing up! You rock!' });
              res.redirect('/result');
            }
          });
        }
      });
    });

    workflow.emit('saveUserEmail');

  });
};
