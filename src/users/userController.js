var User = require('./userModel');

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
          new User({
            fbId: userData.id,
            accessToken: token,
            email: userData.email
          }).save().then(function(newUser){
            res.status(201).send(newUser);
            next(newUser);
          });
        }
      }).catch(function(err){
        res.status(500).send(err);
        next(err)
      });
  },

  createUser: function(userData, token){
    // expand schema with userData
    return new User({
      fbId: userData.id,
      accessToken: token,
      email: userData.email
    }).save();
  }

};
