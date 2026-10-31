export interface Credential {
  id: string;
  title: string;
  issuer: string;
  dateOrValidity: string;
  badge: string;
  description: string;
}

export const personalData = {
  name: "Dr. M. Harish",
  degrees: "PhD",
  headline: "Geospatial Solution Architect | Spatial AI & Earth Observation Engineer | PhD in Remote Sensing & GIS",
  currentRole: "Senior GIS Analyst",
  currentCompany: "Dronix Technologies Pvt. Ltd. (Aero360)",
  location: "Chennai & Erode, Tamil Nadu, India",
  email: "harish.merode@gmail.com",
  phone: "+91 994 265 8575",
  heroEyebrow: "GEOSPATIAL ENGINEER · RESEARCHER · SPATIAL AI",
  heroMainHeadline: "Engineering Intelligence for a Changing Planet.",
  heroSupportingHeadline: "From Satellite Data to Real-World Decisions.",
  heroBiography: "I architect geospatial digital twins, 3D hydrodynamic models, and Earth-observation pipelines—bridging deep satellite science with high-performance web graphics.",
  credentials: [
    {
      id: "phd",
      title: "PhD in Remote Sensing & GIS",
      issuer: "Tamil Nadu Agricultural University (TNAU)",
      dateOrValidity: "Completed",
      badge: "Doctorate",
      description: "SWAT-MODFLOW-6 coupled numerical modeling, climate-change impact analysis, and deep learning infiltration modeling."
    },
    {
      id: "senior-analyst",
      title: "Senior GIS Analyst",
      issuer: "Dronix Technologies (Aero360)",
      dateOrValidity: "Active · Oct 2026 – Present",
      badge: "Industry",
      description: "Architecting enterprise WebGIS platforms, SAR/optical satellite pipelines, and hydrodynamic intelligence solutions."
    },
    {
      id: "drone-pilot",
      title: "DGCA Commercial Drone Pilot",
      issuer: "Directorate General of Civil Aviation, Govt. of India",
      dateOrValidity: "Valid through 2034",
      badge: "Rotorcraft Small",
      description: "Certified commercial UAV pilot for high-precision aerial photogrammetry, RTK surveying, and multispectral field missions."
    },
    {
      id: "copyright",
      title: "Registered Software Copyright",
      issuer: "Copyright Office, Govt. of India",
      dateOrValidity: "SW-17836/2026-CO",
      badge: "Intellectual Property",
      description: "Original author of the automated meteorological data preprocessing platform for SWAT watershed modeling."
    },
    {
      id: "peer-reviewer",
      title: "Academic Peer Reviewer & Author",
      issuer: "International Earth Observation & Geoscience Journals",
      dateOrValidity: "Ongoing",
      badge: "Scholarly",
      description: "Peer-reviewing state-of-the-art literature in remote sensing, hydrological coupling, and geospatial machine learning."
    }
  ] as Credential[],
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    googleScholar: "https://scholar.google.com",
    researchGate: "https://www.researchgate.net",
  }
};

