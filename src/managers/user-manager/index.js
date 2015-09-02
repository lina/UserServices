var request = require('request');

function UserManager(){

};

UserManager.prototype.logUserIn = function(token, userData) {
  return new Promise(function(resolve,reject){
    // Write data and token to database....
    // Have fun here

  });
};

module.exports = UserManager;