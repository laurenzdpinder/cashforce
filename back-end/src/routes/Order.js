const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.readOrders);

module.exports = router;
