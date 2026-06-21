const router = require('express').Router();
const controller = require('../controllers/themeController');

router.get('/', controller.getTheme);
router.put('/', controller.updateTheme);
router.post('/', controller.updateTheme);

module.exports = router;
