export interface ResearchProject {
  id: string;
  degreeLevel: "PhD" | "Master's" | "Undergraduate";
  title: string;
  institution: string;
  period: string;
  summary: string;
  methods: string[];
  resultsAndMetrics: { label: string; value: string; context: string }[];
  keyContributions: string[];
  technologiesUsed: string[];
}

export const researchData: ResearchProject[] = [
  {
    id: "phd-research",
    degreeLevel: "PhD",
    title: "Assessing Impact of Climate Change on Groundwater Resources and Mapping Potential Recharge Zones using Geospatial Tools",
    institution: "Tamil Nadu Agricultural University (TNAU)",
    period: "Doctoral Research",
    summary: "A comprehensive investigation combining physical process-based watershed modeling with 3D groundwater flow simulations and spatial machine learning to predict climate-driven aquifer depletion and identify high-priority artificial recharge zones.",
    methods: [
      "Coupled SWAT-MODFLOW-6 numerical modeling for surface-subsurface hydrologic interactions",
      "SUFI-2 algorithm in SWAT-CUP for multi-parameter uncertainty and sensitivity calibration",
      "Deep learning-based infiltration rate estimation across heterogenous soil profiles",
      "Multi-Criteria Decision Analysis (AHP & Fuzzy-AHP) for groundwater recharge potential zonation",
      "Coupled CMIP6 future climate scenarios assessing 2030–2080 recharge variations"
    ],
    resultsAndMetrics: [
      {
        label: "Hydrologic Calibration",
        value: "SUFI-2 Calibrated",
        context: "High Nash-Sutcliffe efficiency (NSE) and PBIAS within recommended hydrological bounds."
      },
      {
        label: "Recharge Zone Mapping",
        value: "Basin-Wide Zonation",
        context: "Delineated very high, high, moderate, and poor potential artificial recharge zones."
      },
      {
        label: "Future Projections",
        value: "CMIP6 Scenarios",
        context: "Quantified aquifer drawdowns under SSP2-4.5 and SSP5-8.5 radiative forcing scenarios."
      }
    ],
    keyContributions: [
      "Coupled a semi-distributed watershed model (SWAT) with a 3D finite-difference groundwater model (MODFLOW-6) to simulate river-aquifer head exchanges.",
      "Implemented deep learning formulations to improve unsaturated zone percolation estimates over conventional empirical equations.",
      "Produced actionable spatial maps for district water managers, pinpointing optimal locations for percolation ponds, check dams, and recharge shafts."
    ],
    technologiesUsed: [
      "SWAT", "MODFLOW-6", "SWAT-CUP / SUFI-2", "Python", "FloPy", "QGIS", "ArcGIS Pro", "TensorFlow/PyTorch", "R"
    ]
  },
  {
    id: "masters-research",
    degreeLevel: "Master's",
    title: "Machine Learning & Object-Based Image Analysis for Mango Plantation Mapping",
    institution: "Tamil Nadu Agricultural University (TNAU)",
    period: "Master's Research",
    summary: "Pioneered high-resolution spatial mapping of horticultural tree canopies by fusing 3-meter PlanetScope satellite imagery with multi-scale segmentation and machine learning classifiers.",
    methods: [
      "PlanetScope 3-meter multispectral satellite constellation imagery processing",
      "Multi-resolution segmentation algorithm in eCognition creating object primitives",
      "Random Forest (RF) machine learning classification using spectral, textural, and geometric features",
      "Confusion matrix error analysis with field-validated RTK GPS ground truth points"
    ],
    resultsAndMetrics: [
      {
        label: "Overall Classification Accuracy",
        value: "87.3%",
        context: "Validated against comprehensive on-ground horticultural survey sample plots."
      },
      {
        label: "Kappa Coefficient",
        value: "0.70",
        context: "Substantial statistical agreement beyond chance for complex mixed canopy environments."
      },
      {
        label: "Sensor Resolution",
        value: "3m PlanetScope",
        context: "Differentiated mango orchards from adjacent deciduous and agro-forestry canopies."
      }
    ],
    keyContributions: [
      "Overcame the 'salt-and-pepper' classification noise inherent in traditional pixel-based methods by using Object-Based Image Analysis (OBIA).",
      "Extracted GLCM (Gray-Level Co-occurrence Matrix) textural attributes to discriminate mature mango orchards from scrub and wild foliage.",
      "Demonstrated how commercial high-revisit smallsat constellations can replace expensive manual tree censuses for agricultural crop insurance."
    ],
    technologiesUsed: [
      "PlanetScope 3m", "Random Forest", "eCognition (OBIA)", "ArcGIS Pro", "Python (Scikit-Learn)", "RTK GPS"
    ]
  },
  {
    id: "undergraduate-research",
    degreeLevel: "Undergraduate",
    title: "Plant Tissue Micropropagation & Sterile Culture Protocols",
    institution: "Tamil Nadu Agricultural University (TNAU)",
    period: "Undergraduate Research",
    summary: "Experimental biological and sterile tissue culture investigation optimizing hormonal regimes and nutrient medium formulations for accelerated clonal micropropagation.",
    methods: [
      "Murashige & Skoog (MS) media formulation under laminar airflow sterile conditions",
      "Auxin to cytokinin ratio optimization for callus induction and shoot multiplication",
      "Acclimatization protocols for ex-vitro survival in climate-controlled polyhouses"
    ],
    resultsAndMetrics: [
      {
        label: "Protocol Viability",
        value: "High Ex-Vitro Survival",
        context: "Standardized sterile hardening cycle reducing seedling mortality."
      }
    ],
    keyContributions: [
      "Established foundational biological, experimental, and laboratory rigor that informs subsequent agricultural and environmental remote sensing science."
    ],
    technologiesUsed: [
      "Laboratory Instrumentation", "Statistical Experimental Design", "Sterile Culture Protocols"
    ]
  }
];

