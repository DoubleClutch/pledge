const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pledge');

const data = require('./seed-data.js')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongoDB')
});

var pledgeSchema = mongoose.Schema({
  projectId: Number,
  pledgeInfo: String,
  pledgeSupport: String
});

var PledgeModel = mongoose.model('PledgeModel', pledgeSchema);

let methods = {

    save: (obj) => {
      let listDocument = new PledgeModel({
        projectId: obj.projectId,
        pledgeInfo: obj.pledgeInfo,
        pledgeSupport: obj.pledgeSupport
      })
      listDocument.save(function (err) {
        if (err) return console.error(err);
      });
    }
  }


methods.save(data.testData)