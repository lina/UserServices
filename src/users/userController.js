var User = require('./userModel');
var _ = require('underscore');

module.exports = {
  logUserIn: function(req, res, next){
    var token = req.body.token,
        userData = req.body.userData;

    if (!userData || !token) {
      res.sendStatus(400);
      return;
    }

    User.findOne({ fbId: userData.id })
      .then(function(user){
        if(user){
          // retrieved existing user
          res.status(200).send(user);
          next(user)
        }else{
          // expand schema
          var userDataFormatted = _.extend(_.omit(userData, 'id'), {
            token: token,
            fbId: userData.id
          });

          User.parseUserData(userDataFormatted);

          // create new user
          new User(userDataFormatted).save()
            .then(function(newUser){
              res.status(201).send(newUser);
              next(newUser);
            });
        }
      }.bind(this)).catch(function(err){
        res.status(500).send(err);
        next(err)
      });
  }

};
