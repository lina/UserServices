var User = require('./userModel');

module.exports = {
  logUserIn: function(req, res, next){
    var token = req.body.token,
        userData = req.body.userData;

    if (!userData || !token) {
      res.sendStatus(400);
      return;
    }

    User.findOrCreate(userData.id)
      .then(function(user){
        if(user){
          // retrieved existing user
          res.status(200).send(user);
          next(user)
        }else{
          // create new user
          new User({
            facebookId: userData.id,
            accessToken: token,
            email: userData.email
          }).save(function(err, newUser){
            if(err){ return new Error(err); }
            res.status(201).send(newUser);
            next(newUser);
          });
        }
      }).catch(function(err){
        res.status(500).send(err);
        next(err)
      });
  }
}
