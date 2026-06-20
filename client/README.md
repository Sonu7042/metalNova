# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.














@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: 'Outfit', sans-serif;
  
  /* Brand Metallic & Electric Colors */
  --color-brand-silver-light: #f8fafc;
  --color-brand-silver: #cbd5e1;
  --color-brand-silver-dark: #64748b;
  
  --color-brand-copper-light: #f3c2a9;
  --color-brand-copper: #c87d55;
  --color-brand-copper-dark: #8c4b2b;
  
  --color-brand-electric: #00d2ff;
  --color-brand-electric-dark: #0066ff;
  
  
  --color-brand-bg-dark: #080c14;
  --color-brand-card-dark: #111827;
  --color-brand-card-border: #1f2937;
  
  /* Additional Premium Dark Shades */
  --color-brand-gray-900: #0f172a;
  --color-brand-gray-800: #1e293b;
  
  --animate-glow-pulse: glow-pulse 3s infinite alternate;
  --animate-float: float 6s ease-in-out infinite;
}

@keyframes glow-pulse {
  0% {
    box-shadow: 0 0 5px rgba(0, 210, 255, 0.2), 0 0 10px rgba(0, 210, 255, 0.1);
  }
  100% {
    box-shadow: 0 0 15px rgba(0, 210, 255, 0.5), 0 0 25px rgba(0, 210, 255, 0.3);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes gradient-flow {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}

.animate-gradient-flow {
  background-size: 200% 200%;
  animation: gradient-flow 6s ease infinite;
}

/* Premium Web Presets */
html {
  scroll-behavior: smooth;
  font-family: 'Outfit', sans-serif;
  background-color: #ffffff;
  color: #5c3321;
}

body,
#root {
  background: #ffffff;
  color: #5c3321;
}

/* Glassmorphism Classes */
.glass-card {
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.glass-card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card-hover:hover {
  transform: translateY(-4px);
  background: rgba(17, 24, 39, 0.85);
  border-color: rgba(0, 210, 255, 0.3);
  box-shadow: 0 10px 30px -10px rgba(0, 210, 255, 0.15);
}

.glass-card-copper-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card-copper-hover:hover {
  transform: translateY(-4px);
  background: rgba(17, 24, 39, 0.85);
  border-color: rgba(200, 125, 85, 0.3);
  box-shadow: 0 10px 30px -10px rgba(200, 125, 85, 0.15);
}

/* Gradients text */
.text-gradient-silver {
  background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94A3B8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-copper {
  background: linear-gradient(135deg, #f3c2a9 0%, #c87d55 50%, #8c4b2b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-electric {
  /* background: linear-gradient(135deg, #00d2ff 0%, #0082ff 100%); */
  background: linear-gradient(135deg, #f3c2a9 0%, #c87d55 50%, #8c4b2b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Glow Borders */
.glow-border-electric {
  position: relative;
}
.glow-border-electric::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(to right, #cbd5e1, #94A3B8);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.glow-border-copper {
  position: relative;
}
.glow-border-copper::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(to right, rgba(243, 194, 169, 0.5), rgba(200, 125, 85, 0.5));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #fefefd;
}
::-webkit-scrollbar-thumb {
  background: #c87d55;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #8c4b2b;
}

/* ================= ABOUT PAGE LIGHT THEME APPLIED SITE-WIDE ================= */
#main-navbar {
  background: rgba(255, 255, 255, 0.9) !important;
  border-bottom: 1px solid rgba(200, 125, 85, 0.24) !important;
  color: #5c3321 !important;
  backdrop-filter: blur(16px);
}

#main-navbar button,
#main-navbar a {
  color: #5c3321 !important;
}

#main-navbar button:hover,
#main-navbar a:hover,
#main-navbar [class*="text-brand-copper"] {
  color: #8c4b2b !important;
}

#main-navbar #cta-quote-nav,
#main-navbar #cta-quote-mobile {
  color: #ffffff !important;
  background: linear-gradient(135deg, #c87d55, #8c4b2b) !important;
  border-color: rgba(200, 125, 85, 0.35) !important;
}

#language-selector > button,
#language-selector [class*="bg-brand-bg-dark"],
#language-selector [class*="bg-brand-card-dark"] {
  background: rgba(255, 255, 255, 0.92) !important;
  border-color: rgba(200, 125, 85, 0.28) !important;
  color: #5c3321 !important;
}

#mobile-drawer {
  background: #fefefd !important;
  border-color: rgba(200, 125, 85, 0.24) !important;
}

#mobile-drawer-overlay {
  background: rgba(92, 51, 33, 0.28) !important;
}

#home-page,
#products-page,
#product-detail-page,
#certifications-page,
#contact-page {
  background: #ffffff !important;
  color: #5c3321 !important;
}

#home-page section,
#products-page section,
#product-detail-page section,
#certifications-page section,
#contact-page section,
.theme-about-surface {
  background: #ffffff !important;
  color: #5c3321 !important;
  border-color: rgba(200, 125, 85, 0.22) !important;
}

#home-page section:nth-of-type(even),
#products-page section:nth-of-type(even),
#product-detail-page section:nth-of-type(even),
#certifications-page section:nth-of-type(even),
#contact-page section:nth-of-type(even) {
  background: #f2f2f0 !important;
}

#home-page section > [class*="absolute inset-0"],
#products-page section > [class*="absolute inset-0"],
#product-detail-page section > [class*="absolute inset-0"],
#certifications-page section > [class*="absolute inset-0"],
#contact-page section > [class*="absolute inset-0"] {
  opacity: 1;
}

#home-page [class*="bg-[#060a12]"],
#home-page [class*="bg-[#030712]"],
#home-page [class*="bg-[#040810]"],
#home-page [class*="bg-[#080c14]"],
#home-page [class*="bg-[#0f172a]"],
#home-page [class*="bg-[#111827]"],
#home-page [class*="bg-slate-900"],
#home-page [class*="bg-slate-950"],
#products-page [class*="bg-[#060a12]"],
#products-page [class*="bg-[#030712]"],
#products-page [class*="bg-[#040810]"],
#products-page [class*="bg-[#080c14]"],
#products-page [class*="bg-[#0f172a]"],
#products-page [class*="bg-[#111827]"],
#products-page [class*="bg-slate-900"],
#products-page [class*="bg-slate-950"],
#product-detail-page [class*="bg-[#060a12]"],
#product-detail-page [class*="bg-[#030712]"],
#product-detail-page [class*="bg-[#040810]"],
#product-detail-page [class*="bg-[#080c14]"],
#product-detail-page [class*="bg-[#0f172a]"],
#product-detail-page [class*="bg-[#111827]"],
#product-detail-page [class*="bg-slate-900"],
#product-detail-page [class*="bg-slate-950"],
#certifications-page [class*="bg-[#060a12]"],
#certifications-page [class*="bg-[#030712]"],
#certifications-page [class*="bg-[#040810]"],
#certifications-page [class*="bg-[#080c14]"],
#certifications-page [class*="bg-[#0f172a]"],
#certifications-page [class*="bg-[#111827]"],
#certifications-page [class*="bg-slate-900"],
#certifications-page [class*="bg-slate-950"],
#contact-page [class*="bg-[#060a12]"],
#contact-page [class*="bg-[#030712]"],
#contact-page [class*="bg-[#040810]"],
#contact-page [class*="bg-[#080c14]"],
#contact-page [class*="bg-[#0f172a]"],
#contact-page [class*="bg-[#111827]"],
#contact-page [class*="bg-slate-900"],
#contact-page [class*="bg-slate-950"] {
  background: rgba(254, 254, 253, 0.92) !important;
}

#home-page [class*="border-slate"],
#products-page [class*="border-slate"],
#product-detail-page [class*="border-slate"],
#certifications-page [class*="border-slate"],
#contact-page [class*="border-slate"],
#footer-section [class*="border-brand-card-border"] {
  border-color: rgba(200, 125, 85, 0.24) !important;
}

#home-page h1,
#home-page h2,
#home-page h3,
#home-page h4,
#home-page h5,
#products-page h1,
#products-page h2,
#products-page h3,
#products-page h4,
#products-page h5,
#product-detail-page h1,
#product-detail-page h2,
#product-detail-page h3,
#product-detail-page h4,
#product-detail-page h5,
#certifications-page h1,
#certifications-page h2,
#certifications-page h3,
#certifications-page h4,
#certifications-page h5,
#contact-page h1,
#contact-page h2,
#contact-page h3,
#contact-page h4,
#contact-page h5 {
  color: #c87d55 !important;
  font-weight: 800 !important;
  letter-spacing: -0.01em;
}

#home-page p,
#home-page li,
#home-page td,
#home-page label,
#home-page span,
#products-page p,
#products-page li,
#products-page td,
#products-page label,
#products-page span,
#product-detail-page p,
#product-detail-page li,
#product-detail-page td,
#product-detail-page label,
#product-detail-page span,
#certifications-page p,
#certifications-page li,
#certifications-page td,
#certifications-page label,
#certifications-page span,
#contact-page p,
#contact-page li,
#contact-page td,
#contact-page label,
#contact-page span {
  color: #5c3321;
}

#home-page p,
#products-page p,
#product-detail-page p,
#certifications-page p,
#contact-page p,
#footer-section p {
  color: #5c3321 !important;
  font-weight: 300 !important;
  line-height: 1.75;
}

#home-page li,
#products-page li,
#product-detail-page li,
#certifications-page li,
#contact-page li {
  color: #5c3321 !important;
  font-weight: 600 !important;
}

#home-page label,
#products-page label,
#product-detail-page label,
#certifications-page label,
#contact-page label {
  color: #8c4b2b !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

#home-page [class*="uppercase"],
#products-page [class*="uppercase"],
#product-detail-page [class*="uppercase"],
#certifications-page [class*="uppercase"],
#contact-page [class*="uppercase"],
#footer-section [class*="uppercase"] {
  color: #8c4b2b !important;
  font-weight: 700 !important;
}

#home-page strong,
#home-page b,
#products-page strong,
#products-page b,
#product-detail-page strong,
#product-detail-page b,
#certifications-page strong,
#certifications-page b,
#contact-page strong,
#contact-page b,
#footer-section strong,
#footer-section b {
  color: #8c4b2b !important;
  font-weight: 700 !important;
}

#home-page button,
#home-page a,
#products-page button,
#products-page a,
#product-detail-page button,
#product-detail-page a,
#certifications-page button,
#certifications-page a,
#contact-page button,
#contact-page a,
#footer-section button,
#footer-section a {
  font-weight: 700;
}

#home-page [class*="text-slate"],
#home-page [class*="text-white"],
#products-page [class*="text-slate"],
#products-page [class*="text-white"],
#product-detail-page [class*="text-slate"],
#product-detail-page [class*="text-white"],
#certifications-page [class*="text-slate"],
#certifications-page [class*="text-white"],
#contact-page [class*="text-slate"],
#contact-page [class*="text-white"] {
  color: #5c3321 !important;
}

#home-page [class*="text-brand-electric"],
#products-page [class*="text-brand-electric"],
#product-detail-page [class*="text-brand-electric"],
#certifications-page [class*="text-brand-electric"],
#contact-page [class*="text-brand-electric"],
#home-page [class*="text-[#00D2FF]"],
#products-page [class*="text-[#00D2FF]"],
#product-detail-page [class*="text-[#00D2FF]"],
#certifications-page [class*="text-[#00D2FF]"],
#contact-page [class*="text-[#00D2FF]"] {
  color: #8c4b2b !important;
}

#home-page [class*="text-brand-copper"],
#products-page [class*="text-brand-copper"],
#product-detail-page [class*="text-brand-copper"],
#certifications-page [class*="text-brand-copper"],
#contact-page [class*="text-brand-copper"] {
  color: #c87d55 !important;
}

#home-page input,
#home-page select,
#home-page textarea,
#products-page input,
#products-page select,
#products-page textarea,
#product-detail-page input,
#product-detail-page select,
#product-detail-page textarea,
#certifications-page input,
#certifications-page select,
#certifications-page textarea,
#contact-page input,
#contact-page select,
#contact-page textarea {
  background: #ffffff !important;
  border-color: rgba(200, 125, 85, 0.32) !important;
  color: #5c3321 !important;
}

#home-page input:focus,
#home-page select:focus,
#home-page textarea:focus,
#products-page input:focus,
#products-page select:focus,
#products-page textarea:focus,
#product-detail-page input:focus,
#product-detail-page select:focus,
#product-detail-page textarea:focus,
#certifications-page input:focus,
#certifications-page select:focus,
#certifications-page textarea:focus,
#contact-page input:focus,
#contact-page select:focus,
#contact-page textarea:focus {
  border-color: #c87d55 !important;
  box-shadow: 0 0 0 3px rgba(200, 125, 85, 0.12);
}

#home-page button,
#home-page a,
#products-page button,
#products-page a,
#product-detail-page button,
#product-detail-page a,
#certifications-page button,
#certifications-page a,
#contact-page button,
#contact-page a {
  border-color: rgba(200, 125, 85, 0.32);
}

#home-page button[class*="bg-gradient"],
#home-page a[class*="bg-gradient"],
#products-page button[class*="bg-gradient"],
#products-page a[class*="bg-gradient"],
#product-detail-page button[class*="bg-gradient"],
#product-detail-page a[class*="bg-gradient"],
#certifications-page button[class*="bg-gradient"],
#certifications-page a[class*="bg-gradient"],
#contact-page button[class*="bg-gradient"],
#contact-page a[class*="bg-gradient"],
#home-page button[type="submit"],
#contact-page button[type="submit"],
#product-detail-page button[type="submit"] {
  background: linear-gradient(135deg, #c87d55, #8c4b2b) !important;
  color: #ffffff !important;
}

#home-page button[class*="bg-gradient"] span,
#home-page a[class*="bg-gradient"] span,
#products-page button[class*="bg-gradient"] span,
#products-page a[class*="bg-gradient"] span,
#product-detail-page button[class*="bg-gradient"] span,
#product-detail-page a[class*="bg-gradient"] span,
#certifications-page button[class*="bg-gradient"] span,
#certifications-page a[class*="bg-gradient"] span,
#contact-page button[class*="bg-gradient"] span,
#contact-page a[class*="bg-gradient"] span,
#home-page button[type="submit"] span,
#contact-page button[type="submit"] span,
#product-detail-page button[type="submit"] span {
  color: #ffffff !important;
}

#home-page table,
#products-page table,
#product-detail-page table,
#certifications-page table,
#contact-page table {
  background: #ffffff !important;
  color: #5c3321 !important;
}

#home-page thead tr,
#products-page thead tr,
#product-detail-page thead tr,
#certifications-page thead tr,
#contact-page thead tr {
  background: #f2f2f0 !important;
}

#cert-modal-overlay {
  background: rgba(92, 51, 33, 0.58) !important;
}

#cert-modal-body {
  background: #ffffff !important;
  border-color: rgba(200, 125, 85, 0.28) !important;
  color: #5c3321 !important;
}

#cert-modal-body h3,
#cert-modal-body p,
#cert-modal-body span {
  color: #5c3321 !important;
}

#footer-section {
  background: #ffffff !important;
  color: #5c3321 !important;
  border-top: 1px solid rgba(200, 125, 85, 0.24);
}

#footer-section h3,
#footer-section p,
#footer-section a,
#footer-section button,
#footer-section span {
  color: #5c3321 !important;
}

#footer-section a:hover,
#footer-section button:hover {
  color: #c87d55 !important;
}

#footer-section [class*="bg-brand-copper"] {
  background: rgba(200, 125, 85, 0.12) !important;
  color: #8c4b2b !important;
  border: 1px solid rgba(200, 125, 85, 0.24);
}

/* ================= GOOGLE TRANSLATE PREMIUM CUSTOMIZATION ================= */
/* Hide the Google Translate top bar frame */
.goog-te-banner-frame.skiptranslate,
.goog-te-banner-frame,
iframe.goog-te-banner-frame,
#goog-gt-tt {
  display: none !important;
  visibility: hidden !important;
}

/* Prevent Google Translate from shifting the body down */
body {
  top: 0px !important;
  position: static !important;
}

/* Hide hover text highlight coloring by Google Translate */
.goog-text-highlight {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* Hide translate tooltips */
.goog-tooltip,
.goog-tooltip:hover,
.goog-te-balloon-frame {
  display: none !important;
  visibility: hidden !important;
}

/* ================= CUSTOM COLOR SCHEME FOR HOME PAGE ================= */
#home-page,
#home-page section,
#home-page [class*="bg-[#"],
#home-page [class*="bg-slate"],
#home-page [class*="bg-gray"],
#home-page [class*="bg-brand"] {
  background: #ffffff !important;
  background-color: #ffffff !important;
  border-color: rgba(98, 102, 106, 0.2) !important;
}

/* Make background overlays subtle on white background */
#home-page section > [class*="absolute inset-0"] {
  opacity: 0.05 !important;
}

#home-page h1,
#home-page h2,
#home-page h3,
#home-page h4,
#home-page h5 {
  color: #1FD2E6 !important;
}

#home-page p,
#home-page li,
#home-page td,
#home-page label,
#home-page span,
#home-page strong,
#home-page b,
#home-page a,
#home-page [class*="text-"],
#home-page [class*="uppercase"] {
  color: #62666A !important;
}

/* Specific overrides for inputs, selects, and textareas */
#home-page input,
#home-page select,
#home-page textarea {
  background: #ffffff !important;
  color: #62666A !important;
  border-color: rgba(98, 102, 106, 0.3) !important;
}
#home-page input:focus,
#home-page select:focus,
#home-page textarea:focus {
  border-color: #1FD2E6 !important;
  box-shadow: 0 0 0 3px rgba(31, 210, 230, 0.12) !important;
}

/* Buttons and Links */
#home-page button,
#home-page a[class*="px-"],
#home-page a[class*="p-3"],
#home-page button[class*="bg-gradient"],
#home-page a[class*="bg-gradient"],
#home-page button[type="submit"] {
  background: #1FD2E6 !important;
  background-color: #1FD2E6 !important;
  color: #62666A !important;
  border-color: #1FD2E6 !important;
  box-shadow: none !important;
}

#home-page button span,
#home-page a[class*="px-"] span,
#home-page a[class*="p-3"] span,
#home-page button[class*="bg-gradient"] span,
#home-page a[class*="bg-gradient"] span,
#home-page button[type="submit"] span {
  color: #62666A !important;
}

#home-page button:hover,
#home-page a[class*="px-"]:hover,
#home-page a[class*="p-3"]:hover,
#home-page button[class*="bg-gradient"]:hover,
#home-page a[class*="bg-gradient"]:hover,
#home-page button[type="submit"]:hover {
  background: #19bacb !important;
  background-color: #19bacb !important;
  color: #62666A !important;
  border-color: #19bacb !important;
}

