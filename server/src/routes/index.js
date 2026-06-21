const router = require('express').Router();

router.use('/categories', require('./categoryRoutes'));
router.use('/products', require('./productRoutes'));
router.use('/inquiries', require('./inquiryRoutes'));
router.use('/theme', require('./themeRoutes'));
router.use('/upload', require('./uploadRoutes'));

module.exports = router;
