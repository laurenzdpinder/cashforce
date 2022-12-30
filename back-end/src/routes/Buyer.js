const router = require('express').Router();
const rescue = require('express-rescue');
const controllers = require('../controllers');

router.get('/:id', rescue(controllers.readBuyerbyId));

module.exports = router;
