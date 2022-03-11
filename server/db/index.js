//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Weapons = require('./models/Weapons');

const Character = require('./models/Character');
//associations could go here!

Character.belongsTo(User);
User.hasMany(Character);

module.exports = {
  db,
  models: {
    User,
    Weapons,
    Character,
  },
};
