var mongoose = require('mongoose');
var Promise = require("bluebird");

var UserSchema = new mongoose.Schema({
  creationDate: {type:Date, default: Date.now},
  fbId: String,
  accessToken: String,
  email: String
});

UserSchema.statics.expandSchema = function(key, path){
  this.add({key: path});
};

// UserSchema.statics.findOrCreate = function(fbId){
//   return this.findOne({
//     facebookId: fbId
//   });
// };

module.exports = mongoose.model('User', UserSchema);
