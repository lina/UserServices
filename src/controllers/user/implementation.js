var UserManager = require('../../managers/user-manager/');
var User = require('../../models/user');
var userManager = new UserManager();

module.exports = {

  userLogIn : function(req,res){
    var token = req.body.token;
    var userData = req.body.userData;
    // Params and stuff
    console.log(token, userData);
    userManager.logUserIn(token, userData)
      .then(function(body){
        console.log(body);
        res.sendStatus(200);
      })
      .catch(function(err){
        res.sendStatus(500);
      });

  }

};