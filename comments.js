// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment array
const comments = [
  { name: 'John', comment: 'Hello!'},
  { name: 'Tom', comment: 'Hi!'},
  { name: 'Mike', comment: 'Good morning!'}
];

// Create a route to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start web server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});