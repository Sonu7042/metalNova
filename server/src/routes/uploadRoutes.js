const router = require('express').Router();
const upload = require('../middleware/upload');
const controller = require('../controllers/uploadController');

router.post('/', upload.single('image'), controller.uploadProductImage);

module.exports = router;
