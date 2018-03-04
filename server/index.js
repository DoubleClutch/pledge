const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./../database/database.js');

let app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));
app.use('/:id', express.static(__dirname + '/../client/dist'));

app.get('/pledge/:id', function (req, res) {
  console.log('req.params', req.params.id);
  console.log('Server received a post request', req.url); 
  mongoose.find(req.params.id, function (err, pledgeModels) {
    if (err) return console.error(err);
    // console.log(pledgeModels);
    res.send(JSON.stringify(pledgeModels[0]));
  });
});

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});