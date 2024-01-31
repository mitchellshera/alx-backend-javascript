const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

// Use the routes defined in full_server/routes/index.js
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the app for testing purposes
module.exports = app;
