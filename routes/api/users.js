const router = require('express').Router(),
      usersController = require('../../controllers/usersController');

router.route('/')
    .get(usersController.findAll);

 router.route('/:id')
    .get(usersController.findById);   

module.exports = router;