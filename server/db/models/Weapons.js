const Sequelize = require('sequelize');
const db = require('../db');

const Weapons = db.define('weapons', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  int: {
    type: Sequelize.STRING,
  },
  str: {
    type: Sequelize.STRING,
  },
  dex: {
    type: Sequelize.STRING,
  },
  fth: {
    type: Sequelize.STRING,
  },
});

module.exports = Weapons;
