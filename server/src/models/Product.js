const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  categoryId: { type: String, required: true },
  name: { type: String, required: true },
  tagline: String,
  description: String,
  materials: String,
  tolerances: String,
  applications: String,
  imageUrl: String,
  specs: [{ parameter: String, value: String }],
  archived: { type: Boolean, default: false }
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
