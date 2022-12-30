const router = require('express').Router();
const controllers = require('../controllers');

router.get('/:id', controllers.readBuyerbyId);

module.exports = router;
