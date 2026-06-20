import React from 'react';

export default function About() {
  return (
    <div id="about-page" className="font-sans antialiased text-brand-copper min-h-screen bg-white ">

      {/* ================= HEADER INTRO (PREMIUM LIGHT SYSTEM) ================= */}
      <section className="relative pt-36 pb-24 overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-brand-copper/30">
        {/* Subtle mesh background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(0,210,255,0.06),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(200,125,85,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(140,75,43,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,75,43,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-copper/30 bg-brand-copper/5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-copper shadow-[0_0_8px_rgba(200,125,85,0.8)]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-copper-dark">
                Who We Are
              </span>
            </div> */}

            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight leading-[1.08] text-brand-copper">
              About Us<br />
              {/* <span className="text-gradient-electric">Metalnova</span> */}
            </h1>

            <div className="space-y-6 text-brand-copper text-[16px] leading-relaxed font-light">
              {/* <p>
                Metalnova stands at the absolute forefront of precision engineering, manufacturing world-class electrical contact components for global electronic, electrical, and industrial applications. Anchored by a legacy of relentless innovation and uncompromising technical standards, we seamlessly integrate state-of-the-art manufacturing methodologies with profound material science expertise to power critical infrastructure worldwide. Our advanced capabilities empower us to architect, test, and deliver highly scalable, fail-safe components that meet the rigorous compliance standards of modern global industries—including heavy-duty power distribution grids, complex switchgear systems, next-generation automotive architecture, and micro-electronics.
              </p>



              <p>
                Operating under the conviction that operational excellence begins at the microscopic level, Metalnova synchronizes high-grade raw materials, advanced metallurgical bonding techniques, and precision automated manufacturing to deliver components with exceptional electrical efficiency and profound mechanical strength. Whether producing solid rivets, bimetal/Bimetal/Trimetal contact rivets, bespoke contact tips, specialized assemblies, or high-purity clad strips, every component is executed with meticulous tolerances. By fusing cost-optimized production processes with premium metallurgy, we engineer solutions that strike the ultimate balance between high-end performance, structural reliability, and commercial value.
              </p> */}

              <p>
                In 2010, we started our journey under the name Shree Jagdamba Electrical Alloy. We began with modest resources but a strict commitment to honesty, transparency, and non-stop delivery. Over the years, that straightforward approach built deep trust with our clients.
                <p >

                  As our market expanded, we transitioned to Metalnova. This rebrand marks our evolution into a  supplier and solidifies our commitment to environmentally conscious manufacturing.
                  Our operations are focused entirely on the production of electrical contact components—specifically solid, bimetal, and trimetal rivets, contact tips, assemblies, clad strips, and wires.
                </p>
                <p>

                  We understand that in electrical applications, variance is a failure. That is why we focus on precise production steps, strict material verification, and continuous process improvement. We build long-term international relationships by doing things the right way: delivering exact technical performance, keeping timelines predictable, and maintaining fair pricing
                </p>
              </p>
            </div>
          </div>

          {/* Right Focus Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute -inset-4  rounded-3xl blur-3xl pointer-events-none"></div>
            <div className="relative w-full max-w-sm p-8 border border-brand-copper/30 backdrop-blur-md hover:border-brand-copper/60 rounded-3xl shadow-lg transition-all duration-300 text-left space-y-6">
              <div>
                {/* <span className="text-[10px] font-bold text-brand-copper uppercase tracking-wider bg-brand-copper/10 px-3 py-1 rounded-full">
                  Our Products (core segment )
                </span> */}
                <h4 className="text-2xl font-bold text-brand-copper mt-3">Our Products </h4>
              </div>

              <ul className="space-y-4 text-[18px] font-semibold text-brand-copper">
                <li className="flex items-center gap-3 border-b border-brand-copper/20 pb-3">

                  Solid Electrical Contact Rivets

                </li>
                <li className="flex items-center gap-3 border-b border-brand-copper/20 pb-3">

                  Bimetal & Trimetal Electrical Contact Rivets
                </li>
                <li className="flex items-center gap-3 border-b  pb-3">

                  Stamped Contact Assemblies
                </li>
                <li className="flex items-center gap-3 border-b border-brand-copper/20 pb-3">

                  Silver Alloys & Wires
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VISION & MISSION (PREMIUM LIGHT SYSTEM) ================= */}
      <section className="py-24 bg-[#FEFEFD] text-brand-copper px-4 sm:px-6 lg:px-8 border-b border-brand-copper/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Vision */}
          <div className="p-8 md:p-12 bg-gray-200 border border-brand-copper/20 rounded-3xl space-y-6 relative group hover:border-brand-copper/50 transition-all duration-300 text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-copper/10 border border-brand-copper/30 flex items-center justify-center text-brand-copper text-xl">
              👁
            </div>
            <h3 className="text-xl font-extrabold text-brand-copper tracking-tight">OUR VISION</h3>
            <p className="text-[16px] sm:text-[18px] text-brand-copper leading-relaxed font-light">
              To be  recognized by elite industrial consortia as the definitive engineering partner for customized, high-stress electrical contact solutions—setting definitive benchmarks for microstructural integrity, advanced metallurgy, and sustainable, resilient supply chain integration.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 md:p-12 bg-gray-200 border border-brand-copper/20 rounded-3xl space-y-6 relative group hover:border-brand-copper/50 transition-all duration-300 text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-copper/10 border border-brand-copper/30 flex items-center justify-center text-brand-copper text-xl">
              🎯
            </div>
            <h3 className="text-xl font-extrabold text-brand-copper tracking-tight">OUR MISSION</h3>
            <p className="text-[16px] sm:text-[18px] text-brand-copper leading-relaxed font-light">
              To accelerate  electrification and automation by engineering  cadmium-free electrical contacts that deliver unparalleled conductivity, structural thermal stability, and operational longevity, while strictly executing a closed-loop circular economy for precious metals.
            </p>
          </div>

        </div>
      </section>

      {/* ================= MANUFACTURING INFRASTRUCTURE (PREMIUM LIGHT SYSTEM) ================= */}
      <section className="relative py-28 overflow-hidden px-4 sm:px-6 lg:px-8 border-y border-brand-copper/30">
        <div className="absolute inset-0 bg-gray-200"></div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          {/* Header */}
          <div className="text-left space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-copper/30 bg-brand-copper/5">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-brand-copper shadow-[0_0_8px_rgba(200,125,85,0.8)]"></span> */}
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-copper-dark">
                Our Infrastructure
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-copper">Manufacturing Capabilities</h3>
            <p className="text-brand-copper text-[16px] font-light max-w-xl">
              Metalnova uses advanced precision technologies to manufacture high-conductivity components with absolute uniformity.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="group p-8 bg-[#FEFEFD]/90 border border-brand-copper/30 hover:border-brand-copper/60 hover:bg-white rounded-3xl transition-all duration-300 shadow-md text-left space-y-4">
              <h5 className="font-extrabold text-brand-copper text-base tracking-wide group-hover:text-brand-copper transition-colors">
                Advanced Cold-Heading
              </h5>
              <p className="text-[16px] text-brand-copper leading-relaxed font-light">
                Utilizing speed cold-heading machines to shape rivet heads and shanks with micron-level dimensional repeatability.
              </p>
            </div>

            <div className="group p-8 bg-[#FEFEFD]/90 border border-brand-copper/30 hover:border-brand-copper/60 hover:bg-white rounded-3xl transition-all duration-300 shadow-md text-left space-y-4">
              <h5 className="font-extrabold text-brand-copper text-base tracking-wide group-hover:text-brand-copper transition-colors">
                Precision Cladding & Fusion
              </h5>
              <p className="text-[16px] text-brand-copper leading-relaxed font-light">
                pressure bonding systems to combine fine silver layer faces with conductivity copper backings without any void voids.
              </p>
            </div>

            <div className="group p-8 bg-[#FEFEFD]/90 border border-brand-copper/30 hover:border-brand-copper/60 hover:bg-white rounded-3xl transition-all duration-300 shadow-md text-left space-y-4">
              <h5 className="font-extrabold text-brand-copper text-base tracking-wide group-hover:text-brand-copper transition-colors">
                Drawing & Wire Calibration
              </h5>
              <p className="text-[16px] text-brand-copper leading-relaxed font-light">
                Precision wire drawing dyes calibrating silver alloy, copper, and composite wires down to exact micro-scale diameters.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= QUALITY COMMITMENT (PREMIUM LIGHT SYSTEM) ================= */}
      <section className="py-24 bg-[#FEFEFD] text-brand-copper px-4 sm:px-6 lg:px-8 border-b border-brand-copper/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <p className="text-[16px] font-bold uppercase tracking-[0.2em] text-brand-copper">Zero Defect Integrity</p>
            <h4 className="text-3xl sm:text-4xl font-extrabold text-brand-copper tracking-tight">Quality Commitment</h4>
            <p className="text-brand-copper text-[16px] leading-relaxed font-light">
              Quality is not just a certification—it's built directly into our manufacturing sequence. We inspect 100% of our precious metal inputs and perform structural shear testing on bimetallic joints to ensure maximum mechanical strength under severe electrical arcs.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white/90 border border-brand-copper/30 px-3.5 py-1.5 rounded-full shadow-xs">

                <span className="text-[16px] font-semibold text-brand-copper-dark">RoHS Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 border border-brand-copper/30 px-3.5 py-1.5 rounded-full shadow-xs">

                <span className="text-[16px] font-semibold text-brand-copper-dark">Cadmium-Free</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 border border-brand-copper/30 px-3.5 py-1.5 rounded-full shadow-xs">

                <span className="text-[16px] font-semibold text-brand-copper-dark">CE Standards</span>
              </div>
            </div>
          </div>

          {/* Right Process Steps */}
          <div className="lg:col-span-6 space-y-4">
            {[
              { title: 'Microstructural Inspection', desc: 'Ensuring zero bonding gaps at the silver-copper interface.' },
              { title: 'Hardness Profiling', desc: 'Verifying head stiffness and shank flexibility for perfect switchgear assemblies.' },
              { title: 'Electrical Conductivity Verification', desc: 'Testing silver alloy compositions (e.g. AgNi10, AgSnO₂) to match precise IACS specs.' }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-gray-200 border border-brand-copper/20 rounded-2xl flex items-start gap-4 shadow-sm text-left">
                <span className="text-brand-copper font-extrabold text-[16px] mt-0.5">0{i + 1}</span>
                <div className="space-y-1">
                  <p className="text-[16px] font-bold text-brand-copper uppercase tracking-wider">{item.title}</p>
                  <p className="text-[16px] text-brand-copper leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE METALNOVA (PREMIUM LIGHT SYSTEM) ================= */}
      <section className="relative py-28 px-4 bg-gray-200 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            {/* <p className="text-[16px] font-bold uppercase tracking-[0.2em] text-brand-copper">Partnership Value</p> */}
            <h4 className="text-3xl font-extrabold text-brand-copper">Why Choose Us</h4>
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 h-[1px] text-brand-copper"></span>
              <span className="w-1.5 h-1.5 rotate-45 bg-brand-copper"></span>
              <span className="w-12 h-[1px] text-brand-copper"></span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Precision Performance',
                desc: 'At Metalnova, every electrical contact rivet is engineered with micron-level accuracy using advanced cold-heading technology. This ensures consistent dimensions and superior conductivity.'
              },
              {
                title: 'Advanced Metallurgy',
                desc: 'We specialize in the fusion of precious and non-ferrous metals, including high-purity OFHC Copper. Our expertise allows us to manufacture Solid, Bimetal, and Tri-metal rivets.'
              },
              {
                title: 'Uncompromising Quality',
                desc: 'Quality is not just a process — it’s a commitment. With ISO 9001:2015 certification, CE marking, and RoHS compliance, every batch meets  safety standards.'
              },
              {
                title: 'Sustainable Solutions',
                desc: 'Our focus on eco-friendly materials like Silver-Tin-Oxide (AgSnO₂) and Silver-Nickel (AgNi) ensures  while eliminating hazardous cadmium substances.'
              }
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-gray-200 border border-brand-copper/30 hover:border-brand-copper/60 rounded-2xl transition-all duration-300 text-left space-y-3 shadow-md">
                <span className="text-brand-copper-dark font-bold text-[16px]">✓ 0{i + 1}</span>
                <h5 className="font-extrabold text-brand-copper text-[16px] tracking-widest uppercase leading-snug">{item.title}</h5>
                <p className="text-[15px] text-brand-copper leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
