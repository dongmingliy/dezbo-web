'use strict';

/**
 * Created by Louis on 2014-09-03.
 */
var UserEmail = require('../models/useremail');
var config = require('../config/config');
var nodemailer = require('nodemailer');

module.exports.controller = function (app) {

  app.post('/comingsoon', function (req, res, next) {

    var emailAddress = req.body.email;
    // Create a workflow
    var workflow = new (require('events').EventEmitter)();

    /**
     * Step 1: Save User Email to database
     * */

    workflow.on('saveUserEmail', function () {
      var userEmail = new UserEmail({
        email:          req.body.email.toLowerCase()
      });
      // save user email
      userEmail.save(function (err) {
        if (err) {
          console.log(err);
        }
      });
      res.send('Email saved');
      // next step
      // workflow.emit('sendComingsoonEmail');
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
              res.redirect('/');
            }
          });
        }
      });
    });

    workflow.emit('saveUserEmail');

  });
};
