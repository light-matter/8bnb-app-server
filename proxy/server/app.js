const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');
const request = require('request');
const app = express();
const port = 8080;

// Middleware
app.use(morgan('dev')); // for logging http requests to the terminal
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', express.static(path.join(__dirname, '../public'))); // for serving static files

app.get('/spaces', function(req, res) {
  // console.log(req.params);
  // res.send('hello spaces');
  req.pipe(request.get('localhost:3001/spaces')).pipe(res);
});

app.get('/reservations', function(req, res) {
  // console.log(req.params);
  // res.send('hello reservations');
  req.pipe(request.get('localhost:3001/reservations')).pipe(res);
});

app.post('/reservations', function(req, res) {
  // console.log(req.body);
  // res.send('hello reservations');
  req.pipe(request.post('localhost:3001/reservations')).pipe(res);
});

app.listen(port, () => console.log(`Proxy server listening on port ${port}!`));

