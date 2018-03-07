const mongoose = require('./database/database.js');
const data = require('./seed-data.js')

data.testData.forEach(project => {
  mongoose.methods.save(project)
});

