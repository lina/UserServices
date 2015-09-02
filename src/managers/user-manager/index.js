var request = require('request');
var promise = require('bluebird');
var User = require('../../models/user');

UserManager = {
  logUserIn: function(token, userData) {
    return new Promise(function(resolve, reject){
      User.findOrCreate(token, userData)
        .then(function(userModel){
          resolve(userModel);
        }).catch(function(err){
          console.log('error retriving/creating user:', err);
          reject(err);
        });
    });
  }
};

module.exports = UserManager;
