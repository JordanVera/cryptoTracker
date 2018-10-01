const User = require('../models/user');
const CoinOwned = require('../models/coinOwned');
const mongoose = require('mongoose');

User.find({})
    .then(() => {
        User.create({
            first_name: 'Jordan',
            sur_name: 'Vera',
            portfolio:[]
        })
    })
