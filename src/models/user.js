var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require("bluebird");

var UserSchema = new Schema({
  facebookId: String
});


module.exports = mongoose.model('User',UserSchema);
