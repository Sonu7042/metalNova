const Inquiry = require('../models/Inquiry');

exports.getInquiries = async (req, res) => {
  try {
    const filter = req.query.archived === 'true' ? {} : { archived: false };
    res.json(await Inquiry.find(filter).sort({ createdAt: -1 }));
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.createInquiry = async (req, res) => {
  try {
    const { fullName, email, phone, productType, quantity } = req.body;
    if (!fullName || !email || !phone || !productType || !quantity) {
      return res.status(400).json({ error: 'Missing required inquiry fields' });
    }
    res.status(201).json(await Inquiry.create(req.body));
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.archiveInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, { archived: true }, { new: true });
    if (!inquiry) return res.status(404).json({ error: 'Inquiry not found' });
    res.json({ message: 'Inquiry archived successfully', inquiry });
  } catch (error) { res.status(500).json({ error: error.message }); }
};
