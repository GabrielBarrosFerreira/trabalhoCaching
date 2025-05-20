const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientesController');
const { cacheMiddleware } = require('../middlewares/cache');

router.get('/', cacheMiddleware, controller.getAll);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
