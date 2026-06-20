const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
const { upload, uploadProductImage } = require('./upload');

router.get('/theme', controllers.getTheme);
router.put('/theme', controllers.updateTheme);

// Categories API
router.get('/categories', controllers.getCategories);
router.post('/categories', controllers.createCategory);
router.put('/categories/:id', controllers.updateCategory);
router.delete('/categories/:id', controllers.archiveCategory);

// Products API
router.get('/products', controllers.getProducts);
router.post('/products', controllers.createProduct);
router.put('/products/:id', controllers.updateProduct);
router.delete('/products/:id', controllers.archiveProduct);

// Image Upload API
router.post('/upload', upload.single('image'), uploadProductImage);

// Inquiries API
router.get('/inquiries', controllers.getInquiries);
router.post('/inquiries', controllers.createInquiry);
router.delete('/inquiries/:id', controllers.archiveInquiry);

module.exports = router;
