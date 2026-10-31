export interface ProjectCaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: string;
  summary: string;
  featured: boolean;
  technologies: string[];
  metrics?: { label: string; value: string; note?: string }[];
  problemStatement: string;
  solution: string;
  architectureOverview: string;
  individualContribution: string;
  engineeringChallenges: string[];
  dataSourcesAndProcessing: string[];
  algorithmsAndApproach: string[];
  resultsAndValidation: string;
  lessonsLearned: string[];
  futureRoadmap: string[];
  copyrightOrRef?: string;
  liveDemoAvailable: boolean;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "deluge-3d",
    title: "DELUGE 3D — Coastal Flood Intelligence Platform",
    shortTitle: "DELUGE 3D",
    subtitle: "Physics-Driven Flood Simulation for Climate-Resilient Planning",
    category: "Hydrodynamic Modeling & 3D WebGIS",
    summary: "A geospatial hydrodynamic modeling platform designed to simulate pluvial flooding, coastal inundation, sea-level-rise scenarios, and tsunami-related spatial impacts with high-resolution terrain interaction.",
    featured: true,
    technologies: [
      "Python",
      "NumPy",
      "2D Shallow Water Equations",
      "ERA5 Atmospheric Reanalysis",
      "High-Resolution DEM (SRTM/LiDAR)",
      "MapLibre GL JS",
      "Three.js",
      "WebGPU/WebGL Shaders"
    ],
    metrics: [
      { label: "Mesh Grid Resolution", value: "5m – 30m Adaptive", note: "Multi-scale numerical mesh" },
      { label: "Hydrodynamics", value: "2D Saint-Venant", note: "Non-linear shallow water equations" },
      { label: "Temporal Resolution", value: "15-min Intervals", note: "Time-stepped hydrodynamic propagation" }
    ],
    problemStatement: "Coastal zones and deltaic basins face compounding flood hazards from extreme rainfall bursts, tidal surges, and long-term sea level rise. Traditional hydrodynamic packages require costly desktop software, cumbersome file pipelines, and days of computation—depriving urban planners and disaster responders of fast, spatially interactive scenario exploration.",
    solution: "DELUGE 3D bridges high-performance numerical hydrology with browser-native 3D rendering. It couples an accelerated 2D shallow-water equation solver with an interactive WebGL terrain visualizer, enabling planners to inject extreme precipitation hyetographs or ocean storm surge hydrographs and visualize water surface elevations (WSE) and inundation vectors in real time.",
    architectureOverview: "1. Data Preprocessing Pipeline: Ingests digital elevation models (DEMs), hydrologically conditions flow directions, and computes Manning's n roughness coefficients from land-cover classifications.\n2. Numerical Simulation Engine: A vectorized Python/NumPy finite-difference formulation solving continuity and momentum equations across adaptive terrain grids.\n3. Scenario Engine: Simulates pluvial flash storms, coastal high-tide surges, and 1m/2m sea level rise scenarios.\n4. WebGIS & 3D Visualization: Renders dynamic depth textures draped over 3D terrain meshes using Three.js and MapLibre GL, with interactive elevation slicing and gauge hydrographs.",
    individualContribution: "Designed the full mathematical architecture of the hydrodynamic discretization, implemented the terrain hydrologic conditioning algorithms (depression filling and stream burning), authored the shader pipeline for depth-gradient visualization, and built the browser-based simulation controller.",
    engineeringChallenges: [
      "Numerical Stability on Steep Terrain: Overcoming Courant-Friedrichs-Lewy (CFL) condition instability during sudden high-velocity runoff pulses without ballooning compute time.",
      "Large-Scale DEM Tiling in Browser: Efficiently serving multi-gigabyte raster bathymetry and elevation data to low-power client devices using quantized mesh terrain formats.",
      "Dynamic Surface Water Texturing: Generating realistic, depth-aware water refraction and velocity particle flow maps without dropping frame rates below 60 FPS."
    ],
    dataSourcesAndProcessing: [
      "Copernicus & SRTM 30m DEMs augmented with local high-resolution airborne LiDAR point clouds.",
      "ERA5 hourly total precipitation and mean sea-level pressure grids.",
      "Copernicus Global Land Cover at 10m for dynamic Manning roughness parameter assignment.",
      "Tide gauge station time series for coastal boundary condition forcing."
    ],
    algorithmsAndApproach: [
      "2D Depth-Averaged Saint-Venant Shallow Water Equations with shock-capturing Riemann solver.",
      "Manning-Strickler bed friction formulation calculated per-cell based on classified land cover.",
      "D8 and D-Infinity flow direction and sink filling algorithms for hydrologic conditioning.",
      "Custom WebGL fragment shaders for dynamic water level contouring and depth-based color absorption."
    ],
    resultsAndValidation: "Validated against benchmark historical pluvial events in deltaic test catchments. Modeled flood boundaries showed strong spatial agreement with satellite SAR flood extents (Sentinel-1 GRD coherence loss) across peak inundation windows.",
    lessonsLearned: [
      "Decoupling the intensive numerical physics solver from the interactive visualization client allows asynchronous scenario generation while preserving buttery-smooth UI interaction.",
      "Accurate surface roughness mapping is just as critical as raw elevation resolution for predicting water arrival times in dense urban pockets."
    ],
    futureRoadmap: [
      "WebGPU compute shader implementation to run real-time hydrodynamic iterations directly in the client browser.",
      "Integration of real-time IMD (India Meteorological Department) radar nowcasting feeds for automated flash-flood alerting."
    ],
    liveDemoAvailable: true
  },
  {
    slug: "satvision",
    title: "SATVision — Satellite Orbit & Overpass Intelligence",
    shortTitle: "SATVision",
    subtitle: "Predicting Orbital Coverage Through Real-Time Spatial Computation",
    category: "Satellite Astrodynamics & Spatial Intelligence",
    summary: "A high-precision satellite tracking and sensor overpass prediction platform using orbital element data, SGP4-based satellite propagation, and sensor swath geometric modeling.",
    featured: true,
    technologies: [
      "JavaScript / TypeScript",
      "satellite.js",
      "SGP4 Orbit Propagation",
      "Two-Line Elements (TLE)",
      "Cloudflare Workers",
      "Python / Celestrak API",
      "Three.js / WebGL"
    ],
    metrics: [
      { label: "Orbit Model", value: "SGP4 / SDP4", note: "Standard simplified general perturbations" },
      { label: "Propagation Speed", value: "<2ms per step", note: "Client-side trajectory calculation" },
      { label: "Sensors Modeled", value: "Optical & SAR", note: "Sentinel-2, Landsat-9, Sentinel-1" }
    ],
    problemStatement: "Earth observation planning, drone flight synchronization, and field validation campaigns require knowing the exact second an optical or SAR satellite passes over a specific coordinate—as well as sun elevation angle, off-nadir tilt, and sensor swath coverage. Existing tools are either bloated legacy desktop software or opaque commercial portals.",
    solution: "SATVision is an ultra-fast, serverless satellite propagation and footprint intelligence platform. Using updated TLE ephemerides from CelesTrak and SGP4 perturbation physics, it calculates orbital state vectors, ground tracks, and sensor swath cones in real time on both 3D celestial globes and 2D geographic coordinate projections.",
    architectureOverview: "1. TLE Ingestion Worker: Cloudflare Worker scheduled cache updating two-line element sets for Earth observation constellations (Sentinel, Landsat, PlanetScope, ISS).\n2. Astrodynamics Engine: satellite.js SGP4 propagation converting TLE ephemeris into ECI (Earth-Centered Inertial) position and velocity coordinates.\n3. Coordinate Transformation: Real-time GMST (Greenwich Mean Sidereal Time) rotation into ECF (Earth-Centered Fixed) geodetic latitude, longitude, and ellipsoidal altitude.\n4. Swath Footprint Calculator: Computes sensor field-of-view (FOV) polygons, look-angle tolerances, and upcoming overpass windows for any user coordinate.\n5. Visualization Layer: Renders 3D orbital rings, orbital nodes, terminator line (day/night boundary), and real-time sub-satellite points.",
    individualContribution: "Designed the serverless edge caching system for orbital ephemerides, implemented the sensor swath footprint projection algorithms, and built the Three.js orbital coordinate system visualizing Earth's axial tilt and satellite state vectors.",
    engineeringChallenges: [
      "SGP4 Coordinate Accuracy Degradation: Mitigating orbital drift error when TLEs age beyond 48 hours through automated freshness scoring and fallback alerts.",
      "High-Frequency Ephemeris Computation: Calculating hundreds of future orbital steps smoothly without blocking the main browser thread via Web Workers.",
      "Sensor Off-Nadir Projection: Translating satellite roll/pitch limits into exact polygon intersections with the WGS84 ellipsoid surface."
    ],
    dataSourcesAndProcessing: [
      "CelesTrak and Space-Track orbital ephemeris TLE sets.",
      "WGS84 Reference Ellipsoid parameters for geodetic coordinate transformations.",
      "Sensor geometry specifications (swath widths, field of view angles, revisit cycles) for Sentinel-1/2 and Landsat-8/9."
    ],
    algorithmsAndApproach: [
      "Simplified General Perturbations (SGP4/SDP4) analytical satellite propagation model.",
      "Greenwich Mean Sidereal Time (GMST) calculation for inertial-to-terrestrial coordinate transformation.",
      "Spherical geometry line-of-sight and minimum elevation angle horizon masks.",
      "Orbital period and mean anomaly interpolation for next-overpass countdown computation."
    ],
    resultsAndValidation: "Validated against official ESA and USGS overpass schedules. Predicted pass times matched published acquisition footprints within ±2 seconds over a 72-hour propagation window.",
    lessonsLearned: [
      "Accurate day/night terminator computation dramatically improves the practical utility for optical remote sensing planning.",
      "Edge-cached TLE records minimize latency to under 30ms globally while maintaining absolute ephemeris freshness."
    ],
    futureRoadmap: [
      "Cloud cover forecast integration (via GFS/ERA5) to predict probability of cloud-free optical acquisitions during overpasses.",
      "Support for user-uploaded custom TLEs and simulated constellation design."
    ],
    liveDemoAvailable: true
  },
  {
    slug: "swat-weather-generator",
    title: "SWAT Weather Data Generator",
    shortTitle: "SWAT Weather Gen",
    subtitle: "Automating Climate Data Preparation for Hydrological Research",
    category: "Scientific Software & Watershed Hydrology",
    summary: "An automated desktop and pipeline application for acquiring, harmonizing, validating, and formatting meteorological time series into rigorous SWAT-compliant input formats.",
    copyrightOrRef: "Software Copyright: SW-17836/2026-CO",
    featured: true,
    technologies: [
      "Python",
      "NASA POWER API",
      "ERA5-Land Hourly Reanalysis",
      "Tkinter / Custom Desktop UI",
      "Pandas & NumPy",
      "SWAT Model Formatting Engine",
      "Quality Assurance & Homogeneity Testing"
    ],
    metrics: [
      { label: "IP Status", value: "Registered Copyright", note: "Govt. of India SW-17836/2026-CO" },
      { label: "Time Series Variables", value: "5 Essential Hydro Vars", note: "Precip, Temp, Solar, Humidity, Wind" },
      { label: "Format Compliance", value: "100% SWAT / QSWAT", note: "Zero manual ASCII file reformatting" }
    ],
    problemStatement: "Hydrological modeling with SWAT (Soil and Water Assessment Tool) requires decades of daily meteorological inputs across multiple spatial stations: precipitation, min/max temperatures, solar radiation, relative humidity, and wind speed. Traditional preparation involves months of tedious manual downloading, unit conversions, missing-value imputation, and finicky Fortran ASCII file formatting.",
    solution: "The SWAT Weather Data Generator is an automated software utility that queries global reanalysis APIs (NASA POWER, ERA5-Land), conducts automated quality assurance, performs solar radiation and humidity thermodynamic conversions, and automatically formats station metadata and data tables directly into SWAT/QSWAT/ArcSWAT-ready files with one click.",
    architectureOverview: "1. Coordinate & Basin Ingestion: Accepts catchment bounding boxes or latitude/longitude coordinates of watershed centroids and weather stations.\n2. Atmospheric API Connector: Batch queries NASA POWER and ERA5-Land servers with rate-limiting and connection resilience.\n3. Scientific Harmonization: Converts units (e.g., Kelvin to Celsius, MJ/m² to cal/cm², specific humidity to relative humidity).\n4. Data Validation & Imputation: Flags anomalies, checks physical bounds, and performs temporal consistency audits.\n5. SWAT Output Generator: Writes native formatted station tables (.pcp, .tmp, .slr, .hmd, .wnd) and station index files.",
    individualContribution: "Sole developer and intellectual property author (SW-17836/2026-CO). Formulated the scientific conversion formulas, wrote the Python pipeline, engineered the desktop interface, and validated the output against observed ground meteorological stations.",
    engineeringChallenges: [
      "API Rate Limits and Large Temporal Windows: Handling 40-year daily queries without connection drops through intelligent exponential backoff and localized SQLite caching.",
      "Thermodynamic Unit Harmonization: Ensuring solar radiation and vapor pressure conversions adhered strictly to the penman-monteith FAO-56 standards required by SWAT's soil water balance engine.",
      "Precision-Dependent Fortran ASCII Writing: Ensuring exact character column alignment without whitespace drift, which causes native SWAT execution crashes."
    ],
    dataSourcesAndProcessing: [
      "NASA Prediction Of Worldwide Energy Resources (POWER) agroclimatology dataset.",
      "ECMWF ERA5-Land atmospheric reanalysis.",
      "India Meteorological Department (IMD) gridded observation datasets for local ground-truthing."
    ],
    algorithmsAndApproach: [
      "Tetens and Magnus-Tetens equations for saturation vapor pressure and relative humidity calculation from dewpoint.",
      "Alien et al. (FAO-56) extraterrestrial and global solar radiation transformations.",
      "Double mass curve analysis and Pettitt homogeneity test for climate anomaly detection.",
      "Rigid fixed-width text formatting engine matching SWAT 2012 / SWAT+ ASCII file specifications."
    ],
    resultsAndValidation: "Deployed across multiple doctoral and master's research investigations at Tamil Nadu Agricultural University. Reduced meteorological data preparation time from 3–4 weeks of manual spreadsheet labor to under 15 minutes of automated execution, with zero file formatting syntax errors during SWAT model compilation.",
    lessonsLearned: [
      "Software reliability in academic and research environments hinges on clear error messages that explain which physical variable failed validation.",
      "Automating mundane data prep frees researchers to spend their cognitive energy on model calibration, sensitivity analysis, and climate scenario evaluation."
    ],
    futureRoadmap: [
      "Cloud-native Web API version to integrate directly into browser-based hydrological digital twins.",
      "CMIP6 future climate change scenario downscaling engine (SSP2-4.5, SSP5-8.5)."
    ],
    liveDemoAvailable: false
  }
];

