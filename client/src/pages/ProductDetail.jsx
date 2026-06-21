import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_BASE } from '../theme';

const INITIAL_PRODUCTS = [
  {
    id: 'solid-rivets',
    name: 'Solid Rivets',
    tagline: 'High-Purity Monometallic & Bimetallic Electrical Contacts',
    description: 'Manufactured to guarantee microstructural uniformity and exceptional bonding. Solid rivets are cold-formed entirely from premium fine silver or copper alloys. Bimetal contact rivets bond a high-purity silver alloy contact face molecularly onto a high-conductivity OFHC copper backing shank, optimizing raw material costs.',
    materials: 'Fine Silver (Ag 99.99%), Silver-Nickel (AgNi10, AgNi15), Silver-Tin-Oxide (AgSnO₂), Fine Copper (OFHC), Cu-OF backing shank.',
    tolerances: 'Head diameter: ±0.05mm, Shank diameter: ±0.03mm, Head height: ±0.05mm. Silver layer: 15% to 30% of total head height.',
    applications: 'Low to high current switchgears, automotive relays, thermostat controllers, miniature circuit breakers (MCBs), contactors, EV battery systems.',
    imageUrl: '',
    specs: [
      { parameter: 'Solid Rivet Head Diameter (d1)', value: '1.0 mm to 6.0 mm' },
      { parameter: 'Bimetal Rivet Head Diameter (d1)', value: '1.5 mm to 8.0 mm' },
      { parameter: 'Solid Rivet Shank Diameter (d2)', value: '0.8 mm to 4.5 mm' },
      { parameter: 'Bimetal Rivet Shank Diameter (d2)', value: '1.0 mm to 6.0 mm' },
      { parameter: 'Bimetallic Joint Shear Strength', value: '≥ 150 MPa (guaranteeing zero separation)' },
      { parameter: 'Electrical Conductivity (IACS)', value: 'Up to 105% (depending on alloy)' }
    ]
  },
  {
    id: 'wires',
    name: 'Silver Alloy & Copper Wires',
    tagline: 'High-Conductivity Drawn & Fine Wires',
    description: 'Precision drawn electrical wires featuring excellent roundness, clean surface finish, and exact tempers. Wires are customized for heading feed processes or weaving. Fine wires are designed for high-density components, micro-sensors, and medical electronics.',
    materials: 'Fine Silver, Silver-Copper (AgCu3, AgCu10), Silver-Nickel (AgNi0.15, AgNi10), Silver-Tin-Oxide (AgSnO₂), OFHC Copper (Cu-OF).',
    tolerances: 'Standard wire diameter: ±0.01mm. Fine wire diameter: ±0.002mm.',
    applications: 'Rivet manufacturing feed wires, thermal fuses, electrical braids, medical probe cables, micro-fuses, sensor connectors.',
    imageUrl: '',
    specs: [
      { parameter: 'Standard Wire Diameter Range', value: '0.5 mm to 8.0 mm' },
      { parameter: 'Fine Wire Diameter Range', value: '0.05 mm to 0.45 mm' },
      { parameter: 'Fine Strip Thickness Range', value: '0.03 mm to 0.15 mm' },
      { parameter: 'Electrical Conductivity (Copper)', value: '≥ 101% IACS' },
      { parameter: 'Electrical Conductivity (Silver)', value: '≥ 106% IACS' },
      { parameter: 'Surface Roughness (Ra)', value: '≤ 0.4 μm' }
    ]
  },
  {
    id: 'trimetal-rivets',
    name: 'Bimetal/Trimetal contact rivets',
    tagline: 'Dual-Sided Active Contact Layers',
    description: 'Features a central copper core sandwiched between active silver-alloy contact layers on both the top and bottom of the head. This construction is designed for complex switching setups where electrical contact or heat dispersion happens on multiple axes.',
    materials: 'Outer faces: Fine Silver, AgSnO₂, AgNi. Core substrate: OFHC Copper.',
    tolerances: 'Total copper percentage: 40% to 60% of total weight. Thickness tolerance: ±0.03mm per layer.',
    applications: 'Heavy-duty industrial switchgears, thermal overload relays, industrial starters, complex multi-pole switches.',
    imageUrl: '',
    specs: [
      { parameter: 'Head Diameter Range (d1)', value: '2.0 mm to 10.0 mm' },
      { parameter: 'Shank Diameter Range (d2)', value: '1.5 mm to 6.5 mm' },
      { parameter: 'Top Contact Layer Thickness', value: '0.2 mm to 0.8 mm' },
      { parameter: 'Bottom Contact Layer Thickness', value: '0.2 mm to 0.8 mm' },
      { parameter: 'Operational Life', value: '≥ 100,000 switching operations under full load' }
    ]
  },
  {
    id: 'contact-tips',
    name: 'Contact Tips',
    tagline: 'Arc-Resistant Sintered Components',
    description: 'Manufactured using advanced powder metallurgy, these contact tips pair highly conductive silver with refractory materials (tungsten or carbon). Perfect for heavy-duty switching where electric arcs cause high temperatures and material erosion.',
    materials: 'Silver-Tungsten (AgW), Silver-Nickel (AgNi), Silver-Tin-Oxide (AgSnO₂), Silver-Cadmium-Oxide (AgCdO).',
    tolerances: 'Width/Length: ±0.1mm, Thickness: ±0.05mm, Flatness: ≤ 0.05mm.',
    applications: 'Molded Case Circuit Breakers (MCCBs), air circuit breakers, heavy-duty motor starters, power relays.',
    imageUrl: '',
    specs: [
      { parameter: 'Length/Width Range', value: '3.0 mm to 25.0 mm' },
      { parameter: 'Thickness Range', value: '0.8 mm to 4.5 mm' },
      { parameter: 'Sintering Density', value: '≥ 98% of theoretical density' },
      { parameter: 'Refractory Material Ratio', value: '30% to 70% Tungsten content' },
      { parameter: 'Hardness (HV)', value: '80 to 220 HV' }
    ]
  },
  {
    id: 'contact-assemblies',
    name: 'Contact Assemblies',
    tagline: 'Integrated Stamped & Welded Electrical Parts',
    description: 'Complete stamped metallic carriers (copper, brass, bronze, steel) fitted with contact rivets or tips. We utilize high-precision progressive stamping, automated rivet feeding, and projection welding to deliver drop-in components ready for assembly lines.',
    materials: 'Carrier: CuSn6, CuZn37, Stainless Steel, Carbon Steel. Fused contact: Silver alloy rivets or sintered tips.',
    tolerances: 'Overall assembly dimensions: ±0.1mm, Welding torque strength: meeting custom ISO specifications.',
    applications: 'Automotive ignition starters, lighting control modules, smart meters, household thermostat assemblies.',
    imageUrl: '',
    specs: [
      { parameter: 'Sheet Metal Thickness', value: '0.2 mm to 3.0 mm' },
      { parameter: 'Welding Technology', value: 'Projection Welding / Resistance Welding' },
      { parameter: 'Stamping Speed', value: 'Up to 300 strokes per minute' },
      { parameter: 'Testing Routines', value: '100% video inspection, pulling force checks' }
    ]
  },
  {
    id: 'clad-strips',
    name: 'Clad Strips | Contact',
    tagline: 'Multimetal Laminated Strips',
    description: 'Precious metal contact bands laminated directly into carrier metal strips (copper, brass, or bronze) using high-pressure roll cladding. Enables automated assembly stamping lines, guaranteeing zero voids and continuous conductivity along the strip.',
    materials: 'Base: OFHC Copper, Brass, phosphor bronze. Inlay/Overlay: Fine Silver, AgNi, AgSnO₂.',
    tolerances: 'Cladding thickness ratio: 5% to 40% of total strip. Thickness tolerance: ±3% of nominal.',
    applications: 'Connector pins, rotary switches, micro-relays, telecommunication connectors, continuous plug contacts.',
    imageUrl: '',
    specs: [
      { parameter: 'Strip Width Range', value: '5.0 mm to 120.0 mm' },
      { parameter: 'Strip Thickness Range', value: '0.15 mm to 2.5 mm' },
      { parameter: 'Cladding Styles', value: 'Inlay, Overlay, Edge-lay, Single/Double sided' },
      { parameter: 'Bonding Coverage', value: '100% ultrasonic defect-free validation' }
    ]
  }
];

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    quantity: '',
    specifications: '',
    industry: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await fetch(`${API_BASE}/products`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setProducts(data);
          }
        }
      } catch (err) {
        console.warn('API connection offline, utilizing client preloaded static specifications.');
      } finally {
        setLoading(false);
      }
    };
    fetchCatalog();
  }, []);

  // Update active product details whenever productId or products array loads
  useEffect(() => {
    const found = products.find(p => p._id === productId || p.id === productId);
    setProduct(found || products[0]);
  }, [productId, products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!product) return;
    setIsSubmitting(true);

    const payload = {
      ...formData,
      productType: product.name, // autofill with this product's name
      materialRequired: product.materials?.split(',')[0] || 'Standard'
    };

    try {
      const response = await fetch(`${API_BASE}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        triggerWhatsAppRedirect(payload);
      } else {
        alert('Failed to save inquiry on server. Redirecting directly to WhatsApp.');
        triggerWhatsAppRedirect(payload);
      }
    } catch (err) {
      console.warn('Server offline, initiating direct WhatsApp message.');
      triggerWhatsAppRedirect(payload);
    }
  };

  const triggerWhatsAppRedirect = (payload) => {
    const text = `*New RFQ Product Inquiry - Metalnova*\n` +
      `---------------------------------\n` +
      `*Product:* ${product.name}\n` +
      `*Client:* ${payload.fullName}\n` +
      `*Company:* ${payload.companyName || 'N/A'}\n` +
      `*Email:* ${payload.email}\n` +
      `*Phone:* ${payload.phone}\n` +
      `*Country:* ${payload.country || 'N/A'}\n` +
      `*Quantity:* ${payload.quantity}\n` +
      `*Specs / Dimensions:* ${payload.specifications || 'N/A'}\n` +
      `*Industry Sector:* ${payload.industry || 'N/A'}\n` +
      `---------------------------------`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919810422191&text=${encoded}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setFormSubmitted(true);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      country: '',
      quantity: '',
      specifications: '',
      industry: ''
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#080c14] flex items-center justify-center text-brand-copper">
        <p className="text-[16px] font-bold uppercase tracking-widest animate-pulse">Loading Specifications...</p>
      </div>
    );
  }

  // Get other categories for related sections
  const relatedProducts = products.filter(p => (p._id !== product._id && p.id !== product.id)).slice(0, 3);

  return (
    <div id="product-detail-page" className="font-sans antialiased text-brand-copper bg-[#080c14]">

      {/* ================= HEADER OVERVIEW (PREMIUM DARK SYSTEM) ================= */}
      <section className="relative bg-[#060a12] text-brand-copper pt-36 pb-24 overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        {/* Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(0,210,255,0.09),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(200,125,85,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-4 text-center relative z-10">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 hover:bg-slate-900 text-[10px] font-bold uppercase tracking-wider text-brand-copper cursor-pointer"
          >
            ← Back to Catalog
          </button>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-copper tracking-tight pt-2">
            {product.name}
          </h1>
          {product.tagline && (
            <p className="text-gradient-electric text-[16px] sm:text-base font-bold uppercase tracking-wider">
              {product.tagline}
            </p>
          )}
        </div>
      </section>

      {/* ================= DETAILED SPEC SHEET (PREMIUM LIGHT SYSTEM) ================= */}
      <section className="py-24 bg-white text-brand-copper px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Product Profile details */}
          <div className="lg:col-span-7 space-y-8 text-left">

            {/* Product Image Frame */}
            {product.imageUrl && (
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-lg">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-[16px] font-bold uppercase tracking-widest text-brand-copper">Overview Description</h3>
              <p className="text-[16px] sm:text-base text-brand-copper leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
              <div className="space-y-2">
                <h4 className="text-[16px] font-bold uppercase tracking-widest text-brand-copper">Materials Formulation</h4>
                <p className="text-[16px] sm:text-[18px]  text-brand-copper0 leading-relaxed font-medium">
                  {product.materials}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[16px] font-bold uppercase tracking-widest text-brand-copper">Dimensional Tolerances</h4>
                <p className="text-[16px] sm:text-[18px]  text-brand-copper0 leading-relaxed font-medium">
                  {product.tolerances}
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-6 border-t border-slate-100">
              <h4 className="text-[16px] font-bold uppercase tracking-widest text-brand-copper">Applications / Industries</h4>
              <p className="text-[16px] sm:text-[18px]  text-brand-copper0 leading-relaxed font-medium">
                {product.applications}
              </p>
            </div>

          </div>

          {/* Right Side: Specifications Table & Inquiry Form */}
          <div className="lg:col-span-5 space-y-8">

            {/* Technical Specifications list */}
            {product.specs && product.specs.length > 0 && (
              <div className="bg-[#0b0f19] border border-slate-800 p-8 rounded-3xl space-y-6 text-left shadow-xl">
                <h3 className="text-[16px] font-bold uppercase tracking-widest text-brand-copper0 border-b border-slate-800 pb-3">
                  Technical Specifications Table
                </h3>
                <div className="overflow-x-auto border border-slate-800 rounded-2xl bg-[#070b12]">
                  <table className="w-full text-[16px] text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 bg-[#0f172a] text-brand-copper font-bold uppercase tracking-wider">
                        <th className="px-5 py-3">Parameter</th>
                        <th className="px-5 py-3">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specs.map((s, idx) => (
                        <tr key={idx} className="border-b border-slate-800/40 hover:bg-[#0f172a]/20 last:border-0">
                          <td className="px-5 py-3 font-semibold text-brand-copper">{s.parameter}</td>
                          <td className="px-5 py-3 text-brand-copper font-bold">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Branded Context-Aware Inquiry RFQ Form */}
            <div className="bg-[#f8fafc] border border-slate-200/80 p-8 rounded-3xl text-left space-y-6 shadow-sm">
              <div>
                <h3 className="text-base font-extrabold text-brand-copper tracking-tight">Request Quotation</h3>
                <p className="text-[11px] text-brand-copper0 mt-1 font-light">
                  Submit specifications to retrieve pricing for *{product.name}*.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl space-y-2 text-center">
                  <span className="text-xl">✓</span>
                  <h4 className="text-[16px] font-bold uppercase tracking-wider">Inquiry Submitted</h4>
                  <p className="text-[10px] text-emerald-600 font-light leading-relaxed">
                    Redirecting to WhatsApp to send detailed specifications...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase font-bold text-brand-copper0 tracking-wider mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-200 focus:border-brand-copper text-brand-copper text-[16px] rounded-xl px-3 py-2.5 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase font-bold text-brand-copper0 tracking-wider mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="ACME Corp"
                        className="w-full bg-white border border-slate-200 focus:border-brand-copper text-brand-copper text-[16px] rounded-xl px-3 py-2.5 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase font-bold text-brand-copper0 tracking-wider mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-white border border-slate-200 focus:border-brand-copper text-brand-copper text-[16px] rounded-xl px-3 py-2.5 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase font-bold text-brand-copper0 tracking-wider mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91..."
                        className="w-full bg-white border border-slate-200 focus:border-brand-copper text-brand-copper text-[16px] rounded-xl px-3 py-2.5 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase font-bold text-brand-copper0 tracking-wider mb-1.5">Qty Required *</label>
                      <input
                        type="text"
                        name="quantity"
                        required
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g. 50,000 units"
                        className="w-full bg-white border border-slate-200 focus:border-brand-copper text-brand-copper text-[16px] rounded-xl px-3 py-2.5 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase font-bold text-brand-copper0 tracking-wider mb-1.5">Country / Location</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="Germany"
                        className="w-full bg-white border border-slate-200 focus:border-brand-copper text-brand-copper text-[16px] rounded-xl px-3 py-2.5 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase font-bold text-brand-copper0 tracking-wider mb-1.5">Custom Specifications</label>
                    <textarea
                      name="specifications"
                      value={formData.specifications}
                      onChange={handleInputChange}
                      placeholder="Input custom dimensional ranges, tempers, or chemical requirements..."
                      rows="3"
                      className="w-full bg-white border border-slate-200 focus:border-brand-copper text-brand-copper text-[16px] rounded-xl px-3 py-2.5 outline-none transition-all resize-none font-light"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-brand-copper to-brand-copper-dark hover:from-brand-copper-light hover:to-brand-copper text-brand-copper text-[16px] font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer text-center"
                  >
                    {isSubmitting ? 'Processing Submission...' : 'Submit Inquiry & WhatsApp →'}
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ================= RELATED PRODUCTS (PREMIUM DARK GRID) ================= */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-[#060a12] text-brand-copper border-t border-slate-900 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-left space-y-2">
              <span className="text-[10px] font-bold text-brand-copper uppercase tracking-wider bg-brand-electric/5 px-3 py-1 rounded-full border border-brand-electric/20">Related Components</span>
              <h3 className="text-2xl font-black text-brand-copper tracking-tight pt-2">Other Catalog Materials</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <div
                  key={p._id || p.id}
                  onClick={() => {
                    navigate(`/product/${p._id || p.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group bg-[#0f172a]/40 border border-slate-800/80 hover:border-brand-copper/30 hover:bg-[#0f172a]/80 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer shadow-2xl flex flex-col justify-between text-left"
                >
                  {p.imageUrl && (
                    <div className="p-4">
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/40">
                        <img
                          src={p.imageUrl}
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-75 group-hover:scale-102"
                        />
                      </div>
                    </div>
                  )}

                  <div className="p-6 pt-2 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="font-extrabold text-brand-copper text-base tracking-wide group-hover:text-brand-copper transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-[11px] text-brand-copper font-light line-clamp-2">
                        {p.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-brand-copper">
                      <span>View Specifications</span>
                      <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
