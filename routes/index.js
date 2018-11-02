const express = require('express');
const router = express.Router();
const starSign = require('../business/star-sign');
const userAction = require('../business/user-actions');


router.get('/', (req, res, next) => {
  const birthdate = req.query.birthdate;
  const name = req.query.name;
  starSignResponse = starSign.zodiacSign(birthdate)

  userAction.createUser({
    name: name,
    birthdate: birthdate,
    starSign: starSignResponse
  })

  const response = {
    starSign: starSignResponse
  };
  res.status(200).json(response);
});
 
module.exports = router;
