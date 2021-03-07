const router = require('express').Router();
const monthsRouter = require('./months');
const customerRouter = require('./customers')

router.use('/months', monthsRouter);
router.use('/customers', customerRouter);


module.exports = router;



