const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  companyName: String,
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: String,
  productType: { type: String, required: true },
  materialRequired: String,
  quantity: { type: String, required: true },
  specifications: String,
  industry: String,
  archived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);
