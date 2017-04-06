const express = require('express');
const router = express.Router();
const Driver = require('../models/driver');

router.get('/driver', function(req, res, next) {
  res.send({type: 'GET'})
});

// Posts to database
router.post('/driver', function(req, res, next) {
  Driver.create(req.body).then(function(driver) {
    res.send(driver);
  }).catch(next);
})

router.put('/driver/:id', function(req, res, next) {
  res.send({type: 'PUT'})
})

router.delete('/driver/:id', function (req, res, next) {
  res.send({type: 'DELETE'});
})

module.exports = router;
