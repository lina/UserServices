var User = require('./userModel');

module.exports = {
  logUserIn: function(req, res, next){
    var token = req.body.token,
        userData = req.body.userData;

    User.findOrCreate(userData.id)
      .then(function(user){
        if(user){
          // retrieved existing user
          console.log('Successfully retrieved user');
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
            console.log('Successfully created new user');
            res.status(201).send(newUser);
            next(newUser);
          });
        }
      }).catch(function(err){
        console.log('error retriving/creating user:', err);
        res.status(500).send(err);
        next(err)
      });
  },

  getUser: function(req, res, next){}
}
