const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  archived: { type: Boolean, default: false }
});

const ProductSchema = new mongoose.Schema({
  categoryId: { type: String, required: true }, // Can map to Category _id or string ID
  name: { type: String, required: true },
  tagline: { type: String },
  description: { type: String },
  materials: { type: String },
  tolerances: { type: String },
  applications: { type: String },
  imageUrl: { type: String },
  specs: [{
    parameter: { type: String },
    value: { type: String }
  }],
  archived: { type: Boolean, default: false }
});

const InquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  companyName: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String },
  productType: { type: String, required: true },
  materialRequired: { type: String },
  quantity: { type: String, required: true },
  specifications: { type: String },
  industry: { type: String },
  archived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const ThemeSettingsSchema = new mongoose.Schema({
  key: { type: String, default: 'website', unique: true },
  themeVersion: { type: Number, default: 6 },
  sidebarColor: { type: String, default: '#ffffff' },
  navigationTextColor: { type: String, default: '#5c3321' },
  navigationHoverColor: { type: String, default: '#8c4b2b' },
  headingColor: { type: String, default: '#c87d55' },
  subheadingColor: { type: String, default: '#8c4b2b' },
  textColor: { type: String, default: '#5c3321' },
  mutedTextColor: { type: String, default: '#64748b' },
  linkColor: { type: String, default: '#c87d55' },
  iconColor: { type: String, default: '#c87d55' },
  accentColor: { type: String, default: '#c87d55' },
  buttonColor: { type: String, default: '#c87d55' },
  buttonTextColor: { type: String, default: '#ffffff' },
  buttonHoverColor: { type: String, default: '#8c4b2b' },
  borderColor: { type: String, default: '#d6b5a5' },
  focusColor: { type: String, default: '#c87d55' },
  badgeColor: { type: String, default: '#f7e9e2' },
  badgeTextColor: { type: String, default: '#8c4b2b' },
  backgroundColor: { type: String, default: '#ffffff' },
  heroColor: { type: String, default: '#ffffff' },
  surfaceColor: { type: String, default: '#f2f2f0' },
  cardColor: { type: String, default: '#ffffff' },
  inputColor: { type: String, default: '#ffffff' },
  inputTextColor: { type: String, default: '#5c3321' },
  tableHeaderColor: { type: String, default: '#f2f2f0' },
  footerColor: { type: String, default: '#ffffff' },
  footerTextColor: { type: String, default: '#5c3321' },
  footerHeadingColor: { type: String, default: '#c87d55' },
  overlayColor: { type: String, default: '#5c3321' },
  successColor: { type: String, default: '#059669' },
  warningColor: { type: String, default: '#d97706' },
  errorColor: { type: String, default: '#e11d48' },
  loaderColor: { type: String, default: '#fefefd' },
  loaderAccentColor: { type: String, default: '#c87d55' },
  loaderPanelColor: { type: String, default: '#ffffff' },
  loaderTextColor: { type: String, default: '#8c4b2b' },
  loaderRingColor: { type: String, default: '#c87d55' },
  loaderTrackColor: { type: String, default: '#f1f5f9' },
  loaderProgressColor: { type: String, default: '#c87d