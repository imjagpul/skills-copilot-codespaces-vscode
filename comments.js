// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('GET /comments');
});

// 3. Start the web server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});