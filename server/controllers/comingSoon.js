/**
 * Created by Louis on 2014-09-03.
 */
'use strict';

var config = require('../config/config');
var nodemailer = require('nodemailer');

module.exports.controller = function (app) {

  app.post('/comingsoon', function (req, res, next) {

    var emailAddress = 'louis.dm.li@gmail.com';
    // Create a workflow
    var workflow = new (require('events').EventEmitter)();

    /**
     * Step 1: Send a coming soon email
     * */

    workflow.on('sendComingSoonEmail', function (emailAddress) {

      // Create reusable transporter object using SMTP transport
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: config.gmail.user,
          pass: config.gmail.password
        }
      });

      // Render HTML to send using .jade mail template (just like rendering a page)
      res.render('mail/cocomingSoon', {
        name: 'Dear fan'
      }, function (err, html) {
        if (err) {
          req.flash('error', { msg: err });
        }
        else {
          // Now create email text (multiline string as array FTW)
          var text = [
            'Hello!',
            'We would like to welcome you as our newest member!',
            'Thanks so much for using our services! If you have any questions, or suggestions, feel free to email us here at ' + config.smtp.address + '.',
            'If you want to get the latest scoop check out our <a href="' +
            req.protocol + '://' + req.headers.host + '/blog' +
            '">blog</a> and our <a href="' +
            req.protocol + '://' + req.headers.host + '/forums">forums</a>.',
            '  - The ' + config.smtp.name + ' team'
          ].join('\n\n');

          // Create email
          var mailOptions = {
            to: emailAddress,
            from: config.smtp.name + ' <' + config.smtp.address + '>',
            subject: 'Welcome to ' + app.locals.application + '!',
            text: text,
            html: html
          };

          // Send email
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              req.flash('error', { msg: err });
            } // else {
            // console.log('Message sent: ' + info.response);
            // }
          });

        }
      });

    });
    workflow.emit('sendComingSoonEmail', emailAddress);
  });
};
