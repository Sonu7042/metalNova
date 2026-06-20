import React, { useState } from 'react';
import isoCert from '../assets/METALNOVA QMS ISO 9001 Certificate.pdf';
import ceCert from '../assets/METALNOVA - CE Certificate.pdf';
import rohsCert from '../assets/METALNOVA - RoHS Certificate.pdf';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  React.useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  const certificationsList = [
    {
      id: 'iso-9001',
      title: 'ISO 9001:2015 Certification',
      subtitle: 'Quality Management Systems (QMS)',
      validity: 'Certified and regularly audited',
      scope: 'Design, development, and high-speed cold-heading manufacturing of solid, bimetallic, and trimetallic contact rivets, contact tips, and assemblies.',
      description: 'ISO 9001:2015 ensures that our operations follow rigorous processes to maintain zero defect manufacturing. From raw precious metal verification to final shear tests, every step is fully documented and traceable.',
      summary: 'ISO 9001',
      pdf: isoCert
    },
    {
      id: 'ce-marking',
      title: 'CE Certification',
      subtitle: 'Conformité Européenne',
      validity: 'Full Compliance',
      scope: 'Standardization and safety alignment for electrical contact parts used in distribution systems, switchgears, and control panels.',
      description: 'CE conformity indicates that Metalnova products meet the health, safety, and environmental protection standards of the European Economic Area. This allows our products to be seamlessly integrated into EU electrotechnical networks.',
      summary: 'CE Compliance',
      pdf: ceCert
    },
    {
      id: 'rohs-compliance',
      title: 'RoHS Compliance',
      subtitle: 'Restriction of Hazardous Substances',
      validity: '100% Cadmium-Free Alloys',
      scope: 'Restriction of Lead (Pb), Cadmium (Cd), Mercury (Hg), and other hazardous substances in electronic products.',
      description: 'Environmental stewardship is at our core. We produce eco-friendly contact rivet alloys (like Silver-Tin-Oxide AgSnO₂ and Silver-Nickel AgNi), eliminating toxic Cadmium while keeping outstanding electrical efficiency.',
      summary: 'RoHS / Cd-Free',
      pdf: rohsCert
    }
  ];

  return (
    <div id="certifications-page" className="font-sans antialiased text-brand-copper bg-[#080c14]">

      {/* ================= HEADER & QUALITY POLICY (PREMIUM DARK SYSTEM) ================= */}
      <section className="relative bg-[#060a12] text-brand-copper pt-36 pb-24 overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        {/* Subtle mesh background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(0,210,255,0.09),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(200,125,85,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">

          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-electric/30 bg-brand-electric/5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-copper">
                Global Standards
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-copper tracking-tight">Quality Commits</h2>
            <p className="text-brand-copper text-[16px] max-w-xl mx-auto font-light leading-relaxed">
              Metalnova is committed to engineering electrical contacts that meet the highest standards of safety, quality management, and environmental compliance.
            </p>
          </div>

          {/* Quality Policy Card */}
          <div className="bg-[#0f172a]/40 border border-slate-800/80 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-md hover:border-brand-copper/30 transition-colors duration-300 text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-copper/5 blur-3xl pointer-events-none"></div>
            <div className="max-w-3xl space-y-6">
              <h3 className="text-[16px] font-bold uppercase tracking-widest text-brand-copper flex items-center gap-2">
                <span className="w-6 h-[1px] bg-brand-copper"></span>
                Engineering Excellence
              </h3>
              <h4 className="text-xl sm:text-2xl font-extrabold text-brand-copper">Our Quality Policy</h4>
              <p className="text-[16px] sm:text-[18px] text-brand-copper leading-relaxed font-light">
                At Metalnova, our manufacturing philosophy is anchored in a rigorous zero-defect mandate, ensuring every electrical contact solution engineered meets or exceeds global regulatory and client specifications. We enforce this uncompromising standard through a multi-tier quality assurance framework:
              </p>

              <ul className="space-y-4 text-[16px] text-brand-copper">
                <li className="flex items-start gap-3 border-b border-slate-800/40 pb-3">
                  <span className="text-brand-copper font-bold">✓</span>
                  <span className="font-light"> <span className='font-bold'>Precision Tooling: </span> Deploying advanced cold-forming technologies integrated with sub-micron tooling calibrations to guarantee ultra-tight dimensional tolerances.</span>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-800/40 pb-3">
                  <span className="text-brand-copper font-bold">✓</span>
                  <span className="font-light"> <span className='font-bold'>Material Purity: </span>  Subjecting 100% of incoming precious and non-ferrous metallurgical lots to rigorous spectrometer analysis, ensuring absolute chemical purity.
                  </span>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-800/40 pb-3">
                  <span className="text-brand-copper font-bold">✓</span>
                  <span className="font-light"> <span className='font-bold'>Structural Integrity:</span>  Executing destructive shear testing on every production batch of bimetallic rivets to validate flawless interfacial bond strength.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-copper font-bold">✓</span>
                  <span className="font-light"> <span className='font-bold'>Sustainable Lifecycle: </span> Operating a closed-loop precious metal recovery circuit to enforce sustainable manufacturing and environmental stewardship.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>




      {/* ================= CERTIFICATES GALLERY (PREMIUM LIGHT SYSTEM) ================= */}
      <section className="py-24 bg-white text-brand-copper px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="space-y-2 text-left">
            {/* <p className="text-[16px] font-bold uppercase tracking-[0.2em] text-brand-copper">Compliance Portfolio</p> */}
            <h4 className="text-3xl font-extrabold text-brand-copper tracking-tight">Quality Commitments</h4>
            <p className="text-brand-copper text-[16px] font-light">
              Click on any certificate card to open and download the official PDF certificate document.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificationsList.map((cert) => (
              <button
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="relative block w-full max-w-[280px] sm:max-w-sm mx-auto aspect-[1/1.4] bg-[#FEFEFD] border border-slate-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:translate-y-[-6px] hover:shadow-2xl group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-brand-copper/50"
              >
                {/* Embed PDF page 1 as card preview */}
                <iframe
                  src={`${cert.pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-full h-full border-0 pointer-events-none select-none"
                  scrolling="no"
                  title={cert.title}
                />

                {/* Dark Hover Overlay & Center Banner Button */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-brand-copper border border-white/20 text-white font-bold text-[12px] uppercase tracking-widest px-6 py-3 rounded-xl shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Click To View
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PDF VIEWER MODAL ================= */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-white backdrop-blur-md p-4 sm:p-6 transition-all duration-300 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Clickable backdrop overlay to close */}
          <div 
            className="absolute inset-0 cursor-default" 
            onClick={() => setSelectedCert(null)}
          />

          {/* Close button in top-right of screen */}
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/60 hover:text-white transition-colors text-3xl sm:text-4xl font-light cursor-pointer z-50 p-2"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* Modal Container Card (Immersive PDF Viewer Only) */}
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[1/1.414] max-h-[65vh] sm:max-h-[70vh] bg-white rounded-lg shadow-2xl overflow-hidden z-10 transform scale-100 transition-transform duration-300">
            <iframe
              src={`${selectedCert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
              className="w-full h-full border-none overflow-hidden"
              scrolling="no"
              title={selectedCert.title}
            />
          </div>
        </div>
      )}
    </div>
  );
}