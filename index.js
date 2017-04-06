const express = require('express');
const router = require('./routes/api');
const bodyParser = require('body-parser');


// Initialize express
const app = express();

// Body Parser middleware
app.use(bodyParser.json());

// Initialize routes
app.use('/api', router);

// Listen to env or local port
app.listen(process.env.port || 3000, function() {
  console.log('Port 3000 runing');
});
