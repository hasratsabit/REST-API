const express = require('express');
const router = express.Router();
const Driver = require('../models/driver');

router.get('/driver', function(req, res, next) {
  Driver.geoNear(
    {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    {maxDistance: 100000000, spherical: true}
  ).then(function(driver) {
    res.send(driver)
  }).catch(next);
});

// Posts to database
router.post('/driver', function(req, res, next) {
  Driver.create(req.body).then(function(driver) {
    res.send(driver);
  }).catch(next);
})

// Updates Driver in the database
router.put('/driver/:id', function(req, res, next) {
  Driver.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
    Driver.findOne({_id: req.params.id}).then(function(driver) {
      res.send(driver)
    })
  })
})

router.delete('/driver/:id', function(req, res, next) {
  Driver.findByIdAndRemove({_id: req.params.id})
  .then(function(driver) {
      res.send(driver)
    })
})

module.exports = router;
