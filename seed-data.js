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

const createSupportData = (amount, title, desc, array, date, ships, backers) => {
  return {
    pledgeAmount: amount,
    pledgeDescription: {
      title: title,
      description: desc,
      includes: array
    },
    deliveryDate: date,
    shipsTo: ships,
    backers: backers
  };
}

let supportDataArray1 = []

supportDataArray1.push(createSupportData(
  5,
  'Heartbeat',
  'I hear you! Receive my heartfelt thanks and an exclusive Once Upon A Coma backer wallpaper + ringtone set!',
  ['Kickstarter-Exclusive Digital Wallpaper & Ringtone Set'],
  'Oct 2018',
  'Anywhere in the world',
  59
));


supportDataArray1.push(createSupportData(
  15, 
  'Patient', 
  'Experience Pete’s strange coma in the digital copy of Once Upon A Coma on Steam, GOG, or GameJolt (Windows, Mac or Linux), plus early-access to the exclusive beta version of the game!',
  [
    'Once Upon A Coma Digital Copy (Steam/GOG)',
    'Kickstarter-Exclusive Digital Wallpaper & Ringtone Set',
    'Once Upon A Coma Discord access!'
  ],
  'Oct 2018',
  'Anywhere in the world',
  625
));

supportDataArray1.push(createSupportData(
  25,
  'Doctor',
  'Enjoy a digital copy of Once Upon A Coma’s gorgeous and haunting 20-song soundtrack written by Thomas Brush. You\'ll also receive a digital book full of the game’s gorgeous hi-res hand-drawn art! Oh, and get your name in the credits!',
  [
    'Once Upon A Coma Digital Copy (Steam/GOG)',
    'Name in credits as "Doctor"!',
    'Official 20-Song Soundtrack by Thomas Brush',
    'Digital High Res Art Book',
    'Kickstarter-Exclusive Digital Wallpaper & Ringtone Set',
    'Once Upon A Coma Discord access!'
  ],
  'Oct 2018',
  'Anywhere in the world',
  569
));

supportDataArray1.push(createSupportData(
  40,
  'Neurosurgeon',
  'Itching to cut deep inside Pete’s strange and haunting mind? Get exclusive access to the Once Upon A Coma alpha, and also receive a Coma University M.D. Certificate signed by Thomas Brush. Plus, your name will appear in the credits as part of the elite “Neurosurgeons”. (Certificate is digital only if outside U.S.)',
  [
    'Once Upon A Coma Digital Copy (Steam/GOG)',
    'M.D. Certificate from Coma University signed by Thomas Brush',
    'Name in credits as "Neurosurgeon"!',
    'Exclusive Alpha Access!',
    'Official 20-Song Soundtrack by Thomas Brush',
    'Digital High Res Art Book',
    'Kickstarter-Exclusive Digital Wallpaper & Ringtone Set',
    'Once Upon A Coma Discord access!'
  ],
  'Oct 2018',
  'Anywhere in the world',
  126
));

supportDataArray1.push(createSupportData(
  65,
  'Neurosurgeon',
  'Itching to cut deep inside Pete’s strange and haunting mind? Get exclusive access to the Once Upon A Coma alpha, and also receive a Coma University M.D. Certificate signed by Thomas Brush. Plus, your name will appear in the credits as part of the elite “Neurosurgeons”. (Certificate is digital only if outside U.S.)',
  [
    'Once Upon A Coma Digital Copy (Steam/GOG)',
    'Your name projected on the wall of Bloodwick Movie Theatre!',
    'M.D. Certificate from Coma University signed by Thomas Brush',
    'Name in credits as "Neurosurgeon"!',
    'Exclusive Alpha Access!',
    'Official 20-Song Soundtrack by Thomas Brush',
    'Digital High Res Art Book',
    'Kickstarter-Exclusive Digital Wallpaper & Ringtone Set',
    'Once Upon A Coma Discord access!'
  ],
  'Oct 2018',
  'Anywhere in the world',
  124
));

let project1 = {
  projectId: '1',
  pledgeInfo: createInfoData('10,755', '8,000', 420, 15),
  pledgeSupport: JSON.stringify(supportDataArray1) 
}

let supportDataArray2 = []

supportDataArray2.push(createSupportData(
  199,
  'Kickstarter-only HALF PRICE SPECIAL',
  'Get your LeviZen Early and SAVE $200 (After-Campaign Price: $399) As seen in our previous campaign, our products are offered at a significantly lower price (even up to half-price), only during the Kickstarter campaign.',
  [
    'LeviZen Liquid Levitating Machine',
    '100-240V 50/60Hz AC Power Adapter with US and International Plugs',
    'Custom Liquid Dispenser'
  ],
  'Jul 2018',
  'Anywhere in the world',
  59
));

let project2 = {
  projectId: '2',
  pledgeInfo: createInfoData('12,580', '15,000', 65, 48),
  pledgeSupport: JSON.stringify(supportDataArray2) 
}

let supportDataArray3 = []

supportDataArray3.push(createSupportData(
  7,
  'eBook Me!',
  'You handsome devil, you. Snag an eBook and be gone!',
  [
    'eBook of Couriers: OFF GRID',
    'eBook of Shadows of the Highridge'
  ],
  'May 2018',
  'Anywhere in the world',
  42
));

supportDataArray3.push(createSupportData(
  15,
  'Paperback Me!',
  'Well, don\'t mind if I do. Take a paperback for the road my friend.',
  [
    'Paperback of Couriers: OFF GRID',
    'eBook of Couriers: OFF GRID',
    'eBook of Shadows of the Highridge'
  ],
  'Sept 2018',
  'Only certain countries',
  27
));

supportDataArray3.push(createSupportData(
  25,
  'Hardcover Me!',
  'The Kickstarter Exclusive, limited edition hardcover. These will only be available through the Kickstarter campaign (and any immediate followup).',
  [
    'Paperback of Couriers: OFF GRID',
    'eBook of Couriers: OFF GRID',
    'eBook of Shadows of the Highridge'
  ],
  'Sept 2018',
  'Only certain countries',
  51
));

supportDataArray3.push(createSupportData(
  250,
  'Immortalize Me!',
  'Be immortalized on the chassis of a pre-Burn SlitPod (see description for drafted sketches)! They were popular rides before the apocalypse, and your name could be on one today! Includes the rewards unlocked in all lower levels as well.',
  [
    'Paperback of Couriers: OFF GRID',
    'Name a SlitPod (restrictions apply)',
    'eBook of Couriers: OFF GRID',
    'eBook of Shadows of the Highridge'
  ],
  'Sept 2018',
  'Only certain countries',
  4
));

let project3 = {
  projectId: '3',
  pledgeInfo: createInfoData('5,245', '2,000', 128, 37),
  pledgeSupport: JSON.stringify(supportDataArray3) 
}

let project4 = {
  projectId: '4',
  pledgeInfo: createInfoData('5,245', '2,000', 128, 37),
  pledgeSupport: JSON.stringify(supportDataArray3) 
}

let testData = [project1, project2, project3];

module.exports.testData = testData;


