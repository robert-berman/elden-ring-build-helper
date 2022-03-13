const router = require('express').Router();
const {
  models: { Weapons },
} = require('../db');
module.exports = router;

//GET all weapons

router.get('/', async (req, res, next) => {
  try {
    const weapons = await Weapons.findAll();
    res.json(weapons);
  } catch (error) {
    next(error);
  }
});

router.get('/:weaponId', async (req, res, next) => {
  try {
    const weapon = await Weapons.findByPk(req.params.weaponId);
    res.json(weapon);
  } catch (err) {
    next(err);
  }
});
