const mongoose = require('mongoose');

const UnitSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true
  },
  unitNumber: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  squareFootage: {
    type: Number
  },
  rentAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['vacant', 'occupied', 'maintenance', 'reserved'],
    default: 'vacant'
  },
  currentTenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  leaseStart: {
    type: Date
  },
  leaseEnd: {
    type: Date
  },
  features: [String],
  images: [
    {
      url: {
        type: String
      },
      caption: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model('Unit', UnitSchema);