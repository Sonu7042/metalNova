const router = require('express').Router();
const controller = require('../controllers/categoryController');

router.route('/').get(controller.getCategories).post(controller.createCategory);
router.route('/:id').put(controller.updateCategory).delete(controller.archiveCategory);

module.exports = router;
