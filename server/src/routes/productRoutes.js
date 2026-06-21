const router = require('express').Router();
const controller = require('../controllers/productController');

router.route('/').get(controller.getProducts).post(controller.createProduct);
router.route('/:id').put(controller.updateProduct).delete(controller.archiveProduct);

module.exports = router;
