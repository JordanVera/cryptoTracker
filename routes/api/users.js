const router = require('express').Router(),
      usersController = require('../../controllers/usersController');

router.route('/')
    .get(usersController.findAll);

module.exports = router;