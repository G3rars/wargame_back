const mongoose = require('mongoose');

const modelCoordSchema = new mongoose.Schema({
  haveBase: { type: Boolean, default: false },
  isAttacked: { type: Boolean, default: false },
  isOccupied: { type: Boolean, default: false }
});

const ModelCoord = mongoose.model('ModelCoord', modelCoordSchema);

module.exports = ModelCoord;    
