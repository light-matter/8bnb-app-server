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


// Proxy requests to modules
app.get('/spaces', function(req, res) {
  request(`http://localhost:3001/spaces?id=${req.query.id}`, function (error, response, body) {
    if (error) {
      console.error('error:', error);
    } else {
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.send(response);
    }
  });
});

app.get('/reservations', function(req, res) {
  request(`http://localhost:3001/reservations?spaceId=${req.query.spaceId}`, function (error, response, body) {
    if (error) {
      console.error('error:', error);
    } else {
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.send(response);
    }
  });
});

app.post('/reservations', function(req, res) {
  request('http://localhost:3001/reservations', function (error, response, body) {
    if (error) {
      console.error('error:', error);
    } else {
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.send(response);
    }
  });
});

app.listen(port, () => console.log(`Proxy server listening on port ${port}!`));

