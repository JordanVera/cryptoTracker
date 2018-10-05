const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.User
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    findById: function(req, res) {
        db.User
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    signUpUser: function(req, res) {
        db.User 
        .create({
            username: req.body.username,
            password: req.body.password
        })
        
        res.send('yasss')
    }
}