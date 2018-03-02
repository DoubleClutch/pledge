let date = new Date();

let pledgeInfoData = JSON.stringify({
  pledgeTotal: '16,420',
  pledgeGoal: '7,500',
  backers: 352,
  daysToGo: 18,
  timeStamp: date.toString()
});

// timestamp has been left out from paramters
const createInfoData = (total, goal, backers, days) => {
  return JSON.stringify({
    pledgeTotal: total,
    pledgeGoal: goal,
    backers: backers,
    daysToGo: days,
    timeStamp: date.toString()
  });
}

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
]);

let testData = {
  projectId: '8',
  pledgeInfo: createInfoData('9,999', '8,000', 420, 15),
  pledgeSupport: pledgeSupportData
}

module.exports.testData = testData;


