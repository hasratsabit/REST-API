const express = require('express');
const router = require('./routes/api');

// Initialize express
const app = express();

app.use('/api', router);

// Listen to env or local port
app.listen(process.env.port || 3000, function() {
  console.log('Port 3000 runing');
});
