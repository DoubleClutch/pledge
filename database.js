const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pledge');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to mongoDB')
});

var pledgeSchema = mongoose.Schema({
//   quantity: Number,
//   description: {
//     type: mongoose.Schema.Types.String,
//     unique: true
//   }
  projectId: Number,
  pledgeInfo: String,
  pledgeSupport: Array
  
});

var PledgeModel = mongoose.model('PledgeModel', pledgeSchema);

let methods = {

    // save: (obj) => {
    //   let listDocument = new PledgeModel({
    //     projectId: obj.projectId,
    //     pledgeInfo: obj.pledgeInfo,
    //     pledgeSupport: obj.pledgeSupport
    //   })
    //   listDocument.save(function (err) {
    //     if (err) return console.error(err);
    //   });
    // },

    find: (callback) => {
      PledgeModel.find(callback);
    },
    
    findItem: (body, callback) => {
      PledgeModel.find(callback).where('description').equals(body.description);
    }
  }

  module.exports.methods = methods;
