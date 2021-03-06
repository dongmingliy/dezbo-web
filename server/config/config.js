'use strict';

/**
 * Module Dependencies
 */

var pkg               = require('../../package.json');
var rev               = require('../../rev-manifest.json');
/**
 * Configuration File
 *
 * Why like this?
 *
 *  - All environmental variables documented in one place
 *  - If I use "." notation it's easy to cut/paste into code
 *  - Unlike JSON, javascript allows comments (which I like)
 *  - Reading package.json here centralizes all config info
 *
 */

var config            = {};

// From package.json
config.name           = pkg.name;
config.version        = pkg.version;
config.description    = pkg.description;
config.company        = pkg.company;
config.author         = pkg.author;
config.keywords       = pkg.keywords;
config.nodeVersion    = pkg.engines.node;

config.port           = process.env.PORT || 3000;
config.ga             = process.env.GA   || 'UA-54252003-1';
config.dezbocss       = rev.Dezbomin;
/**
 * Logging Configuration
 */

config.logging        = process.env.LOGGING || true;
// Loggly configuration
config.loggly         = {};
config.loggly.token   = process.env.LOGGLY_TOKEN || 'Your Token';
config.loggly.subdomain = 'skeleton';
config.loggly.tags    = ['Nodejitsu'];
config.loggly.json    = true;

/**
 * Database Configuration
 */

config.mongodb        = {};
config.mongodb.url    = process.env.MONGODB_URL || 'mongodb://localhost/dezbofullstack-dev';

/**
 * Session Configuration
 */

var hour              = 3600000;
var day               = (hour * 24);
var week              = (day * 7);

// Session
config.session                 = {};
config.session.secret          = process.env.SESSION_SECRET || 'nLz8gSz7DHv3fDU3LIp60G';
config.session.name            = 'sid';  // Generic - don't leak information
config.session.proxy           = false;  // Trust the reverse proxy for HTTPS/SSL
config.session.resave          = false;  // Forces session to be saved even when unmodified
config.session.saveUninitialized = false; // forces a session that is "uninitialized" to be saved to the store
config.session.cookie          = {};
config.session.cookie.httpOnly = true;   // Reduce XSS attack vector
config.session.cookie.secure   = false;  // Cookies via HTTPS/SSL
config.session.cookie.maxAge   = process.env.SESSION_MAX_AGE || week;

/**
 * Throttle Login Attempts
 */

config.loginAttempts           = {};
config.loginAttempts.forIp     = 50;
config.loginAttempts.forUser   = 5;
config.loginAttempts.expires   = '20m';

/**
 * Mailing Configuration
 */

// Who are we sending email as?
config.smtp                    = {};
config.smtp.name               = process.env.SMTP_FROM_NAME    || 'Dezbo';
config.smtp.address            = process.env.SMTP_FROM_ADDRESS || 'louis@dezbo.com';

// How are we sending it?
config.gmail                   = {};
config.gmail.user              = process.env.SMTP_USERNAME || 'dezbo.contact@gmail.com';
config.gmail.password          = process.env.SMTP_PASSWORD || 'dezbo123';

/**
 * Authorization Configuration
 */

config.localAuth               = true;
config.verificationRequired    = true;  // on/off for user email verification at signup
config.enhancedSecurity        = true;   // on/off for two factor authentication

// Facebook
config.facebookAuth            = true;
config.facebook                = {};
config.facebook.clientID       = process.env.FACEBOOK_KEY    || '281210498733110';
config.facebook.clientSecret   = process.env.FACEBOOK_SECRET || 'b4b8bbc9bbc4f7918fe5f5b4b95e0394';

// Github
config.githubAuth              = true;
config.github                  = {};
config.github.clientID         = process.env.GITHUB_KEY    || 'Your Key';
config.github.clientSecret     = process.env.GITHUB_SECRET || 'Your Secret';

// Twitter
config.twitterAuth             = true;
config.twitter                 = {};
config.twitter.consumerKey     = process.env.TWITTER_KEY    || 'oEtALDwDbRWGrsj42q5lbVBMj';
config.twitter.consumerSecret  = process.env.TWITTER_SECRET || 'tZmjL5YRBCiNeTiM0p2h4CjKoo7yiUiOdhBihlz0ph0DGFlwCa';

// Google
config.googleAuth              = true;
config.google                  = {};
config.google.clientID         = process.env.GOOGLE_KEY    || 'Your Key';
config.google.clientSecret     = process.env.GOOGLE_SECRET || 'Your Secret';

/**
 * API Keys
 */

// New York Times
config.nyt                     = {};
config.nyt.key                 = process.env.NYT_KEY || 'Your Key';

// Last FM
config.lastfm                  = {};
config.lastfm.api_key          = process.env.LASTFM_KEY    || 'Your Key';
config.lastfm.secret           = process.env.LASTFM_SECRET || 'Your Secret';

// Stripe
config.stripe                  = {};
config.stripe.key              = process.env.STRIPE_KEY || 'sk_test_4QEbIpH9bh0fqqSNXAEKNe1H';

// Twilio
config.twilio                  = {};
config.twilio.sid              = process.env.TWILIO_SID   || 'Your SID';
config.twilio.token            = process.env.TWILIO_TOKEN || 'Your Token';
config.twilio.phone            = process.env.TWILIO_PHONE || 'Your Phone';

// Tumblr
config.tumblr                  = {};
config.tumblr.key              = process.env.TUMBLR_KEY    || 'Your Key';
config.tumblr.secret           = process.env.TUMBLR_SECRET || 'Your Secret';
config.tumblr.callbackURL      = process.env.TUMBLR_URL    || '/auth/tumblr/callback';

// Foursquare
config.foursquare              = {};
config.foursquare.clientId     = process.env.FOURSQUARE_KEY    || 'Your Key';
config.foursquare.clientSecret = process.env.FOURSQUARE_SECRET || 'Your Secret';
config.foursquare.redirectUrl  = process.env.FOURSQUARE_URL    || 'http://localhost:3000/auth/foursquare/callback';

// Paypal
config.paypal                  = {};
config.paypal.host             = process.env.PAYPAL_HOST       || 'api.sandbox.paypal.com';
config.paypal.client_id        = process.env.PAYPAL_KEY        || 'Your Key';
config.paypal.client_secret    = process.env.PAYPAL_SECRET     || 'Your Secret';
config.paypal.returnUrl        = process.env.PAYPAL_RETURN_URL || 'http://localhost:3000/api/paypal/success';
config.paypal.cancelUrl        = process.env.PAYPAL_CANCEL_URL || 'http://localhost:3000/api/paypal/cancel';

module.exports = config;
