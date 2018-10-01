const mongoose = require('mongoose'),
      coinOwned = require('./coinOwned'),
      Schema   = mongoose.Schema;

const userSchema = new Schema({
    first_name: { type: String, required: true },
    sur_name: { type: Number, required: true },
    portfolio:[coinOwned]
})

const User = mongoose.model("User", userSchema)
module.exports = User;