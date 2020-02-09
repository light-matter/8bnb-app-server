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
const reservationModuleUrl = 'http://ec2-18-221-158-53.us-east-2.compute.amazonaws.com';
const reviewsModuleUrl = 'http://ec2-18-216-209-189.us-east-2.compute.amazonaws.com:3000'; // add routes
const calendarModuleUrl = 'http://ec2-18-221-158-53.us-east-2.compute.amazonaws.com'; // change and add routes
const similarHomesModuleUrl = 'http://ec2-18-221-158-53.us-east-2.compute.amazonaws.com'; // change and add routes

app.get('/spaces', function(req, res) {
  request(`${reservationModuleUrl}/spaces?id=${req.query.id}`, function (error, response, body) {
    if (error) {
      console.error('error:', error);
    } else {
      console.log('statusCode:', response && response.statusCode);
      res.send(body);
    }
  });
});

app.get('/reservations', function(req, res) {
  request(`${reservationModuleUrl}/reservations?spaceId=${req.query.spaceId}`, function (error, response, body) {
    if (error) {
      console.error('error:', error);
    } else {
      console.log('statusCode:', response && response.statusCode);
      res.send(body);
    }
  });
});

app.post('/reservations', function(req, res) {
  request(`${reservationModuleUrl}/reservations`, function (error, response, body) {
    if (error) {
      console.error('error:', error);
    } else {
      console.log('statusCode:', response && response.statusCode);
      res.send(body);
    }
  });
});

app.listen(port, () => console.log(`Proxy server listening on port ${port}!`));
