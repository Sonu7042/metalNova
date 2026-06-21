const { Category, Product, Inquiry, ThemeSettings } = require('./models');

const defaultTheme = {
  sidebarColor: '#ffffff', navigationTextColor: '#5c3321', navigationHoverColor: '#8c4b2b',
  headerActiveColor: '#c87d55', headerCtaColor: '#c87d55', headerCtaHoverColor: '#8c4b2b', headerCtaTextColor: '#ffffff',
  headerBorderColor: '#d6b5a5', headerDropdownColor: '#ffffff', headerIconColor: '#c87d55',
  headingColor: '#c87d55', subheadingColor: '#8c4b2b', textColor: '#5c3321',
  mutedTextColor: '#64748b', linkColor: '#c87d55', iconColor: '#c87d55', accentColor: '#c87d55',
  buttonColor: '#c87d55', buttonTextColor: '#ffffff', buttonHoverColor: '#8c4b2b',
  borderColor: '#d6b5a5', focusColor: '#c87d55', badgeColor: '#f7e9e2', badgeTextColor: '#8c4b2b',
  backgroundColor: '#ffffff', heroColor: '#ffffff', surfaceColor: '#f2f2f0',
  cardColor: '#ffffff', inputColor: '#ffffff', inputTextColor: '#5c3321',
  tableHeaderColor: '#f2f2f0', footerColor: '#ffffff', footerTextColor: '#5c3321',
  footerHeadingColor: '#c87d55', overlayColor: '#5c3321',
  successColor: '#059669', warningColor: '#d97706', errorColor: '#e11d48',
  loaderColor: '#fefefd', loaderAccentColor: '#c87d55', loaderPanelColor: '#ffffff',
  loaderTextColor: '#8c4b2b', loaderRingColor: '#c87d55', loaderTrackColor: '#f1f5f9',
  loaderProgressColor: '#c87d55', loaderPatternColor: '#c87d55',
  headerFontFamily: 'Outfit', headerFontWeight: '600', headerFontSize: '16'
};
const isHexColor = (value) => typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value);
const headerFonts = ['Outfit', 'Arial', 'Georgia', 'Trebuchet MS', 'Times New Roman'];
const headerWeights = ['400', '500', '600', '700', '800'];
const headerSizes = ['13', '14', '15', '16', '17', '18', '20'];
const colorFields = Object.keys(defaultTheme).filter((field) => field.endsWith('Color'));

const publicTheme = (theme = {}) => Object.fromEntries(
  Object.keys(defaultTheme).map((field) => [field, theme[field] || defaultTheme[field]])
);

exports.getTheme = async (req, res) => {
  try {
    let theme = await ThemeSettings.findOne({ key: 'website' }).lean();
    if (theme && theme.themeVersion !== 8) {
      const migratedTheme = Object.fromEntries(
        Object.keys(defaultTheme).map((field) => [field, theme[field] || defaultTheme[field]])
      );
      theme = await ThemeSettings.findOneAndUpdate(
        { key: 'website' },
        { $set: { ...migratedTheme, themeVersion: 8 } },
        { new: true }
      ).lean();
    }
    res.set({
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Theme-Version': '8'
    });
    res.json(publicTheme(theme));
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.updateTheme = async (req, res) => {
  try {
    if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
      return res.status(400).json({ error: 'A JSON theme object is required.' });
    }

    const savedTheme = await ThemeSettings.findOne({ key: 'website' }).lean();
    const updates = publicTheme(savedTheme);
    const invalidFields = [];

    colorFields.forEach((field) => {
      if (req.body[field] === undefined) return;
      if (isHexColor(req.body[field])) updates[field] = req.body[field];
      else invalidFields.push(field);
    });

    const enumFields = [
      ['headerFontFamily', headerFonts],
      ['headerFontWeight', headerWeights],
      ['headerFontSize', headerSizes]
    ];
    enumFields.forEach(([field, allowedValues]) => {
      if (req.body[field] === undefined) return;
      if (allowedValues.includes(String(req.body[field]))) updates[field] = String(req.body[field]);
      else invalidFields.push(field);
    });

    if (invalidFields.length > 0) {
      return res.status(400).json({
        error: `Invalid theme fields: ${invalidFields.join(', ')}`,
        invalidFields
      });
    }

    const theme = await ThemeSettings.findOneAndUpdate(
      { key: 'website' },
      { $set: { ...updates, themeVersion: 8 }, $setOnInsert: { key: 'website' } },
      { new: true, upsert: true, runValidators: true }
    );
    res.set({
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Theme-Version': '8'
    });
    res.status(200).json(publicTheme(theme.toObject()));
  } catch (error) { res.status(500).json({ error: error.message }); }
};

// ================= CATEGORY CONTROLLERS =================

exports.getCategories = async (req, res) => {
  try {
    const includeArchived = req.query.archived === 'true';
    const filter = includeArchived ? {} : { archived: false };
    const categories = await Category.find(filter);
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Category name is required' });
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, archived } = req.body;
    const category = await Category.findByIdAndUpdate(
      id,
      { name, archived },
      { new: true }
    );
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.archiveCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(id, { archived: true }, { new: true });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json({ message: 'Category archived successfully', category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= PRODUCT CONTROLLERS =================

exports.getProducts = async (req, res) => {
  try {
    const includeArchived = req.query.archived === 'true';
    const filter = includeArchived ? {} : { archived: false };
    if (req.query.categoryId) {
      filter.categoryId = req.query.categoryId;
    }
    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { categoryId, name, tagline, description, materials, tolerances, applications, imageUrl, specs } = req.body;
    if (!categoryId || !name) {
      return res.status(400).json({ error: 'CategoryId and name are required' });
    }
    const product = new Product({
      categoryId,
      name,
      tagline,
      description,
      materials,
      tolerances,
      applications,
      imageUrl,
      specs
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.archiveProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, { archived: true }, { new: true });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product archived successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= INQUIRY CONTROLLERS =================

exports.getInquiries = async (req, res) => {
  try {
    const includeArchived = req.query.archived === 'true';
    const filter = includeArchived ? {} : { archived: false };
    const inquiries = await Inquiry.find(filter).sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createInquiry = async (req, res) => {
  try {
    const inquiryData = req.body;
    if (!inquiryData.fullName || !inquiryData.email || !inquiryData.phone || !inquiryData.productType || !inquiryData.quantity) {
      return res.status(400).json({ error: 'Missing required inquiry fields' });
    }
    const inquiry = new Inquiry(inquiryData);
    await inquiry.save();
    res.status(201).json(inquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.archiveInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiry = await Inquiry.findByIdAndUpdate(id, { archived: true }, { new: true });
    if (!inquiry) return res.status(404).json({ error: 'Inquiry not found' });
    res.json({ message: 'Inquiry archived successfully', inquiry });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
