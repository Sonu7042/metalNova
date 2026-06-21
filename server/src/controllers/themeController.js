const ThemeSettings = require('../models/ThemeSettings');
const { DEFAULT_THEME, THEME_VERSION, HEADER_FONTS, HEADER_WEIGHTS, HEADER_SIZES } = require('../config/theme');

const colorFields = Object.keys(DEFAULT_THEME).filter((field) => field.endsWith('Color'));
const isHexColor = (value) => typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value);
const publicTheme = (theme) => {
  const source = theme || {};
  return Object.fromEntries(
    Object.keys(DEFAULT_THEME).map((field) => [field, source[field] || DEFAULT_THEME[field]])
  );
};
const setThemeHeaders = (res) => res.set({
  'Cache-Control': 'no-store, no-cache, must-revalidate',
  'X-Theme-Version': String(THEME_VERSION)
});

exports.getTheme = async (req, res) => {
  try {
    let theme = await ThemeSettings.findOne({ key: 'website' }).lean();
    if (theme && theme.themeVersion !== THEME_VERSION) {
      theme = await ThemeSettings.findOneAndUpdate(
        { key: 'website' },
        { $set: { ...publicTheme(theme), themeVersion: THEME_VERSION } },
        { new: true }
      ).lean();
    }
    setThemeHeaders(res).json(publicTheme(theme));
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
    [
      ['headerFontFamily', HEADER_FONTS],
      ['headerFontWeight', HEADER_WEIGHTS],
      ['headerFontSize', HEADER_SIZES]
    ].forEach(([field, allowedValues]) => {
      if (req.body[field] === undefined) return;
      if (allowedValues.includes(String(req.body[field]))) updates[field] = String(req.body[field]);
      else invalidFields.push(field);
    });

    if (invalidFields.length) {
      return res.status(400).json({ error: `Invalid theme fields: ${invalidFields.join(', ')}`, invalidFields });
    }

    const theme = await ThemeSettings.findOneAndUpdate(
      { key: 'website' },
      { $set: { ...updates, themeVersion: THEME_VERSION }, $setOnInsert: { key: 'website' } },
      { new: true, upsert: true, runValidators: true }
    );
    setThemeHeaders(res).status(200).json(publicTheme(theme.toObject()));
  } catch (error) { res.status(500).json({ error: error.message }); }
};
