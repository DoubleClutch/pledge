const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pledge');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
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
    },

    find: (callback) => {
      PledgeModel.find(callback);
    },
    
    findItem: (body, callback) => {
      PledgeModel.find(callback).where('description').equals(body.description);
    }
  }

let date = new Date();

let pledgeInfoData = JSON.stringify({
    pledgeTotal: '10,420',
    pledgeGoal: '7,500',
    backers: 352,
    daysToGo: 18,
    timeStamp: date.toString()
  });

let pledgeSupportData = JSON.stringify([
    {
      pledgeAmount: 5,
      pledgeDescription: {
        title: 'Heartbeat',
        description: 'I hear you! Receive my heartfelt thanks and an exclusive Once Upon A Coma backer wallpaper + ringtone set!',
        includes: ['Kickstarter-Exclusive Digital Wallpaper & Ringtone Set']
      },
      deliveryDate: 'Oct 2018',
      shipsTo: 'Anywhere in the world',
      backers: 59
    },
    {
      pledgeAmount: 15,
      pledgeDescription: {
        title: 'Patient',
        description: 'Experience Pete’s strange coma in the digital copy of Once Upon A Coma on Steam, GOG, or GameJolt (Windows, Mac or Linux), plus early-access to the exclusive beta version of the game!',
        includes: [
          'Once Upon A Coma Digital Copy (Steam/GOG)',
          'Kickstarter-Exclusive Digital Wallpaper & Ringtone Set',
          'Once Upon A Coma Discord access!'
        ]
      },
      deliveryDate: 'Oct 2018',
      shipsTo: 'Anywhere in the world',
      backers: 625
    }
  ])


let testData = {
    projectId: 1,
    pledgeInfo: pledgeInfoData,
    pledgeSupport: pledgeSupportData
}
methods.save(testData)