const router = require('express').Router(),
      usersController = require('../../controllers/usersController');

router.route('/')
    // .get(usersController.findAll)
    .post(usersController.authUser);

 router.route('/:id')
    // .get(usersController.findById)
    .post(usersController.updatePortfolio);   

module.exports = router;