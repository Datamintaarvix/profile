export interface SKModuleItem {
  id: string;
  name: string;
  purpose: string;
  description: string;
  userInteraction: string;
  keyFeatures: string[];
  image: string;
  badge: string;
}

export interface SKDeliverableGroup {
  groupName: string;
  groupTag: string;
  items: {
    iconName: string;
    title: string;
    description: string;
    tag?: string;
  }[];
}

export interface SKScreenshotItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  aspectBadge: string;
}

export const skSoftwareData = {
  meta: {
    slug: 'sk-software',
    title: 'SK Software – Smart Energy Management Software (SEMS)',
    shortTitle: 'SK Software – Smart Energy Management',
    category: 'SOFTWARE DEVELOPMENT // ENTERPRISE IOT & ENERGY OPTIMIZATION',
    status: 'PRODUCTION DEPLOYED // LIVE APPLICATION',
    liveUrl: 'https://softweredev01.vercel.app/login',
    pdfDocUrl: '/projects/software-development/SMART_ENERGY_SYSTEM_DOCUMENTATION.pdf',
    heroImage: '/projects/software-development/hero/smart_energy_dashboard_hero.png',
    seoTitle: 'SK Software – Smart Energy Management Platform Case Study | DATAMINT AARVIX',
    seoDescription: 'Enterprise case study for SK Software (SEMS): An industrial IoT energy management platform with real-time meter telemetry, Spring Boot REST APIs, MySQL data warehousing, and native Android application integration.',
    tagline: 'Centralized Industrial Energy Telemetry, Tariff Optimization & Carbon Emission Auditing Cockpit'
  },

  overview: {
    introduction: 'Smart Energy Management Software (SEMS) is an enterprise-grade digital telemetry and resource optimization system engineered to coordinate multi-meter electrical consumption across commercial facilities and heavy manufacturing plants. Developed by DATAMINT AARVIX, SEMS unifies real-time meter telemetry, time-of-day tariff reconciliation, automated anomaly alarms, and carbon emission accounting into an authoritative operational cockpit.',
    businessContext: 'Modern manufacturing plants, educational institutions, and corporate campuses operate high-consumption industrial machinery such as arc furnaces, chiller units, air compressors, and rolling mill motors. Without centralized monitoring, facility operators suffer from unexpected peak-demand utility surcharges, unmonitored equipment idling, and severe penalties caused by low power factor degradation.',
    problemStatement: 'The client faced fragmented energy logging across separate physical meters, delayed end-of-month utility bills that made proactive cost control impossible, manual spreadsheet reconciliation errors, lack of visibility into department-level wastage, and no auditable tracking for regulatory carbon footprint reporting.',
    proposedSolution: 'A unified 3-tier software architecture comprising a responsive web application and native Android mobile client powered by a robust Java Spring Boot REST API backend and a centralized MySQL database. SEMS provides sub-second meter telemetry, automated high-consumption and low-power-factor alerts, algorithmic peak-shaving recommendations, and compliant carbon accounting.',
    projectObjectives: [
      'Centralize multi-building and multi-department electrical meter feeds into one synchronized ledger.',
      'Eliminate peak demand utility surcharges via automated load-shifting recommendations and real-time kW threshold monitoring.',
      'Protect electrical infrastructure with instantaneous anomaly alarms for power factor degradation (PF < 0.70) and load spikes.',
      'Automate monthly tariff calculation, departmental billing reconciliation, and CSV/PDF compliance reporting.',
      'Provide dual-platform accessibility via modern responsive web browsers and native Android mobile devices connecting to a single Spring Boot API.'
    ],
    targetAudience: [
      'Plant Directors & Industrial Facility Managers',
      'Corporate Energy & Sustainability (ESG) Officers',
      'Electrical Maintenance Engineers & On-Floor Supervisors',
      'Commercial Campus Operations & Utility Billing Analysts'
    ],
    valueProposition: 'Immediate operational transparency that transforms passive utility bills into actionable real-time telemetry, slashing peak electricity expenses by up to 20%, enforcing power factor compliance, and standardizing corporate greenhouse gas emissions auditing.'
  },

  architecture: {
    pattern: 'Enterprise 3-Tier Distributed Architecture with Spring Boot & Centralized MySQL',
    description: 'The SEMS platform separates user interaction, business logic processing, and transactional persistence into three decoupled tiers. Both the Web client and the Android application communicate through a unified REST API layer, ensuring synchronized state across all operations.',
    layers: [
      {
        number: '01',
        name: 'Presentation Tier',
        role: 'Client Interfaces & Visual Cockpits',
        tech: 'React 18 / Vite SPA & Native Android Studio Application',
        details: 'Interactive dashboards, live sensor feeds, Chart.js / canvas graphs, responsive mobile screens, and token-based authenticated sessions.'
      },
      {
        number: '02',
        name: 'Application / Logic Tier',
        role: 'Spring Boot RESTful Microservice Core',
        tech: 'Java 17+, Spring Boot, Spring Security, REST Controllers',
        details: 'Handles request routing, JWT/session authentication, business rule execution, threshold anomaly detection, tariff calculation, and data validation.'
      },
      {
        number: '03',
        name: 'Data & Persistence Tier',
        role: 'Relational Telemetry Data Warehouse',
        tech: 'MySQL Enterprise Database with Optimized Time-Series Indices',
        details: 'Stores meter interval readings, building/department hierarchies, tariff rate tables, user credentials, equipment registries, and immutable audit logs.'
      }
    ],
    requestFlow: [
      { step: '1', label: 'User / Meter Action', desc: 'Operator navigates UI, submits tariff update, or meter telemetry is received.' },
      { step: '2', label: 'REST API Request', desc: 'Encrypted HTTPS JSON payload dispatched to Spring Boot backend controller.' },
      { step: '3', label: 'Business Rule Engine', desc: 'Spring Boot validates authorization, executes anomaly checks, and evaluates thresholds.' },
      { step: '4', label: 'MySQL Persistence', desc: 'ACID-compliant query reads or commits time-series telemetry in MySQL.' },
      { step: '5', label: 'Telemetry Stream Response', desc: 'JSON payload returns to client to update dashboards and trigger real-time alerts.' }
    ]
  },

  deliverables: [
    {
      groupName: 'Executive Cockpit & Energy Telemetry',
      groupTag: 'CORE DASHBOARD & METERS',
      items: [
        {
          iconName: 'LayoutDashboard',
          title: 'Executive Energy KPI Cockpit',
          description: 'Consolidated display of Total Energy Usage (82,135 kWh), Electricity Cost (₹6,57,080), Power Factor (74%), and Carbon Footprint (34.7 tCO2).'
        },
        {
          iconName: 'Activity',
          title: 'Sub-Second Real-Time Monitoring',
          description: 'Live electrical telemetry table capturing instantaneous kW, meter code MTR-001, timestamp intervals, and active load severity.'
        },
        {
          iconName: 'BarChart3',
          title: 'Multi-Period Consumption Analysis',
          description: 'Interactive consumption trends with daily, weekly, monthly, peak vs. off-peak, and load distribution breakdowns.'
        }
      ]
    },
    {
      groupName: 'Facility Hierarchy & Asset Infrastructure',
      groupTag: 'ASSET GOVERNANCE',
      items: [
        {
          iconName: 'Building2',
          title: 'Building & Department Management',
          description: 'Multi-tiered structural tree mapping meters to Main Building (MB01), Production Unit (PU01), and individual electrical distribution sub-panels.'
        },
        {
          iconName: 'Cpu',
          title: 'Industrial Equipment Register',
          description: 'Operational tracking for heavy electrical machinery: Rolling Mill Motor (EQ-001), Arc Furnace (EQ-002), Chiller Units, Air Compressors, and Pumps.'
        },
        {
          iconName: 'Sliders',
          title: 'System Settings & Telemetry Engine',
          description: 'Configurable system-wide parameters including anomaly Z-score thresholds, 15-second refresh rates, and simulation data source toggles.'
        }
      ]
    },
    {
      groupName: 'Cost Optimization & Regulatory Sustainability',
      groupTag: 'FINANCIALS & ESG',
      items: [
        {
          iconName: 'Coins',
          title: 'Electricity Cost & Tariff Management',
          description: 'Configurable time-of-day tariff structures calculating estimated monthly expenses against actual utility billing invoices.'
        },
        {
          iconName: 'AlertTriangle',
          title: 'Smart Threshold Alerts & Alarms',
          description: 'Automated notification engine dispatching critical alarms for power factor degradation (<0.70), demand overages, and missing meter telemetry.'
        },
        {
          iconName: 'Leaf',
          title: 'Carbon Footprint Management',
          description: 'Regulatory greenhouse gas accounting converting electrical kWh consumption to tCO2 with monthly budget tracking (300 tCO2 target).'
        },
        {
          iconName: 'Zap',
          title: 'Algorithmic Energy Optimization',
          description: 'Automated peak shaving and load shifting recommendations directing operators to run non-critical machinery during low-rate windows.'
        }
      ]
    },
    {
      groupName: 'Enterprise Security, RBAC & Mobile Client',
      groupTag: 'SECURITY & ANDROID',
      items: [
        {
          iconName: 'ShieldCheck',
          title: 'Role-Based Access Control (RBAC)',
          description: 'Granular user permission matrix provisioning Admin, Manager, Engineer, and Viewer tiers with complete administrative audit trails.'
        },
        {
          iconName: 'Smartphone',
          title: 'Native Android Mobile Client',
          description: 'Dedicated Android Studio application providing shop-floor engineers with mobile telemetry, alert notifications, and asset inspections.'
        },
        {
          iconName: 'FileText',
          title: 'Automated Reports & CSV Exports',
          description: 'Automated reporting generator providing downloadable audit spreadsheets, cost variance reports, and historical energy logs.'
        }
      ]
    }
  ],

  modules: [
    {
      id: 'dashboard',
      name: '01. Executive Energy Dashboard',
      purpose: 'Provide leadership with instantaneous visibility into total consumption, cost burn, grid power factor, and emissions.',
      description: 'The dashboard acts as the primary command center. It presents 4 high-level telemetry KPI cards (Total Usage: 82,135 kWh, Total Cost: ₹6,57,080, Power Factor: 74%, Carbon Footprint: 34.7 tCO2), alongside interactive consumption timeframes (1D, 1W, 1M, 3M, 1Y) with a dynamic target usage baseline.',
      userInteraction: 'Operators toggle between time periods, review the real-time energy distribution donut (Production 45%, HVAC 25%, Lighting 15%, Others 15%), inspect live meter readings, and review urgent energy-saving recommendations.',
      keyFeatures: [
        'Real-time KPI telemetry cards with 30-day percentage comparison',
        'Interactive consumption chart with historical and target lines',
        'Energy distribution donut with department and load type breakdowns',
        'Live meter status feed and recent alert ticker'
      ],
      image: '/projects/software-development/dashboard/executive_energy_cockpit.png',
      badge: 'EXECUTIVE OVERVIEW'
    },
    {
      id: 'real-time-monitoring',
      name: '02. Real-Time Energy Telemetry',
      purpose: 'Inspect active meter feeds to detect instantaneous surges and verify live grid synchronization.',
      description: 'Provides continuous sub-second data streaming directly from physical or simulated power meters (MTR-001). The interface displays interval reading times, instantaneous active kW, voltage levels, power factor telemetry, and operational status.',
      userInteraction: 'Engineers filter by meter ID, toggle between Latest Readings and Historical Logs, and inspect missing interval flags to identify telemetry transmission dropouts.',
      keyFeatures: [
        'Live data ingestion via REST API with configurable 15-second polling',
        'Interval-by-interval telemetry logs with meter code indexing',
        'Missing interval tracking to audit hardware connection integrity',
        'High load vs. Normal load classification'
      ],
      image: '/projects/software-development/modules/02_real_time_energy_monitoring.png',
      badge: 'LIVE TELEMETRY'
    },
    {
      id: 'building-department',
      name: '03. Building & Department Hierarchy',
      purpose: 'Model the physical and organizational layout of the facility to attribute energy consumption accurately.',
      description: 'Enables administrators to organize campus infrastructure into parent buildings (e.g., MB01 - Main Building, PU01 - Production Unit) and child departmental divisions. Meters and sub-meters are mapped to these nodes to enable granular accounting.',
      userInteraction: 'Facility managers create new building records, assign departmental budgets, link hardware meters, and edit structural facility configurations.',
      keyFeatures: [
        'Hierarchical facility modeling (Campus → Building → Department → Sub-meter)',
        'Full CRUD operations (Add, View, Edit, Delete) for building entities',
        'Direct meter-to-department association matrix',
        'Departmental energy allocation reporting'
      ],
      image: '/projects/software-development/modules/03_building_department_hierarchy.png',
      badge: 'FACILITY HIERARCHY'
    },
    {
      id: 'consumption-analytics',
      name: '04. Energy Consumption Analytics',
      purpose: 'Conduct deep-dive comparative analysis across time periods, shifts, and equipment loads.',
      description: 'Offers multi-dimensional analytics breaking down electricity consumption across Daily, Weekly, and Monthly intervals. It distinguishes between Peak and Off-Peak consumption windows and segments usage by load profiles.',
      userInteraction: 'Analysts query historical periods, evaluate peak-to-average ratios (PAR), compare weekday vs. weekend demand curves, and isolate departmental spikes.',
      keyFeatures: [
        'Time-series filtering (Daily, Weekly, Monthly, Custom Range)',
        'Peak vs. Off-Peak interval segmentation',
        'Department-wise comparative analytics',
        'Average kW demand and maximum demand peak tracking'
      ],
      image: '/projects/software-development/modules/04_energy_consumption_analytics.png',
      badge: 'DEEP ANALYTICS'
    },
    {
      id: 'cost-management',
      name: '05. Electricity Cost & Tariff Management',
      purpose: 'Accurately project utility expenses, model time-of-day tariffs, and reconcile commercial utility bills.',
      description: 'Translates raw kWh consumption into monetary expenses using configured multi-tier tariff schedules (peak rates, normal rates, off-peak rates, fixed demand charges, and electricity duty).',
      userInteraction: 'Finance and operations staff review estimated bills (e.g. October 2026: ₹6.57L), compare month-over-month expenditure variances, and update utility contract tariff schedules.',
      keyFeatures: [
        'Automated monthly cost projection engine',
        'Multi-tier Time-of-Day (TOD) tariff calculation support',
        'Bill variance reconciliation between utility invoices and internal meters',
        'Exportable cost audit summaries'
      ],
      image: '/projects/software-development/modules/05_electricity_cost_tariffs.png',
      badge: 'FINANCIAL CONTROL'
    },
    {
      id: 'smart-alerts',
      name: '06. Smart Alerts & Notification Engine',
      purpose: 'Protect electrical infrastructure and prevent billing surcharges through automated anomaly alerts.',
      description: 'Continuously monitors incoming telemetry against configured safety and efficiency bounds. The system automatically triggers alerts when consumption crosses threshold limits (e.g. >100 kWh), when power factor drops below 0.70, or when usage anomalies deviate beyond 3 standard deviations.',
      userInteraction: 'Maintenance engineers receive priority-sorted alarm notifications (Critical, High, Warning), review alert timestamps and meter IDs, and log corrective resolution actions.',
      keyFeatures: [
        'Automated condition monitoring (High Consumption, Low Power Factor, Usage Anomaly)',
        'Severity ranking hierarchy (Critical, High, Warning, Info)',
        '7-day historical alarm scan and incident resolution tracking',
        'Meter-level diagnostic alerts (e.g., MTR-001 481 kW in 15 min)'
      ],
      image: '/projects/software-development/modules/06_smart_alerts_notifications.png',
      badge: 'ANOMALY DETECTION'
    },
    {
      id: 'energy-optimization',
      name: '07. Algorithmic Energy Optimization',
      purpose: 'Provide actionable operational guidelines to eliminate energy waste and reduce maximum demand peaks.',
      description: 'An analytical recommendation engine that identifies operational inefficiencies and advises operators on load-shifting strategies, power factor capacitor corrections, and non-operational equipment shutdowns.',
      userInteraction: 'Plant supervisors review step-by-step recommendations such as "Shift flexible load out of peak hours to cut maximum demand" and "Switch off idle equipment during light-load intervals".',
      keyFeatures: [
        'Peak demand shaving suggestions based on 50% load concentration insights',
        'Power factor improvement recommendations to eliminate utility penalties',
        'Equipment idle-load detection algorithms',
        'Estimated monthly monetary savings calculation'
      ],
      image: '/projects/software-development/modules/07_energy_optimization_recommendations.png',
      badge: 'LOAD OPTIMIZATION'
    },
    {
      id: 'carbon-footprint',
      name: '08. Carbon Footprint Management',
      purpose: 'Quantify greenhouse gas emissions from electricity consumption for ESG compliance and sustainability reporting.',
      description: 'Calculates equivalent carbon dioxide emissions (tCO2) using an enterprise emission factor (0.42 kgCO2/kWh). It tracks 30-day cumulative emissions (34.7 - 35.1 tCO2) against a monthly ceiling budget (300 tCO2).',
      userInteraction: 'Sustainability officers track daily emission trends, review percentage changes versus prior 30-day baselines, and verify progress against ESG targets.',
      keyFeatures: [
        'Configurable grid greenhouse gas emission factor (0.42 kgCO2/kWh)',
        'Cumulative 30-day tCO2 emission calculations',
        'Target threshold comparison against monthly ceiling (300 tCO2/month)',
        'Day-by-day carbon emission telemetry logs'
      ],
      image: '/projects/software-development/modules/08_carbon_footprint_emissions.png',
      badge: 'ESG & EMISSIONS'
    },
    {
      id: 'equipment-management',
      name: '09. Equipment & Electrical Asset Register',
      purpose: 'Maintain a comprehensive inventory of heavy industrial machinery and associate them with sub-meters.',
      description: 'Catalogs major energy-consuming assets including Rolling Mill Motors (EQ-001), Arc Furnaces (EQ-002), Chiller Units (EQ-003), Air Compressors (EQ-004), and Cooling Tower Pumps (EQ-005), linking each asset to its governing department and power feed.',
      userInteraction: 'Engineers register new machinery, assign asset tags, update maintenance status, and view equipment-specific load histories.',
      keyFeatures: [
        'Industrial machinery registry with unique asset tags (EQ-001 to EQ-005)',
        'Mapping of equipment to buildings, departments, and sub-meters',
        'Operational asset tracking for high-consumption motors and chillers',
        'Equipment lifecycle and maintenance history linkage'
      ],
      image: '/projects/software-development/modules/09_equipment_asset_register.png',
      badge: 'ASSET REGISTRY'
    },
    {
      id: 'reports-documentation',
      name: '10. Reports & Documentation Export',
      purpose: 'Generate formatted compliance documentation, audit spreadsheets, and executive reports.',
      description: 'A centralized reporting studio that compiles energy usage, utility expenses, power factor efficiency, and alarm occurrences into downloadable formats.',
      userInteraction: 'Users select report periods (Daily, Monthly, Cost, Efficiency, Alerts) and click "Download CSV" to generate audit spreadsheets.',
      keyFeatures: [
        'One-click CSV data export for external spreadsheet auditing',
        'Structured tabular presentation of period, kWh, average kW, and peak demand',
        'Historical operational record archiving',
        'Multi-metric reporting: Usage, Cost, Efficiency, and Alerts'
      ],
      image: '/projects/software-development/modules/10_reports_export_documentation.png',
      badge: 'AUDIT & EXPORT'
    },
    {
      id: 'user-access-management',
      name: '11. User & Access Management (RBAC)',
      purpose: 'Enforce enterprise security through role-based access control and comprehensive administrative audit trails.',
      description: 'Governs user credentials, roles, and administrative permissions. Four distinct roles are enforced: Admin (full system configuration), Manager (financial reports & approvals), Engineer (equipment & alerts), and Viewer (read-only telemetry).',
      userInteraction: 'Administrators create accounts, assign roles (e.g. Sri Kavi / Admin, Mary Manager / Manager, Eric Engineer / Engineer, Vera Viewer / Viewer), and inspect immutable audit logs.',
      keyFeatures: [
        'Multi-tier role hierarchy (Admin, Manager, Engineer, Viewer)',
        'Granular feature and API endpoint access restrictions',
        'Comprehensive administrative audit logging with action timestamps',
        'Secure password credential management and user status governance'
      ],
      image: '/projects/software-development/modules/11_user_rbac_access_control.png',
      badge: 'ENTERPRISE SECURITY'
    },
    {
      id: 'system-settings',
      name: '12. System Settings & Configuration',
      purpose: 'Provide global administrators with control over operational parameters, thresholds, and data pipelines.',
      description: 'Stores and manages core application variables including alert anomaly Z-scores, high-kWh thresholds, low-PF cutoffs, monthly carbon targets, currency denomination, telemetry polling intervals, and active data source modes.',
      userInteraction: 'Authorized administrators review and modify key settings such as `alert.anomalyZ: 3`, `alert.highKwh: 100`, `alert.lowPf: 70`, `currency: INR`, and `meter.dataSource: SIMUL`.',
      keyFeatures: [
        'Global threshold adjustment for automated alarm engines',
        'Configurable telemetry refresh interval (default 15 seconds)',
        'Data source selection: Hardware Meter Feed vs. Simulation Engine',
        'Timezone and currency localization settings (Asia/Kolkata, INR)'
      ],
      image: '/projects/software-development/modules/12_system_settings_configuration.png',
      badge: 'SYSTEM CONFIG'
    }
  ],

  screenshots: [
    {
      id: 's-dash',
      title: 'Executive Energy Analytics Cockpit',
      category: 'Dashboard',
      image: '/projects/software-development/gallery/01_executive_dashboard.png',
      caption: 'Full-screen executive dashboard displaying energy usage metrics, consumption curves, and load distribution.',
      aspectBadge: '1910 × 913 // DESKTOP HD'
    },
    {
      id: 's-telemetry',
      title: 'Real-Time Meter Telemetry Stream',
      category: 'Telemetry',
      image: '/projects/software-development/gallery/02_real_time_telemetry.png',
      caption: 'Continuous live meter feed tracking meter code MTR-001, timestamp intervals, and instantaneous kW.',
      aspectBadge: '1915 × 897 // TELEMETRY GRID'
    },
    {
      id: 's-consumption',
      title: 'Energy Consumption Analysis Grid',
      category: 'Analytics',
      image: '/projects/software-development/gallery/03_consumption_breakdown.png',
      caption: 'Daily, weekly, and monthly consumption breakdowns comparing peak vs. off-peak intervals.',
      aspectBadge: '1900 × 901 // DATA TABLE'
    },
    {
      id: 's-cost',
      title: 'Electricity Cost & Tariff Management',
      category: 'Financials',
      image: '/projects/software-development/gallery/04_utility_cost_tariffs.png',
      caption: 'Utility cost estimations and tariff structure configuration for commercial bill reconciliation.',
      aspectBadge: '1915 × 895 // COST CALCULATOR'
    },
    {
      id: 's-alerts',
      title: 'Smart Anomaly Alerts & Alarms',
      category: 'Monitoring',
      image: '/projects/software-development/gallery/05_smart_alerts.png',
      caption: 'Threshold alarm queue prioritizing high-consumption spikes, low power factor, and meter anomalies.',
      aspectBadge: '1917 × 892 // ALERT QUEUE'
    },
    {
      id: 's-carbon',
      title: 'Carbon Footprint & Greenhouse Gas Accounting',
      category: 'ESG',
      image: '/projects/software-development/gallery/06_carbon_footprint.png',
      caption: 'Calculated greenhouse gas emissions (tCO2) benchmarked against monthly target ceilings.',
      aspectBadge: '1917 × 900 // EMISSION LOG'
    },
    {
      id: 's-equipment',
      title: 'Industrial Electrical Equipment Register',
      category: 'Assets',
      image: '/projects/software-development/gallery/07_equipment_assets.png',
      caption: 'Asset catalog tracking rolling mill motors, arc furnaces, chillers, and compressor pumps.',
      aspectBadge: '1913 × 892 // ASSET DIRECTORY'
    },
    {
      id: 's-optimization',
      title: 'Peak Shaving & Energy Optimization Engine',
      category: 'Optimization',
      image: '/projects/software-development/gallery/08_optimization_engine.png',
      caption: 'Algorithmic guidelines for shifting peak loads, improving power factor, and shutting down idle machines.',
      aspectBadge: '1917 × 890 // RECOMMENDATIONS'
    },
    {
      id: 's-rbac',
      title: 'User Access Control & Audit Logging',
      category: 'Security',
      image: '/projects/software-development/gallery/09_rbac_audit_logs.png',
      caption: 'Role-based access management governance across Admin, Manager, Engineer, and Viewer tiers.',
      aspectBadge: '1917 × 891 // RBAC DIRECTORY'
    },
    {
      id: 's-settings',
      title: 'Global System Parameter Configuration',
      category: 'Settings',
      image: '/projects/software-development/gallery/10_system_configuration.png',
      caption: 'Administrative settings controlling anomaly Z-scores, polling intervals, currency, and data modes.',
      aspectBadge: '1908 × 887 // CONFIGURATION'
    },
    {
      id: 's-auth',
      title: 'Enterprise Authentication Gateway',
      category: 'Authentication',
      image: '/projects/software-development/gallery/11_auth_portal.png',
      caption: 'Secure sign-in interface governing role authentication and session token initialization.',
      aspectBadge: '1917 × 895 // SECURE GATEWAY'
    },
    {
      id: 's-reports',
      title: 'Reports & CSV Documentation Studio',
      category: 'Reporting',
      image: '/projects/software-development/gallery/12_reports_documentation.png',
      caption: 'Exportable reporting suite compiling consumption, tariff costs, and efficiency logs into CSV format.',
      aspectBadge: '1917 × 910 // REPORT GENERATOR'
    }
  ],

  techStack: [
    {
      category: 'Backend & Microservices',
      technologies: [
        { name: 'Java 17+', role: 'Core Enterprise Programming Language', verified: true },
        { name: 'Spring Boot', role: 'Microservice Framework & Application Layer', verified: true },
        { name: 'Spring Security', role: 'JWT Authentication & Role-Based Access Control', verified: true },
        { name: 'RESTful API Services', role: 'JSON Data Ingestion & Client Communication', verified: true }
      ]
    },
    {
      category: 'Database & Persistence',
      technologies: [
        { name: 'MySQL Enterprise', role: 'Relational Database Management System', verified: true },
        { name: 'Hibernate / JPA', role: 'Object-Relational Mapping & Entity Lifecycle', verified: true },
        { name: 'Time-Series Indexing', role: 'Optimized 15-second Meter Reading Partitions', verified: true },
        { name: 'ACID Transaction Engine', role: 'Financial Tariff & Billing Reconciliation', verified: true }
      ]
    },
    {
      category: 'Frontend & Visual Cockpit',
      technologies: [
        { name: 'React 18 / Vite', role: 'High-Performance Single Page Application', verified: true },
        { name: 'HTML5 & CSS3', role: 'Semantic Markup & Responsive Layout Engine', verified: true },
        { name: 'Tailwind CSS', role: 'Industrial Dark Theme & Telemetry Design Tokens', verified: true },
        { name: 'Lucide Enterprise Icons', role: 'Industrial Vector Iconography', verified: true }
      ]
    },
    {
      category: 'Mobile Application',
      technologies: [
        { name: 'Android Studio', role: 'Native Android Application IDE', verified: true },
        { name: 'Java / Android SDK', role: 'Mobile UI Layouts & Telemetry Services', verified: true },
        { name: 'Retrofit / OkHttp', role: 'Encrypted REST API Client for Mobile', verified: true },
        { name: 'Push Notification Engine', role: 'Urgent Critical Alarm Dispatch', verified: true }
      ]
    },
    {
      category: 'Deployment & Edge Infrastructure',
      technologies: [
        { name: 'Vercel Edge Network', role: 'Production Web Deployment Platform', verified: true },
        { name: 'Spring Boot Container / VM', role: 'Production Application Layer Host', verified: true },
        { name: 'SSL / TLS Encryption', role: 'Encrypted In-Transit Telemetry Streams', verified: true },
        { name: 'CSV File Export Engine', role: 'Client-Side Audit Spreadsheet Generation', verified: true }
      ]
    }
  ],

  databaseSchema: {
    overview: 'The SEMS MySQL database schema is structured into normalized relational entities supporting high-frequency meter interval logging, hierarchical organizational relationships, and immutable security audit trails.',
    tables: [
      {
        name: 'meters',
        description: 'Physical and virtual electric meters across facility distribution boards.',
        fields: ['id (INT, PK)', 'meter_code (VARCHAR, e.g. MTR-001)', 'building_id (FK)', 'department_id (FK)', 'status (ENUM)', 'installation_date (DATE)']
      },
      {
        name: 'meter_readings',
        description: 'Time-series telemetry readings captured at 15-second to 15-minute intervals.',
        fields: ['id (BIGINT, PK)', 'meter_id (FK)', 'reading_time (DATETIME)', 'kwh (DECIMAL)', 'active_kw (DECIMAL)', 'power_factor (DECIMAL)', 'voltage (DECIMAL)']
      },
      {
        name: 'buildings',
        description: 'Campus real estate structures and manufacturing units.',
        fields: ['id (INT, PK)', 'code (VARCHAR, e.g. MB01, PU01)', 'name (VARCHAR)', 'location (VARCHAR)', 'total_area_sqft (INT)']
      },
      {
        name: 'departments',
        description: 'Operational business units mapped to buildings.',
        fields: ['id (INT, PK)', 'building_id (FK)', 'code (VARCHAR)', 'name (VARCHAR)', 'budget_monthly_kwh (DECIMAL)']
      },
      {
        name: 'equipment',
        description: 'Major industrial electrical machinery and connected motor loads.',
        fields: ['id (INT, PK)', 'asset_tag (VARCHAR, e.g. EQ-001)', 'name (VARCHAR)', 'department_id (FK)', 'rated_kw (DECIMAL)', 'operating_status (ENUM)']
      },
      {
        name: 'alerts',
        description: 'Automated threshold violation alarms and incident resolution logs.',
        fields: ['id (BIGINT, PK)', 'alert_type (VARCHAR)', 'severity (ENUM: CRITICAL, HIGH, WARNING)', 'meter_id (FK)', 'reading_value (DECIMAL)', 'threshold_value (DECIMAL)', 'created_at (DATETIME)', 'status (ENUM: OPEN, RESOLVED)']
      },
      {
        name: 'users',
        description: 'Authorized system operators and role privilege assignments.',
        fields: ['id (INT, PK)', 'username (VARCHAR, UNIQUE)', 'full_name (VARCHAR)', 'password_hash (VARCHAR)', 'role (ENUM: ADMIN, MANAGER, ENGINEER, VIEWER)', 'is_active (BOOLEAN)']
      },
      {
        name: 'system_settings',
        description: 'Global operational properties, alarm thresholds, and calculation parameters.',
        fields: ['setting_key (VARCHAR, PK)', 'setting_value (VARCHAR)', 'description (VARCHAR)', 'updated_at (DATETIME)']
      }
    ]
  },

  apiEndpoints: [
    { method: 'POST', path: '/api/auth/login', desc: 'Authenticate operator credentials and return session token with user role permissions.' },
    { method: 'GET', path: '/api/dashboard/summary', desc: 'Retrieve aggregated KPIs: Total kWh, electricity cost, average PF, and tCO2.' },
    { method: 'GET', path: '/api/meters/readings/live', desc: 'Stream instantaneous telemetry readings across all active meters (MTR-001).' },
    { method: 'GET', path: '/api/analytics/consumption', desc: 'Query multi-period historical usage with Daily, Weekly, Monthly, and Peak/Off-Peak grouping.' },
    { method: 'GET', path: '/api/tariffs/cost-estimate', desc: 'Calculate current billing cycle expenditure using configured time-of-day tariff rates.' },
    { method: 'GET', path: '/api/alerts/active', desc: 'Fetch unresolved critical, high, and warning alarms filtered by severity and meter ID.' },
    { method: 'GET', path: '/api/optimization/recommendations', desc: 'Generate algorithmic peak shaving and power factor correction recommendations.' },
    { method: 'GET', path: '/api/carbon/emissions', desc: 'Return equivalent tCO2 emissions calculated using the configured grid emission factor.' },
    { method: 'GET', path: '/api/equipment', desc: 'List industrial electrical assets (Rolling Mill, Arc Furnace, Chiller) with operational statuses.' },
    { method: 'GET', path: '/api/reports/export/csv', desc: 'Generate downloadable CSV spreadsheet containing detailed interval usage logs.' },
    { method: 'GET', path: '/api/settings', desc: 'Retrieve global system configuration variables (thresholds, currency, timezone, polling interval).' }
  ],

  testing: {
    documentedQualityAssurance: [
      {
        area: 'Authentication & Access Control',
        tests: 'Verified RBAC privileges across Admin, Manager, Engineer, and Viewer tiers. Ensured unauthenticated requests to protected endpoints return 401 Unauthorized.'
      },
      {
        area: 'Meter Telemetry Ingestion',
        tests: 'Validated 15-second interval polling from simulated meter source. Verified missing-interval detection flags when telemetry transmission is interrupted.'
      },
      {
        area: 'Threshold Anomaly Alarms',
        tests: 'Simulated high-consumption spikes (>100 kWh) and low power factor (<0.70). Verified instant alarm generation with correct severity rankings in the alert table.'
      },
      {
        area: 'Tariff & Billing Accuracy',
        tests: 'Benchmarked time-of-day mathematical calculations against sample utility tariff schedules. Verified peak, normal, and off-peak rate cost aggregation.'
      },
      {
        area: 'Cross-Device Responsiveness',
        tests: 'Tested responsive web layouts across desktop HD (1920x1080), tablet, and mobile viewports. Verified UI parity with native Android screen captures.'
      }
    ]
  },

  projectInfo: {
    projectName: 'SK Software – Smart Energy Management Software (SEMS)',
    clientBrand: 'DATAMINT AARVIX / SK Software',
    industry: 'Industrial IoT, Energy & Smart Manufacturing',
    projectCategory: 'Software Development / Energy Telemetry',
    applicationUrl: 'https://softweredev01.vercel.app/login',
    projectType: 'Dual-Platform Enterprise System (Web Application + Android Mobile Application)',
    mainFunctionalities: [
      'Sub-Second Electrical Meter Telemetry',
      'Executive KPI Cockpit (kWh, Cost, Power Factor, CO2)',
      'Building & Department Energy Allocation',
      'Time-of-Day Tariff Calculation & Cost Projection',
      'Automated High-Load & Low-PF Alarms',
      'Algorithmic Peak Shaving Recommendations',
      'Carbon Emissions Accounting (tCO2)',
      'Heavy Equipment Asset Registry',
      'Role-Based Access Control (Admin, Manager, Engineer, Viewer)',
      'Audit Logging & CSV Report Exports'
    ],
    verifiedTechnologies: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'React', 'HTML5/CSS3', 'Android Studio'],
    projectStatus: 'Live & Operational (Production Deployed)'
  }
};

