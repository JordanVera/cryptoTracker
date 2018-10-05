const mongoose = require('mongoose'),
      coinOwned = require('./coinOwned'),
      Schema   = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    portfolio:[coinOwned]
})

const User = mongoose.model("User", userSchema)
module.exports = User;