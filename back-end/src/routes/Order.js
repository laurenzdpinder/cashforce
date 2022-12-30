const router = require('express').Router();
const rescue = require('express-rescue');
const controllers = require('../controllers');

router.get('/', rescue(controllers.readOrders));

module.exports = router;
