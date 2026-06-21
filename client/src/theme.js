const configuredApi = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '');

export const API_BASE = configuredApi || (
  import.meta.env.DEV
    ? 'http://localhost:5000/api'
    : 'https://metal-nova-9fae.vercel.app/api'
);

export const readThemeResponse = async (response) => {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error('Theme API returned a web page instead of JSON. Check VITE_API_BASE_URL.');
  }

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || `Theme API failed with status ${response.status}.`);
  }
  return data;
};

export const DEFAULT_THEME = {
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

export const applyTheme = (theme) => {
  const values = { ...DEFAULT_THEME, ...theme };
  const root = document.documentElement;
  root.style.setProperty('--site-sidebar', values.sidebarColor);
  root.style.setProperty('--site-navigation-text', values.navigationTextColor);
  root.style.setProperty('--site-navigation-hover', values.navigationHoverColor);
  root.style.setProperty('--site-header-active', values.headerActiveColor);
  root.style.setProperty('--site-header-cta', values.headerCtaColor);
  root.style.setProperty('--site-header-cta-hover', values.headerCtaHoverColor);
  root.style.setProperty('--site-header-cta-text', values.headerCtaTextColor);
  root.style.setProperty('--site-header-border', values.headerBorderColor);
  root.style.setProperty('--site-header-dropdown', values.headerDropdownColor);
  root.style.setProperty('--site-header-icon', values.headerIconColor);
  root.style.setProperty('--site-header-font', `'${values.headerFontFamily}', sans-serif`);
  root.style.setProperty('--site-header-weight', values.headerFontWeight);
  root.style.setProperty('--site-header-size', `${values.headerFontSize}px`);
  root.style.setProperty('--site-heading', values.headingColor);
  root.style.setProperty('--site-subheading', values.subheadingColor);
  root.style.setProperty('--site-text', values.textColor);
  root.style.setProperty('--site-muted-text', values.mutedTextColor);
  root.style.setProperty('--site-link', values.linkColor);
  root.style.setProperty('--site-icon', values.iconColor);
  root.style.setProperty('--site-accent', values.accentColor);
  root.style.setProperty('--site-button', values.buttonColor);
  root.style.setProperty('--site-button-text', values.buttonTextColor);
  root.style.setProperty('--site-button-hover', values.buttonHoverColor);
  root.style.setProperty('--site-border', values.borderColor);
  root.style.setProperty('--site-focus', values.focusColor);
  root.style.setProperty('--site-badge', values.badgeColor);
  root.style.setProperty('--site-badge-text', values.badgeTextColor);
  root.style.setProperty('--site-background', values.backgroundColor);
  root.style.setProperty('--site-hero', values.heroColor);
  root.style.setProperty('--site-surface', values.surfaceColor);
  root.style.setProperty('--site-card', values.cardColor);
  root.style.setProperty('--site-input', values.inputColor);
  root.style.setProperty('--site-input-text', values.inputTextColor);
  root.style.setProperty('--site-table-header', values.tableHeaderColor);
  root.style.setProperty('--site-footer', values.footerColor);
  root.style.setProperty('--site-footer-text', values.footerTextColor);
  root.style.setProperty('--site-footer-heading', values.footerHeadingColor);
  root.style.setProperty('--site-overlay', values.overlayColor);
  root.style.setProperty('--site-success', values.successColor);
  root.style.setProperty('--site-warning', values.warningColor);
  root.style.setProperty('--site-error', values.errorColor);
  root.style.setProperty('--site-loader', values.loaderColor);
  root.style.setProperty('--site-loader-accent', values.loaderAccentColor);
  root.style.setProperty('--site-loader-panel', values.loaderPanelColor);
  root.style.setProperty('--site-loader-text', values.loaderTextColor);
  root.style.setProperty('--site-loader-ring', values.loaderRingColor);
  root.style.setProperty('--site-loader-track', values.loaderTrackColor);
  root.style.setProperty('--site-loader-progress', values.loaderProgressColor);
  root.style.setProperty('--site-loader-pattern', values.loaderPatternColor);
};

export const loadStoredTheme = () => {
  try {
    return { ...DEFAULT_THEME, ...JSON.parse(localStorage.getItem('metalnova-theme')) };
  } catch { return DEFAULT_THEME; }
};

export const storeTheme = (theme) => {
  const normalizedTheme = Object.fromEntries(
    Object.keys(DEFAULT_THEME).map((key) => [key, theme[key] || DEFAULT_THEME[key]])
  );
  localStorage.setItem('metalnova-theme', JSON.stringify(normalizedTheme));
  applyTheme(normalizedTheme);
};
