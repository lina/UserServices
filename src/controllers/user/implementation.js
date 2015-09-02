var UserManager = require('../../managers/user-manager/');
var User = require('../../models/user');

module.exports = {

  logUserIn : function(req,res){
    var token = req.body.token;
    var userData = req.body.userData;

    UserManager.logUserIn(token, userData)
      .then(function(user){
        res.status(200).send(user);
      })
      .catch(function(err){
        res.status(500).send(err);
      });

  }

};
