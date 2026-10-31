export interface JournalArticle {
  id: string;
  title: string;
  journal: string;
  year: number;
  authors: string;
  doi: string;
  url: string;
  status: "Published" | "Under Review";
  category: string;
}

export const publishedArticles: JournalArticle[] = [
  {
    id: "global-hydrological-review-2025",
    title: "Global hydrological model: A comprehensive review of types, applications and uncertainties",
    journal: "Plant Science Today",
    year: 2025,
    authors: "M. Harish, S. Pazhanivelan, M. Dhanaraju, K. Ragunath",
    doi: "10.14719/pst.5960",
    url: "https://doi.org/10.14719/pst.5960",
    status: "Published",
    category: "Hydrology & Physical Modeling"
  },
  {
    id: "mango-ml-mapping-2025",
    title: "Mapping of mango cropping area using machine learning techniques in Tamil Nadu",
    journal: "Plant Science Today",
    year: 2025,
    authors: "C. Raju, S. Pazhanivelan, N. K. Sathyamoorthy, M. Harish",
    doi: "10.14719/pst.8760",
    url: "https://doi.org/10.14719/pst.8760",
    status: "Published",
    category: "Machine Learning & Remote Sensing"
  },
  {
    id: "mango-vhr-satellite-2023",
    title: "Mango Area Mapping Using Very High-Resolution Satellite Data in Major Blocks of Krishnagiri District, Tamil Nadu, India",
    journal: "International Journal of Environment and Climate Change",
    year: 2023,
    authors: "M. Harish, K. Ragunath, S. Pazhanivelan, C. Sivakumar, R. Kumaraperumal",
    doi: "10.9734/ijecc/2023/v13i92302",
    url: "https://doi.org/10.9734/ijecc/2023/v13i92302",
    status: "Published",
    category: "Satellite Earth Observation"
  }
];

export const submittedManuscripts: JournalArticle[] = [
  {
    id: "coupled-swat-modflow-climate-groundwater",
    title: "Assessing Impact of Climate Change on Groundwater Resources and Mapping Potential Recharge Zones using Coupled SWAT-MODFLOW-6 Modeling",
    journal: "International Journal of Water Resources & Geoscience",
    year: 2026,
    authors: "M. Harish, S. Pazhanivelan, et al.",
    doi: "Manuscript ID: Submitted / Under Review",
    url: "#",
    status: "Under Review",
    category: "Coupled Hydrodynamic Modeling"
  },
  {
    id: "deep-learning-soil-percolation",
    title: "Deep Learning Formulations for Unsaturated Zone Percolation Estimation in Semi-Arid Watersheds",
    journal: "Journal of Hydrology & Spatial Computing",
    year: 2026,
    authors: "M. Harish, et al.",
    doi: "Manuscript ID: Submitted / Under Review",
    url: "#",
    status: "Under Review",
    category: "Deep Learning & Soil Physics"
  }
];

export const publicationsData = [
  ...publishedArticles.map((a) => ({
    id: a.id,
    title: a.title,
    venueOrIssuer: `${a.journal} · DOI: ${a.doi}`,
    yearOrRef: `${a.year}`,
    description: `Authors: ${a.authors}. Peer-reviewed research article in ${a.category}.`,
  })),
  {
    id: "copyright-swat-weather",
    title: "SWAT Weather Data Generator (SW-17836/2026-CO)",
    venueOrIssuer: "Copyright Office, Government of India",
    yearOrRef: "2026",
    description: "Registered proprietary software copyright for automated meteorological extraction and SWAT formatting.",
  },
  {
    id: "sakura-science-japan",
    title: "Sakura Science Exchange Fellow — Weather Observation AI",
    venueOrIssuer: "Hirosaki University & JST, Japan",
    yearOrRef: "2024",
    description: "International scientific exchange program in weather radar, atmospheric observation, and spatial AI.",
  },
];
