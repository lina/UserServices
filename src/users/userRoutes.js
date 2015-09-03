var userController = require('./userController');

module.exports = function(router){

  router.get('/', userController.getUser);
  router.post('/', userController.logUserIn);

};

