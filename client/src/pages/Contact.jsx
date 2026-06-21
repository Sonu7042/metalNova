import React, { useState } from 'react';
import { createInquiry } from '../services/inquiryService';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productType: '',
    materialRequired: '',
    quantity: '',
    specifications: '',
    industry: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      fullName: formData.fullName,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      productType: formData.productType,
      materialRequired: formData.materialRequired,
      quantity: formData.quantity,
      specifications: formData.specifications,
      industry: formData.industry
    };

    try {
      await createInquiry(payload);
      const text = `*New RFQ Inquiry - Metalnova*\n` +
          `---------------------------------\n` +
          `*Name:* ${formData.fullName}\n` +
          `*Company:* ${formData.companyName || 'N/A'}\n` +
          `*Email:* ${formData.email}\n` +
          `*Phone:* ${formData.phone}\n` +
          `*Country:* ${formData.country || 'N/A'}\n` +
          `*Product:* ${formData.productType}\n` +
          `*Material:* ${formData.materialRequired || 'N/A'}\n` +
          `*Quantity:* ${formData.quantity}\n` +
          `*Specs/Size:* ${formData.specifications || 'N/A'}\n` +
          `*Industry:* ${formData.industry || 'N/A'}\n` +
          `---------------------------------`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=919810422191&text=${encodedText}`;

        window.open(whatsappUrl, '_blank');

        setIsSubmitting(false);
        setFormSubmitted(true);
      setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          country: '',
          productType: '',
          materialRequired: '',
          quantity: '',
          specifications: '',
          industry: ''
      });
    } catch (error) {
      console.error('Submission failed, falling back to direct WhatsApp redirect', error);
      const text = `*New RFQ Inquiry (Direct Offline) - Metalnova*\n` +
        `---------------------------------\n` +
        `*Name:* ${formData.fullName}\n` +
        `*Company:* ${formData.companyName || 'N/A'}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Country:* ${formData.country || 'N/A'}\n` +
        `*Product:* ${formData.productType}\n` +
        `*Material:* ${formData.materialRequired || 'N/A'}\n` +
        `*Quantity:* ${formData.quantity}\n` +
        `*Specs/Size:* ${formData.specifications || 'N/A'}\n` +
        `*Industry:* ${formData.industry || 'N/A'}\n` +
        `---------------------------------`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=919810422191&text=${encodedText}`;

      window.open(whatsappUrl, '_blank');

      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  return (
    <div id="contact-page" className="font-sans antialiased text-brand-copper bg-[#080c14]">

      {/* ================= HEADER & CONTACT CARDS (PREMIUM DARK SYSTEM) ================= */}
      <section className="relative bg-[#060a12] text-brand-copper pt-36 pb-24 overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        {/* Subtle mesh background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(0,210,255,0.09),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(200,125,85,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">

          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-electric/30 bg-brand-electric/5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-electric shadow-[0_0_8px_rgba(0,210,255,0.8)]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-copper">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-copper tracking-tight">Contact Us</h2>
            <p className="text-brand-copper text-[16px] max-w-xl mx-auto font-light leading-relaxed">
              Reach out to our  technical partner desks. Whether you need engineering advice or custom quotes, our team is ready to support you.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Head Office (Karnal) */}
            <div className="group p-8 bg-[#0f172a]/40 border border-slate-800/80 hover:border-brand-copper/30 hover:bg-[#0f172a]/80 rounded-3xl transition-all duration-300 shadow-2xl text-left space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-copper/5 rounded-full blur-2xl"></div>
              <h4 className="text-base font-extrabold text-brand-copper uppercase tracking-wider flex items-center gap-2">
                Head Office (Karnal)
              </h4>
              <p className="text-[16px] text-brand-copper leading-relaxed font-light">
                Plot No 447, Sector-3,<br />
                HSIIDC Industrial Area,<br />
                Karnal-132001, Haryana
              </p>
              <div className="pt-4 border-t border-slate-800/40 mt-4">
                <p className="text-[10px] text-brand-copper0 uppercase tracking-widest font-bold">Designation</p>
                <p className="text-[16px] font-bold text-brand-copper mt-1">Primary Manufacturing Plant & HQ</p>
              </div>
            </div>

            {/* Delhi Office */}
            <div className="group p-8 bg-[#0f172a]/40 border border-slate-800/80 hover:border-brand-electric/30 hover:bg-[#0f172a]/80 rounded-3xl transition-all duration-300 shadow-2xl text-left space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-electric/5 rounded-full blur-2xl"></div>
              <h4 className="text-base font-extrabold text-brand-copper uppercase tracking-wider flex items-center gap-2">
                
                Delhi Office
              </h4>
              <p className="text-[16px] text-brand-copper leading-relaxed font-light">
                17/164, First Floor,<br />
                Subhash Nagar,<br />
                New Delhi-110027
              </p>
              <div className="pt-4 border-t border-slate-800/40 mt-4">
                <p className="text-[10px] text-brand-copper0 uppercase tracking-widest font-bold">Designation</p>
                <p className="text-[16px] font-bold text-brand-copper mt-1">Regional Sales & Liaison Desk</p>
              </div>
            </div>

            {/* France Contact */}
            <div className="group p-8 bg-[#0f172a]/40 border border-slate-800/80 hover:border-brand-copper/30 hover:bg-[#0f172a]/80 rounded-3xl transition-all duration-300 shadow-2xl text-left space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-copper/5 rounded-full blur-2xl"></div>
              <h4 className="text-base font-extrabold text-brand-copper uppercase tracking-wider flex items-center gap-2">
                France
              </h4>
              <p className="text-[16px] text-brand-copper leading-relaxed font-light">
                Email: <a href="mailto:france@metalnova.in" className="hover:text-brand-copper transition-colors">france@metalnova.in</a><br />
                Phone: <a href="tel:+33684944662" className="hover:text-brand-copper transition-colors">+33 (0)6 84 94 46 62</a><br />
                Technical partnership interface for EU switchgear manufacturers and automotive design consortia.

              </p>
              <div className="pt-4 border-t border-slate-800/40 mt-4">
                <p className="text-[10px] text-brand-copper0 uppercase tracking-widest font-bold">Designation</p>
                <p className="text-[16px] font-bold text-brand-copper mt-1">International Partner Office</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OPERATIONAL CHANNELS (PREMIUM LIGHT SYSTEM) ================= */}
      <section className="py-24 bg-white text-brand-copper px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          <div className="p-8 bg-[#f8fafc] border border-slate-100 rounded-3xl space-y-6 text-left">
            <h4 className="text-base font-extrabold text-brand-copper tracking-wide uppercase">Direct Contact Details</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-brand-copper uppercase tracking-wider">Call Support</p>
                <ul className="space-y-2 text-[16px] text-brand-copper font-semibold">
                  <li>
                    <a href="tel:+919810422191" className="hover:text-brand-copper transition-colors block">
                      +91 9810422191
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919034108181" className="hover:text-brand-copper transition-colors block">
                      +91 9034108181
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919999010534" className="hover:text-brand-copper transition-colors block">
                      +91 9999010534
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-bold text-brand-copper uppercase tracking-wider">Write to Us</p>
                <p className="text-[16px] text-brand-copper0 leading-relaxed font-light">
                  Please submit requirements through our RFQ enquiry form. Our technical engineers review all entries directly.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-[#f8fafc] border border-slate-100 rounded-3xl flex flex-col justify-center space-y-4 text-left">
            <h4 className="text-base font-extrabold text-brand-copper tracking-wide uppercase">Operational Hours</h4>
            <p className="text-[16px] text-brand-copper0 leading-relaxed font-light">
              Monday - Saturday: 09:00 AM to 06:00 PM (IST)<br />
              Sunday: Closed
            </p>
            <p className="text-[16px] text-brand-copper font-bold uppercase tracking-wider">
              100% responsive on electrical technical drawings & custom specs within 24 hours.
            </p>
          </div>

        </div>
      </section>

      {/* ================= MAP & ENQUIRY GRID (PREMIUM DARK SYSTEM) ================= */}
      <section className="relative py-28 bg-[#040810] text-brand-copper px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-[#0f172a]/40 border border-slate-800/80 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
            <div className="space-y-2 mb-8 text-left">
              <h4 className="text-[16px] font-bold uppercase tracking-widest text-brand-copper">RFQ Form</h4>
              <h3 className="text-2xl font-extrabold text-brand-copper">Let’s Understand Your Requirements</h3>
              <p className="text-[16px] text-brand-copper font-light">
                Share your bimetallic contact, solid rivet, or assembly specifications below.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-brand-electric/10 border border-brand-electric flex items-center justify-center mx-auto text-brand-copper text-xl font-bold">
                  ✓
                </div>
                <h5 className="font-bold text-brand-copper">Enquiry Logged</h5>
                <p className="text-[16px] text-brand-copper max-w-xs mx-auto leading-relaxed">
                  Thank you. Your custom requirements have been shared with our design team.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-brand-copper text-[16px] font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  New Submission
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="fullName" className="block text-[10px] font-bold uppercase tracking-wider text-brand-copper">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#080c14] border border-slate-800 focus:border-brand-electric focus:bg-slate-950 rounded-lg px-4 py-2.5 text-[16px] text-brand-copper focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="companyName" className="block text-[10px] font-bold uppercase tracking-wider text-brand-copper">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full bg-[#080c14] border border-slate-800 focus:border-brand-electric focus:bg-slate-950 rounded-lg px-4 py-2.5 text-[16px] text-brand-copper focus:outline-none transition-colors"
                      placeholder="Company"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-brand-copper">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#080c14] border border-slate-800 focus:border-brand-electric focus:bg-slate-950 rounded-lg px-4 py-2.5 text-[16px] text-brand-copper focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-wider text-brand-copper">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#080c14] border border-slate-800 focus:border-brand-electric focus:bg-slate-950 rounded-lg px-4 py-2.5 text-[16px] text-brand-copper focus:outline-none transition-colors"
                      placeholder="Phone"
                    />
                  </div>

                  {/* Country */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="country" className="block text-[10px] font-bold uppercase tracking-wider text-brand-copper">Country / Location</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-[#080c14] border border-slate-800 focus:border-brand-electric focus:bg-slate-950 rounded-lg px-4 py-2.5 text-[16px] text-brand-copper focus:outline-none transition-colors"
                      placeholder="e.g. India"
                    />
                  </div>

                  {/* Product Type */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="productType" className="block text-[10px] font-bold uppercase tracking-wider text-brand-copper">Product Type *</label>
                    <select
                      id="productType"
                      name="productType"
                      required
                      value={formData.productType}
                      onChange={handleInputChange}
                      className="w-full bg-[#080c14] border border-slate-800 focus:border-brand-electric focus:bg-slate-950 rounded-lg px-4 py-2.5 text-[16px] text-brand-copper focus:outline-none transition-colors"
                    >
                      <option value="">Select Option</option>
                      <option value="solid-rivets">Solid Rivets</option>
                      <option value="bimetal-rivets">Bimetal Rivets</option>
                      <option value="trimetal-rivets">Trimetal Rivets</option>
                      <option value="contact-tips">Contact Tips</option>
                      <option value="assemblies">Assemblies</option>
                      <option value="clad-strips">Clad Strips</option>
                      <option value="wires">Wires</option>
                    </select>
                  </div>

                  {/* Material */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="materialRequired" className="block text-[10px] font-bold uppercase tracking-wider text-brand-copper">Material Required</label>
                    <select
                      id="materialRequired"
                      name="materialRequired"
                      value={formData.materialRequired}
                      onChange={handleInputChange}
                      className="w-full bg-[#080c14] border border-slate-800 focus:border-brand-electric focus:bg-slate-950 rounded-lg px-4 py-2.5 text-[16px] text-brand-copper focus:outline-none transition-colors"
                    >
                      <option value="">Select Material</option>
                      <option value="silver-alloy">Silver Alloy</option>
                      <option value="copper">Copper</option>
                      <option value="brass">Brass</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="quantity" className="block text-[10px] font-bold uppercase tracking-wider text-brand-copper">Quantity Required *</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full bg-[#080c14] border border-slate-800 focus:border-brand-electric focus:bg-slate-950 rounded-lg px-4 py-2.5 text-[16px] text-brand-copper focus:outline-none transition-colors"
                      placeholder="e.g. 50,000 pcs"
                    />
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="specifications" className="block text-[10px] font-bold uppercase tracking-wider text-brand-copper">Size / Specifications</label>
                  <textarea
                    id="specifications"
                    name="specifications"
                    rows="3"
                    value={formData.specifications}
                    onChange={handleInputChange}
                    className="w-full bg-[#080c14] border border-slate-800 focus:border-brand-electric focus:bg-slate-950 rounded-lg px-4 py-2.5 text-[16px] text-brand-copper focus:outline-none transition-colors resize-none"
                    placeholder="Enter dimensions (head size, shank diameter) or drawing references"
                  ></textarea>
                </div>

                {/* Industry */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="industry" className="block text-[10px] font-bold uppercase tracking-wider text-brand-copper">Application / Industry</label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full bg-[#080c14] border border-slate-800 focus:border-brand-electric focus:bg-slate-950 rounded-lg px-4 py-2.5 text-[16px] text-brand-copper focus:outline-none transition-colors"
                    placeholder="e.g. Switchgear panel relays"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3.5 bg-gradient-to-r from-brand-electric-dark to-brand-electric hover:from-brand-electric hover:to-brand-electric-dark text-brand-copper text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all shadow-[0_4px_20px_rgba(0,102,255,0.25)] hover:shadow-[0_4px_25px_rgba(0,210,255,0.4)] cursor-pointer flex-1 text-center"
                  >
                    {isSubmitting ? 'Sending Enquiry...' : 'Submit Enquiry'}
                    <span>→</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3.5 bg-transparent border border-brand-electric hover:bg-brand-electric/5 text-brand-copper text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer flex-1 text-center"
                  >
                    Request a Quote
                    <span>→</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Styled Mock Google Map (Very Premium Dark Mode Map) */}
          <div className="lg:col-span-5 bg-[#0f172a]/40 border border-slate-800/80 p-8 rounded-3xl h-[530px] flex flex-col justify-between relative overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="space-y-1 text-left">
              <h4 className="text-[16px] font-bold uppercase tracking-widest text-brand-copper">Factory Location</h4>
              <p className="text-[16px] text-brand-copper font-light">Karnal HSIIDC Industrial Area manufacturing hub.</p>
            </div>

            {/* Highly Premium Google Map Embed */}
            <div className="flex-1 my-6 bg-[#06080d] border border-slate-800/60 rounded-xl relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1830.4750440190167!2d76.97734869839479!3d29.666330100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e714e4a004157%3A0x378a4e85e07ad7f5!2sParadise%20Electrometal!5e1!3m2!1sen!2sin!4v1781452875769!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(0.2) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

            {/* <div className="text-[11px] text-brand-copper0 text-center leading-relaxed font-light">
              Industrial Area Sector-3 is situated directly off National Highway 44 (GT Road), allowing smooth transport access.
            </div> */}
          </div>
        </div>
      </section>

    </div>
  );
}
