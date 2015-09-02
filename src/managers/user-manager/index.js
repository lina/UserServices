var User = require('../../models/user');

function UserManager(){

};

UserManager.prototype.authenticateToken = function(token) {
  return new Promise(function(resolve,reject){
    User.findOne({ access_token: token },
      function(err, user) {
        if(err) {
          return reject(err)
        }
        if(!user) {
          return reject(new Error('Could not validate token'));
        }
        return resolve(user);
      }
    );
  });
};

module.exports = UserManager;