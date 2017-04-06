const express = require('express');
const router = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Initialize express
const app = express();

// MongoDB connections
mongoose.connect('mongodb://localhost/driver');

// ES6 Promise
mongoose.Promise = global.Promise;

// Static Files
app.use(express.static('public'));

// Body Parser middleware
app.use(bodyParser.json());

// Initialize routes
app.use('/api', router);

app.use(function(err, req, res, next) {
  res.status(422).send({error: err.message})
})

// Listen to env or local port
app.listen(process.env.port || 3000, function() {
  console.log('Port 3000 runing');
});
