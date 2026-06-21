const mongoose = require('mongoose');

const color = (defaultValue) => ({ type: String, default: defaultValue });

const themeSettingsSchema = new mongoose.Schema({
  key: { type: String, default: 'website', unique: true },
  themeVersion: { type: Number, default: 8 },
  sidebarColor: color('#ffffff'), navigationTextColor: color('#5c3321'), navigationHoverColor: color('#8c4b2b'),
  headerActiveColor: color('#c87d55'), headerCtaColor: color('#c87d55'), headerCtaHoverColor: color('#8c4b2b'),
  headerCtaTextColor: color('#ffffff'), headerBorderColor: color('#d6b5a5'), headerDropdownColor: color('#ffffff'),
  headerIconColor: color('#c87d55'),
  headerFontFamily: { type: String, enum: ['Outfit', 'Arial', 'Georgia', 'Trebuchet MS', 'Times New Roman'], default: 'Outfit' },
  headerFontWeight: { type: String, enum: ['400', '500', '600', '700', '800'], default: '600' },
  headerFontSize: { type: String, enum: ['13', '14', '15', '16', '17', '18', '20'], default: '16' },
  headingColor: color('#c87d55'), subheadingColor: color('#8c4b2b'), textColor: color('#5c3321'),
  mutedTextColor: color('#64748b'), linkColor: color('#c87d55'), iconColor: color('#c87d55'), accentColor: color('#c87d55'),
  buttonColor: color('#c87d55'), buttonTextColor: color('#ffffff'), buttonHoverColor: color('#8c4b2b'),
  borderColor: color('#d6b5a5'), focusColor: color('#c87d55'), badgeColor: color('#f7e9e2'), badgeTextColor: color('#8c4b2b'),
  backgroundColor: color('#ffffff'), heroColor: color('#ffffff'), surfaceColor: color('#f2f2f0'), cardColor: color('#ffffff'),
  inputColor: color('#ffffff'), inputTextColor: color('#5c3321'), tableHeaderColor: color('#f2f2f0'),
  footerColor: color('#ffffff'), footerTextColor: color('#5c3321'), footerHeadingColor: color('#c87d55'), overlayColor: color('#5c3321'),
  successColor: color('#059669'), warningColor: color('#d97706'), errorColor: color('#e11d48'),
  loaderColor: color('#fefefd'), loaderAccentColor: color('#c87d55'), loaderPanelColor: color('#ffffff'),
  loaderTextColor: color('#8c4b2b'), loaderRingColor: color('#c87d55'), loaderTrackColor: color('#f1f5f9'),
  loaderProgressColor: color('#c87d55'), loaderPatternColor: color('#c87d55')
}, { timestamps: true });

module.exports = mongoose.models.ThemeSettings || mongoose.model('ThemeSettings', themeSettingsSchema);
