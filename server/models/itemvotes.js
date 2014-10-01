/**
 * Created by Louis on 2014-09-04.
 */
'use strict';

var mongoose = require('mongoose');

var itemVotesSchema = new mongoose.Schema({
  voteup: { type: Number, index: true },
  votedown: { type: Number, index: true },
  id:{type: String, index: true},
  title: {type: String}
});

module.exports = mongoose.model('ItemVote', itemVotesSchema);
