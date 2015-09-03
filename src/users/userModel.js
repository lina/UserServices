var mongoose = require('mongoose');
var Promise = require("bluebird");

var UserSchema = new mongoose.Schema({
  creationDate: {type:Date, default: Date.now},
  facebookId: String,
  accessToken: String,
  email: String
});

UserSchema.statics.findOrCreate = function(token, userData){
  return this.findOne({
    facebookId: userData.id
  });
  // return new Promise(function(resolve,reject){
  //   User.findOne({
  //     facebookId: userData.id
  //   }).then(function(user){
  //     if(user){
  //       // retrieved existing user
  //       console.log('Successfully retrieved user:', user);
  //       resolve(user);
  //     }else{
  //       // user doesn't exist; create new user
  //       var newUser = new User({
  //         facebookId: userData.id,
  //         accessToken: token,
  //         email: userData.email
  //       });
  //       newUser.save(function(err,doc){
  //         if(err){ reject(err); }
  //         console.log('Successfully created new user:', doc);
  //         resolve(doc);
  //       });
  //     }
  //   }).catch(function(err){
  //     console.log('Error creating or retrieving user:', err);
  //     reject(err);
  //   });
  // });
}

module.exports = mongoose.model('User', UserSchema);
