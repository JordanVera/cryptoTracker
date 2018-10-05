const router = require('express').Router(),
      usersController = require('../../controllers/usersController');

router.route('/')
    .get(usersController.findAll)
    .post(usersController.signUpUser);

 router.route('/:id')
    .get(usersController.findById);   

module.exports = router;