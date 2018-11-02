const User = require('../models/user');
const mongoose = require('mongoose');

module.exports = {
  createUser: function(params) {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: params.name,
      birthdate: params.birthdate,
      starSign: params.starSign
    });

    user.save().then(result => {
      console.log(result);
    });
  }
}