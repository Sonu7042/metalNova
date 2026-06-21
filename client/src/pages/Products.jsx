import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { getProducts } from '../services/catalogService';

export default function Products() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // Product categories list
  const INITIAL_PRODUCTS = [
    {
      id: 'solid-rivets',
      name: 'Solid Rivets',
      tagline: 'High-Purity Monometallic & Bimetallic Electrical Contacts',
      description: 'Manufactured to guarantee microstructural uniformity and exceptional bonding. Solid rivets are cold-formed entirely from premium fine silver or copper alloys. Bimetal contact rivets bond a high-purity silver alloy contact face molecularly onto a high-conductivity OFHC copper backing shank, optimizing raw material costs.',
      materials: 'Fine Silver (Ag 99.99%), Silver-Nickel (AgNi10, AgNi15), Silver-Tin-Oxide (AgSnO₂), Fine Copper (OFHC), Cu-OF backing shank.',
      tolerances: 'Head diameter: ±0.05mm, Shank diameter: ±0.03mm, Head height: ±0.05mm. Silver layer: 15% to 30% of total head height.',
      applications: 'Low to high current switchgears, automotive relays, thermostat controllers, miniature circuit breakers (MCBs), contactors, EV battery systems.',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/2/383739696/XS/DT/VR/653817/bimetal-contact-rivet.png',
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
      imageUrl: 'https://copperwire-en.com/images/nav02.webp',
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
      imageUrl: 'https://cpimg.tistatic.com/07194726/b/5/Bimetal-Electrical-Contact-Rivet.jpg',
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
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/2/390727957/FY/KG/LJ/142079462/plasma-cutter-consumables-1000x1000.jpeg',
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
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/8/OW/KN/WR/18477783/contact-assemblies-1-.jpg',
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
      imageUrl: 'https://tiimg.tistatic.com/fp/3/005/681/clad-metal-strips-components-909.jpg',
      specs: [
        { parameter: 'Strip Width Range', value: '5.0 mm to 120.0 mm' },
        { parameter: 'Strip Thickness Range', value: '0.15 mm to 2.5 mm' },
        { parameter: 'Cladding Styles', value: 'Inlay, Overlay, Edge-lay, Single/Double sided' },
        { parameter: 'Bonding Coverage', value: '100% ultrasonic defect-free validation' }
      ]
    }
  ];

  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [activeTab, setActiveTab] = useState(id || location.state?.activeTab || 'solid-rivets');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (id) {
      setActiveTab(id);
    } else if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [id, location.state]);

  // Load products from backend
  useEffect(() => {
    const fetchLiveCatalog = async () => {
      try {
        const liveProds = await getProducts();
        if (liveProds && liveProds.length > 0) {
            setProducts(liveProds);
              
            // Sync active tab if initial selection is not present in fetched list
            const found = liveProds.find(p => (p.id === activeTab || p._id === activeTab));
            if (!found) {
              setActiveTab(liveProds[0]._id || liveProds[0].id);
            }
        }
      } catch (err) {
        console.warn('Backend API offline, using pre-loaded default specifications catalog.');
      }
    };
    fetchLiveCatalog();
  }, []);

  const activeProduct = products.find((p) => p.id === activeTab || p._id === activeTab) || products[0];

  const handleEnquiryClick = () => {
    navigate('/');
    setTimeout(() => {
      const formElement = document.getElementById('rfq-section');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Filter products based on search query and selected category
  const filteredProducts = products.filter(cat => {
    const name = (cat.name || cat.title || '').toLowerCase();
    const tagline = (cat.tagline || '').toLowerCase();
    const description = (cat.description || cat.desc || '').toLowerCase();
    const materials = (cat.materials || '').toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchesSearch = name.includes(query) || tagline.includes(query) || description.includes(query) || materials.includes(query);

    if (!matchesSearch) return false;
    if (selectedCategory === 'all') return true;

    const currentId = (cat.id || cat._id || '').toLowerCase();
    if (selectedCategory === 'rivet') {
      return currentId.includes('rivet');
    }
    if (selectedCategory === 'wire-strip') {
      return currentId.includes('wire') || currentId.includes('strip') || currentId.includes('clad');
    }
    if (selectedCategory === 'assembly-tip') {
      return currentId.includes('assembly') || currentId.includes('tip');
    }
    return true;
  });

  return (
    <div id="products-page-custom" className="font-sans antialiased text-[#023C85] bg-white min-h-screen pb-24">

      {/* ================= HERO HEADER INTRO ================= */}
      <section className="relative pt-36 pb-20 overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        {/* Subtle mesh background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(1,114,176,0.06),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(2,60,133,0.04),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(1,114,176,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(1,114,176,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0172B0]/25 bg-[#0172B0]/5">
            <span className="w-2 h-2 rounded-full bg-[#0172B0] animate-pulse"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#023C85]">
              High-Precision Engineering
            </span>
          </div> */}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Our <span className="bg-gradient-to-r from-[#023C85] via-[#0172B0] to-[#023C85] bg-clip-text text-transparent">Product Catalog</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our world-class electrical contact components, engineered with extreme microstructural integrity, custom tempers, and cadmium-free metallurgy to power demanding global switchgear and electrification systems.
          </p>

          {/* Interactive Search Bar */}
          <div className="max-w-md mx-auto relative mt-8 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#0172B0] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search products by name, alloy, or specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#0172B0]/20 focus:border-[#0172B0] text-[#023C85] text-[16px] rounded-2xl pl-12 pr-10 py-3.5 outline-none transition-all duration-200 placeholder:text-slate-400/80 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#0172B0]/10 hover:text-[#023C85] transition-all text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ================= CATEGORY FILTER TABS ================= */}
      <section className="py-8 bg-[#fefefe] px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {[
            { id: 'all', label: 'All Components' },
            { id: 'rivet', label: 'Composite & Solid Rivets' },
            { id: 'wire-strip', label: 'Wires & Clad Strips' },
            { id: 'assembly-tip', label: 'Tips & Assemblies' }
          ].map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive ? 'tab-active' : 'tab-inactive'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ================= PRODUCTS SHOWCASE GRID ================= */}
      <section id="categories-section" className="relative py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            /* No Results State */
            <div className="max-w-md mx-auto text-center py-16 space-y-4">
              <div className="text-5xl animate-bounce">🔍</div>
              <h4 className="text-xl font-extrabold text-[#023C85]">No Components Found</h4>
              <p className="text-slate-500 text-sm font-light">
                We couldn't find any products matching "{searchQuery}" under this category. Try adjusting your query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#023C85] to-[#0172B0] text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            /* Grid layout of filtered products */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {filteredProducts.map((cat, i) => {
                const currentId = cat._id || cat.id;
                // Parse materials into an array to show as tags
                const materialList = (cat.materials || '')
                  .split(',')
                  .slice(0, 3)
                  .map((m) => m.trim())
                  .filter((m) => m.length > 0);

                return (
                  <div
                    key={currentId}
                    onClick={() => {
                      navigate(`/product/${currentId}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group product-card rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between"
                  >
                    {/* Framed Image Container */}
                    <div className="p-4">
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-100/50 shadow-inner">
                        {(cat.imageUrl || cat.img) && (
                          <img
                            src={cat.imageUrl || cat.img}
                            alt={cat.name || cat.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>

                        {/* Floating Index Tag */}
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full product-index-badge text-[11px] font-bold shadow-md">
                          Component 0{i + 1}
                        </div>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-6 pt-2 space-y-4 flex flex-col justify-between flex-1 text-left">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <h4 className="font-extrabold text-[#023C85] text-xl tracking-wide group-hover:text-[#0172B0] transition-colors duration-250">
                            {cat.name || cat.title}
                          </h4>
                          {cat.tagline && (
                            <p className="text-[10px] uppercase font-bold tracking-widest text-[#0172B0]">
                              {cat.tagline}
                            </p>
                          )}
                        </div>

                        <p className="text-[14px] text-slate-500 font-light leading-relaxed line-clamp-3">
                          {cat.description || cat.tagline || cat.desc}
                        </p>

                        {/* Material Badges */}
                        {/* {materialList.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1.5">
                            {materialList.map((mat, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-bold px-2.5 py-1 rounded-md material-tag tracking-wide"
                              >
                                {mat}
                              </span>
                            ))}
                          </div>
                        )} */}
                      </div>

                      {/* Card specifications link */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-widest transition-colors">
                        <span className="specs-link">View Specifications</span>
                        <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-[#0172B0] group-hover:text-[#023C85]">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
