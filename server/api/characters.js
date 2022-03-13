const router = require('express').Router();
const {
  models: { Character },
} = require('../db');

module.exports = router;

//getting a user's character based on it's userId
router.get('/:userId', async (req, res, next) => {
  try {
    const character = await Character.findOne({
      where: {
        userId: req.params.userId,
      },
    });
    console.log(character);
    res.json(character);
  } catch (err) {
    next(err);
  }
});

// creating a character
router.post('/', async (req, res, next) => {
  try {
    const character = await Character.create(req.body);
    res.json(character);
  } catch (err) {
    next(err);
  }
});
