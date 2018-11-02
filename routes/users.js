const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
  const date = new Date();
  User.find()
    .select('_id name birthdate starSign')
    .exec()
    .then(docs => {
      const response = {
        total: docs.length,
        time: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        request_time: Date.now() - date + "ms",
        users: docs.map(doc => {
          return {
            id: doc._id,
            name: doc.name,
            price: doc.birthdate,
            starSign: doc.starSign
          }
        })
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log("ERROR:" + err);
      res.status(500).json({
        error: err
      })
    });
});

module.exports = router;
