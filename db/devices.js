const mongoose = require('mongoose');

let connectionString = 'mongodb://mongo/devices';

if (process.env.NODE_ENV === 'production') {
  connectionString = process.env.MONGODB_HOST;
}

mongoose.connect(connectionString);

module.exports = mongoose;
