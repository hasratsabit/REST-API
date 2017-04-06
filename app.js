const express = require('express');

// Initialize express
const app = express();

// Listen to env or local port
app.listen(process.env.port || 3000, function() {
  console.log('runing port 3000');
});
