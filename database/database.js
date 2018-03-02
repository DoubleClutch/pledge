const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pledge');

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

let find = (id, callback) => {
  PledgeModel.find().where('projectId').equals(id).exec(callback);
}

module.exports.find = find;
