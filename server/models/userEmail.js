/**
 * Created by Louis on 2014-09-04.
 */
'use strict';

var mongoose = require('mongoose');

var userEmailSchema = new mongoose.Schema({
  email: { type: String, unique: true, index: true }
});

module.exports = mongoose.model('UserEmail', userEmailSchema);
