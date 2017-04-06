const express = require('express');
const router = express.Router();

router.get('/student', function(req, res) {
  res.send({type: 'GET'})
});

router.post('/student', function(req, res) {
  console.log(req.body);
  res.send({
    type: 'POST',
    name: req.body.name,
    city: req.body.city

  });
})

router.put('/student/:id', function(req, res) {
  res.send({type: 'PUT'})
})

router.delete('/student/:id', function (req, res) {
  res.send({type: 'DELETE'});
})

module.exports = router;
