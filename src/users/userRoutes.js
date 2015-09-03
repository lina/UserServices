var userController = require('./userController');

module.exports = function(router){

  router.post('/', userController.logUserIn);

};

