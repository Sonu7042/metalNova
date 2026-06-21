const Category = require('../models/Category');

exports.getCategories = async (req, res) => {
  try {
    const filter = req.query.archived === 'true' ? {} : { archived: false };
    res.json(await Category.find(filter));
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.createCategory = async (req, res) => {
  try {
    if (!req.body.name) return res.status(400).json({ error: 'Category name is required' });
    res.status(201).json(await Category.create({ name: req.body.name }));
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.archiveCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, { archived: true }, { new: true });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json({ message: 'Category archived successfully', category });
  } catch (error) { res.status(500).json({ error: error.message }); }
};
