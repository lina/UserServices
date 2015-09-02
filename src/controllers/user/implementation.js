var request = require('request');
var User = require('../../models/user');

module.exports = {

  userLogIn : function(req,res){
    console.log('pinged');
    var token = req.body.token;
    console.log(token);
    // Params and stuff
    request.get("https://graph.facebook.com/v2.4/me?" 
      + "access_token=" + token + "&" + 
      "fields=id,name,gender,location,website,picture,relationship_status&" + 
      "format=json", 

      function(err, resp, data){
        console.log(resp.body);
        res.send(resp.body);
      }
    )
  }
};