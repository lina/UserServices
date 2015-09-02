var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require("bluebird");

var UserSchema = new Schema({
  creationDate: {type:Date, default: Date.now},
  facebookId: String,
  accessToken: String,
  email: String
});

UserSchema.statics.findOrCreate = function(filters){
  return new Promise(function(resolve,reject){
    var User = this;
    this.find(filters,function(err,results){
      if(results.length == 0){
        var newUser = new User(filters);
        newUser.save(function(err,doc){
          if(!err){
            resolve(doc);
          }else{
            reject(err);
          }
        });
      }else{
        if(!err){
          resolve(results[0]);
        }else{
          reject(err);
        }
      }
    });
  })
}

module.exports = mongoose.model('User', UserSchema);