const router = require('express').Router();
const controller = require('../controllers/inquiryController');

router.route('/').get(controller.getInquiries).post(controller.createInquiry);
router.delete('/:id', controller.archiveInquiry);

module.exports = router;
