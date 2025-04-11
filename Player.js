// server/models/Player.js
const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  playerName: String,
  gamesPlayed: Number,
  gamesWon: Number,
  winPercentage: Number
});

module.exports = mongoose.model('Player', PlayerSchema);
