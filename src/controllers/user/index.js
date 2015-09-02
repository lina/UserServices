var express = require('express');
var router = express.Router();
var implementation = require('./implementation');

router.use(require('body-parser').json());
router.use(require('cors')());

// router.get('/', implementation.getUser);

router.post('/', implementation.logUserIn);

module.exports = router;
