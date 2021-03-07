const customerRouter = require('express').Router();
const { client } = require('../db/seed.js');

customerRouter.get('/', async (req, res, next) => {
  try {
    const response = await client.query('SELECT * FROM "Customer";');
    res.send(response.rows);
  }
  catch (error) {
    next(error);
  }
})

// Need a JOIN statement here but my SQL skills are in development ...
customerRouter.get('/:id/orders', async (req, res, next) => {
  try {
    let order = await client.query('SELECT * FROM "Order", "Month" WHERE customer_id=$1 && Month.id = Order.id;', [req.params.id]);
    res.send(order.rows);
  }
  catch (error) {
    next('there was an error on your customers GET route!',error)
  }
})

module.exports = customerRouter;
