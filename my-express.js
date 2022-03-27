//jshint esversion:6

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }

const express = require('express');
const app = express();
const port = 5000;
const values = require('src/values.js');

console.log(values);

app.get('/api/:version/:collection/:endpoint', (req, res) => {
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    res.end();
})

app.listen(port, () => {
    console.log("Express is listening on port 5000");
})