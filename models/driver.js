const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  car: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false
  }

});


const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
