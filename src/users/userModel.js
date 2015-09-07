var mongoose = require('mongoose');
var Promise = require("bluebird");
var _ = require('underscore');

var UserSchema = new mongoose.Schema({
  creationDate: {type:Date, default: Date.now},
  fbId: String
});

UserSchema.statics.parseUserData = function(userData){
  // var schemaTypePairs = _.chain(userData).filter(function(path, type){
  //   // filter for all paths not already in schema
  //   return !this.schema.path(path);
  // }, this).reduce(function(schemaTypePairs, fieldKey, idx, userData){
  //   // build object of pattern: {pathName: schemaType, pathName2: schemaType, ...}
  //   schemaTypePairs[fieldKey] = typeof userData[fieldKey] === 'object' ? Schema.Types.Mixed : typeof userData[fieldKey];
  //   return schemaTypePairs;
  // }, {}).value();
  var schemaTypePairs = {};
  _.each(userData, function(val, key, userData){
    if(! this.schema.path(key)){
      schemaTypePairs[key] = typeof val === 'object' ? mongoose.Schema.Types.Mixed : typeof val;
    }
  }, this);

  this.schema.add(schemaTypePairs);
};

module.exports = mongoose.model('User', UserSchema);
