require('dotenv').config();
const app = require('./src/app');
const { connectDatabase } = require('./src/config/database');
const { Category, Product } = require('./src/models');
const PORT = process.env.PORT || 5000;

// Seed Data Function
async function seedDatabase() {
  try {
    const categoryCount = await Category.countDocuments();
    if (categoryCount > 0) {
      console.log('Database already has categories. Skipping seeding...');
      return;
    }

    console.log('Database empty. Seeding initial categories and products...');

    // 1. Initial Categories
    const categoriesSeed = [
      { id: 'solid-rivets', name: 'Solid Rivets' },
      { id: 'wires', name: 'Silver Alloy & Copper Wires' },
      { id: 'trimetal-rivets', name: 'Bimetal/Trimetal contact rivets' },
      { id: 'contact-tips', name: 'Contact Tips' },
      { id: 'contact-assemblies', name: 'Contact Assemblies' },
      { id: 'clad-strips', name: 'Clad Strips | Contact' }
    ];

    const categoryMap = {};
    for (const cat of categoriesSeed) {
      const dbCat = new Category({ name: cat.name });
      await dbCat.save();
      categoryMap[cat.id] = dbCat._id.toString(); // Save mongoose ID mapped to static ID
    }

    // 2. Initial Products
    const productsSeed = [
      {
        categoryId: 'solid-rivets',
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
        categoryId: 'wires',
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
        categoryId: 'trimetal-rivets',
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
        categoryId: 'contact-tips',
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
        categoryId: 'contact-assemblies',
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
        categoryId: 'clad-strips',
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

    for (const prod of productsSeed) {
      const dbProd = new Product({
        ...prod,
        categoryId: categoryMap[prod.categoryId] // Map static category key to real mongoose category ID
      });
      await dbProd.save();
    }

    console.log('Database successfully seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

connectDatabase()
  .then(async () => {
    console.log('Successfully connected to MongoDB Atlas');
    await seedDatabase();
    if (!process.env.VERCEL) {
      app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });
    }
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

module.exports = app;
