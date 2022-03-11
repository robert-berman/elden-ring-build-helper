const Sequelize = require('sequelize');
const db = require('../db');

const Weapons = db.define('weapons', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  int: {
    type: Sequelize.INTEGER,
  },
  str: {
    type: Sequelize.INTEGER,
  },
  dex: {
    type: Sequelize.INTEGER,
  },
  fth: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Weapons;
