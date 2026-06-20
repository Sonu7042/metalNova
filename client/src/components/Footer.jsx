import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const navigate = useNavigate();
  const handleNavClick = (pageId) => {
    const targetPath = pageId === 'home' ? '/' : `/${pageId}`;
    navigate(targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section-custom" className="bg-white  text-[#1FD2E6] pt-16 pb-8 relative overflow-hidden">
      <style>{`
        #footer-section-custom {
          background: #ffffff !important;
          background-color: #ffffff !important;
          border-color: rgba(98, 102, 106, 0.2) !important;
        }

        #footer-section-custom h1,
        #footer-section-custom h2,
        #footer-section-custom h3,
        #footer-section-custom h4,
        #footer-section-custom h5,
        #footer-section-custom h6 {
          color: #1FD2E6 !important;
        }

        #footer-section-custom p,
        #footer-section-custom li,
        #footer-section-custom td,
        #footer-section-custom label,
        #footer-section-custom span,
        #footer-section-custom strong,
        #footer-section-custom b,
        #footer-section-custom a,
        #footer-section-custom button {
          color: #62666A !important;
        }

        #footer-section-custom button:hover,
        #footer-section-custom a:hover {
          color: #1FD2E6 !important;
        }

        #footer-section-custom .text-\[\#1FD2E6\] {
          color: #1FD2E6 !important;
        }
      `}</style>

      {/* Visual Accent Light Rays */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-electric/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-copper/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-brand-card-border/60">

          {/* Brand & Intro Column */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <Logo size="lg" showText={true} />
            <p className="text-[16px] text-brand-copper/90 leading-relaxed pr-4 mt-2">
              At Metalnova, performance begins at the microscopic level. We specialize in the precision cold-heading of premium electrical contact rivets and clad materials.
            </p>
            {/* Certifications Quick Reference */}
            {/* <div className="flex gap-3 pt-2">
              <span className="text-[10px] tracking-wider uppercase bg-brand-copper px-2.5 py-1 text-brand-copper rounded-md font-semibold">ISO 9001:2015</span>
              <span className="text-[10px] tracking-wider uppercase bg-brand-copper px-2.5 py-1 text-brand-copper rounded-md font-semibold">CE Certified</span>
              <span className="text-[10px] tracking-wider uppercase bg-brand-copper px-2.5 py-1 text-brand-copper rounded-md font-semibold">RoHS Compliant</span>
            </div> */}
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2">
            <h3 className=" text-[16px] text-[#1FD2E6] font-bold tracking-widest uppercase mb-6 relative">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-brand-copper rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'products', label: 'Our Product' },
                { id: 'certifications', label: 'Quality Commitments' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-[16px] hover:text-brand-copper transition-colors duration-200 cursor-pointer block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Head & Branch Offices */}
          <div className="md:col-span-3">
            <h3 className="text-brand-copper text-[16px] font-bold tracking-widest uppercase mb-6 relative">
              Our Offices
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-brand-copper rounded-full"></span>
            </h3>
            <div className="space-y-4 text-[16px]">
              <div>
                <p className="font-bold text-[#1FD2E6] flex items-center gap-1.5">
                  {/* <span className="w-1.5 h-1.5 bg-brand-copper rounded-full"></span> */}
                 <span className="font-bold text-[#1FD2E6]"> Karnal (Head Office) </span>
                </p>
                <p className="text-brand-copper mt-1 leading-relaxed text-[13px]">
                  Plot No 447, Sector-3,<br />
                  HSIIDC Industrial Area,<br />
                  Karnal-132001, Haryana
                </p>
              </div>
              <div className="pt-2 border-t border-brand-card-border/30">
                <p className="font-bold text-brand-copper flex items-center gap-1.5">
                  {/* <span className="w-1.5 h-1.5 bg-brand-copper rounded-full"></span> */}
                <span className="font-bold text-[#1FD2E6] text-[15px]">  Delhi Office </span>
                </p>
                <p className="text-brand-copper mt-1 leading-relaxed text-[13px]">
                  17/164, First Floor,<br />
                  Subhash Nagar,<br />
                  New Delhi-110027
                </p>
              </div>
            </div>
          </div>

          {/* Contacts Column */}
          <div className="md:col-span-3">
            <h3 className="text-brand-copper text-[16px] font-bold tracking-widest uppercase mb-6 relative">
              Contacts & Support
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-brand-copper rounded-full"></span>
            </h3>
            <div className="space-y-3 text-[16px]">
              <div>
                <p className="font-bold text-brand-copper"> <span className="font-bold text-[#1FD2E6] text-[15px]"> Contacts</span></p>
                <ul className="space-y-1.5 mt-1 text-[13px]">
                  <li>
                    <a href="tel:+919810422191" className="hover:text-brand-copper transition-colors">
                      +91 9810422191
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919034108181" className="hover:text-brand-copper transition-colors">
                      +91 9034108181
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919999010534" className="hover:text-brand-copper transition-colors">
                      +91 9999010534
                    </a>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-brand-card-border/30">
                <p className="font-bold text-brand-copper flex items-center gap-1">
                  <span className="font-bold text-[#1FD2E6] text-[15px]"> France  </span>
                </p>
                <p className="text-[13px] text-brand-copper mt-1">
                  Email: <a href="mailto:france@metalnova.in" className="hover:text-brand-copper transition-colors">france@metalnova.in</a><br />
                  Phone: <a href="tel:+33684944662" className="hover:text-brand-copper transition-colors">+33 (0)6 84 94 46 62</a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[16px] text-brand-copper0 gap-4 md:gap-0">
          <p>© {currentYear} Metalnova. All rights reserved.</p>
          <p>
            Designed & Developed by{' '}
            <a
              href="https://www.topnexmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1FD2E6] hover:text-brand-copper-light transition-colors font-semibold"
            >
              Topnex Media
            </a>
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-brand-copper transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-brand-copper transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}









