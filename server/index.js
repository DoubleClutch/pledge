const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/pledge', function (req, res) {
  console.log('Server received a post request', req.body); 
  mongoose.methods.find(function (err, pledgeModels) {
    if (err) return console.error(err);
    // console.log(listObjects);
    res.send(JSON.stringify(pledgeModels));
  });
});

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});