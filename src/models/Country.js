const mongoose = require('mongoose');
const { Schema } = mongoose;

const countrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  flagUrl: {
    type: String,
    required: true
  },
  population: {
    type: Number,
    required: true,
  }
});

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;