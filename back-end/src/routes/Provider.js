const router = require('express').Router();
const controllers = require('../controllers');

router.get('/:id', controllers.readProviderbyId);

module.exports = router;
