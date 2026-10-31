export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  current: boolean;
  category: "Industry" | "Research" | "Leadership";
  description: string;
  contributions: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "dronix-senior-gis",
    role: "Senior GIS Analyst",
    organization: "Dronix Technologies Pvt. Ltd. (Aero360)",
    location: "Chennai, India",
    period: "October 2026 – Present",
    current: true,
    category: "Industry",
    description: "Leading geospatial solution architecture, satellite remote sensing intelligence pipelines, and high-performance WebGIS application engineering for enterprise and public-sector infrastructure decision-making.",
    contributions: [
      "Architect end-to-end geospatial pipelines processing SAR (Sentinel-1) and optical (Sentinel-2, PlanetScope) satellite imagery for environmental monitoring and asset inspection.",
      "Direct the development of browser-native WebGIS platforms and 3D hydrodynamic digital twin simulations.",
      "Bridge field UAV photogrammetry with cloud analytics, integrating RTK drone survey data into enterprise GIS systems.",
      "Collaborate with multi-disciplinary engineering and remote sensing teams to deliver high-reliability spatial AI solutions."
    ],
    skills: ["Geospatial Solution Architecture", "WebGIS", "SAR & Optical Processing", "Hydrodynamic Intelligence", "Team Leadership"]
  },
  {
    id: "coca-cola-jrf",
    role: "Student cum Junior Research Fellow (JRF)",
    organization: "Coca-Cola Research Project",
    location: "Tamil Nadu, India",
    period: "2022 – 2023",
    current: false,
    category: "Research",
    description: "Conducted satellite-based crop identification, plantation mapping, and agricultural remote sensing research combining high-resolution commercial imagery with machine learning.",
    contributions: [
      "Engineered machine learning and Object-Based Image Analysis (OBIA) workflows using 3-meter PlanetScope satellite imagery.",
      "Executed extensive field-level ground-truthing campaigns with sub-meter RTK GPS receivers to assemble validated training and test sets.",
      "Achieved 87.3% classification accuracy with a 0.70 Kappa coefficient for horticultural plantation discrimination.",
      "Compiled rigorous technical reports delivering spatial acreage intelligence to agricultural project stakeholders."
    ],
    skills: ["PlanetScope Imagery", "OBIA (eCognition)", "Random Forest Classification", "Field Ground Truthing", "Agricultural Remote Sensing"]
  },
  {
    id: "student-secretary-asgc",
    role: "Student Secretary",
    organization: "10th Agricultural Students Graduate Conference (ASGC 2025)",
    location: "TNAU, Coimbatore, India",
    period: "2025",
    current: false,
    category: "Leadership",
    description: "Elected student leader organizing an international academic conference uniting hundreds of postgraduate researchers, keynote scientists, and geospatial industry delegates.",
    contributions: [
      "Coordinated peer-review and technical session tracks covering Earth observation, precision agriculture, and climate resilience.",
      "Facilitated keynote panels with leading scientists and senior academic faculty.",
      "Managed conference logistics, publication proceedings, and graduate research awards."
    ],
    skills: ["Scientific Conference Management", "Peer Review Coordination", "Public Speaking", "Organizational Leadership"]
  },
  {
    id: "ncc-cadet-leadership",
    role: "NCC Cadet Leader · B & C Certificate Holder",
    organization: "National Cadet Corps (NCC), Ministry of Defence, Govt. of India",
    location: "Tamil Nadu, India",
    period: "Honors & Leadership",
    current: false,
    category: "Leadership",
    description: "Disciplined paramilitary training, leadership development, and marksmanship excellence.",
    contributions: [
      "Awarded NCC 'B' and 'C' Certifications, representing the highest level of leadership, drill, and fieldcraft competency in the National Cadet Corps.",
      "Won the prestigious Shooting Gold Medal in state-level marksmanship competitions, demonstrating exceptional mental focus, breath control, and precision under pressure.",
      "Led contingent platoons in ceremonial parades and community service initiatives."
    ],
    skills: ["Shooting Gold Medalist", "NCC B & C Certified", "Crisis Management", "High-Discipline Execution"]
  }
];

