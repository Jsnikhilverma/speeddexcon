/**
 * Speeddex Construction - Services Portfolio Master Data
 * Comprehensive data driving both Services Hub and Dynamic Service Detail Pages.
 * All specs, pricing, and technical scopes grounded in Central Indian construction standards.
 */

export const servicesData = [
  {
    id: "turnkey-construction",
    slug: "turnkey-construction",
    title: "Turnkey Home & Villa Construction",
    shortTitle: "Turnkey Construction",
    category: "Residential",
    tag: "Most Popular",
    projectType: "RESIDENTIAL",
    priceRange: "₹1,650 – ₹2,450 / sq. ft.",
    duration: "9 – 14 Months",
    image: "/images/project-residential.jpg",
    clientType: "Homeowners, NRIs, and land developers seeking single-point accountability.",
    metaTitle: "Turnkey Home & Villa Construction in Indore & Central MP | Speeddex",
    metaDescription: "End-to-end turnkey house construction in Indore. Zero cost overruns, 440+ quality inspections, 10-year structural warranty, and daily WhatsApp tracking.",
    headline: "Build Your Dream Home With Zero Headaches, Locked-In Pricing, and Complete Engineering Transparency.",
    description: "Complete hassle-free construction from empty land to ready-to-move-in home. We manage architecture, municipal approvals, civil framing, premium finishes, and handover under a single fixed-price contract.",
    highlights: [
      "Complete design-to-handover under a single contract",
      "Zero cost escalation guarantee with locked BOQ",
      "440-point quality audit & 10-year structural warranty",
      "Daily WhatsApp photographic progress reports"
    ],
    
    // Section 3: Typical Customer Problems & Speeddex Counter-Solutions
    painPoints: [
      {
        problem: "Unpredictable Cost Escalations Mid-Way",
        solution: "Locked-In Itemized BOQ: The agreed total cost is legally binding. Unless you expand built-up area or change finishes, you pay zero extra rupees.",
      },
      {
        problem: "Exhausting Coordination of Multiple Vendors & Thekedars",
        solution: "Single-Point Accountability: Speeddex employs the architects, structural engineers, masons, plumbers, and electricians under one responsible roof.",
      },
      {
        problem: "Compromised Rebar & Cement Adulteration",
        solution: "Direct Mill Procurement: Original manufacturer invoices and NABL lab test slips for Tata Tiscon Fe550D and UltraTech PPC supplied directly to you.",
      },
      {
        problem: "Lack of Remote Visibility for NRIs and Busy Professionals",
        solution: "Daily Digital Progress: Dedicated WhatsApp group with daily high-res photos, drone flyovers, and material testing slips.",
      },
    ],

    // Section 4: Detailed Scope of Work
    detailedScope: [
      {
        category: "Substructure & Foundation",
        items: [
          "Borehole soil bearing capacity (SBC) investigation up to 6–10 meters",
          "Deep under-reamed pile or reinforced raft foundation designed for Black Cotton soil",
          "Anti-termite chemical soil barrier treatment with multi-year warranty certificate",
          "RCC plinth beam casting with heavy vibratory compaction and damp-proof course (DPC)",
        ],
      },
      {
        category: "Superstructure & Framing",
        items: [
          "Machine-batched M20/M25 concrete framing with 100% cover block placement",
          "Tata Tiscon Fe550D rebar tying with 18-gauge binding wire",
          "High-density fly-ash or red-clay brick masonry with RCC lintel tie-bands",
          "150mm concrete test cubes cast for 7 and 28-day laboratory compressive testing",
        ],
      },
      {
        category: "MEP & Waterproofing",
        items: [
          "Concealed Astral CPVC hot/cold water supply and heavy PVC drainage piping",
          "24-hour hydrostatic 10-bar pressure holding test before plaster concealment",
          "Havells / Polycab FRLS insulated copper wiring in rigid heavy-duty conduits",
          "3-layer polymer elastomeric waterproofing across sunken bathrooms and terrace slabs",
        ],
      },
      {
        category: "Finishing & Handover",
        items: [
          "Vitrified double-charge tiles or Italian marble flooring with mirror polishing",
          "Jaquar / Kohler sanitaryware and quarter-turn chrome brass fittings",
          "Asian Paints Apex Ultima exterior weather-shield with 10-year color warranty",
          "440-point formal snag-list audit, deep cleaning, and 10-Year Warranty deed handover",
        ],
      },
    ],

    // Section 5: Deliverables, Inclusions, Exclusions, Customer Responsibilities
    deliverables: [
      "Geo-technical soil investigation report",
      "Full architectural, 3D elevation & structural CAD blueprints package",
      "NABL laboratory concrete cube test certificates",
      "24-hour plumbing hydrostatic pressure testing log",
      "10-Year Structural & 5-Year Waterproofing Legal Warranty Deed",
      "Complete set of as-built architectural & MEP conduit drawings",
    ],
    inclusions: [
      "Soil bearing capacity (SBC) testing and architectural CAD drawings",
      "All structural materials (Tata steel, UltraTech cement, crushed sand, river sand)",
      "Plumbing (Astral CPVC Pro) and electrical (Havells FRLS cabling)",
      "Premium vitrified / Italian marble flooring and sanitary fixtures",
      "Interior & exterior painting (Asian Paints Apex Ultima)",
      "10-Year Structural and 5-Year Waterproofing Warranty Deed",
    ],
    exclusions: [
      "Government municipal sanction fees & property registration taxes (charged at actuals)",
      "Interior loose furniture, chandeliers, and home automation (optional add-on)",
      "Temporary power & water supply meter installation fees",
    ],
    customerResponsibilities: [
      "Providing clear, undisputed plot possession free of legal encumbrances",
      "Arranging temporary construction electricity and water supply at site boundary",
      "Timely selection of customizable finish samples (tile patterns, paint shades, sanitary models)",
      "Releasing milestone payments within 5 working days of physical site verification",
    ],

    // Section 6: Planning, Engineering & Execution Workflow
    planningAndEngineering: [
      {
        title: "STAAD.Pro Seismic & Wind Structural Modeling",
        detail: "Every home is digitally modeled to withstand Zone III seismic vibrations and localized wind pressures as per IS 1893:2016.",
      },
      {
        title: "Black Cotton Foundation Design",
        detail: "Engineered under-reamed pile foundations penetrating deep past the active moisture zone to prevent swelling and seasonal cracks.",
      },
      {
        title: "Digital CPM Scheduling",
        detail: "Critical Path Method schedule tracking procurement, concrete curing cycles, and trade handoffs without contractor downtime.",
      },
    ],

    // Section 7: Material Specifications & Quality Checks
    materialsAndQA: [
      { item: "Structural Rebar", spec: "Tata Tiscon 550D Super Ductile", check: "Mill Test Invoice + Ductility elongation inspection" },
      { item: "Cement", spec: "UltraTech Super / PPC", check: "Batch manufacturing date verification (<30 days old)" },
      { item: "Plumbing", spec: "Astral CPVC Pro & Silencio", check: "24-hr 10-bar hydrostatic pressure holding test" },
      { item: "Electrical", spec: "Havells / Polycab FRLS Copper", check: "Megger insulation resistance test & circuit continuity" },
      { item: "Waterproofing", spec: "Fosroc / Dr. Fixit 3-Coat Polymer", check: "48-hour standing water ponding test on terrace & bathrooms" },
    ],

    // Section 8: Indicative Cost Guidance
    indicativePricing: {
      baseRate: "₹1,650 – ₹2,450",
      unit: "per sq. ft. of built-up area",
      disclaimer: "Indicative benchmark for Indore and Central MP based on standard municipal building codes. Final pricing requires on-site geotechnical soil inspection, architectural layout approval, and itemized BOQ agreement.",
      tiers: [
        { name: "Classic Turnkey", rate: "₹1,650/sq.ft", desc: "Durable branded build with vitrified 2x4 tiles, UltraTech cement, and Jaquar fittings." },
        { name: "Premium Luxury", rate: "₹1,950/sq.ft", desc: "Our most popular package with Italian marble living room, teak main door, and Kohler bathware." },
        { name: "Architectural Bespoke", rate: "₹2,450+/sq.ft", desc: "Ultra-luxury custom villas with double-height ceilings, acoustic glass facade, and premium woodwork." },
      ],
    },

    // Section 9: Visual Realistic Timeline
    timelineStages: [
      { step: "01", stage: "Soil Survey, Concept & Sanctions", duration: "Weeks 1 – 4", detail: "Geotechnical borehole testing, 3D architectural modeling, and municipal submission." },
      { step: "02", stage: "Footing, Piles & Plinth Beam", duration: "Weeks 5 – 9", detail: "Substructure excavation, anti-termite barrier, reinforcement cages, and plinth casting." },
      { step: "03", stage: "RCC Columns & Slab Superstructure", duration: "Weeks 10 – 22", detail: "Casting ground and upper floor slabs with concrete cube testing and 21-day curing." },
      { step: "04", stage: "Brick Masonry & Concealed MEP", duration: "Weeks 23 – 32", detail: "Partition walls, electrical conduit chasing, Astral plumbing lines, and hydro-testing." },
      { step: "05", stage: "Plaster, Tiles & Waterproofing", duration: "Weeks 33 – 40", detail: "Double-coat sand face exterior plaster, terrace membrane, and precision marble tiling." },
      { step: "06", stage: "Paint, Fixtures, Snagging & Handover", duration: "Weeks 41 – 46", detail: "Asian Paints Apex Ultima, sanitaryware installation, 440-point snag clearance, and keys." },
    ],

    relevantProjectIds: ["the-monolith-villa", "serene-duplex-estates"],

    // Section 11: Service-Specific FAQs
    faqs: [
      {
        question: "How do you ensure zero cost overruns during turnkey construction?",
        answer: "Before starting work, we draft an exhaustive Bill of Quantities (BOQ) with locked-in material brands (Tata Tiscon, UltraTech, Astral, Havells). The contract price is fixed. You will never pay extra unless you expand your built-up area or request finishes outside the approved scope.",
      },
      {
        question: "Can I choose my own tiles, sanitary fixtures, and paint colors?",
        answer: "Yes, 100%. Our packages include defined per-square-foot allowances (e.g. ₹90/sq.ft for floor tiles, ₹35,000 per bathroom for sanitaryware). You visit our authorized partner showrooms to handpick your favorite designs.",
      },
      {
        question: "How often will I receive progress updates if I don't live in Indore?",
        answer: "Over 35% of our clients are NRIs or outstation professionals. Your dedicated Project Engineer posts daily high-resolution photo logs, material testing slips, and weekly drone flyovers on your private project WhatsApp group.",
      },
      {
        question: "What is your payment structure for turnkey projects?",
        answer: "We follow a 6-stage milestone system linked strictly to verified site progress: (1) Booking 5%, (2) Plinth 15%, (3) Ground Slab 20%, (4) First Slab & Brickwork 25%, (5) Plaster & Tiles 20%, (6) Handover 15%. No advance tranches are billed until prior work is physically verified.",
      },
    ],

    relatedServiceSlugs: [
      "residential-house-construction",
      "civil-and-structural-works",
      "interior-finishing-fitouts",
    ],
  },

  {
    id: "residential-house-construction",
    slug: "residential-house-construction",
    title: "Residential House & Duplex Construction",
    shortTitle: "Residential Houses",
    category: "Residential",
    tag: "Custom Builds",
    projectType: "RESIDENTIAL",
    priceRange: "₹1,550 – ₹2,200 / sq. ft.",
    duration: "8 – 12 Months",
    image: "/images/ban1.jpg",
    clientType: "Individual plot owners constructing custom family houses, duplexes, or independent rental floors.",
    metaTitle: "Residential House & Duplex Construction in Indore | Speeddex",
    metaDescription: "Custom residential home and duplex building in Indore. Tailored room layouts, Vastu compliance, earthquake-resistant RCC framing, and transparent milestone contracts.",
    headline: "Custom Duplex and Independent Homes Designed Around Your Family Lifestyle and Built to Last.",
    description: "Custom residential builds tailored to your family's spatial requirements and budget. Built with strict seismic structural standards and high-grade thermal insulation for Central Indian climates.",
    highlights: [
      "Black Cotton soil engineered under-reamed pile foundation",
      "Custom architectural & Vastu-compliant layout",
      "Tata Tiscon Fe550D & UltraTech PPC execution",
      "Milestone-based stage payments with zero advance risk"
    ],
    
    painPoints: [
      {
        problem: "Vague Architectural Layouts That Waste Precious Floor Space",
        solution: "Vastu & Space Optimization: 3D CAD architectural planning ensuring zero wasted hallway space, maximized carpet area, and cross-ventilation.",
      },
      {
        problem: "Wall Cracks Due to Expansive Black Cotton Soil",
        solution: "Engineered Deep Piling: Custom under-reamed foundation footings bypassing the swelling soil zone, stopping foundation settlement.",
      },
      {
        problem: "Poor Damp-Proofing Causing Paint Peeling Within 2 Years",
        solution: "Multi-Coat Polymer Damp Proofing: Continuous chemical DPC barrier at plinth level and crystalline waterproofing on wet areas.",
      },
    ],

    detailedScope: [
      {
        category: "Civil Architecture & Footings",
        items: [
          "Complete architectural 2D floor plans and 3D daylight exterior elevation",
          "Machine excavation, anti-termite soil treatment, and heavy RCC plinth framing",
          "M20/M25 machine-batched column casting with seismic ductility ties",
          "Kiln-baked brick masonry with cement mortar ratio 1:6",
        ],
      },
      {
        category: "Plumbing, Electrical & Surfaces",
        items: [
          "Astral CPVC water supply lines and UPVC rainwater drainage pipes",
          "Havells FRLS fire-retardant wiring in concealed PVC conduits with modular switch boxes",
          "Internal smooth wall putty with Asian Paints Premium Emulsion",
          "Double-coat sponge finish exterior plaster with weatherproof silicone paint",
        ],
      },
    ],

    deliverables: [
      "Architectural working blueprints and 3D exterior render album",
      "Structural stability certificate signed by chartered civil engineer",
      "Concrete test cube compressive reports",
      "10-Year Structural Guarantee Deed",
    ],
    inclusions: [
      "Foundation excavation and footing with concrete cover blocks",
      "Grade M20/M25 machine-mixed concrete for all slabs and columns",
      "Concealed electrical and plumbing lines with pressure testing",
      "Double-coat sand face exterior plaster with weather-resistant paint",
      "Full digital WhatsApp progress updates with weekly drone footage",
    ],
    exclusions: [
      "Custom decorative false ceilings and custom kitchen cabinets (available in package)",
      "External landscaping and driveway paver blocks (quoted separately)",
    ],
    customerResponsibilities: [
      "Securing land registry, nazul NOC, and municipal boundary demarcation",
      "Timely approval of room layouts before structural casting begins",
      "Providing temporary construction power supply",
    ],

    planningAndEngineering: [
      {
        title: "Vastu-Compliant Spatial Planning",
        detail: "Aligning kitchen in Agni-moola (South-East) and master bedroom in South-West while maximizing natural daylight.",
      },
      {
        title: "Seismic Ductile Detailing",
        detail: "Closely spaced stirrup ties at beam-column junctions as per IS 13920 code to prevent brittle shear failure during earthquakes.",
      },
    ],

    materialsAndQA: [
      { item: "Rebar", spec: "Tata Tiscon 550D / Jindal Panther", check: "Tensile ductility check & mill certificate" },
      { item: "Cement", spec: "UltraTech PPC / Ambuja Kawach", check: "Batch freshness & slump cone flow check" },
      { item: "Pipes", spec: "Astral CPVC Pro", check: "Pressure testing up to 10 kg/cm²" },
    ],

    indicativePricing: {
      baseRate: "₹1,550 – ₹2,200",
      unit: "per sq. ft. of built-up area",
      disclaimer: "Final budget depends on custom plot dimensions, elevation features, and choice of interior tiles and fittings.",
      tiers: [
        { name: "Standard Family Build", rate: "₹1,550/sq.ft", desc: "Reliable structural build with premium vitrified tiles and standard branded bathware." },
        { name: "Luxury Duplex", rate: "₹1,850/sq.ft", desc: "Feature duplex with double-height ceiling, teak main door, and concealed air-con conduits." },
        { name: "Ultra-Bespoke", rate: "₹2,200/sq.ft", desc: "Architectural showpiece with designer facade fins, texture cladding, and high-end marble." },
      ],
    },

    timelineStages: [
      { step: "01", stage: "Survey & Architectural Blueprints", duration: "Weeks 1 – 3", detail: "Finalizing floor plans, 3D elevations, and structural detailing." },
      { step: "02", stage: "Excavation, Piling & Plinth Beam", duration: "Weeks 4 – 8", detail: "Ground excavation, anti-termite chemical barrier, and plinth casting." },
      { step: "03", stage: "RCC Columns, Beams & Slabs", duration: "Weeks 9 – 18", detail: "Casting structural frame with concrete cube testing." },
      { step: "04", stage: "Brickwork, Plaster & MEP Lines", duration: "Weeks 19 – 28", detail: "Internal brick walls, wiring conduits, plumbing lines, and plaster." },
      { step: "05", stage: "Tiling, Painting & Handover", duration: "Weeks 29 – 38", detail: "Flooring, sanitary fitouts, final paint coats, and key handover." },
    ],

    relevantProjectIds: ["serene-duplex-estates", "the-monolith-villa"],

    faqs: [
      {
        question: "Can I make minor floor plan adjustments during construction?",
        answer: "Yes. Minor partition adjustments are accommodated easily during the brickwork stage before concealed electrical conduits are cut.",
      },
      {
        question: "How long does a 2,500 sq ft duplex take from start to possession?",
        answer: "A typical 2,500 sq ft G+1 duplex in Indore requires 9 to 11 months, allowing proper concrete curing intervals and plaster drying.",
      },
    ],

    relatedServiceSlugs: [
      "turnkey-construction",
      "civil-and-structural-works",
      "renovation-and-remodeling",
    ],
  },

  {
    id: "commercial-building-construction",
    slug: "commercial-building-construction",
    title: "Commercial Building & Retail Complexes",
    shortTitle: "Commercial Plazas",
    category: "Commercial",
    tag: "High ROI",
    projectType: "COMMERCIAL",
    priceRange: "₹1,850 – ₹3,200 / sq. ft.",
    duration: "12 – 18 Months",
    image: "/images/hero-tower.jpg",
    clientType: "Commercial investors, retailers, corporate firms, and healthcare facilities.",
    metaTitle: "Commercial Building & Retail Complex Construction | Speeddex",
    metaDescription: "High-yield commercial tower, retail hub, and office construction in Indore. Column-free post-tensioned slabs, Saint-Gobain DGU glass facades, and NBC fire clearance.",
    headline: "Commercial Infrastructure Built for High Footfall, Column-Free Flexibility, and Long-Term Rental Yields.",
    description: "High-traffic commercial spaces, corporate offices, healthcare facilities, and retail complexes engineered for column-free flexibility, heavy floor loads, and statutory NBC fire clearance.",
    highlights: [
      "Post-tensioned (PT) flat slabs for column-free floor plans",
      "NBC fire safety clearance & high-speed elevator integration",
      "Saint-Gobain DGU acoustic glass facade engineering",
      "Heavy 5.0 kN/m² live load floor engineering"
    ],
    
    painPoints: [
      {
        problem: "Cluttered Columns Obstructing Retail Display & Office Leasing",
        solution: "Post-Tensioned (PT) Flat Slabs: Large spans up to 10–12 meters without intermediate columns, maximizing rentable floor area.",
      },
      {
        problem: "High Air Conditioning Power Bills Due to Heat Penetration",
        solution: "Saint-Gobain Low-E Double Glazing: Acoustic and thermal insulated structural glass curtains reducing HVAC load by up to 25%.",
      },
      {
        problem: "Fire Clearance & Nagar Nigam Regulatory Roadblocks",
        solution: "NBC 2016 Integrated Engineering: Dual emergency staircase cores, automated sprinkler grids, and smoke extraction shafts designed upfront.",
      },
    ],

    detailedScope: [
      {
        category: "Substructure & Deep Retention",
        items: [
          "Diaphragm walls or soldier piling with tie-back anchors for multi-level basement excavation",
          "Heavy reinforced raft foundation engineered for G+6 to G+10 structural loads",
          "Crystalline waterproofing slurry coating on basement retaining walls against subterranean water pressure",
        ],
      },
      {
        category: "Tower Frame & Facade Engineering",
        items: [
          "High-strength M35/M40 grade concrete casting for heavy load-bearing core columns",
          "Curtain wall facade with aluminum sub-framing and Saint-Gobain Low-E insulated glazing",
          "High-speed elevator core shafts and multi-level car parking ramp engineering",
          "Dedicated electrical substation transformer yard and diesel generator integration",
        ],
      },
    ],

    deliverables: [
      "Certified structural stability calculation report by chartered civil engineer",
      "NBC-compliant firefighting and life safety CAD layouts",
      "Facade wind-tunnel engineering analysis and deflection certificate",
      "As-built MEP routing diagrams for tenant maintenance",
    ],
    inclusions: [
      "Heavy raft / deep pile foundation engineered for multi-storey loads",
      "Basement retaining walls with crystalline waterproofing against groundwater",
      "Structural steel facade framing and Saint-Gobain energy-efficient glass",
      "HVAC ducting shafts, electrical transformer yards, and diesel generator integration",
      "Assistance in securing Municipal Occupancy Certificate (OC)",
    ],
    exclusions: [
      "Tenant interior fit-outs and retail branding signage",
      "Elevator machinery supply (installed via OTIS/Schindler directly)",
    ],
    customerResponsibilities: [
      "Securing commercial town-planning clearance and commercial electricity transformer sanction",
      "Providing clear right-of-way for heavy boom placer concrete trucks",
    ],

    planningAndEngineering: [
      {
        title: "Post-Tensioned (PT) Concrete Design",
        detail: "High-strength steel strands hydraulically tensioned inside concrete slabs, reducing slab thickness and enabling massive column-free spans.",
      },
      {
        title: "Wind Load & Facade Deflection Analysis",
        detail: "Engineered to withstand cyclonic wind pressures up to 47 m/s as per IS 875 Part 3.",
      },
    ],

    materialsAndQA: [
      { item: "Concrete", spec: "Ready-Mix Concrete (RMC) M35 / M40", check: "Continuous slump and temperature log at truck discharge" },
      { item: "Facade Glass", spec: "Saint-Gobain Low-E DGU 6mm + 12mm Air + 6mm", check: "Thermal U-value and acoustic STC rating certification" },
      { item: "PT Strands", spec: "Low-Relaxation High Tensile 12.7mm", check: "Hydraulic calibration stress and elongation sign-off" },
    ],

    indicativePricing: {
      baseRate: "₹1,850 – ₹3,200",
      unit: "per sq. ft. of built-up area",
      disclaimer: "Pricing varies according to basement depth, facade glazing percentage, and structural span requirements.",
      tiers: [
        { name: "Core & Shell Commercial", rate: "₹1,850/sq.ft", desc: "Heavy RCC structure, basement parking, exterior plaster, and basic MEP shafts." },
        { name: "Standard Retail Hub", rate: "₹2,450/sq.ft", desc: "Includes structural glass facade, common lobby marble flooring, and firefighting grid." },
        { name: "Grade-A Corporate Tower", rate: "₹3,200/sq.ft", desc: "Full Low-E curtain wall, high-speed lift cores, VRV ducting, and power backup integration." },
      ],
    },

    timelineStages: [
      { step: "01", stage: "Soil Piling & Basement Raft", duration: "Months 1 – 4", detail: "Diaphragm walls, deep basement excavation, and heavy raft foundation." },
      { step: "02", stage: "Tower Superstructure Framing", duration: "Months 5 – 10", detail: "Casting post-tensioned floors and central elevator cores." },
      { step: "03", stage: "Curtain Glazing & MEP Grid", duration: "Months 11 – 15", detail: "Structural glass facade, firefighting pipes, electrical substations." },
      { step: "04", stage: "Finishing, Testing & OC Handover", duration: "Months 16 – 18", detail: "Lobbies, ramp pavers, statutory inspections, and Occupancy Certificate." },
    ],

    relevantProjectIds: ["apex-commercial-plaza"],

    faqs: [
      {
        question: "Do you assist in securing Nagar Nigam and Fire NOC approvals?",
        answer: "Yes. Our architectural and civil liaison department prepares all NBC-compliant drawings and coordinates municipal building sanctions and fire department inspection approvals.",
      },
    ],

    relatedServiceSlugs: [
      "civil-and-structural-works",
      "industrial-construction",
      "project-planning-management",
    ],
  },

  {
    id: "industrial-construction",
    slug: "industrial-construction",
    title: "Industrial Plants & PEB Warehouses",
    shortTitle: "Industrial & PEB",
    category: "Industrial",
    tag: "Fast Track",
    projectType: "INDUSTRIAL",
    priceRange: "₹1,250 – ₹1,950 / sq. ft.",
    duration: "6 – 10 Months",
    image: "/images/project-warehouse.jpg",
    clientType: "Logistics companies, manufacturing units, pharmaceutical plants, and industrial estates.",
    metaTitle: "Industrial PEB & Warehouse Construction in Pithampur & Indore | Speeddex",
    metaDescription: "Pre-Engineered Building (PEB) construction, logistics warehouses, and factory sheds in Pithampur & Central MP. Laser-screeded FM2 flooring and heavy crane gantry engineering.",
    headline: "High-Tolerance Pre-Engineered Steel Buildings and Superflat Logistics Warehouses Commissioned on Fast-Track Schedules.",
    description: "Pre-Engineered Steel Buildings (PEB), factory sheds, automated logistics warehouses, and pharmaceutical cleanrooms engineered for rapid commissioning and zero maintenance.",
    highlights: [
      "Pre-Engineered high-tensile 345 MPa steel structures",
      "TR-34 FM2 laser-screeded industrial superflat floors",
      "Standing seam leak-proof 360-degree crimped roofing",
      "MPPCB pollution & factory inspectorate statutory signoffs"
    ],
    
    painPoints: [
      {
        problem: "Uneven Concrete Floors Damaging Automated Forklifts & High Racking",
        solution: "Laser-Screeded Superflat FM2 Flooring: Monolithic concrete floor laid with Somero laser screed and quartz dry-shake hardener, meeting TR34 FM2 standards.",
      },
      {
        problem: "Monsoon Roof Leakages Through Screw Holes in Metal Sheds",
        solution: "360-Degree Standing Seam Galvalume Roofing: Concealed clip fastening system with zero screw punctures exposed to rainfall.",
      },
      {
        problem: "Production Downtime Caused by Inadequate Crane Girder Sizing",
        solution: "Heavy Gantry Beam Design: Custom crane girders engineered up to 25-ton capacity with dynamic deflection calculations.",
      },
    ],

    detailedScope: [
      {
        category: "Civil Substructure & Flooring",
        items: [
          "Heavy vibratory sub-base compaction with WMM and poly-film vapor retarder",
          "Laser-screeded industrial floor slab with steel fiber reinforcement and quartz hardener",
          "Automated power trowelling achieving mirror burnished dust-proof industrial finish",
          "Precision diamond saw-cut contraction joints sealed with high-grade polyurea sealant",
        ],
      },
      {
        category: "PEB Steel Structure & Cladding",
        items: [
          "High-tensile Grade 345/350 MPa steel primary portals with submerged arc welding (SAW)",
          "Corrosion-resistant Galvalume standing seam roof panels with 100% weather-tight seam lock",
          "Polycarbonate skylights providing 10% natural daylight to minimize daytime electric costs",
          "High-volume natural gravity ridge ventilators ensuring continuous factory air exchange",
        ],
      },
    ],

    deliverables: [
      "PEB structural fabrication and erection sign-off certificate",
      "TR34 FM2 laser profilometer floor flatness test report",
      "Mill test certificates for high-tensile steel plates and roofing coils",
      "Factory Inspectorate and Fire Department compliance file",
    ],
    inclusions: [
      "Site levelling, sub-grade compaction, and heavy anchor bolt grouting",
      "PEB primary and secondary steel framing fabrication and crane erection",
      "FM2 industrial concrete floor with steel fiber reinforcement and hardener",
      "Polycarbonate daylight roof panels and automated ridge gravity ventilators",
      "External heavy-duty concrete apron roads and storm drainage network",
    ],
    exclusions: [
      "Internal processing machinery and production electricals",
      "Custom fire suppression gas systems for sensitive server/pharma areas",
    ],
    customerResponsibilities: [
      "Securing industrial land allocation (MPIDC / AKVN) and factory electricity load sanction",
      "Clear heavy transport access for 40-foot flatbed steel trailers",
    ],

    planningAndEngineering: [
      {
        title: "MBS / STAAD PEB Design Optimization",
        detail: "Tapered built-up primary frames engineered to match internal bending moments, saving up to 25% steel weight while maintaining structural safety.",
      },
      {
        title: "Superflat FM2 Floor Tolerance",
        detail: "Designed to meet UK Concrete Society Technical Report 34 (TR34) standards for high-density very narrow aisle (VNA) racking systems.",
      },
    ],

    materialsAndQA: [
      { item: "PEB Steel", spec: "High-Tensile 345 MPa Plates (Tata Bluescope / JSW)", check: "Ultrasonic weld flaw test & tensile yield certificates" },
      { item: "Industrial Floor", spec: "Design Mix M30 with Steel Fibers", check: "Laser profilometer flatness audit & abrasion resistance test" },
      { item: "Roof Cladding", spec: "0.55mm Bare Galvalume AZ150 GSM", check: "360-degree mechanical seaming & water hose test" },
    ],

    indicativePricing: {
      baseRate: "₹1,250 – ₹1,950",
      unit: "per sq. ft. of covered floor area",
      disclaimer: "Costs depend on clear eaves height (e.g. 9m vs 12m), crane girder tonnage capacity, and dock leveler requirements.",
      tiers: [
        { name: "Standard Storage Warehouse", rate: "₹1,250/sq.ft", desc: "PEB shed with standard industrial floor and natural ridge ventilation." },
        { name: "Logistics Terminal (FM2 Floor)", rate: "₹1,550/sq.ft", desc: "Superflat laser-screeded floor, standing seam roof, and multiple loading bays." },
        { name: "Heavy Engineering Plant", rate: "₹1,950/sq.ft", desc: "Reinforced for 20T overhead crane gantry, reinforced foundation, and heavy power grid." },
      ],
    },

    timelineStages: [
      { step: "01", stage: "Site Grading, Footings & Anchor Bolts", duration: "Weeks 1 – 6", detail: "Ground grading, pile footings, and high-precision anchor bolt positioning." },
      { step: "02", stage: "PEB Steel Erection & Roofing", duration: "Weeks 7 – 16", detail: "Crane-assisted portal frame erection, purlin bolting, and standing seam roof installation." },
      { step: "03", stage: "Laser Screed Industrial Flooring", duration: "Weeks 17 – 24", detail: "Sub-base compaction, laser screed pouring, power trowelling, and joint cutting." },
      { step: "04", stage: "Cladding, Docks & Commissioning", duration: "Weeks 25 – 32", detail: "Wall sheeting, dock levelers, apron roads, and final handover." },
    ],

    relevantProjectIds: ["pithampur-logistics-terminal"],

    faqs: [
      {
        question: "Why is a standing seam roof better than screw-down sheeting?",
        answer: "Screw-down roofs require thousands of rubber-washer screws punctured into the metal. Over 2 to 3 summer-monsoon thermal cycles, these screws loosen, causing persistent roof leaks. Standing seam roofs use concealed sliding clips with zero exposed punctures, guaranteeing 100% leak-free longevity.",
      },
    ],

    relatedServiceSlugs: [
      "commercial-building-construction",
      "civil-and-structural-works",
      "project-planning-management",
    ],
  },

  {
    id: "civil-and-structural-works",
    slug: "civil-and-structural-works",
    title: "Civil & Heavy Structural Works",
    shortTitle: "Civil & Structural",
    category: "Engineering",
    tag: "Core Engineering",
    projectType: "RESIDENTIAL",
    priceRange: "₹950 – ₹1,350 / sq. ft.",
    duration: "4 – 8 Months",
    image: "/images/project-bridge.jpg",
    clientType: "Developers and property owners requiring core grey structure execution (skeleton only).",
    metaTitle: "Civil & Heavy Structural Works in Indore & Central MP | Speeddex",
    metaDescription: "Core civil frame and grey structure construction in Indore. High-strength RCC, under-reamed piling, shear walls, and certified civil supervision.",
    headline: "Unshakeable Structural Foundations and High-Strength Concrete Framing Engineered to National Building Codes.",
    description: "Heavy civil engineering covering earth retention, bored pile foundations, multi-tier shear walls, retaining structures, and high-strength concrete framing without finishing.",
    highlights: [
      "STAAD.Pro IS 1893:2016 Zone III seismic modeling",
      "Machine-batched M25/M30 concrete with 100% cover block placement",
      "NABL laboratory 7 & 28-day concrete cube compressive tests",
      "Under-reamed bulb pile foundations in Black Cotton soil"
    ],
    
    painPoints: [
      {
        problem: "Inadequate Rebar Concrete Cover Leading to Premature Rusting",
        solution: "Factory-Molded PVC Cover Blocks: 100% placement of certified 25mm–50mm cover blocks ensuring steel never touches shuttering.",
      },
      {
        problem: "Honeycombing and Voids in Cast Concrete Columns",
        solution: "Needle Vibrator Compaction: High-frequency mechanical vibrators operated under civil engineer oversight to eliminate all air voids.",
      },
    ],

    detailedScope: [
      {
        category: "Substructure & Excavation",
        items: [
          "Topographical site survey, layout grid marking with total station instruments",
          "Machine excavation, chemical anti-termite barrier, and PCC mud matting",
          "Under-reamed bulb piling or raft foundations according to geotechnical soil report",
        ],
      },
      {
        category: "RCC Superstructure & Masonry",
        items: [
          "M25/M30 machine-mixed concrete casting for columns, beams, lintels, and slabs",
          "Tata Tiscon Fe550D rebar bending and tying strictly matching structural bar bending schedules (BBS)",
          "Plywood film-faced shuttering for pin-drop straight architectural concrete lines",
          "Red clay or autoclaved aerated concrete (AAC) block masonry with cement plaster",
        ],
      },
    ],

    deliverables: [
      "Bar bending schedules (BBS) and structural CAD documentation",
      "Concrete compressive strength laboratory cube test reports",
      "Structural stability sign-off by licensed chartered structural engineer",
    ],
    inclusions: [
      "Piling, deep footing excavation, and backfilling with vibratory compaction",
      "Full RCC frame (columns, beams, shear walls, lintels, and slabs)",
      "High-density fly-ash or red-clay brick masonry",
      "Internal and external rough and finish plastering",
      "Curing protocols adhering strictly to 21-day ponding guidelines",
    ],
    exclusions: [
      "Flooring tiles, sanitary fittings, electrical wires, and finish paints",
      "Doors, windows, and interior cabinetry",
    ],
    customerResponsibilities: [
      "Clear plot access and boundary demarcation",
      "Arrangement of continuous construction water for concrete curing",
    ],

    planningAndEngineering: [
      {
        title: "Bar Bending Schedule (BBS) Precision",
        detail: "Zero on-site steel lap wastage through computerized BBS optimization, preventing structural weakness at high-stress moments.",
      },
    ],

    materialsAndQA: [
      { item: "Rebar", spec: "Tata Tiscon 550D / Jindal 550D", check: "Yield tensile stress test certs" },
      { item: "Cement", spec: "UltraTech 53 Grade OPC / PPC", check: "Chemical soundness and fineness check" },
    ],

    indicativePricing: {
      baseRate: "₹950 – ₹1,350",
      unit: "per sq. ft. of built-up area",
      disclaimer: "Covers complete civil frame, brickwork, and plaster. Does not include interior finishes, tiles, or paint.",
      tiers: [
        { name: "Standard Civil Frame", rate: "₹950/sq.ft", desc: "RCC structure with brickwork and external rough plaster." },
        { name: "Heavy Structural Frame", rate: "₹1,150/sq.ft", desc: "Includes deep under-reamed piling, retaining walls, and double-coat plaster." },
        { name: "Commercial High-Strength", rate: "₹1,350/sq.ft", desc: "High-grade M35 concrete, post-tensioned slab readiness, and shear walls." },
      ],
    },

    timelineStages: [
      { step: "01", stage: "Site Layout & Footings", duration: "Weeks 1 – 5", detail: "Excavation, anti-termite, and footing casting." },
      { step: "02", stage: "Plinth & Columns", duration: "Weeks 6 – 10", detail: "Plinth beam, DPC, and ground floor columns." },
      { step: "03", stage: "RCC Slabs & Staircases", duration: "Weeks 11 – 18", detail: "Slab shuttering, rebar tying, concrete pouring, and curing." },
      { step: "04", stage: "Masonry & Plaster", duration: "Weeks 19 – 26", detail: "Brick walls and double-coat sand face plaster." },
    ],

    relevantProjectIds: ["the-monolith-villa", "apex-commercial-plaza"],

    faqs: [
      {
        question: "Can I hire Speeddex for civil grey structure only and do finishes myself?",
        answer: "Yes. Our Civil & Heavy Structural Works service is specifically designed for clients who prefer managing their own interior finishes while trusting Speeddex for a 100% earthquake-safe structural skeleton.",
      },
    ],

    relatedServiceSlugs: [
      "turnkey-construction",
      "residential-house-construction",
      "renovation-and-remodeling",
    ],
  },

  {
    id: "renovation-and-remodeling",
    slug: "renovation-and-remodeling",
    title: "Structural Renovation & Remodeling",
    shortTitle: "Renovation & Remodel",
    category: "Renovation",
    tag: "Transformation",
    projectType: "RENOVATION",
    priceRange: "₹750 – ₹1,600 / sq. ft.",
    duration: "3 – 6 Months",
    image: "/images/about-facade.jpg",
    clientType: "Owners of existing homes, ancestral properties, or commercial spaces seeking a modern revival.",
    metaTitle: "Structural Renovation & Home Remodeling in Indore | Speeddex",
    metaDescription: "Professional house remodeling and structural renovation in Indore. Column jacketing for floor additions, complete MEP replacement, and modern facade revamps.",
    headline: "Transform Older Structures With Scientific Column Jacketing, Modern Facades, and Complete Infrastructure Rejuvenation.",
    description: "Safely upgrading older structures, adding additional floors, column jacketing, interior floor plan optimization, waterproofing renewal, and modern elevation transformations.",
    highlights: [
      "Non-destructive structural health assessment (NDT)",
      "Micro-concrete column jacketing for safe additional floors",
      "Complete plumbing & electrical rewire with pressure testing",
      "Modern facade revamp with exterior thermal insulation"
    ],
    
    painPoints: [
      {
        problem: "Risk of Structural Collapse When Adding a New Floor to an Old House",
        solution: "Non-Destructive Testing (NDT) & Column Jacketing: Rebound hammer tests followed by micro-concrete column strengthening before any new slab is poured.",
      },
      {
        problem: "Hidden Leaks and Corroded Concealed GI Pipes Behind Old Tiles",
        solution: "100% Core MEP Replacement: Complete stripping and replacement of vintage plumbing with pressure-tested Astral CPVC lines.",
      },
    ],

    detailedScope: [
      {
        category: "Structural Audit & Strengthening",
        items: [
          "Ultrasonic pulse velocity (UPV) and rebound hammer structural integrity testing",
          "Column and beam jacketing with high-strength micro-concrete and shear connectors",
          "Selective micro-demolition with heavy steel shoring propping up overhead slabs",
        ],
      },
      {
        category: "Interior Modernization & Facade",
        items: [
          "Complete bathroom and kitchen overhaul with modern waterproofing membranes",
          "Contemporary exterior facade makeover using HPL panels, stone louvers, and texture paint",
          "Complete rewiring with Havells FRLS conductors and modern MCB distribution boards",
        ],
      },
    ],

    deliverables: [
      "Pre-renovation structural health audit report",
      "Micro-concrete jacketing load-enhancement certificate",
      "Waterproofing deed for refurbished terraces and wet areas",
    ],
    inclusions: [
      "Selective precision demolition with structural steel propping and debris removal",
      "Structural member strengthening and seismic retrofitting",
      "Complete replumbing, rewiring, and bathroom/terrace waterproofing",
      "New floor tiling, door frames, aluminum windows, and fresh paint",
    ],
    exclusions: [
      "Municipal compounding fees for unauthorized historical expansions",
      "Hazardous material remediation (asbestos sheet disposal)",
    ],
    customerResponsibilities: [
      "Vacating renovation zones during structural demolition and jacketing",
      "Clear approval of electrical points and plumbing layouts upfront",
    ],

    planningAndEngineering: [
      {
        title: "Non-Destructive Structural Health Audit",
        detail: "Evaluating core concrete compressive strength and carbonation depth without damaging existing columns.",
      },
    ],

    materialsAndQA: [
      { item: "Micro-Concrete", spec: "Fosroc Renderoc RG / SikaGrout", check: "Shrinkage-free flowability & compressive strength" },
      { item: "Waterproofing", spec: "Polyurethane 3-Coat System", check: "Flood ponding test for 72 hours" },
    ],

    indicativePricing: {
      baseRate: "₹750 – ₹1,600",
      unit: "per sq. ft. of renovated area",
      disclaimer: "Final renovation quote requires an in-person site structural inspection and non-destructive testing.",
      tiers: [
        { name: "Surface & MEP Overhaul", rate: "₹750/sq.ft", desc: "Fresh tiling, replumbing, rewiring, and modern paint." },
        { name: "Complete Spatial Remodel", rate: "₹1,150/sq.ft", desc: "Wall reconfiguration, designer bathrooms, false ceilings, and facade revamp." },
        { name: "Structural Jacketing & Floor Addition", rate: "₹1,600/sq.ft", desc: "Reinforced column strengthening, new upper slab, and complete modernization." },
      ],
    },

    timelineStages: [
      { step: "01", stage: "Structural Audit & NDT Testing", duration: "Weeks 1 – 2", detail: "Assessing existing columns and foundation bearing capacity." },
      { step: "02", stage: "Shoring & Controlled Demolition", duration: "Weeks 3 – 5", detail: "Propping structural slabs and selective micro-demolition." },
      { step: "03", stage: "Column Jacketing & MEP Overhaul", duration: "Weeks 6 – 12", detail: "Enlarging column sections with micro-concrete and running new piping." },
      { step: "04", stage: "Tiles, Facade & Handover", duration: "Weeks 13 – 18", detail: "New flooring, exterior elevation cladding, and final detailing." },
    ],

    relevantProjectIds: ["about-facade", "serene-duplex-estates"],

    faqs: [
      {
        question: "Can I add a second floor to a 20-year-old house safely?",
        answer: "Yes, provided a structural audit confirms column capacity. If existing columns are undersized, we perform steel or micro-concrete column jacketing to safely transfer the additional floor's load down to the foundation.",
      },
    ],

    relatedServiceSlugs: [
      "residential-house-construction",
      "civil-and-structural-works",
      "interior-finishing-fitouts",
    ],
  },

  {
    id: "interior-finishing-fitouts",
    slug: "interior-finishing-fitouts",
    title: "Interior Finishing & Architectural Fitouts",
    shortTitle: "Interior Finishing",
    category: "Finishing",
    tag: "Luxury Detail",
    projectType: "INTERIOR",
    priceRange: "₹650 – ₹1,800 / sq. ft.",
    duration: "2 – 4 Months",
    image: "/images/news-green-building.jpg",
    clientType: "Homeowners with completed civil structure who demand flawless luxury finishes.",
    metaTitle: "Luxury Interior Finishing & Fitouts in Indore | Speeddex",
    metaDescription: "Precision interior finishing in Indore. Italian marble laying, gypsum false ceilings, modular woodwork, and premium bathware fitouts.",
    headline: "Architectural Interior Fitouts With Flawless Marble Laying, Acoustic Ceilings, and Custom Millwork.",
    description: "High-precision architectural finishes including Italian marble laying and diamond polishing, acoustic false ceilings, designer modular kitchens, and custom woodwork.",
    highlights: [
      "Zero-lippage Italian marble laying with 7-step diamond polish",
      "Saint-Gobain acoustic gypsum false ceilings with shadow lines",
      "BWR marine-grade modular woodwork with European soft-close hardware",
      "Jaquar & Kohler luxury sanitaryware installation & pressure testing"
    ],
    
    painPoints: [
      {
        problem: "Uneven Marble Joints (Liipage) and Dull Polishing",
        solution: "Zero-Lip Epoxy Laying & Diamond Polishing: Precision calibration with tile levelers followed by 7-step Italian diamond grit polishing.",
      },
      {
        problem: "Termite Attack and Swelling in Kitchen Cabinets",
        solution: "Moisture-Proof HDHMR & Marine Plywood: 100% boiling-water-resistant (BWR) and termite-proof boards with European Blum hardware.",
      },
    ],

    detailedScope: [
      {
        category: "Flooring & Wall Cladding",
        items: [
          "Sub-floor self-levelling screed to guarantee laser-straight horizontal planes",
          "Italian marble / large format 800x1600mm vitrified tile dry-lay and book-match alignment",
          "Polyester resin and epoxy joint filling preventing dust accumulation",
        ],
      },
      {
        category: "Ceilings, Woodwork & Painting",
        items: [
          "Gyproc Saint-Gobain moisture-resistant plasterboard false ceilings with concealed cove channels",
          "Modular kitchen and wardrobes using Action TESA HDHMR boards with soft-close Blum hinges",
          "Asian Paints Royale luxury emulsion with velvet-touch finish and zero VOC emissions",
        ],
      },
    ],

    deliverables: [
      "3D photorealistic interior renders and material schedule",
      "Tile and marble batch calibration layout map",
      "Hardware manufacturer warranty cards (Blum / Hafele / Jaquar)",
    ],
    inclusions: [
      "Precision floor screeding and sub-floor self-levelling",
      "Marble/tile supply and master mason dry-lay installation",
      "False ceiling framing, putty, primer, and luxury velvet-touch paint",
      "Custom electrical switches, designer spotlights, and bathroom vanity mirrors",
    ],
    exclusions: [
      "Loose soft furnishings (curtains, mattresses, movable sofas)",
      "High-end art pieces and indoor live landscaping",
    ],
    customerResponsibilities: [
      "Selection and approval of marble lots at partner stockyards",
      "Access permissions for interior craftsman crews",
    ],

    planningAndEngineering: [
      {
        title: "Dry-Lay Marble Book-Matching",
        detail: "Laying out Italian marble slabs on warehouse floor to align veins before adhesive is mixed.",
      },
    ],

    materialsAndQA: [
      { item: "Adhesives", spec: "Laticrete / Roff Epoxy", check: "100% solid bed contact without hollow sound" },
      { item: "Ceilings", spec: "Gyproc Saint-Gobain 12.5mm", check: "Laser level alignment & tape-joint crack check" },
    ],

    indicativePricing: {
      baseRate: "₹650 – ₹1,800",
      unit: "per sq. ft. of floor area",
      disclaimer: "Pricing depends on selection of imported marble vs vitrified tiles and extent of custom woodwork.",
      tiers: [
        { name: "Essential Finishes", rate: "₹650/sq.ft", desc: "Vitrified tiles, simple false ceiling, Royale paint, and standard electricals." },
        { name: "Premium Architectural", rate: "₹1,150/sq.ft", desc: "Large format tiles, magnetic track lights, HDHMR kitchen, and designer bathrooms." },
        { name: "Ultra-Luxury Bespoke", rate: "₹1,800/sq.ft", desc: "Italian marble throughout, veneer paneling, acoustic ceilings, and imported bathware." },
      ],
    },

    timelineStages: [
      { step: "01", stage: "Flooring Screed & Marble Laying", duration: "Weeks 1 – 4", detail: "Dry-lay vein matching, adhesive setting, and initial rough grinding." },
      { step: "02", stage: "False Ceilings & Wiring", duration: "Weeks 5 – 8", detail: "Gypsum channels, cove pockets, and electrical switch drops." },
      { step: "03", stage: "Custom Woodwork & Modular Units", duration: "Weeks 9 – 12", detail: "Cabinetry installation, countertop granite, and bathroom glass cubicles." },
      { step: "04", stage: "Diamond Polishing & Royale Paint", duration: "Weeks 13 – 16", detail: "7-step diamond marble polishing, velvet touch paint, and deep cleaning." },
    ],

    relevantProjectIds: ["the-monolith-villa", "serene-duplex-estates"],

    faqs: [
      {
        question: "Can Speeddex complete interior fitouts if another contractor built the civil structure?",
        answer: "Yes. Our Interior Finishing division takes over raw civil structures and delivers complete turnkey interior finishes.",
      },
    ],

    relatedServiceSlugs: [
      "turnkey-construction",
      "residential-house-construction",
      "renovation-and-remodeling",
    ],
  },

  {
    id: "project-planning-management",
    slug: "project-planning-management",
    title: "Project Planning & Civil Supervision (PMC)",
    shortTitle: "Project Management (PMC)",
    category: "Consulting",
    tag: "Quality Oversight",
    projectType: "OTHER",
    priceRange: "4% – 7% of Project Cost",
    duration: "Full Project Lifecycle",
    image: "/images/about-engineers.jpg",
    clientType: "Landowners, institutions, and builders wanting independent quality and budget auditing.",
    metaTitle: "Project Management Consultancy (PMC) in Indore | Speeddex",
    metaDescription: "Independent Project Management Consultancy and civil site supervision in Indore. Bill of Quantities auditing, concrete batch testing, and timeline enforcement.",
    headline: "Independent Engineering Oversight Protecting Your Money, Materials, and Construction Quality.",
    description: "Independent Project Management Consultancy (PMC) protecting your interests. We audit contractor bills, perform daily site inspections, enforce material specifications, and track schedules.",
    highlights: [
      "Independent laser measurement verification of contractor bills",
      "Random mill invoice and NABL lab material quality audits",
      "Critical Path Method (CPM) timeline and milestone tracking",
      "Daily engineer-signed inspection checklists & photographic logs"
    ],
    
    painPoints: [
      {
        problem: "Inflated Contractor Bills and Fake Measurement Quantities",
        solution: "Measurement Book (MB) Verification: Every running bill is audited on-site with laser measuring tools before payment is recommended.",
      },
      {
        problem: "Contractors Skipping Curing Days and Using Substandard Materials",
        solution: "Uncompromising On-Site Oversight: Our resident civil engineers reject any cement or steel that fails lab quality tests.",
      },
    ],

    detailedScope: [
      {
        category: "Tender & Pre-Construction",
        items: [
          "Itemized Bill of Quantities (BOQ) preparation with market-rate analysis",
          "Contractor technical vetting, negotiation, and formal agreement drafting",
          "Master project baseline schedule formulation (CPM/Gantt chart)",
        ],
      },
      {
        category: "Daily Supervision & Audit",
        items: [
          "Resident site civil engineer inspecting every rebar tie and concrete pour",
          "Daily digital progress reports with photographic evidence and drone inspections",
          "Contractor invoice verification against physical Measurement Book (MB) recordings",
          "Final snag-list clearance and defect liability management",
        ],
      },
    ],

    deliverables: [
      "Validated Master BOQ and contractor contract",
      "Daily digital site quality reports and monthly progress charts",
      "Certified contractor running bill recommendations",
      "Comprehensive project completion snag-list clearance report",
    ],
    inclusions: [
      "Tender document preparation, BOQ validation, and contractor vetting",
      "Full-time or dedicated visiting Civil Site Engineer",
      "Daily digital site reports with photographic evidence and drone inspections",
      "Detailed snag-list tracking and final contractor settlement auditing",
    ],
    exclusions: [
      "Direct supply of construction materials or site machinery",
      "Direct employment of site construction labourers",
    ],
    customerResponsibilities: [
      "Empowering PMC engineer with contractual authority over the executing contractor",
      "Providing contractor agreements and baseline drawings for auditing",
    ],

    planningAndEngineering: [
      {
        title: "Earned Value Management (EVM)",
        detail: "Tracking schedule performance index (SPI) and cost performance index (CPI) to spot bottlenecks before delays occur.",
      },
    ],

    materialsAndQA: [
      { item: "Material Auditing", spec: "IS Standard Sample Random Testing", check: "Independent laboratory tensile and cube crush tests" },
    ],

    indicativePricing: {
      baseRate: "4% – 7%",
      unit: "of total construction value",
      disclaimer: "Fee percentage varies based on total project scale and whether full-time resident or periodic visiting engineering supervision is required.",
      tiers: [
        { name: "Periodic Quality Audit", rate: "4% of Project", desc: "Visiting civil engineer auditing key casting milestones and contractor invoices." },
        { name: "Full-Time Resident PMC", rate: "6% of Project", desc: "Dedicated daily site engineer managing quality, material inventory, and daily reports." },
        { name: "Comprehensive EPC PMC", rate: "7% of Project", desc: "End-to-end tender preparation, contractor management, daily oversight, and final handover." },
      ],
    },

    timelineStages: [
      { step: "01", stage: "Tender & Contractor Vetting", duration: "Weeks 1 – 3", detail: "Formulating BOQ and interviewing contractor candidates." },
      { step: "02", stage: "Baseline Schedule & Kickoff", duration: "Week 4", detail: "Establishing Gantt milestones and quality inspection protocols." },
      { step: "03", stage: "Execution Supervision", duration: "Months 2 – 12", detail: "Daily on-site checks, cube tests, and invoice verification." },
      { step: "04", stage: "Final Snags & Settlement", duration: "Final Month", detail: "Defect inspection, snag clearance, and final bill closure." },
    ],

    relevantProjectIds: ["apex-commercial-plaza", "pithampur-logistics-terminal"],

    faqs: [
      {
        question: "How does hiring a PMC engineer save me money?",
        answer: "By catching contractor over-measurement in bills, stopping 15% material wastage, and preventing structural errors that cost lakhs to repair later, a PMC pays for itself several times over.",
      },
    ],

    relatedServiceSlugs: [
      "turnkey-construction",
      "commercial-building-construction",
      "industrial-construction",
    ],
  },

  {
    id: "repair-and-maintenance",
    slug: "repair-and-maintenance",
    title: "Structural Repair & Waterproofing Maintenance",
    shortTitle: "Repair & Maintenance",
    category: "Maintenance",
    tag: "Preservation",
    projectType: "RENOVATION",
    priceRange: "Custom Site Audit Quote",
    duration: "1 – 4 Weeks",
    image: "/images/safety-inspection.jpg",
    clientType: "Residential housing societies, commercial building owners, and factories.",
    metaTitle: "Structural Repair & Waterproofing Maintenance in Indore | Speeddex",
    metaDescription: "Expert structural repair, concrete spalling treatment, and terrace waterproofing in Indore. Thermal moisture imaging and high-pressure PU grouting.",
    headline: "Scientific Structural Remediation, Permanent Leakage Solutions, and Concrete Rehabilitation.",
    description: "Specialized structural diagnosis and remedial maintenance. We eliminate persistent water seepages, repair spalling concrete, seal expansion joints, and restore structural health.",
    highlights: [
      "FLIR thermal imaging to detect hidden water seepage points",
      "High-pressure polyurethane (PU) chemical crack injection",
      "Polymer-modified anti-rust mortar treatment for spalling concrete",
      "7-year certified legal waterproofing warranty certificate"
    ],
    
    painPoints: [
      {
        problem: "Persistent Water Seepage That Recurring Local Painters Cannot Fix",
        solution: "Thermal Moisture Imaging & Pressure PU Grouting: Pinpoint underground and concealed water paths and seal them with expanding polyurethane grout.",
      },
      {
        problem: "Exposed Rusted Rebar and Concrete Chipping (Spalling)",
        solution: "Polymer-Modified Concrete Rehabilitation: Mechanically descaling rust, applying zinc-rich anti-corrosion primer, and rebuilding sections with polymer mortar.",
      },
    ],

    detailedScope: [
      {
        category: "Diagnostic & Structural Repair",
        items: [
          "Thermal moisture camera survey and concrete carbonation depth profiling",
          "Chipping spalled concrete, mechanical rust removal, and zinc primer application",
          "Polymer-modified mortar (PMM) rebuilding and micro-concrete structural jackets",
        ],
      },
      {
        category: "Waterproofing & Joint Sealing",
        items: [
          "High-pressure polyurethane (PU) injection grouting across leaking honeycombs",
          "Polysulphide sealant injection for building expansion and movement joints",
          "Fiberglass-reinforced elastomeric terrace coating with UV resistance",
        ],
      },
    ],

    deliverables: [
      "Pre-repair thermal moisture mapping diagnostic report",
      "Concrete rehabilitation technical certificate",
      "5-Year Leak-Free Written Guarantee Deed on treated areas",
    ],
    inclusions: [
      "Detailed diagnostic inspection report and root-cause mapping",
      "Pressure grouting, epoxy crack injection, and spalling repair",
      "Expansion joint resealing using polysulphide sealants",
      "5-Year leak-free service warranty on treated zones",
    ],
    exclusions: [
      "Cosmetic painting outside the treated repair zones",
      "Underlying municipal plumbing network modifications outside property boundaries",
    ],
    customerResponsibilities: [
      "Providing uninterrupted electrical power for pressure injection pumps",
      "Facilitating access to affected interior rooms and upper terrace slabs",
    ],

    planningAndEngineering: [
      {
        title: "Thermal Moisture Infrared Survey",
        detail: "Detecting hidden sub-surface moisture migration pathways without breaking tiles or masonry.",
      },
    ],

    materialsAndQA: [
      { item: "PU Grout", spec: "Fosroc Polyurethane Expanding Resin", check: "Closed-cell expansion stopping water head" },
      { item: "Rust Converter", spec: "Zinc-rich Anti-Corrosion Primer", check: "100% rebar surface passivation" },
    ],

    indicativePricing: {
      baseRate: "On Inspection",
      unit: "based on defect square footage",
      disclaimer: "Every structural damage case is unique. Pricing is determined only after an in-person site thermal inspection.",
      tiers: [
        { name: "Targeted Seepage Grouting", rate: "₹350 – ₹650/sq.ft", desc: "PU high-pressure grouting for localized wet areas." },
        { name: "Terrace Waterproofing System", rate: "₹75 – ₹130/sq.ft", desc: "Elastomeric fiber-mesh coating with 5-year leak-free warranty." },
        { name: "Concrete Spalling Repair", rate: "₹850 – ₹1,400/sq.ft", desc: "Rust descaling, zinc primer, and polymer mortar reconstruction." },
      ],
    },

    timelineStages: [
      { step: "01", stage: "Thermal Diagnostic Audit", duration: "Day 1 – 2", detail: "Moisture camera scan and root-cause identification." },
      { step: "02", stage: "Pressure Grouting & Crack Sealing", duration: "Days 3 – 8", detail: "Injecting expanding resin into active leakage cracks." },
      { step: "03", stage: "Concrete Rehabilitation & Coating", duration: "Days 9 – 16", detail: "Polymer mortar patching and elastomeric top coats." },
      { step: "04", stage: "Water Ponding Test & Warranty", duration: "Days 17 – 21", detail: "72-hour water standing test and 5-Year Warranty handover." },
    ],

    relevantProjectIds: ["safety-inspection", "about-facade"],

    faqs: [
      {
        question: "Why does terrace waterproofing fail again after local paint coatings?",
        answer: "Standard paint coatings crack under extreme summer heat expansion. We use elastomeric polyurethane membranes reinforced with fiberglass mesh that expand up to 300% without tearing, resisting standing rainwater.",
      },
    ],

    relatedServiceSlugs: [
      "renovation-and-remodeling",
      "civil-and-structural-works",
      "turnkey-construction",
    ],
  },
];

/**
 * Turnkey vs Labour Contract Comparison Matrix
 */
export const comparisonMatrix = {
  title: "Turnkey Construction vs. Labour-Contract Model",
  subtitle: "Understanding the difference between full-responsibility turnkey construction and high-risk labour-only arrangements.",
  disclaimer: "Note: The actual scope of works, deliverables, and material brands depend strictly on the signed project agreement and approved BOQ.",
  criteria: [
    {
      parameter: "Single-Point Accountability",
      turnkey: "100% on Speeddex. One legal contract holds us responsible for delays, quality, and defects.",
      labourOnly: "Divided. Contractor blames material delays; material supplier blames poor workmanship.",
      winner: "turnkey",
    },
    {
      parameter: "Cost Certainty & Overruns",
      turnkey: "Locked-in itemized BOQ with 0% Cost Overrun Guarantee. What is quoted is what you pay.",
      labourOnly: "High price creep. Steel/cement rate surges, material theft, and 15-20% wastage fall on you.",
      winner: "turnkey",
    },
    {
      parameter: "Owner Time & Stress",
      turnkey: "Near Zero. Track everything via daily WhatsApp photos while you focus on your career or family.",
      labourOnly: "Exhausting. You must arrange 100+ deliveries of sand, bricks, cement, and oversee daily work.",
      winner: "turnkey",
    },
    {
      parameter: "Material Quality Assurance",
      turnkey: "Direct mill procurement of Tata Tiscon 550D & UltraTech cement with NABL lab test certs.",
      labourOnly: "Vulnerable to local retailer adulteration, expired cement bags, and substandard local rebar.",
      winner: "turnkey",
    },
    {
      parameter: "Warranty & Post-Handover",
      turnkey: "Formal 10-Year Structural Guarantee & 5-Year Waterproofing Warranty with legal deed.",
      labourOnly: "Zero warranty. Once final wages are cleared, the thekedar is untraceable for repairs.",
      winner: "turnkey",
    },
    {
      parameter: "Engineering Supervision",
      turnkey: "In-house chartered civil engineers conduct 440+ inspections and concrete slump tests.",
      labourOnly: "Zero engineering oversight; reliance entirely on untrained mason instincts.",
      winner: "turnkey",
    },
  ],
};

/**
 * 7-Step Universal Construction Workflow
 */
export const serviceWorkflowSteps = [
  {
    step: "01",
    name: "Consultation & Vision",
    duration: "Day 1 – 3",
    description: "Detailed discussion regarding your lifestyle requirements, Vastu preferences, plot constraints, and budgetary parameters.",
  },
  {
    step: "02",
    name: "Site & Soil Assessment",
    duration: "Day 4 – 7",
    description: "On-site borehole geotechnical testing to assess soil bearing capacity (vital for Central Indian Black Cotton soil) and topographical survey.",
  },
  {
    step: "03",
    name: "Architectural & 3D Planning",
    duration: "Week 2 – 4",
    description: "Developing 2D functional layouts, hyper-realistic 3D elevations, structural CAD schedules, and municipal sanction documentation.",
  },
  {
    step: "04",
    name: "Transparent BOQ & Quotation",
    duration: "Week 4",
    description: "Formulating an exhaustive Bill of Quantities with locked-in material grades, fixed pricing, and milestone-linked payment schedules.",
  },
  {
    step: "05",
    name: "Civil & MEP Execution",
    duration: "Months 2 – 10",
    description: "On-site construction supervised by chartered civil engineers using Tier-1 materials and automated concrete batching.",
  },
  {
    step: "06",
    name: "440+ Quality Audits",
    duration: "Continuous",
    description: "NABL lab concrete cube tests, rebar tensile testing, plumbing hydrostatic pressure checks, and daily photographic WhatsApp logs.",
  },
  {
    step: "07",
    name: "Final Snags & Key Handover",
    duration: "Final Month",
    description: "Deep industrial cleaning, 440-point snag clearance, 10-Year Structural Warranty deed handover, and ceremonial key presentation.",
  },
];

/**
 * Service-Specific Indian Construction FAQs
 */
export const serviceFaqsData = [
  {
    id: "turnkey-vs-labour-cost",
    question: "Is turnkey construction really cheaper than labour-contract construction?",
    answer: "Yes, when factoring in overall lifecycle costs. In a labour contract, homeowners purchase materials at retail prices without bulk contractor discounts, and suffer 12% to 20% material wastage, transit theft, and delays. In a turnkey contract, Speeddex procures materials directly from manufacturers at institutional pricing, absorbs wastage, and guarantees the cost in writing.",
  },
  {
    id: "customization-scope",
    question: "Can I customize the tiles, paint shades, and sanitary fixtures during construction?",
    answer: "Absolutely. Our turnkey packages provide defined per-square-foot material allowances (e.g. ₹90/sq.ft. for tiles, ₹35,000 per bathroom for sanitaryware). You visit our partner showrooms (Jaquar, Kohler, Kajaria, Asian Paints) to choose your exact preferred designs. If you select higher-tier finishes, you only pay the incremental differential.",
  },
  {
    id: "soil-testing-central-india",
    question: "Why is geotechnical soil testing mandatory for every house?",
    answer: "Central India (Indore, Ujjain, Dewas, Bhopal) is covered by expansive Black Cotton Soil that swells dramatically in monsoon and shrinks in summer. Constructing without knowing the exact Soil Bearing Capacity (SBC) leads to wall cracks and differential foundation settlement. We test up to 6–10 meters depth and design under-reamed piles or raft footings accordingly.",
  },
  {
    id: "delay-penalties",
    question: "What happens if the project is delayed beyond the committed handover date?",
    answer: "Our legal contract includes an explicit late-delivery penalty clause. If construction is delayed due to reasons under our control, we pay a pre-agreed monthly penalty to the client. With our digital CPM tracking and captive material supply, our historical on-time delivery rate is 98.6%.",
  },
  {
    id: "structural-warranty-claim",
    question: "How does the 10-Year Structural Warranty work if an issue arises?",
    answer: "Every client receives a signed legal Warranty Deed upon handover. In the rare event of structural cracks or seepage within the warranty period, our dedicated maintenance response team inspects the site within 48 hours and executes remedial engineering at zero cost to the homeowner.",
  },
];
