const monthsRouter = require('express').Router();
const { client } = require('../db/seed.js');

monthsRouter.get('/', async (req, res, next) => {
  try {
    let months = await client.query('SELECT * FROM "Month";');
    res.send(months.rows);
  }
  catch (error) {
    next(error);
  }
})

module.exports = monthsRouter;
