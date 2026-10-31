export interface ExpertiseDomain {
  id: string;
  code: string;
  title: string;
  description: string;
  technologies: string[];
  appliedEvidence: string;
  keyCapabilities: string[];
}

export const expertiseData: ExpertiseDomain[] = [
  {
    id: "domain-a",
    code: "Domain A",
    title: "Earth Observation & Remote Sensing",
    description: "Multispectral, hyperspectral, and Synthetic Aperture Radar (SAR) processing across public constellations and high-revisit commercial smallsats.",
    technologies: [
      "Sentinel-1 SAR (C-band)",
      "Sentinel-2 (MSI)",
      "PlanetScope (3m)",
      "Landsat 8/9 (OLI/TIRS)",
      "MODIS",
      "SRTM & Copernicus DEM",
      "Airborne LiDAR",
      "SAR Coherence & Interferometry",
      "Spectral Indices (NDVI, NDWI, MNDWI, SAVI)"
    ],
    appliedEvidence: "Extracted flood extents from Sentinel-1 GRD imagery during monsoon storms; classified commercial horticulture using 3m PlanetScope; downscaled MODIS land surface temperatures.",
    keyCapabilities: [
      "SAR speckle filtering, radiometric calibration, and terrain flattening",
      "Radiative transfer and atmospheric correction (Sen2Cor / DOS1)",
      "Multi-temporal time series phenology and canopy dynamics analysis"
    ]
  },
  {
    id: "domain-b",
    code: "Domain B",
    title: "Geospatial Software Engineering",
    description: "Architecting interactive, browser-native 3D spatial platforms, high-performance WebGIS applications, and serverless geospatial APIs.",
    technologies: [
      "Python",
      "TypeScript & JavaScript",
      "MapLibre GL JS & Mapbox GL",
      "Three.js & WebGL / WebGPU",
      "React & Next.js",
      "REST & Vector Tile APIs (MVT)",
      "Streamlit",
      "Cloudflare Workers",
      "Docker"
    ],
    appliedEvidence: "Engineered DELUGE 3D interactive hydrodynamic viewer and SATVision serverless SGP4 propagation pipeline with zero client frame drops.",
    keyCapabilities: [
      "Custom WebGL shader pipelines for raster elevation and fluid simulation draping",
      "Dynamic GeoJSON and Mapbox Vector Tile (MVT) streaming at 60 FPS",
      "Serverless spatial computation at the edge with low-latency caching"
    ]
  },
  {
    id: "domain-c",
    code: "Domain C",
    title: "Hydrology & Numerical Modeling",
    description: "Physics-based watershed modeling, 3D groundwater simulations, surface-groundwater coupling, and 2D shallow water hydrodynamic computation.",
    technologies: [
      "SWAT (Soil & Water Assessment Tool)",
      "MODFLOW-6",
      "SWAT-MODFLOW Coupled Engine",
      "SUFI-2 / SWAT-CUP Calibration",
      "2D Shallow Water Equations",
      "Saint-Venant Solvers",
      "Kinematic & Diffusive Wave Runoff",
      "Terrain Flow Direction (D8 / D-inf)"
    ],
    appliedEvidence: "Coupled SWAT-MODFLOW-6 across complex river basins during doctoral research; calibrated multi-decade streamflow and water table elevations using SUFI-2.",
    keyCapabilities: [
      "Subsurface aquifer-head exchange modeling via finite differences",
      "Multi-variable hydrological sensitivity, uncertainty, and equifinality evaluation",
      "Hydraulic roughness parameterization and hydrograph routing"
    ]
  },
  {
    id: "domain-d",
    code: "Domain D",
    title: "Geospatial Data Science & Spatial AI",
    description: "Large-scale raster and vector matrix computation, spatial statistics, machine learning classification, and deep neural networks for spatial prediction.",
    technologies: [
      "GeoPandas & Shapely",
      "Rasterio & GDAL/OGR",
      "NumPy & SciPy",
      "Pandas",
      "FloPy (Python MODFLOW)",
      "Scikit-Learn (RF, SVM, XGBoost)",
      "R & Spatstat",
      "PostGIS & Spatial SQL"
    ],
    appliedEvidence: "Constructed deep learning infiltration estimation pipelines and automated meteorological time-series harmonizers with quality assurance routines.",
    keyCapabilities: [
      "Vectorized parallel raster algebra and spatial window processing",
      "Spatial cross-validation to prevent autocorrelation leakage in machine learning",
      "Geostatistical kriging and spatial interpolation optimization"
    ]
  },
  {
    id: "domain-e",
    code: "Domain E",
    title: "GIS Platforms & Photogrammetry",
    description: "Industry-standard geospatial enterprise suites, cloud geoprocessing engines, and photogrammetric reconstruction pipelines.",
    technologies: [
      "ArcGIS Pro & Enterprise",
      "QGIS & GRASS GIS",
      "Google Earth Engine (GEE)",
      "ESA SNAP Toolbox",
      "ERDAS Imagine",
      "Pix4Dmapper & Pix4Dmatic",
      "Trimble eCognition (OBIA)",
      "CloudCompare"
    ],
    appliedEvidence: "Supervised high-precision UAV point cloud orthomosaicing, engineered enterprise GIS workflows at Dronix Technologies, and trained teams on advanced GEE processing.",
    keyCapabilities: [
      "Multi-resolution image segmentation and hierarchy modeling in eCognition",
      "Automated batch geoprocessing scripts using ArcPy and PyQGIS",
      "Dense 3D point cloud generation, filtering, and DTM extraction from drone imagery"
    ]
  },
  {
    id: "domain-f",
    code: "Domain F",
    title: "UAV & Field Intelligence",
    description: "Commercial drone flight planning, aerial sensor payload management, RTK/PPK GNSS ground control, and field calibration campaigns.",
    technologies: [
      "DGCA Remote Pilot License (Rotorcraft Small)",
      "UAV Flight Planning (QGroundControl, Mission Planner)",
      "Multispectral & RGB Payloads",
      "RTK / PPK GNSS Base Stations",
      "Ground Control Points (GCP) Surveying",
      "Field Radiometry & Soil Moisture Sensors"
    ],
    appliedEvidence: "Conducted certified commercial drone surveying missions under DGCA regulations; established millimetric RTK ground control networks for engineering topography.",
    keyCapabilities: [
      "Compliant airspace authorization and safety protocol execution (DigitalSky)",
      "Sub-centimeter GCP coordinate post-processing and photogrammetric bundle adjustment",
      "Cross-validation of drone radiometric data with satellite overpasses"
    ]
  }
];

