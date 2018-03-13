const mongoose = require('mongoose');
mongoose.connect('mongodb://database:27017/pledge');

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

  find: (id, callback) => {
    PledgeModel.find().where('projectId').equals(id).exec(callback);
  },

  save: (obj) => {
    let listDocument = new PledgeModel({
      projectId: obj.projectId,
      pledgeInfo: obj.pledgeInfo,
      pledgeSupport: obj.pledgeSupport
    })
    listDocument.save(function (err) {
      if (err) return console.error(err);
      console.log('Database successfully seeded');
      mongoose.disconnect();
    });
  }
}

module.exports.methods = methods;
