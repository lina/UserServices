var express = require('express');
// var router = express.Router();
var implementation = require('./implementation');

module.exports = function(router){

  // router.get('/', implementation.getUser);
  router.post('/', implementation.logUserIn);

};


