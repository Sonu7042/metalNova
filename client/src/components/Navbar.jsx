import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Language Dropdown States & Custom Google Translator
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'it', label: 'Italiano' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'zh-CN', label: '中文' }
  ];
  const [currentLang, setCurrentLang] = useState(() => {
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    const code = match ? match[1] : 'en';
    const found = languages.find(l => l.code.toLowerCase() === code.toLowerCase());
    return found ? found.label : 'English';
  });

  const [isLangOpen, setIsLangOpen] = useState(false);

  const changeLanguage = (code, label) => {
    // Set cookie for active path and current domain name
    document.cookie = `googtrans=/en/${code}; path=/;`;
    document.cookie = `googtrans=/en/${code}; domain=${window.location.hostname}; path=/;`;

    // Fallback for subdomains if localhost/custom domain has subfolders
    if (window.location.hostname !== 'localhost') {
      const parts = window.location.hostname.split('.');
      if (parts.length > 2) {
        parts.shift();
        document.cookie = `googtrans=/en/${code}; domain=.${parts.join('.')}; path=/;`;
      }
    }

    setCurrentLang(label);
    setIsLangOpen(false);
    window.location.reload();
  };

  // Nav Links
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'products', label: 'Our Product', path: '/products' },
    { id: 'certifications', label: 'Quality Commitments', path: '/certifications' },
    { id: 'contact', label: 'Contact Us', path: '/contact' }
  ];


  // Determine active item from path
  const getActivePage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    const found = navItems.find(item => item.path === path);
    return found ? found.id : 'home';
  };
  const activePage = getActivePage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('#language-selector')) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId) => {
    const targetPath = pageId === 'home' ? '/' : `/${pageId}`;
    navigate(targetPath);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
    // Let page switch then scroll
    setTimeout(() => {
      const formElement = document.getElementById('rfq-section');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <>
      <style>{`
        #main-navbar-custom,
        #mobile-drawer-custom {
          background: #ffffff !important;
          background-color: #ffffff !important;
          border-color: rgba(98, 102, 106, 0.2) !important;
        }

        #main-navbar-custom h1,
        #main-navbar-custom h2,
        #main-navbar-custom h3,
        #main-navbar-custom h4,
        #main-navbar-custom h5,
        #main-navbar-custom h6,
        #mobile-drawer-custom h1,
        #mobile-drawer-custom h2,
        #mobile-drawer-custom h3,
        #mobile-drawer-custom h4,
        #mobile-drawer-custom h5,
        #mobile-drawer-custom h6 {
          color: #1FD2E6 !important;
        }

        #main-navbar-custom p,
        #main-navbar-custom li,
        #main-navbar-custom td,
        #main-navbar-custom label,
        #main-navbar-custom span,
        #main-navbar-custom strong,
        #main-navbar-custom b,
        #main-navbar-custom a,
        #main-navbar-custom button,
        #mobile-drawer-custom p,
        #mobile-drawer-custom li,
        #mobile-drawer-custom td,
        #mobile-drawer-custom label,
        #mobile-drawer-custom span,
        #mobile-drawer-custom strong,
        #mobile-drawer-custom b,
        #mobile-drawer-custom a,
        #mobile-drawer-custom button {
          color: #62666A !important;
        }

        #cta-quote-nav,
        #cta-quote-mobile {
          background: #1FD2E6 !important;
          background-color: #1FD2E6 !important;
          color: #62666A !important;
          border-color: #1FD2E6 !important;
          box-shadow: none !important;
        }

        #cta-quote-nav span,
        #cta-quote-mobile span {
          color: #62666A !important;
        }

        #cta-quote-nav:hover,
        #cta-quote-mobile:hover {
          background: #19bacb !important;
          background-color: #19bacb !important;
          color: #62666A !important;
          border-color: #19bacb !important;
        }

        #main-navbar-custom button:hover,
        #main-navbar-custom a:hover,
        #mobile-drawer-custom button:hover,
        #mobile-drawer-custom a:hover {
          color: #1FD2E6 !important;
        }

        #main-navbar-custom [class*="bg-brand-brand-copper"],
        #mobile-drawer-custom [class*="bg-brand-brand-copper"] {
          background-color: #1FD2E6 !important;
        }
      `}</style>
      <header
        id="main-navbar-custom"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2'
          : 'bg-white py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
              <Logo size="md" showText={true} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[16px] font-semibold tracking-wide uppercase transition-all duration-200 relative py-1 cursor-pointer ${activePage === item.id
                    ? 'text-brand-copper'
                    : 'text-brand-copper hover:text-brand-copper'
                    }`}
                >
                  {item.label}
                  {/* Active Indicator Underline */}
                  {activePage === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5  bg-brand-brand-copper  rounded-full"></span>
                  )}
                </button>
              ))}
            </nav>

            {/* CTA + Language Selector */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector Dropdown */}
              <div id="language-selector" className="relative notranslate">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 px-3 py-2 text-[16px] font-bold uppercase tracking-wider text-brand-copper hover:text-brand-copper rounded-lg bg-brand-card-dark/40 hover:bg-brand-card-dark/80 border border-brand-card-border/50 hover:border-brand-card-border transition-all cursor-pointer"
                >
                  {/* Globe Icon */}
                  <svg className="w-4 h-4 text-[#1FD2E6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>{currentLang}</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white border border-slate-200 shadow-2xl py-1.5 z-50 backdrop-blur-md overflow-hidden">
                    {languages.map((lang) => {
                      const isSelected = lang.label === currentLang;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code, lang.label);
                          }}
                          className={`w-full text-left px-4 py-2 text-[16px] font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-between ${isSelected
                            ? 'bg-brand-copper/10 text-brand-copper font-bold'
                            : 'text-brand-copper hover:bg-slate-50'
                            }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{lang.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <button
                id="cta-quote-nav"
                onClick={handleQuoteClick}
                className="px-5 py-2 text-[16px] font-bold uppercase tracking-wider text-brand-copper bg-gradient-to-r from-brand-copper to-brand-copper-dark hover:from-brand-copper-light hover:to-brand-copper rounded-full transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(200,125,85,0.4)] cursor-pointer whitespace-nowrap"
              >
                Request a Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-brand-copper hover:text-brand-copper/85 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                <svg className="h-6 width-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (rendered outside header) */}
      <div
        id="mobile-drawer-custom"
        style={{ backgroundColor: '#ffffff' }}
        className={`md:hidden fixed inset-y-0 right-0 max-w-xs w-full border-l border-slate-200 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close Button inside Drawer */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-xl text-brand-copper hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col h-full pt-20 pb-6 px-6 ">
          <div className="flex flex-col space-y-4 ">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-mobile-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-bold uppercase tracking-widest py-3 border-b border-slate-100 transition-colors cursor-pointer ${activePage === item.id ? 'text-brand-copper border-b-2 border-brand-copper' : 'text-brand-copper hover:text-brand-copper'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto space-y-6">
            {/* Mobile Language Selector */}
            <div className="border-t border-slate-200 pt-6 notranslate">
              <div className="flex items-center gap-1.5 text-brand-copper mb-3">
                <svg className="w-4 h-4 text-brand-copper" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-widest">Select Language</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => {
                  const isSelected = lang.label === currentLang;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code, lang.label);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-2 rounded-lg text-left text-[14px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${isSelected
                        ? 'bg-brand-copper text-white border border-brand-copper/50 shadow-sm'
                        : 'bg-slate-50 text-brand-copper hover:bg-slate-100 hover:text-brand-copper border border-slate-200'
                        }`}
                    >
                      <span>{lang.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              id="cta-quote-mobile"
              onClick={handleQuoteClick}
              className="w-full py-3 text-center text-[16px] font-bold uppercase tracking-wider text-brand-copper bg-gradient-to-r from-brand-copper via-brand-copper-dark to-brand-copper rounded-lg shadow-md hover:shadow-[0_0_12px_rgba(200,125,85,0.3)] transition-all cursor-pointer"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-xs md:hidden"
        ></div>
      )}
    </>
  );
}
