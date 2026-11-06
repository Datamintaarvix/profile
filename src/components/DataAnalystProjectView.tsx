import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ExternalLink,
  BarChart3,
  Database,
  LineChart,
  Eye,
  Maximize2,
  X,
  Sparkles,
  Layers,
  Activity,
  FileSpreadsheet,
  Gauge,
  FileDown
} from 'lucide-react';
import { SEOHead } from './SEOHead';

interface DataAnalystProjectViewProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
  onOpenQuote: (serviceCategory?: string) => void;
  onNavigate: (tabId: string) => void;
}

interface DashboardCard {
  id: string;
  title: string;
  category: string;
  metric: string;
  description: string;
  image: string;
}

interface KpiCard {
  label: string;
  value: string;
  unit?: string;
}

interface DataAnalystDetailContent {
  overview: string;
  toolsUsed: string[];
  kpiCards?: KpiCard[];
  kpiImage?: string;
  mainDashboardImage?: string;
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  referenceImage: string;
  overviewOfProject: {
    heading: string;
    content: string;
    referenceImage: string;
  };
  detailedExplanation: {
    heading: string;
    paragraphs: string[];
  };
  dashboards: DashboardCard[];
  detailedVisuals?: DashboardCard[];
  toolsUsedForThis: {
    capability: string;
    tools: string[];
    purpose: string;
  }[];
  workflowSteps?: string[];
  dashboardUrl?: string;
  pdfDownloadUrl?: string;
  pdfDownloadName?: string;
  predictsAndEnhanced: {
    whatWePredict: {
      title: string;
      description: string;
    }[];
    whatWeEnhanced: {
      title: string;
      description: string;
    }[];
    predictsLabel?: string;
    enhancedLabel?: string;
  };
}

const dataAnalystRepository: Record<string, DataAnalystDetailContent> = {
  'project-09': {
    overview: 'An end-to-end interactive decision intelligence platform uniting multi-branch transactional ERPs, live streaming ETL pipelines, and executive forecasting cockpits to deliver sub-second business visibility across all operations.',
    toolsUsed: ['Power BI', 'Tableau', 'Python (Pandas / NumPy)', 'SQL', 'Snowflake', 'dbt Core', 'Apache Airflow', 'Scikit-Learn'],
    processSteps: [
      {
        number: '01',
        title: 'Data Ingestion & Pipeline Orchestration',
        description: 'Captured, validated, and streamed transactional data from 16 regional ERP hubs, CRM databases, and payment gateways into a unified ingestion queue with zero record loss.'
      },
      {
        number: '02',
        title: 'Automated Cleansing & Schema Normalization',
        description: 'Engineered dbt transformation pipelines to resolve duplicate entries, normalize disparate currency rates, impute missing values, and structure high-performance star-schema data marts.'
      },
      {
        number: '03',
        title: 'Statistical Modeling & Exploratory Analytics',
        description: 'Applied multivariate regression, cohort retention models, and statistical distribution tests to uncover seasonal demand shifts, regional margin variances, and operational drag.'
      },
      {
        number: '04',
        title: 'Business Intelligence & Executive Cockpits',
        description: 'Designed role-tailored dashboards with sub-second cross-filtering, interactive drill-downs, automated anomaly alerts, and scheduled executive KPI digests.'
      }
    ],
    referenceImage: '/service/dataanalytics.png',
    overviewOfProject: {
      heading: 'Enterprise Scope & Analytical Mandate',
      content: 'The engagement focused on transforming a multi-million-dollar distributed enterprise from reactive month-end Excel reporting into a proactive, data-driven organization with real-time operational telemetry and predictive foresight.',
      referenceImage: '/service/dataanalytics.png'
    },
    detailedExplanation: {
      heading: 'Detailed Project Explanation & Architecture',
      paragraphs: [
        'Prior to implementation, executive leadership relied on fragmented weekly spreadsheets exported from disconnected accounting and warehouse software. Producing quarterly board reports required 14 business days of manual collation, creating severe latency in identifying margin degradation and inventory supply bottlenecks.',
        'Our engineering team deployed a scalable modern data lakehouse architecture. We built streaming ETL pipelines using Apache Airflow and dbt that continuously extract, clean, and model data into Snowflake columnar analytical storage. Every dataset undergoes automated schema validation, deduplication, and row-level security masking before reaching executive visualization layers.',
        'At the presentation layer, role-scoped BI dashboards empower departmental heads with instantaneous drill-downs from macro company-wide KPIs down to granular regional order line items, eliminating reliance on manual spreadsheet formulas.'
      ]
    },
    dashboards: [
      {
        id: 'dash-1',
        title: 'Executive Revenue Velocity & Margin Cockpit',
        category: 'Executive BI',
        metric: '+18.4% Net Margin Clarity',
        description: 'Real-time gross margin run-rates, customer acquisition cost payback, and ARR trajectories with dynamic time-series comparisons.',
        image: '/project/businessdashboardworkspace.png'
      },
      {
        id: 'dash-2',
        title: 'Customer Cohort Retention & Churn Intelligence',
        category: 'Customer Intelligence',
        metric: '94.6% Churn Prediction Accuracy',
        description: 'Multi-cohort retention decay heatmaps, customer lifetime value (LTV) projections, and automated risk scoring flagging at-risk accounts.',
        image: '/home/businessmanagementdashboardinterface.png'
      },
      {
        id: 'dash-3',
        title: 'Regional Supply Chain & Warehouse Fulfillment',
        category: 'Operations Telemetry',
        metric: '34% Lower Surplus Inventory',
        description: 'Cross-facility inventory turnover rates, fulfillment cycle times, supplier lead-time variances, and stock-out hazard detection.',
        image: '/home/cinematicautomatedwarehousefulfillment.png'
      },
      {
        id: 'dash-4',
        title: 'Predictive Demand & Scenario Variance Simulation',
        category: 'Predictive Analytics',
        metric: 'Sub-Second Scenario Modeling',
        description: 'Monte Carlo cash runway simulations, seasonal forecasting models, and sensitivity analyses modeling raw material inflation.',
        image: '/home/technologydesignedaroundrealbusinessneeds.png'
      }
    ],
    toolsUsedForThis: [
      {
        capability: 'Data Extraction & Streaming Pipelines',
        tools: ['Apache Airflow', 'dbt Core', 'Python', 'SQL (PostgreSQL/MySQL)'],
        purpose: 'Automated data ingestion from multi-branch ERPs, CRM APIs, and transactional databases with zero downtime.'
      },
      {
        capability: 'Analytical Warehousing & Lakehouse',
        tools: ['Snowflake', 'Google BigQuery', 'AWS S3 Data Lake'],
        purpose: 'Optimized columnar storage with sub-second execution on multi-million row aggregation queries.'
      },
      {
        capability: 'Statistical Modeling & Computation',
        tools: ['Pandas', 'NumPy', 'SciPy', 'Scikit-Learn', 'Jupyter'],
        purpose: 'Cohort survival analysis, demand curve forecasting, price elasticity modeling, and anomaly detection.'
      },
      {
        capability: 'Executive Dashboards & BI Layer',
        tools: ['Power BI', 'Tableau', 'Looker Studio', 'Metabase'],
        purpose: 'Dynamic interactive visual interfaces with role-based row-level security and responsive mobile access.'
      }
    ],
    predictsAndEnhanced: {
      whatWePredict: [
        {
          title: '94.6% Demand Forecasting Accuracy',
          description: 'Multivariate predictive models factoring historical purchasing cycles, holiday seasonality, and supplier lead-time variances.'
        },
        {
          title: '30-Day Early Warning Churn Radar',
          description: 'Statistical anomaly scoring identifying behavioral usage drop-offs weeks before contract renewal cancellations.'
        },
        {
          title: 'Automated Margin Leakage Alerts',
          description: 'Threshold algorithms monitoring freight surcharges, unapproved discount drift, and vendor price variances in real time.'
        },
        {
          title: 'Multi-Scenario Cash Runway Projections',
          description: 'Dynamic Monte Carlo simulations modeling revenue outcomes under varying inflation, interest rate, and lead-time shocks.'
        }
      ],
      whatWeEnhanced: [
        {
          title: '12x Faster Executive Reporting Cycles',
          description: 'Reduced monthly reporting turnaround from 14 business days of manual spreadsheet collation to live, real-time sync.'
        },
        {
          title: '34% Surplus Inventory Cost Reduction',
          description: 'Replaced manual warehouse guessing with algorithmic safety-stock reorder points, cutting carrying costs significantly.'
        },
        {
          title: 'Unified Single Source of Truth (SSOT)',
          description: 'Consolidated 16 disconnected regional databases into an audited, centralized cloud analytical warehouse.'
        },
        {
          title: '100% Automated Ledger & Telemetry Integrity',
          description: 'Replaced manual spreadsheets with automated validation rules that catch and flag reconciliation discrepancies immediately.'
        }
      ]
    }
  },
  'project-17': {
    overview: 'An integrated clinical analytics and hospital operations engine uniting patient electronic health records, emergency triage wait times, and ICU telemetry into real-time decision cockpits.',
    toolsUsed: ['Power BI', 'Python (SciPy / Pandas)', 'SQL', 'Snowflake Health Cloud', 'Apache Airflow', 'Tableau', 'FastAPI'],
    processSteps: [
      {
        number: '01',
        title: 'Clinical Data Ingestion & Sanitization',
        description: 'Captured and tokenized streaming patient admissions, triage logs, and pharmaceutical dispensation records under strict HIPAA-compliant protocols.'
      },
      {
        number: '02',
        title: 'FHIR Schema Normalization & Lakehouse Storage',
        description: 'Normalized proprietary hospital software records into standardized FHIR health data schemas within a secure analytical data warehouse.'
      },
      {
        number: '03',
        title: 'Predictive Patient Risk & Acuity Modeling',
        description: 'Implemented clinical risk scoring models predicting 30-day readmission risk, septic shock early warnings, and emergency length-of-stay.'
      },
      {
        number: '04',
        title: 'Departmental Cockpits & Hospital Operations BI',
        description: 'Deployed ward-specific telemetry dashboards for nursing directors, pharmacy inventory controllers, and hospital chief medical officers.'
      }
    ],
    referenceImage: '/home/businessmanagementdashboardinterface.png',
    overviewOfProject: {
      heading: 'Clinical Scope & Operational Mandate',
      content: 'Designed to optimize hospital bed utilization, eliminate pharmaceutical stock-outs, and provide chief medical officers with verifiable clinical intelligence across 4 regional medical centers.',
      referenceImage: '/home/businessmanagementdashboardinterface.png'
    },
    detailedExplanation: {
      heading: 'Detailed Clinical Architecture & Governance',
      paragraphs: [
        'Hospital departments previously operated in isolated silos. Intensive Care, General Wards, and Central Pharmacy used independent software systems with no shared telemetry, leading to unexpected bed shortages and medication allocation delays.',
        'We engineered an automated data pipeline consolidating patient records into an encrypted analytical lakehouse with role-based patient de-identification. Automated algorithms compute clinical acuity scores and predict patient discharge timelines.',
        'Clinical supervisors now access real-time ward heatmaps indicating bed availability, pending discharges, and staffing ratios, substantially improving clinical response velocity.'
      ]
    },
    dashboards: [
      {
        id: 'dash-1',
        title: 'Hospital Operations & Bed Occupancy Telemetry',
        category: 'Hospital Operations',
        metric: '98.2% Bed Allocation Efficiency',
        description: 'Real-time ICU and ward bed occupancy, pending transfers, and projected discharge heatmaps across all medical facilities.',
        image: '/project/businessdashboardworkspace.png'
      },
      {
        id: 'dash-2',
        title: '30-Day Readmission Risk & Clinical Triage',
        category: 'Clinical Intelligence',
        metric: '22% Reduction in Readmissions',
        description: 'Predictive risk stratification flagging patients requiring specialized post-discharge outpatient monitoring.',
        image: '/home/businessmanagementdashboardinterface.png'
      },
      {
        id: 'dash-3',
        title: 'Central Pharmacy & Medication Inventory Control',
        category: 'Pharmaceutical Telemetry',
        metric: 'Zero Critical Medication Stockouts',
        description: 'Batch expiration tracking, automated consumption run-rates, and predictive reorder warnings for critical intensive care pharmaceuticals.',
        image: '/home/cinematicautomatedwarehousefulfillment.png'
      },
      {
        id: 'dash-4',
        title: 'Emergency Department Throughput & Wait Time Radar',
        category: 'Emergency Operations',
        metric: '42-Min Average Triage Time Saved',
        description: 'Live emergency department queue telemetry, patient acuity breakdown, and physician-to-patient staffing ratio balances.',
        image: '/home/technologydesignedaroundrealbusinessneeds.png'
      }
    ],
    toolsUsedForThis: [
      {
        capability: 'Health Data Extraction & Ingestion',
        tools: ['Apache Airflow', 'Python', 'HL7/FHIR Connectors', 'SQL'],
        purpose: 'Real-time extraction of patient admission, discharge, and transfer (ADT) telemetry with zero data corruption.'
      },
      {
        capability: 'HIPAA-Compliant Analytical Lakehouse',
        tools: ['Snowflake Health Cloud', 'AWS PrivateLink', 'PostgreSQL'],
        purpose: 'End-to-end encrypted analytical warehouse featuring column-level anonymization and cryptographic access audits.'
      },
      {
        capability: 'Predictive Clinical Modeling',
        tools: ['Python (Scikit-Learn, SciPy)', 'Pandas', 'Lifelines'],
        purpose: 'Survival analysis, readmission risk stratification, and patient length-of-stay estimation.'
      },
      {
        capability: 'Clinical BI & Ward Dashboards',
        tools: ['Power BI', 'Tableau', 'Custom Web Cockpits'],
        purpose: 'High-availability visual displays deployed across nurses stations, department head screens, and tablets.'
      }
    ],
    predictsAndEnhanced: {
      whatWePredict: [
        {
          title: '30-Day Patient Readmission Likelihood',
          description: 'Acuity algorithms evaluating patient medical history, lab results, and recovery trajectory to predict readmission risks.'
        },
        {
          title: 'ICU & Emergency Surge Forecasting',
          description: 'Time-series forecasting predicting seasonal viral surges, emergency room inflow, and intensive care bed demand.'
        },
        {
          title: 'Pharmaceutical Depletion Deadlines',
          description: 'Predictive consumption models calculating the exact depletion date of essential pharmaceuticals based on ward census.'
        },
        {
          title: 'Discharge Timeline Projections',
          description: 'Recovery models estimating patient discharge readiness 24 to 48 hours in advance to optimize bed turnaround.'
        }
      ],
      whatWeEnhanced: [
        {
          title: '22% Reduction in 30-Day Readmission Rates',
          description: 'Early intervention programs triggered automatically for high-risk patients substantially lowered unplanned hospital readmissions.'
        },
        {
          title: 'Zero Critical Medication Stockouts',
          description: 'Automated pharmaceutical safety stock alerts eliminated emergency medication shortages across all 4 regional facilities.'
        },
        {
          title: '42 Minutes Saved in Emergency Triage',
          description: 'Real-time patient prioritization and bed availability dashboards significantly accelerated emergency room admissions.'
        },
        {
          title: '100% HIPAA Regulatory Compliance',
          description: 'Automated de-identification and immutable access logging ensured full regulatory compliance across clinical analytics.'
        }
      ]
    }
  },
  'project-18': {
    detailedVisuals: [
      {
            "id": "grok-v1",
            "title": "Executive KPI Cards: Revenue & Volume",
            "category": "Core KPIs",
            "metric": "$1.20M Sales | $141 Avg | 8,523 Items | 3.9 Rating",
            "description": "Consolidated executive metric cards tracking total sales, average sales per transaction, catalog item count, and customer satisfaction ratings.",
            "image": "/dataanalyst_project/grokal/grokal_kpi_cards.png"
      },
      {
            "id": "grok-v2",
            "title": "Outlet Establishment Growth Curve",
            "category": "Historical Trends",
            "metric": "Historical Peak $205K (2018)",
            "description": "Longitudinal sales performance mapped across outlet establishment years, showing expansion spikes in 2018.",
            "image": "/dataanalyst_project/grokal/Outlet establishment.png"
      },
      {
            "id": "grok-v3",
            "title": "Outlet Type Performance & Visibility Matrix",
            "category": "Outlet Benchmarking",
            "metric": "Supermarket Type 1 $787.55K",
            "description": "Detailed comparison of Supermarket Type 1 ($787.55K, 5,577 items), Grocery Store ($151.94K), Type 2 & 3 outlets with item visibility indices.",
            "image": "/dataanalyst_project/grokal/sales by outlet type.png"
      },
      {
            "id": "grok-v4",
            "title": "Item Category & Fat Content Revenue Split",
            "category": "Category Intelligence",
            "metric": "Fruits & Snacks ($0.18M each)",
            "description": "High-resolution donut and bar chart analyzing item category sales contributions and regular vs low-fat preference.",
            "image": "/dataanalyst_project/grokal/Screenshot 2026-10-29 104941.png"
      },
      {
            "id": "grok-v5",
            "title": "Fat Content Distribution Across Outlet Tiers",
            "category": "Merchandising",
            "metric": "Tier 3 $0.31M Low Fat Lead",
            "description": "Cross-dimensional distribution of Low Fat ($776K) vs Regular ($425K) sales across Tier 1, Tier 2, and Tier 3 retail zones.",
            "image": "/dataanalyst_project/grokal/fatcontentbyoutlet&itemtype.png"
      }
],
    overview: 'Developed an interactive Power BI dashboard to analyze retail sales performance across product categories, outlet types, outlet sizes, location tiers, and outlet establishment years. The dashboard consolidates important business KPIs and interactive visualizations into a unified reporting interface to support data-driven retail decisions.',
    toolsUsed: [
      'Microsoft Power BI',
      'DAX',
      'Power Query',
      'Microsoft Excel',
      'SQL',
      'Data Visualization',
      'Business Intelligence'
    ],
    kpiCards: [
      { label: 'Total Sales', value: '$1.20M' },
      { label: 'Average Sales', value: '$141' },
      { label: 'Number of Items', value: '8,523' },
      { label: 'Average Rating', value: '3.9' }
    ],
    kpiImage: '/dataanalyst_project/grokal/grokal_kpi_cards.png',
    mainDashboardImage: '/dataanalyst_project/grokal/grokal_main_dashboard.png',
    pdfDownloadUrl: '/dataanalyst_project/grokal/Grokal_Sales_Outlet_Performance_Analysis.pdf',
    pdfDownloadName: 'Grokal_Sales_Outlet_Performance_Analysis.pdf',
    processSteps: [
      {
        number: '01',
        title: 'Data Preparation & Transformation',
        description: 'Prepared the retail dataset by checking data quality, standardizing data types, handling missing values where applicable, and organizing product and outlet attributes for analysis.'
      },
      {
        number: '02',
        title: 'Data Modeling & KPI Development',
        description: 'Designed the analytical model and developed measures for total sales, average sales, item count, average rating, and outlet-level performance.'
      },
      {
        number: '03',
        title: 'Exploratory Data Analysis',
        description: 'Examined product category contributions, fat-content distribution, outlet-size performance, outlet types, location tiers, and sales trends by establishment year.'
      },
      {
        number: '04',
        title: 'Interactive Dashboard Development',
        description: 'Built an interactive Power BI dashboard using KPI cards, donut charts, bar charts, historical trend visualizations, comparative tables, and slicers.'
      }
    ],
    referenceImage: '/dataanalyst_project/grokal/grokal_category_analysis.png',
    overviewOfProject: {
      heading: 'Grokal Retail Sales & Outlet Performance Intelligence',
      content: 'Developed an interactive Power BI dashboard to analyze retail sales performance across product categories, outlet types, outlet sizes, location tiers, and outlet establishment years. The dashboard consolidates important business KPIs and interactive visualizations into a unified reporting interface to support data-driven retail decisions.',
      referenceImage: '/dataanalyst_project/grokal/grokal_establishment_trend.png'
    },
    detailedExplanation: {
      heading: 'Grokal Retail Intelligence — Analytical Architecture & Scope',
      paragraphs: [
        'The Grokal retail analytics dashboard was developed to provide comprehensive visibility into sales performance across a multi-outlet retail network. Prior to this dashboard, sales reporting relied on fragmented Excel exports that offered limited ability to compare outlet performance, understand product category trends, or track historical establishment-year patterns.',
        'The dashboard was built using Power BI with custom DAX measures for KPI calculations, Power Query for data transformation, and a structured data model that connects product attributes (item type, fat content) with outlet attributes (outlet type, outlet size, location tier, establishment year).',
        'The resulting dashboard provides business teams with a single interactive interface to monitor key retail metrics, compare outlet segments, analyze product category performance, and track sales evolution over time — all without requiring manual spreadsheet work.'
      ]
    },
    dashboards: [
      {
        id: 'dash-1',
        title: 'Dashboard 1: Retail Sales Overview',
        category: 'KPI Monitoring',
        metric: 'Total Sales: $1.20M | Avg Sales: $141',
        description: 'Full dashboard overview highlighting total sales ($1.20M), average sales ($141), number of items (8,523), and average ratings (3.9) across the retail network.',
        image: '/dataanalyst_project/grokal/grokal_main_dashboard.png'
      },
      {
        id: 'dash-2',
        title: 'Dashboard 2: Product Category Analysis',
        category: 'Category Intelligence',
        metric: 'Fat Content & Item Types',
        description: 'Highlighting fat-content sales distribution (Low Fat vs. Regular) and item-type sales contribution across product categories.',
        image: '/dataanalyst_project/grokal/grokal_category_analysis.png'
      },
      {
        id: 'dash-3',
        title: 'Dashboard 3: Outlet Establishment Trends',
        category: 'Historical Trends',
        metric: 'Establishment Timeline',
        description: 'Highlighting historical sales patterns and growth trajectories mapped across outlet establishment years from inception to present.',
        image: '/dataanalyst_project/grokal/grokal_establishment_trend.png'
      },
      {
        id: 'dash-4',
        title: 'Dashboard 4: Outlet Performance Comparison',
        category: 'Outlet Benchmarking',
        metric: 'Size, Location Tier & Type',
        description: 'Highlighting outlet-size segments (Small, Medium, High), outlet-location-tier benchmarks (Tier 1, Tier 2, Tier 3), and outlet-type comparisons.',
        image: '/dataanalyst_project/grokal/grokal_outlet_type.png'
      }
    ],
    toolsUsedForThis: [
      {
        capability: 'Data Preparation & Transformation',
        tools: ['Power Query', 'Microsoft Excel'],
        purpose: 'Data quality checks, standardizing data types, handling missing values, and organizing product and outlet attributes for analysis.'
      },
      {
        capability: 'Data Modeling & KPI Development',
        tools: ['DAX', 'Microsoft Power BI'],
        purpose: 'Analytical modeling and custom DAX measures for total sales, average sales, item count, average rating, and outlet-level performance.'
      },
      {
        capability: 'Exploratory Data Analysis',
        tools: ['SQL', 'Power BI'],
        purpose: 'Product category contributions, fat-content distribution, outlet-size performance, outlet types, location tiers, and establishment trends.'
      },
      {
        capability: 'Interactive Dashboard Development',
        tools: ['Microsoft Power BI', 'Data Visualization', 'Business Intelligence'],
        purpose: 'KPI cards, donut charts, bar charts, historical trend visualizations, comparative tables, and slicers in a unified reporting interface.'
      }
    ],
    workflowSteps: [
      'Retail Dataset',
      'Data Cleaning & Transformation',
      'Data Modeling & DAX',
      'Power BI Visualizations',
      'Business Insights'
    ],
    predictsAndEnhanced: {
      predictsLabel: 'What We Analyze',
      enhancedLabel: 'Business Value',
      whatWePredict: [
        {
          title: 'Product Category Performance',
          description: 'Compare sales across item categories and identify major revenue contributors.'
        },
        {
          title: 'Outlet Establishment Trends',
          description: 'Examine historical sales patterns by establishment year.'
        },
        {
          title: 'Outlet Size and Location',
          description: 'Compare outlet tiers and size segments.'
        },
        {
          title: 'Fat Content Analysis',
          description: 'Compare sales contribution from low-fat and regular products.'
        },
        {
          title: 'Outlet Type Benchmarking',
          description: 'Compare sales, item counts, average sales, ratings, and item visibility.'
        }
      ],
      whatWeEnhanced: [
        {
          title: 'Centralized KPI Monitoring',
          description: 'Centralized KPI monitoring through a single interactive dashboard.'
        },
        {
          title: 'Improved Visibility',
          description: 'Improved visibility into product and outlet performance.'
        },
        {
          title: 'Faster Retail Comparison',
          description: 'Faster comparison of retail segments.'
        },
        {
          title: 'Informed Merchandising',
          description: 'Better-informed merchandising and assortment discussions.'
        },
        {
          title: 'Strategic Analytics Foundation',
          description: 'A foundation for future sales forecasting and inventory optimization.'
        }
      ]
    }
  },
  'project-19': {
    detailedVisuals: [
      {
            "id": "sc-v-11",
            "title": "KPI: Total Units Sold",
            "category": "Executive Overview",
            "metric": "9.98M Units Sold",
            "description": "Primary demand-volume measure showing total units sold across all channels during the reporting period.",
            "image": "/dataanalyst_project/ai_supply_chain/executive/11.png"
      },
      {
            "id": "sc-v-111",
            "title": "KPI: Total Units Ordered",
            "category": "Executive Overview",
            "metric": "8.04M Units Ordered",
            "description": "Total customer order volume benchmarked against fulfilled demand.",
            "image": "/dataanalyst_project/ai_supply_chain/executive/111.png"
      },
      {
            "id": "sc-v-1111",
            "title": "KPI: Total Inventory Level & Average Forecast",
            "category": "Executive Overview",
            "metric": "20.1M Stock | 141.49 Avg Forecast",
            "description": "Macro inventory holding volume compared against machine learning average demand forecast.",
            "image": "/dataanalyst_project/ai_supply_chain/executive/1111.png"
      },
      {
            "id": "sc-v-12",
            "title": "Executive Key Insights Strip",
            "category": "Executive Overview",
            "metric": "+4.7% Period-over-Period Growth",
            "description": "Executive summary banner highlighting +4.7% sales growth, Electronics lead (20.3% / 2.03M units), and East region dominance (2.51M units).",
            "image": "/dataanalyst_project/ai_supply_chain/executive/12.png"
      },
      {
            "id": "sc-v-13",
            "title": "Reporting Period & Date Horizon Slicer",
            "category": "Executive Overview",
            "metric": "01 Jan 2022 - 01 Jan 2024 Window",
            "description": "Interactive date range slider governing time-series windows and comparative period benchmarks.",
            "image": "/dataanalyst_project/ai_supply_chain/executive/13.png"
      },
      {
            "id": "sc-v-14",
            "title": "Total Units Sold Trend Curve",
            "category": "Executive Overview",
            "metric": "385K - 438K Monthly Range",
            "description": "Longitudinal sales time-series tracking cyclical demand swings and volume momentum.",
            "image": "/dataanalyst_project/ai_supply_chain/executive/14.png"
      },
      {
            "id": "sc-v-15",
            "title": "Units Sold by Product Category",
            "category": "Executive Overview",
            "metric": "Furniture 20.3% | Groceries 20.05%",
            "description": "Donut chart displaying balanced category contributions across Furniture, Groceries, Clothing, Toys, and Electronics.",
            "image": "/dataanalyst_project/ai_supply_chain/executive/15.png"
      },
      {
            "id": "sc-v-16",
            "title": "Units Sold by Day of Week",
            "category": "Executive Overview",
            "metric": "Peak at 1.44M on Sunday",
            "description": "Weekday demand cadence showing consistent throughput rising toward weekend consumer volume.",
            "image": "/dataanalyst_project/ai_supply_chain/executive/16.png"
      },
      {
            "id": "sc-v-17",
            "title": "Units Sold by Geographic Region",
            "category": "Executive Overview",
            "metric": "East (2.51M) & South (2.51M)",
            "description": "Horizontal regional comparison highlighting balanced demand across East, South, North, and West territories.",
            "image": "/dataanalyst_project/ai_supply_chain/executive/17.png"
      },
      {
            "id": "sc-v-18",
            "title": "Product Line Navigation Slicer",
            "category": "Executive Overview",
            "metric": "Multi-Category Slicer",
            "description": "Categorical filter enabling instant cross-filtering across store formats and merchandise lines.",
            "image": "/dataanalyst_project/ai_supply_chain/executive/18.png"
      },
      {
            "id": "sc-v-19",
            "title": "Executive Operations Summary Panel",
            "category": "Executive Overview",
            "metric": "Fulfillment & Pipeline Health",
            "description": "Overview panel consolidating order fulfillment rates and pipeline throughput.",
            "image": "/dataanalyst_project/ai_supply_chain/executive/19.png"
      },
      {
            "id": "sc-v-21",
            "title": "KPI: Total Inventory Stock",
            "category": "Inventory & Operations",
            "metric": "20.1M Units in Storage",
            "description": "Total physical inventory volume across all regional fulfillment centers.",
            "image": "/dataanalyst_project/ai_supply_chain/inventory/21.png"
      },
      {
            "id": "sc-v-22",
            "title": "KPI: Low Inventory Stockout Alerts",
            "category": "Inventory & Operations",
            "metric": "8.0K SKUs at Depletion Risk",
            "description": "Critical safety threshold alert flagging 8.0K product records with stock below required safety buffer.",
            "image": "/dataanalyst_project/ai_supply_chain/inventory/22.png"
      },
      {
            "id": "sc-v-222",
            "title": "KPI: Average Inventory Level",
            "category": "Inventory & Operations",
            "metric": "274.47 Units Average per Record",
            "description": "Average inventory holding per active product line across warehouse facilities.",
            "image": "/dataanalyst_project/ai_supply_chain/inventory/222.png"
      },
      {
            "id": "sc-v-2222",
            "title": "KPI: Replenishment Orders Volume",
            "category": "Inventory & Operations",
            "metric": "8.04M Units Ordered",
            "description": "Purchase order replenishment pipeline initiated with manufacturing suppliers.",
            "image": "/dataanalyst_project/ai_supply_chain/inventory/2222.png"
      },
      {
            "id": "sc-v-23",
            "title": "KPI: Average Discount Percentage",
            "category": "Inventory & Operations",
            "metric": "10.01% Commercial Discount",
            "description": "Average promotional discounting applied across product categories.",
            "image": "/dataanalyst_project/ai_supply_chain/inventory/23.png"
      },
      {
            "id": "sc-v-24",
            "title": "Warehouse & Store Location Slicer",
            "category": "Inventory & Operations",
            "metric": "Facility Filter Console",
            "description": "Dynamic filter controls isolating stock metrics by distribution hub and retail branch.",
            "image": "/dataanalyst_project/ai_supply_chain/inventory/24.png"
      },
      {
            "id": "sc-v-25",
            "title": "Inventory Stock vs Units Sold Comparison",
            "category": "Inventory & Operations",
            "metric": "Turnover Health Diagnostics",
            "description": "Bivariate comparison identifying overstocked SKUs versus fast-selling products with high stockout risk.",
            "image": "/dataanalyst_project/ai_supply_chain/inventory/25.png"
      },
      {
            "id": "sc-v-26",
            "title": "Units Sold by Retail Store Outlet",
            "category": "Inventory & Operations",
            "metric": "Store Network Throughput",
            "description": "Sales volume benchmarked across retail branches to optimize inventory transfer routing.",
            "image": "/dataanalyst_project/ai_supply_chain/inventory/26.png"
      },
      {
            "id": "sc-v-27",
            "title": "Inventory Status by Product Category",
            "category": "Inventory & Operations",
            "metric": "Stockout vs Adequate Ratio",
            "description": "Classification of inventory health across categories, surfacing vulnerable merchandise lines.",
            "image": "/dataanalyst_project/ai_supply_chain/inventory/27.png"
      },
      {
            "id": "sc-v-28",
            "title": "Granular SKU Inventory Register Table",
            "category": "Inventory & Operations",
            "metric": "Item-Level Stock Telemetry",
            "description": "Interactive data table showing individual SKU stock levels, safety stock points, and reorder alerts.",
            "image": "/dataanalyst_project/ai_supply_chain/inventory/28.png"
      },
      {
            "id": "sc-v-29",
            "title": "Inventory Operations Header Banner",
            "category": "Inventory & Operations",
            "metric": "Warehouse Operations Cockpit",
            "description": "Context header defining inventory parameters and operational scope.",
            "image": "/dataanalyst_project/ai_supply_chain/inventory/29.png"
      },
      {
            "id": "sc-v-31",
            "title": "KPI: Mean Absolute Error (MAE)",
            "category": "Demand Forecasting",
            "metric": "MAE = 135.39 Units",
            "description": "Average absolute difference between ML forecast predictions and actual historical unit demand.",
            "image": "/dataanalyst_project/ai_supply_chain/forecast/31.png"
      },
      {
            "id": "sc-v-32",
            "title": "KPI: Root Mean Squared Error (RMSE)",
            "category": "Demand Forecasting",
            "metric": "RMSE = 176.16 Units",
            "description": "Model dispersion metric penalizing larger forecast errors to ensure tight safety buffer modeling.",
            "image": "/dataanalyst_project/ai_supply_chain/forecast/32.png"
      },
      {
            "id": "sc-v-33",
            "title": "KPI: Model Determination R² Score",
            "category": "Demand Forecasting",
            "metric": "R² = 0.71 (71% Accuracy)",
            "description": "Statistical determination score indicating 71% of total demand variance is explained by the predictive algorithm.",
            "image": "/dataanalyst_project/ai_supply_chain/forecast/33.png"
      },
      {
            "id": "sc-v-333",
            "title": "KPI: Mean Absolute Percentage Error (MAPE)",
            "category": "Demand Forecasting",
            "metric": "MAPE = 0.45",
            "description": "Relative error percentage verifying robust model performance across diverse product price points.",
            "image": "/dataanalyst_project/ai_supply_chain/forecast/333.png"
      },
      {
            "id": "sc-v-3333",
            "title": "KPI: Holdout Test Records Evaluated",
            "category": "Demand Forecasting",
            "metric": "3K Validation Records",
            "description": "Total out-of-sample test cases used to validate model accuracy prior to production deployment.",
            "image": "/dataanalyst_project/ai_supply_chain/forecast/3333.png"
      },
      {
            "id": "sc-v-34",
            "title": "Forecast Horizon & Model Parameters Slicer",
            "category": "Demand Forecasting",
            "metric": "Confidence Tuning Console",
            "description": "Interactive parameter control adjusting prediction horizon length and confidence bands.",
            "image": "/dataanalyst_project/ai_supply_chain/forecast/34.png"
      },
      {
            "id": "sc-v-35",
            "title": "Actual vs Predicted Units Sold Time-Series",
            "category": "Demand Forecasting",
            "metric": "ML Model Fit Tracking",
            "description": "Overlay of actual sales history against machine learning forecast showing close tracking of cyclical patterns.",
            "image": "/dataanalyst_project/ai_supply_chain/forecast/35.png"
      },
      {
            "id": "sc-v-36",
            "title": "Prediction Error Variance by Category",
            "category": "Demand Forecasting",
            "metric": "Category Residual Spread",
            "description": "Residual error analysis isolating categories with higher volatility to recommend adaptive safety stocks.",
            "image": "/dataanalyst_project/ai_supply_chain/forecast/36.png"
      },
      {
            "id": "sc-v-37",
            "title": "Actual vs Predicted Demand by Region",
            "category": "Demand Forecasting",
            "metric": "Regional Forecast Alignment",
            "description": "Geographic verification showing high predictive fidelity across East, West, North, and South corridors.",
            "image": "/dataanalyst_project/ai_supply_chain/forecast/37.png"
      },
      {
            "id": "sc-v-38",
            "title": "Top Prediction Error Outliers Diagnostics",
            "category": "Demand Forecasting",
            "metric": "Residual Outlier Audit Table",
            "description": "Diagnostic table surfacing individual records with highest error to facilitate continuous algorithmic retraining.",
            "image": "/dataanalyst_project/ai_supply_chain/forecast/38.png"
      },
      {
            "id": "sc-v-39",
            "title": "Demand Forecast Dashboard Header",
            "category": "Demand Forecasting",
            "metric": "Predictive Intelligence Header",
            "description": "Module header framing the machine learning time-series predictive environment.",
            "image": "/dataanalyst_project/ai_supply_chain/forecast/39.png"
      }
],
    overview: 'An AI-powered supply chain demand forecasting and inventory optimization platform consolidating 9.98M units sold, 8.04M units ordered, and 20.1M inventory units across multi-tier warehouses with predictive time-series machine learning models.',
    toolsUsed: ['Microsoft Power BI', 'Python (Prophet & Scikit-Learn)', 'DAX', 'Power Query', 'SQL', 'Statistical Modeling'],
    kpiCards: [
      { label: 'Units Sold', value: '9.98M' },
      { label: 'Units Ordered', value: '8.04M' },
      { label: 'Total Inventory', value: '20.1M' },
      { label: 'Forecast Accuracy (R²)', value: '0.71' },
      { label: 'Mean Absolute Error', value: '135.39' },
      { label: 'Avg Forecast Units', value: '141.49' }
    ],
    kpiImage: '/dataanalyst_project/ai_supply_chain/kpi_units_sold.png',
    mainDashboardImage: '/dataanalyst_project/ai_supply_chain/dashboard_1_executive.png',
    pdfDownloadUrl: '/dataanalyst_project/ai_supply_chain/AI_Powered_Supply_Chain_Every_Image_Explanation.pdf',
    pdfDownloadName: 'AI_Powered_Supply_Chain_Every_Image_Explanation.pdf',
    processSteps: [
      {
        number: '01',
        title: 'Multi-Echelon Data Ingestion & Cleansing',
        description: 'Consolidated transactional order history, warehouse stock receipts, SKU-level lead times, and fulfillment backlogs from distributed logistics systems with zero packet loss.'
      },
      {
        number: '02',
        title: 'Feature Engineering & Seasonal Lag Modeling',
        description: 'Constructed time-series features incorporating promotional calendar shifts, regional delivery lags, rolling moving averages, and supplier replenishment cycles.'
      },
      {
        number: '03',
        title: 'Machine Learning Demand Forecasting',
        description: 'Trained and validated time-series ML regressors achieving R² of 0.71, MAE of 135.39, RMSE of 176.16, and MAPE of 0.45 for dynamic forward-looking demand estimates.'
      },
      {
        number: '04',
        title: 'Power BI Executive & Inventory Cockpit',
        description: 'Constructed three specialized dashboards spanning executive telemetry, warehouse safety stock reorder thresholds, and granular demand forecast distributions.'
      }
    ],
    referenceImage: '/dataanalyst_project/ai_supply_chain/dashboard_2_inventory.png',
    overviewOfProject: {
      heading: 'AI-Powered Supply Chain Demand Forecasting & Inventory Optimization',
      content: 'Engineered an end-to-end supply chain analytics platform combining descriptive enterprise reporting with predictive machine learning algorithms. The platform empowers logistics directors and inventory controllers to dynamically balance 20.1M units of inventory against 9.98M units of demand while preempting costly stockouts.',
      referenceImage: '/dataanalyst_project/ai_supply_chain/dashboard_3_forecast.png'
    },
    detailedExplanation: {
      heading: 'Supply Chain AI Architecture & Analytical Scope',
      paragraphs: [
        'Global supply networks face constant disruptions from volatile consumer demand, procurement lead-time shifts, and excess warehouse carrying costs. This project was developed to eliminate blind spots across enterprise logistics by unifying multi-warehouse data into a centralized intelligence system.',
        'Using a three-dashboard architecture, the solution provides executive visibility into 9.98M units sold and 8.04M units ordered, offers deep inventory optimization to prevent stockouts across 20.1M units of stock, and delivers forward-looking demand projections powered by ML algorithms evaluated at an R² of 0.71.',
        'The resulting platform enables operations teams to transition from reactive firefighting to predictive replenishment, slashing carrying costs, eliminating excess holding overhead, and ensuring critical stock availability across high-velocity sales channels.'
      ]
    },
    dashboards: [
      {
        id: 'dash-sc-1',
        title: 'Dashboard 1: Executive Supply Chain Overview',
        category: 'Executive Telemetry',
        metric: '9.98M Units Sold | 8.04M Ordered',
        description: 'High-level executive dashboard tracking total units sold, fulfillment order velocity, sales channel distribution, and macro inventory status across all warehouses.',
        image: '/dataanalyst_project/ai_supply_chain/dashboard_1_executive.png'
      },
      {
        id: 'dash-sc-2',
        title: 'Dashboard 2: Inventory Optimization & Buffer Health',
        category: 'Warehouse Logistics',
        metric: '20.1M Total Inventory Tracked',
        description: 'Warehouse-level SKU diagnostics, carrying cost analysis, inventory turnover ratios, reorder triggers, and stockout probability matrix.',
        image: '/dataanalyst_project/ai_supply_chain/dashboard_2_inventory.png'
      },
      {
        id: 'dash-sc-3',
        title: 'Dashboard 3: AI Demand Forecasting Engine',
        category: 'Predictive ML Analytics',
        metric: 'R² 0.71 | MAE 135.39 | Avg Forecast 141.49',
        description: 'Algorithmic time-series demand forecasts comparing historical baseline sales with projected weekly units, confidence bands, and seasonal variance.',
        image: '/dataanalyst_project/ai_supply_chain/dashboard_3_forecast.png'
      }
    ],
    toolsUsedForThis: [
      {
        capability: 'Predictive Modeling & Feature Engineering',
        tools: ['Python', 'Scikit-Learn', 'Prophet', 'Pandas'],
        purpose: 'Time-series forecasting, lag feature calculation, outlier detection, and hyperparameter tuning achieving R² = 0.71.'
      },
      {
        capability: 'Data Transformation & Star-Schema ETL',
        tools: ['Power Query', 'SQL Server', 'Excel'],
        purpose: 'Ingesting multi-warehouse inventory snapshots, cleaning order records, and linking calendar, SKU, and facility tables.'
      },
      {
        capability: 'Advanced Business Logic & DAX',
        tools: ['DAX', 'Power BI Data Engine'],
        purpose: 'Formulating dynamic safety stock metrics, reorder point formulas, stockout risk indicators, and cumulative volume measures.'
      },
      {
        capability: 'Interactive BI Cockpit & UX Design',
        tools: ['Microsoft Power BI', 'UI Design System'],
        purpose: 'Three-tiered executive layout with drill-through navigation, slicers, forecast comparison visuals, and automated threshold alerts.'
      }
    ],
    workflowSteps: [
      'Multi-Source Data Ingestion',
      'Data Cleansing & Validation',
      'Python ML Demand Modeling',
      'DAX Safety Stock Formulas',
      'Three-Tier Power BI Cockpit',
      'Automated Replenishment Insights'
    ],
    predictsAndEnhanced: {
      predictsLabel: 'What We Predict & Model',
      enhancedLabel: 'Operational Impact Delivered',
      whatWePredict: [
        {
          title: 'Weekly & Monthly Demand Volumes',
          description: 'Predict SKU order quantities across distribution centers up to 12 weeks ahead.'
        },
        {
          title: 'Stockout Probability Scoring',
          description: 'Flag inventory items where lead time replenishment lags behind predicted run-rate.'
        },
        {
          title: 'Seasonal Surges & Demand Shifts',
          description: 'Isolate promotional peaks and seasonal buying trends from standard baseline demand.'
        },
        {
          title: 'Optimal Safety Stock Levels',
          description: 'Calculate statistical safety stock per facility to balance capital cost against service level agreements.'
        }
      ],
      whatWeEnhanced: [
        {
          title: 'Carrying Cost Reduction',
          description: 'Minimized warehouse holding expenses by trimming over-ordered buffer stock across 20.1M units.'
        },
        {
          title: 'Proactive Reorder Triggering',
          description: 'Replaced manual spreadsheet reviews with automated alerts tied to predictive threshold triggers.'
        },
        {
          title: 'Procurement Alignment',
          description: 'Synchronized purchase orders with vendor manufacturing lead times for optimized fulfillment.'
        },
        {
          title: 'Executive Multi-Facility Visibility',
          description: 'Single-pane-of-glass executive monitoring spanning sales, inventory buffers, and forecast variance.'
        }
      ]
    }
  },
  'project-20': {
    detailedVisuals: [
      {
            "id": "kr-v-02",
            "title": "Total Sales & Profit KPI Banner",
            "category": "Financial KPIs",
            "metric": "$3.43M Sales | $1.09M Net Profit",
            "description": "Core financial indicators tracking top-line sales volume alongside operating profit.",
            "image": "/dataanalyst_project/kister_retail/02_Total_Sales_and_Profit.png"
      },
      {
            "id": "kr-v-03",
            "title": "Geographic Sales Distribution",
            "category": "Regional Performance",
            "metric": "West ($1.22M) Leading",
            "description": "Sales volume distribution mapped across West, East, North, and South commercial zones.",
            "image": "/dataanalyst_project/kister_retail/03_Sales_by_Region.png"
      },
      {
            "id": "kr-v-04",
            "title": "Regional Sales & Margin Breakdown",
            "category": "Regional Performance",
            "metric": "32% Target Margin Maintained",
            "description": "Cross-comparison of regional sales volume versus operating profit margins.",
            "image": "/dataanalyst_project/kister_retail/04_Region_by_Sales.png"
      },
      {
            "id": "kr-v-05",
            "title": "Product Category Revenue & Margin Yield",
            "category": "Merchandising",
            "metric": "Electronics & Apparel Dominance",
            "description": "Detailed category performance comparing sales contributions against margin durability.",
            "image": "/dataanalyst_project/kister_retail/05_Sales_by_Category.png"
      },
      {
            "id": "kr-v-06",
            "title": "Top Metropolitan Commercial Centers",
            "category": "City Benchmarking",
            "metric": "Ahmedabad ($0.32M) & Surat ($0.31M)",
            "description": "Ranked ranking of highest-performing cities driving majority retail revenue.",
            "image": "/dataanalyst_project/kister_retail/06_Top_10_Sales.png"
      },
      {
            "id": "kr-v-07",
            "title": "City Performance & Order Matrix",
            "category": "City Benchmarking",
            "metric": "1,223 Orders Mapped",
            "description": "Order frequency and average order values across key urban commercial territories.",
            "image": "/dataanalyst_project/kister_retail/07_City_Performance.png"
      },
      {
            "id": "kr-v-08",
            "title": "Historical Seasonality & 6-Month Forecast",
            "category": "Forecasting",
            "metric": "6-Month Growth Trajectory",
            "description": "Monthly revenue trend paired with statistical 6-month predictive forecasting for upcoming fiscal quarters.",
            "image": "/dataanalyst_project/kister_retail/08_Sales_and_Profit_Trend.png"
      }
],
    overview: 'An enterprise retail sales business intelligence and predictive analytics suite analyzing $3.43M in total revenue, $1.09M in net profit, 1,223 fulfilled orders, and a 32% profit margin with 6-month statistical sales forecasting.',
    toolsUsed: ['Microsoft Power BI', 'DAX', 'Power Query', 'Statistical Modeling', 'Microsoft Excel', 'Data Modeling'],
    kpiCards: [
      { label: 'Total Sales', value: '$3.43M' },
      { label: 'Total Profit', value: '$1.09M' },
      { label: 'Profit Margin', value: '32%' },
      { label: 'Total Orders', value: '1,223' },
      { label: 'Top City (Ahmedabad)', value: '$0.32M' },
      { label: 'Predictive Scope', value: '6-Month Forecast' }
    ],
    kpiImage: '/dataanalyst_project/kister_retail/02_Total_Sales.png',
    mainDashboardImage: '/dataanalyst_project/kister_retail/01_Retail_Sales.png',
    pdfDownloadUrl: '/dataanalyst_project/kister_retail/Kister_Retail_Sales_Business_Analysis_Updated.pdf',
    pdfDownloadName: 'Kister_Retail_Sales_Business_Analysis_Updated.pdf',
    processSteps: [
      {
        number: '01',
        title: 'Data Extraction & Schema Normalization',
        description: 'Extracted transactional retail records, cleaned inconsistencies, normalized regional store identifiers, and created relational date dimensions.'
      },
      {
        number: '02',
        title: 'DAX Business Logic & Margin Formulation',
        description: 'Engineered custom DAX measures for net sales, gross margin percentages (32%), average order value, and city-level sales rankings.'
      },
      {
        number: '03',
        title: 'Geographic & Category Segmentation',
        description: 'Benchmarked top revenue centers including Ahmedabad ($0.32M), Surat ($0.31M), and Mumbai ($0.30M), analyzing category profit yields.'
      },
      {
        number: '04',
        title: '6-Month Machine Learning Sales Forecasting',
        description: 'Applied statistical time-series forecasting to model projected revenue streams 6 months into the future with dynamic confidence intervals.'
      }
    ],
    referenceImage: '/dataanalyst_project/kister_retail/08_Sales_and_Profit_Trend.png',
    overviewOfProject: {
      heading: 'Kister Retail Sales — Multi-Dimensional Intelligence & 6-Month Forecasting',
      content: 'Developed an interactive enterprise Power BI dashboard providing deep analytical visibility into $3.43M in retail sales and $1.09M in net profit. The platform connects customer purchasing channels, regional sales territories, category performance, and forward-looking 6-month predictive trends.',
      referenceImage: '/dataanalyst_project/kister_retail/07_Sales_by_Category.png'
    },
    detailedExplanation: {
      heading: 'Kister Retail Analytical Architecture & Scope',
      paragraphs: [
        'Kister Retail operated across multiple regional commercial hubs but lacked centralized reporting, leaving leadership unable to monitor margin health or identify which cities and categories drove sustainable profit.',
        'This analytics solution consolidated 1,223 store orders into an interactive Power BI command center. Key DAX measures isolate high-margin product categories (maintaining a healthy 32% margin) while highlighting top-performing urban centers including Ahmedabad ($0.32M) and Surat ($0.31M).',
        'Furthermore, the integration of 6-month predictive time-series forecasting gives retail merchandising teams advance visibility into seasonal fluctuations, helping align purchasing budgets and marketing campaigns with expected revenue cycles.'
      ]
    },
    dashboards: [
      {
        id: 'dash-kr-1',
        title: 'Dashboard 1: Kister Retail Sales Executive Cockpit',
        category: 'Executive Overview',
        metric: '$3.43M Total Sales | $1.09M Profit',
        description: 'Comprehensive Power BI dashboard tracking total sales, profit, orders (1,223), margin (32%), monthly trends, and regional city rankings.',
        image: '/dataanalyst_project/kister_retail/01_Retail_Sales.png'
      },
      {
        id: 'dash-kr-2',
        title: 'Dashboard 2: Top 5 City Market Penetration',
        category: 'Geospatial Analytics',
        metric: 'Ahmedabad ($0.32M) | Surat ($0.31M)',
        description: 'Detailed geographic breakdown showing top revenue-generating metropolitan territories and market share across key urban centers.',
        image: '/dataanalyst_project/kister_retail/06_Top_5_City.png'
      },
      {
        id: 'dash-kr-3',
        title: 'Dashboard 3: Category Profit Margin Analysis',
        category: 'Merchandising Intelligence',
        metric: '32% Profit Margin Tracked',
        description: 'Analysis of product categories comparing gross revenue against net profitability to isolate high-yield inventory segments.',
        image: '/dataanalyst_project/kister_retail/07_Sales_by_Category.png'
      },
      {
        id: 'dash-kr-4',
        title: 'Dashboard 4: 6-Month Sales & Profit Forecasting',
        category: 'Predictive Modeling',
        metric: '6-Month Forward Projection',
        description: 'Predictive time-series forecasting model projecting sales and profit trajectories with confidence intervals to guide upcoming quarterly budgets.',
        image: '/dataanalyst_project/kister_retail/08_Sales_and_Profit_Trend.png'
      }
    ],
    toolsUsedForThis: [
      {
        capability: 'Data Transformation & Hygiene',
        tools: ['Power Query', 'Microsoft Excel'],
        purpose: 'Cleaning transactional order files, standardizing currencies, fixing date anomalies, and building dimensional tables.'
      },
      {
        capability: 'Data Modeling & Relational Architecture',
        tools: ['Power BI Data Engine', 'Star Schema'],
        purpose: 'Constructing robust relational links across sales transactions, calendar hierarchies, geographic maps, and item catalogs.'
      },
      {
        capability: 'Advanced Business Logic & Calculations',
        tools: ['DAX (Data Analysis Expressions)'],
        purpose: 'Formulating total sales ($3.43M), net profit ($1.09M), margin rates (32%), moving averages, and dynamic city rankings.'
      },
      {
        capability: 'Predictive Forecasting & BI Visuals',
        tools: ['Power BI Visuals', 'Time Series Forecasting'],
        purpose: 'Deploying interactive cards, bar charts, trend graphs, and 6-month predictive projection bands.'
      }
    ],
    workflowSteps: [
      'Transactional Data Consolidation',
      'Power Query Cleaning & Formatting',
      'Star-Schema Dimensional Modeling',
      'Custom DAX Measure Development',
      'Geographic & Category Analytics',
      '6-Month Predictive Sales Forecast'
    ],
    predictsAndEnhanced: {
      predictsLabel: 'What We Analyze & Forecast',
      enhancedLabel: 'Commercial Value Delivered',
      whatWePredict: [
        {
          title: '6-Month Revenue Trajectory',
          description: 'Model future retail sales velocity by month using statistical time-series forecasting.'
        },
        {
          title: 'Top Regional Market Expansion',
          description: 'Identify highest-yielding metropolitan regions such as Ahmedabad and Surat for inventory allocation.'
        },
        {
          title: 'Product Category Profit Elasticity',
          description: 'Assess margin sustainability across product categories to guide promotional discount limits.'
        },
        {
          title: 'Order Velocity & Basket Trends',
          description: 'Analyze average order size and purchasing cadence across the 1,223 recorded transactions.'
        }
      ],
      whatWeEnhanced: [
        {
          title: 'Centralized Executive Reporting',
          description: 'Replaced scattered spreadsheets with an interactive, single-pane Power BI decision dashboard.'
        },
        {
          title: 'Margin Protection Strategy',
          description: 'Identified low-margin lines to protect overall 32% enterprise profit margin ($1.09M net profit).'
        },
        {
          title: 'Regional Inventory Prioritization',
          description: 'Directed stock and logistics resources to top revenue cities to maximize fulfillment speed.'
        },
        {
          title: 'Quarterly Budget Planning',
          description: 'Provided sales leadership with forward-looking 6-month projections for reliable inventory planning.'
        }
      ]
    }
  },
  'project-21': {
    detailedVisuals: [
      {
            "id": "ss-v-1-1",
            "title": "KPI: Total Sales Revenue",
            "category": "Sales Overview",
            "metric": "$2.00M Total Sales",
            "description": "Gross commercial sales revenue generated across all enterprise product lines.",
            "image": "/dataanalyst_project/superstore/1/1.1.png"
      },
      {
            "id": "ss-v-1-2",
            "title": "KPI: Total Operating Profit",
            "category": "Sales Overview",
            "metric": "$275K Total Profit",
            "description": "Net operating profit achieved with average margin of 12.9%.",
            "image": "/dataanalyst_project/superstore/1/1.2.png"
      },
      {
            "id": "ss-v-1-3",
            "title": "KPI: Total Order Count",
            "category": "Sales Overview",
            "metric": "4,627 Orders Fulfilled",
            "description": "Total transaction count across Consumer, Corporate, and Home Office clients.",
            "image": "/dataanalyst_project/superstore/1/1.3.png"
      },
      {
            "id": "ss-v-1-4",
            "title": "KPI: Quantity of Units Sold",
            "category": "Sales Overview",
            "metric": "35K Total Units",
            "description": "Aggregate physical volume of merchandise shipped across customer accounts.",
            "image": "/dataanalyst_project/superstore/1/1.4.png"
      },
      {
            "id": "ss-v-1-5",
            "title": "KPI: Average Order Value (AOV)",
            "category": "Sales Overview",
            "metric": "$460.80 AOV",
            "description": "Average expenditure per transaction across enterprise ordering channels.",
            "image": "/dataanalyst_project/superstore/1/1.5.png"
      },
      {
            "id": "ss-v-1-6",
            "title": "Monthly Sales & Profit Trend Curve",
            "category": "Sales Overview",
            "metric": "Q4 Peak Seasonality",
            "description": "Multi-year monthly trend curve tracking sales surges and profitability margins over time.",
            "image": "/dataanalyst_project/superstore/1/1.6.png"
      },
      {
            "id": "ss-v-1-7",
            "title": "Sales by Customer Segment",
            "category": "Sales Overview",
            "metric": "Consumer (50.6%) Lead",
            "description": "Segment distribution comparing Consumer ($1.01M), Corporate ($0.61M), and Home Office ($0.38M).",
            "image": "/dataanalyst_project/superstore/1/1.7.png"
      },
      {
            "id": "ss-v-1-8",
            "title": "Category Revenue Contribution",
            "category": "Sales Overview",
            "metric": "Technology ($0.84M) & Office ($0.72M)",
            "description": "Donut chart displaying product category share: Technology (41.6%), Office Supplies (31.5%), Furniture (26.9%).",
            "image": "/dataanalyst_project/superstore/1/1.8.png"
      },
      {
            "id": "ss-v-1-9",
            "title": "Sales by Shipping Mode",
            "category": "Sales Overview",
            "metric": "Standard Class (59.6%)",
            "description": "Fulfillment method breakdown: Standard Class, Second Class, First Class, and Same Day.",
            "image": "/dataanalyst_project/superstore/1/1.9.png"
      },
      {
            "id": "ss-v-1-10",
            "title": "State-by-State Sales Density Map",
            "category": "Sales Overview",
            "metric": "California & New York Leading",
            "description": "Geographic heatmap displaying order distribution and market penetration across 48 US states.",
            "image": "/dataanalyst_project/superstore/1/1.10.png"
      },
      {
            "id": "ss-v-1-11",
            "title": "Regional Sales & Performance Table",
            "category": "Sales Overview",
            "metric": "West ($725K) & East ($678K)",
            "description": "Comparative table benchmark tracking sales volume, profit, and customer orders by region.",
            "image": "/dataanalyst_project/superstore/1/1.11.png"
      },
      {
            "id": "ss-v-1-12",
            "title": "Executive Filter & Horizon Slicers",
            "category": "Sales Overview",
            "metric": "Dynamic Slicing Console",
            "description": "Interactive slicers for Year, Geographic Region, and Product Category.",
            "image": "/dataanalyst_project/superstore/1/1.12.png"
      },
      {
            "id": "ss-v-2-1",
            "title": "KPI: Loss-Making Products Count",
            "category": "Profitability Diagnostics",
            "metric": "296 Unprofitable SKUs Flagged",
            "description": "Critical audit indicator identifying 296 products generating negative profit due to high discounts.",
            "image": "/dataanalyst_project/superstore/2/2.1.png"
      },
      {
            "id": "ss-v-2-2",
            "title": "KPI: Highest Regional Profit Leader",
            "category": "Profitability Diagnostics",
            "metric": "West Region ($104K Net Profit)",
            "description": "Top-performing geographical territory delivering greatest margin contribution.",
            "image": "/dataanalyst_project/superstore/2/2.2.png"
      },
      {
            "id": "ss-v-2-3",
            "title": "KPI: Loss-Making Sub-Categories",
            "category": "Profitability Diagnostics",
            "metric": "Tables, Bookcases & Supplies",
            "description": "Identifies sub-categories where high promotional discounts and freight costs destroyed operating profits.",
            "image": "/dataanalyst_project/superstore/2/2.3.png"
      },
      {
            "id": "ss-v-2-4",
            "title": "KPI: Regional Margin Variance",
            "category": "Profitability Diagnostics",
            "metric": "12.9% Mean Enterprise Margin",
            "description": "Overall operating margin metric establishing baseline profitability benchmark.",
            "image": "/dataanalyst_project/superstore/2/2.4.png"
      },
      {
            "id": "ss-v-2-5",
            "title": "Profit vs Discount Correlation Matrix",
            "category": "Profitability Diagnostics",
            "metric": "Discount Erosion Thresholds",
            "description": "Scatter visualization demonstrating steep profit collapse when discounts exceed 20%.",
            "image": "/dataanalyst_project/superstore/2/2.5.png"
      },
      {
            "id": "ss-v-2-6",
            "title": "Sub-Category Margin Health Comparison",
            "category": "Profitability Diagnostics",
            "metric": "Paper (+35%) vs Tables (-18%)",
            "description": "Bar chart ranking sub-category margins from high-yielding Paper and Binders to loss-making Tables.",
            "image": "/dataanalyst_project/superstore/2/2.6.png"
      },
      {
            "id": "ss-v-2-7",
            "title": "Geographic Profitability Heatmap",
            "category": "Profitability Diagnostics",
            "metric": "State Profit Variance",
            "description": "US state map highlighting profitable states (green) versus deep-loss states such as Texas (red).",
            "image": "/dataanalyst_project/superstore/2/2.7.png"
      },
      {
            "id": "ss-v-2-8",
            "title": "Severe Loss-Making Products Breakdown",
            "category": "Profitability Diagnostics",
            "metric": "Cubify 3D (-$8.9K) & Lexmark (-$4.6K)",
            "description": "Ranked analysis of individual loss-making SKUs with largest net negative drag on enterprise profit.",
            "image": "/dataanalyst_project/superstore/2/2.8.png"
      },
      {
            "id": "ss-v-2-9",
            "title": "Customer Segment Profit Contribution",
            "category": "Profitability Diagnostics",
            "metric": "Corporate Margin Leadership",
            "description": "Net margin comparison showing Corporate clients delivering highest profitability per order dollar.",
            "image": "/dataanalyst_project/superstore/2/2.9.png"
      },
      {
            "id": "ss-v-2-10",
            "title": "Worst 10 Loss-Making SKUs Table",
            "category": "Profitability Diagnostics",
            "metric": "De-Listing & Price Review Table",
            "description": "Granular table identifying specific product codes requiring immediate discount caps or vendor renegotiation.",
            "image": "/dataanalyst_project/superstore/2/2.10.png"
      },
      {
            "id": "ss-v-2-11",
            "title": "Discount Level Impact on Margins",
            "category": "Profitability Diagnostics",
            "metric": "Discount Band Diagnostics",
            "description": "Staged analysis of operating margins across 0-10%, 10-20%, 20-40%, and >40% discount brackets.",
            "image": "/dataanalyst_project/superstore/2/2.11.png"
      },
      {
            "id": "ss-v-2-12",
            "title": "Subcategory Turnaround Matrix",
            "category": "Profitability Diagnostics",
            "metric": "Strategic Margin Action Plan",
            "description": "Turnaround framework mapping remedial actions for Tables, Bookcases, and Office Supplies.",
            "image": "/dataanalyst_project/superstore/2/2.12.png"
      },
      {
            "id": "ss-v-2-13",
            "title": "Profitability Diagnostic Filters",
            "category": "Profitability Diagnostics",
            "metric": "Multi-Filter Diagnostics",
            "description": "Interactive slicers for auditing margin health across regions and discount thresholds.",
            "image": "/dataanalyst_project/superstore/2/2.13.png"
      },
      {
            "id": "ss-v-3-1",
            "title": "KPI: 12-Month Forecasted Demand",
            "category": "AI Forecasting",
            "metric": "14,011 Projected Units",
            "description": "Machine learning forward-looking demand projection for the upcoming 12 months.",
            "image": "/dataanalyst_project/superstore/3/3.1.png"
      },
      {
            "id": "ss-v-3-2",
            "title": "KPI: Forecasted Demand Growth Rate",
            "category": "AI Forecasting",
            "metric": "+17.3% Annual Unit Growth",
            "description": "Predicted expansion in total unit demand driven by core office supply consumables.",
            "image": "/dataanalyst_project/superstore/3/3.2.png"
      },
      {
            "id": "ss-v-3-3",
            "title": "KPI: Average Monthly Projected Demand",
            "category": "AI Forecasting",
            "metric": "2.7K Units / Month Run-Rate",
            "description": "Baseline monthly inventory throughput requirement across distribution centers.",
            "image": "/dataanalyst_project/superstore/3/3.3.png"
      },
      {
            "id": "ss-v-3-4",
            "title": "KPI: Total Modeled Catalog Products",
            "category": "AI Forecasting",
            "metric": "1,843 SKUs Modeled",
            "description": "Total product catalog coverage analyzed through predictive time-series regression.",
            "image": "/dataanalyst_project/superstore/3/3.4.png"
      },
      {
            "id": "ss-v-3-5",
            "title": "Actual vs Forecasted Demand Curve (with 95% CI)",
            "category": "AI Forecasting",
            "metric": "Time-Series Model with Confidence Area",
            "description": "Historical demand trajectory transitioning into 12-month forward predictive forecast with shaded confidence intervals.",
            "image": "/dataanalyst_project/superstore/3/3.5.png"
      },
      {
            "id": "ss-v-3-6",
            "title": "Monthly Demand Seasonality Breakdown",
            "category": "AI Forecasting",
            "metric": "September Peak 5.1K (46% in Q4)",
            "description": "Calendar month aggregation showing demand surges from September through December.",
            "image": "/dataanalyst_project/superstore/3/3.6.png"
      },
      {
            "id": "ss-v-3-7",
            "title": "Top 10 Products by Demand Volume",
            "category": "AI Forecasting",
            "metric": "Staples (218) & Envelopes (166)",
            "description": "Green-bar ranking highlighting highest-velocity consumable products that must never stock out.",
            "image": "/dataanalyst_project/superstore/3/3.7.png"
      },
      {
            "id": "ss-v-3-8",
            "title": "Bottom 10 Slow-Moving Products",
            "category": "AI Forecasting",
            "metric": "1-2 Units Long Tail Warning",
            "description": "Red-bar diagnostics highlighting stagnant SKUs tying up warehouse capital for catalog rationalization.",
            "image": "/dataanalyst_project/superstore/3/3.8.png"
      },
      {
            "id": "ss-v-3-9",
            "title": "Category Demand Split Donut",
            "category": "AI Forecasting",
            "metric": "Office Supplies 60.25% Majority",
            "description": "Donut chart showing unit demand split: Office Supplies (60.25%), Furniture (21.6%), Technology (18.15%).",
            "image": "/dataanalyst_project/superstore/3/3.9.png"
      },
      {
            "id": "ss-v-3-10",
            "title": "Top 10 Forward Forecast Clustered Bar",
            "category": "AI Forecasting",
            "metric": "Actual vs Forecast Comparison",
            "description": "Clustered bar chart comparing past 12-month actuals with upcoming 12-month forecasts for top 10 SKUs.",
            "image": "/dataanalyst_project/superstore/3/3.10.png"
      },
      {
            "id": "ss-v-3-11",
            "title": "Forecast Horizon & Parameter Tuning Slicers",
            "category": "AI Forecasting",
            "metric": "Predictive Tuning Interface",
            "description": "Interactive controls for customizing time horizons, seasonal weights, and confidence levels.",
            "image": "/dataanalyst_project/superstore/3/3.11.png"
      }
],
    overview: 'An enterprise sales, profitability, and 12-month demand forecasting intelligence platform for Superstore, analyzing $2.00M in revenue, $275K in profit, 4,627 orders, 296 loss-making products, and a +17.3% projected demand growth.',
    toolsUsed: ['Microsoft Power BI', 'Python (Time Series / Prophet)', 'DAX', 'Power Query', 'Microsoft Excel', 'Statistical Modeling'],
    kpiCards: [
      { label: 'Total Sales', value: '$2.00M' },
      { label: 'Total Profit', value: '$275K' },
      { label: 'Total Orders', value: '4,627' },
      { label: 'Quantity Sold', value: '35K Units' },
      { label: 'Average Order Value', value: '$460.80' },
      { label: '12-Month Forecast Growth', value: '+17.3%' }
    ],
    kpiImage: '/dataanalyst_project/superstore/dashboard_2_product_profit.png',
    mainDashboardImage: '/dataanalyst_project/superstore/dashboard_1_sales.png',
    pdfDownloadUrl: '/dataanalyst_project/superstore/Superstore_Sales_Dashboard_Explanation.pdf',
    pdfDownloadName: 'Superstore_Sales_Dashboard_Explanation.pdf',
    processSteps: [
      {
        number: '01',
        title: 'Enterprise Transactional Ingestion',
        description: 'Ingested multi-year Superstore ERP transactional data covering 4,627 orders, 35K units, across customer segments, regions, and categories.'
      },
      {
        number: '02',
        title: 'Margin Leakage & Product Profitability Audit',
        description: 'Executed deep profitability diagnostics isolating 296 unprofitable SKUs where aggressive discounts eroded gross operating margins.'
      },
      {
        number: '03',
        title: 'AI-Powered 12-Month Demand Forecasting',
        description: 'Engineered time-series machine learning models projecting a +17.3% growth (14,011 forecast units) with high-confidence forecast bounds.'
      },
      {
        number: '04',
        title: 'Three-Tier Executive BI Cockpit Deployment',
        description: 'Delivered three dedicated Power BI dashboard interfaces: Sales Overview, Product & Regional Diagnostics, and AI Demand Forecasting.'
      }
    ],
    referenceImage: '/dataanalyst_project/superstore/dashboard_3_ai_forecast.png',
    overviewOfProject: {
      heading: 'Superstore Enterprise Intelligence — Sales, Profitability & 12-Month Forecast',
      content: 'Constructed an end-to-end commercial intelligence suite for Superstore enterprise operations. The platform analyzes $2.00M in total sales and $275K in profit while diagnosing margin leakage across 296 loss-making products and delivering a 12-month forward predictive forecast (+17.3% growth).',
      referenceImage: '/dataanalyst_project/superstore/dashboard_1_sales.png'
    },
    detailedExplanation: {
      heading: 'Superstore Analytics Architecture & Scope',
      paragraphs: [
        'Superstore enterprise operations managed high transactional velocity across Consumer, Corporate, and Home Office segments, but lacked granular insights into product-level profitability and forward demand dynamics.',
        'This analytics system was structured across three specialized dashboard environments: (1) Sales Overview tracking top-line revenue ($2.00M), orders (4,627), and average basket size ($460.80); (2) Product & Regional Profitability diagnosing margin leakage across 296 loss-making products; and (3) AI Demand Forecasting projecting 14,011 units (+17.3% growth) over 12 months.',
        'With these tools, management identified exactly which discounting structures destroyed product margins, rationalized underperforming SKUs, and aligned inventory procurement schedules with machine learning demand forecasts.'
      ]
    },
    dashboards: [
      {
        id: 'dash-ss-1',
        title: 'Dashboard 1: Superstore Sales & Customer Intelligence',
        category: 'Sales Analytics',
        metric: '$2.00M Sales | 4,627 Orders | $460.80 AOV',
        description: 'Executive overview tracking total revenue, order volume, quantity sold (35K), and segment contributions (Consumer, Corporate, Home Office).',
        image: '/dataanalyst_project/superstore/dashboard_1_sales.png'
      },
      {
        id: 'dash-ss-2',
        title: 'Dashboard 2: Product Profitability & Margin Remediation',
        category: 'Profitability Diagnostics',
        metric: '$275K Profit | 296 Loss-Making SKUs',
        description: 'Diagnostic dashboard isolating unprofitable product lines, discount erosion, category margins, and regional profit variance.',
        image: '/dataanalyst_project/superstore/dashboard_2_product_profit.png'
      },
      {
        id: 'dash-ss-3',
        title: 'Dashboard 3: AI Demand Forecasting Engine',
        category: 'Predictive ML Analytics',
        metric: '+17.3% Growth | 14,011 Forecast Units',
        description: '12-month forward predictive demand model visualizing historical trends, forecasted unit velocity, and upper/lower confidence bounds.',
        image: '/dataanalyst_project/superstore/dashboard_3_ai_forecast.png'
      }
    ],
    toolsUsedForThis: [
      {
        capability: 'Predictive Modeling & Time Series',
        tools: ['Python', 'Prophet', 'Statsmodels'],
        purpose: 'Training 12-month demand forecasting models, seasonal decomposition, and calculating +17.3% projected unit growth.'
      },
      {
        capability: 'Data Transformation & Hygiene',
        tools: ['Power Query', 'Microsoft Excel'],
        purpose: 'Ingesting multi-year order history, standardizing shipping dimensions, and parsing product sub-category hierarchies.'
      },
      {
        capability: 'Analytical Modeling & Custom DAX',
        tools: ['DAX', 'Power BI Engine'],
        purpose: 'Engineering measures for profit margins (12.9%), discount correlation, loss-making SKU flags, and AOV ($460.80).'
      },
      {
        capability: 'Executive UI & Cross-Filtering Visuals',
        tools: ['Microsoft Power BI', 'Interactive Visuals'],
        purpose: 'Designing a three-tier dashboard suite with interactive slicers, geographic maps, and predictive trend lines.'
      }
    ],
    workflowSteps: [
      'ERP Transactional Data Ingestion',
      'Power Query Cleaning & Enrichment',
      'Profitability & Margin Leakage Audit',
      'Python ML 12-Month Demand Model',
      'Three-Tier Power BI Dashboard Suite',
      'SKU Rationalization & Strategy'
    ],
    predictsAndEnhanced: {
      predictsLabel: 'What We Predict & Model',
      enhancedLabel: 'Enterprise Outcomes Delivered',
      whatWePredict: [
        {
          title: '12-Month Demand Volume (+17.3%)',
          description: 'Forecast 14,011 units of forward demand across product categories to guide supply procurement.'
        },
        {
          title: 'Discount vs Profit Erosion Thresholds',
          description: 'Model maximum allowable discount ceilings before individual products become unprofitable.'
        },
        {
          title: 'Customer Segment Growth Trends',
          description: 'Predict purchasing velocity differences between Consumer, Corporate, and Home Office accounts.'
        },
        {
          title: 'Regional Margin Variance',
          description: 'Isolate logistics and freight overhead impacts on regional net margins across geographical zones.'
        }
      ],
      whatWeEnhanced: [
        {
          title: 'Remediation of 296 Loss-Making SKUs',
          description: 'Surfaced unprofitable items for immediate price adjustment, discount reduction, or catalog sunsetting.'
        },
        {
          title: 'AOV & Revenue Optimization',
          description: 'Identified bundling opportunities to lift average order value above current $460.80 baseline.'
        },
        {
          title: 'Automated Procurement Timing',
          description: 'Replaced guesswork with algorithmic 12-month demand forecasts to schedule purchase orders accurately.'
        },
        {
          title: 'Multi-Tiered Decision Framework',
          description: 'Empowered leadership with tailored views for executive sales, deep profit diagnostics, and future forecasting.'
        }
      ]
    }
  },
  'project-22': {
    detailedVisuals: [
      {
            "id": "scr-v-01",
            "title": "Global Supply Chain Executive Summary",
            "category": "Executive Overview",
            "metric": "$550.23M Sales | 73.1K Orders",
            "description": "High-level overview tracking global supply chain revenue, order fulfillment velocity, and gross margins.",
            "image": "/dataanalyst_project/supply_chain_risk/01_Supply_analysis_summary.png"
      },
      {
            "id": "scr-v-02",
            "title": "Delivery Performance & Transit Delay Diagnostics",
            "category": "Logistics Analytics",
            "metric": "$6.29M Delay Cost Exposure",
            "description": "Transit delay tracking quantifying freight corridor bottlenecks and financial SLA penalties.",
            "image": "/dataanalyst_project/supply_chain_risk/02_Delivery.png"
      },
      {
            "id": "scr-v-03",
            "title": "Supplier Reliability & SLA Risk Matrix",
            "category": "Vendor Reliability",
            "metric": "27.39 Avg Risk Score | 25 Suppliers",
            "description": "Multi-factor vendor scoring evaluating defect ratios, lead-time volatility, and contract compliance.",
            "image": "/dataanalyst_project/supply_chain_risk/03_Suppliers.png"
      },
      {
            "id": "scr-v-04",
            "title": "Warehouse Inventory Levels & Carrying Cost",
            "category": "Warehouse Logistics",
            "metric": "Multi-Hub Inventory Distribution",
            "description": "Inventory allocation across regional fulfillment nodes assessing stock holding overhead.",
            "image": "/dataanalyst_project/supply_chain_risk/04_Inventory.png"
      },
      {
            "id": "scr-v-05",
            "title": "Revenue, Net Profit & Delay Financial Impact",
            "category": "Financial Analytics",
            "metric": "$192.56M Net Profit Tracked",
            "description": "Financial modeling isolating net profit margins against freight transit delay costs.",
            "image": "/dataanalyst_project/supply_chain_risk/05_Sales_and_Profit.png"
      },
      {
            "id": "scr-v-06",
            "title": "Demand Forecast vs Fulfillment Throughput",
            "category": "Predictive Modeling",
            "metric": "Fulfillment Capacity Alignment",
            "description": "Predictive demand curves compared against carrier shipping and warehousing capacities.",
            "image": "/dataanalyst_project/supply_chain_risk/06_Demand_Forecast.png"
      },
      {
            "id": "scr-v-07",
            "title": "30-Day Inventory Shortage Early Warning Radar",
            "category": "Shortage Warning",
            "metric": "5.19M Units at Risk Preempted",
            "description": "Automated early warning radar surfacing critical buffer depletion 30 days before assembly stoppage.",
            "image": "/dataanalyst_project/supply_chain_risk/07_Inventory_Risk.png"
      }
],
    overview: 'An executive supply chain risk analytics and inventory shortage early warning cockpit evaluating $550.23M in sales, 73.1K orders, $192.56M profit, $6.29M in delay cost exposure, and a 30-day 5.19M unit inventory shortage radar across 25 global tier-1 suppliers.',
    toolsUsed: ['Microsoft Power BI', 'Python', 'DAX', 'Power Query', 'Risk Scoring Algorithms', 'Supply Chain Telemetry'],
    kpiCards: [
      { label: 'Total Sales Volume', value: '$550.23M' },
      { label: 'Total Orders Handled', value: '73.1K' },
      { label: 'Net Profit Delivered', value: '$192.56M' },
      { label: 'Delay Cost Impact', value: '$6.29M' },
      { label: 'Average Risk Score', value: '27.39 / 100' },
      { label: '30-Day Shortage Radar', value: '5.19M Units' }
    ],
    kpiImage: '/dataanalyst_project/supply_chain_risk/02_Total_Sales.png',
    mainDashboardImage: '/dataanalyst_project/supply_chain_risk/01_Supply_analysis_summary.png',
    pdfDownloadUrl: '/dataanalyst_project/supply_chain_risk/Supply_Chain_Analysis_Dashboard.pdf',
    pdfDownloadName: 'Supply_Chain_Analysis_Dashboard.pdf',
    processSteps: [
      {
        number: '01',
        title: 'Global Supply Chain Data Integration',
        description: 'Aggregated transactional orders ($550.23M across 73.1K orders), carrier freight manifests, warehouse receipts, and vendor SLA records.'
      },
      {
        number: '02',
        title: 'Quantitative Risk Scoring Engine',
        description: 'Built a composite risk assessment algorithm (scoring average risk at 27.39) factoring delivery lead time, defect rates, and supplier stability.'
      },
      {
        number: '03',
        title: 'Logistics Delay Cost Financial Modeling',
        description: 'Formulated DAX models calculating financial exposure ($6.29M total delay cost) driven by shipping bottlenecks and transit delays.'
      },
      {
        number: '04',
        title: '30-Day Predictive Shortage Early Warning Cockpit',
        description: 'Constructed an automated shortage radar alerting operations to 5.19M vulnerable units 30 days ahead of impending factory line stoppage.'
      }
    ],
    referenceImage: '/dataanalyst_project/supply_chain_risk/07_Inventory_Risk.png',
    overviewOfProject: {
      heading: 'Global Supply Chain Risk Intelligence & 30-Day Shortage Cockpit',
      content: 'Developed a mission-critical supply chain risk cockpit monitoring $550.23M in sales volume and 73.1K orders. The platform evaluates 25 global tier-1 suppliers, quantifies $6.29M in transit delay costs, and alerts procurement teams to 5.19M units of projected 30-day inventory shortages before operational impact.',
      referenceImage: '/dataanalyst_project/supply_chain_risk/05_Delay_Cost.png'
    },
    detailedExplanation: {
      heading: 'Supply Chain Risk Intelligence Architecture & Scope',
      paragraphs: [
        'Global supply chains operating at enterprise scale face immense exposure to freight transit bottlenecks, supplier SLA defaults, and unexpected factory stockouts. This project was commissioned to build an executive decision cockpit capable of monitoring high-value supply operations totaling $550.23M in sales.',
        'The platform introduces quantitative supplier risk scoring (averaging 27.39 / 100 across 25 tier-1 vendors) and isolates $6.29M in delay costs directly linked to carrier routes and customs delays, enabling logistics teams to renegotiate vendor contracts based on verified performance data.',
        'Most importantly, the 30-Day Predictive Inventory Shortage Cockpit continuously scans inventory burn rates against incoming purchase orders, identifying 5.19M units at risk of depletion a full month in advance and allowing automated safety stock reallocation.'
      ]
    },
    dashboards: [
      {
        id: 'dash-scr-1',
        title: 'Dashboard 1: Supply Chain Analysis Executive Summary',
        category: 'Executive Risk Cockpit',
        metric: '$550.23M Sales | 73.1K Orders | $192.56M Profit',
        description: 'Comprehensive executive cockpit tracking global sales volume, net profit, order velocity, and high-level fulfillment performance.',
        image: '/dataanalyst_project/supply_chain_risk/01_Supply_analysis_summary.png'
      },
      {
        id: 'dash-scr-2',
        title: 'Dashboard 2: Delay Cost & Logistics Bottleneck Diagnostics',
        category: 'Cost Exposure',
        metric: '$6.29M Delay Cost Impact Monitored',
        description: 'Financial quantification of freight delays, carrier transit times, customs clearance bottlenecks, and SLA breach expenses.',
        image: '/dataanalyst_project/supply_chain_risk/05_Delay_Cost.png'
      },
      {
        id: 'dash-scr-3',
        title: 'Dashboard 3: Supplier Risk & SLA Performance Matrix',
        category: 'Vendor Reliability',
        metric: '27.39 Avg Risk Score | 25 Global Suppliers',
        description: 'Vendor evaluation matrix scoring on-time fulfillment ratios, defect rates, supplier dependency risks, and contract compliance.',
        image: '/dataanalyst_project/supply_chain_risk/06_Average_Risk_Score.png'
      },
      {
        id: 'dash-scr-4',
        title: 'Dashboard 4: 30-Day Predictive Inventory Shortage Radar',
        category: 'Early Warning System',
        metric: '5.19M Shortage Units Preempted',
        description: 'Predictive risk dashboard identifying inventory lines facing stockouts within 30 days to trigger urgent replenishment workflows.',
        image: '/dataanalyst_project/supply_chain_risk/07_Inventory_Risk.png'
      }
    ],
    toolsUsedForThis: [
      {
        capability: 'Risk Scoring & Algorithmic Modeling',
        tools: ['Python', 'Statistical Scoring', 'NumPy'],
        purpose: 'Formulating multi-factor supplier risk scores (27.39 mean) and calculating 30-day inventory burn probabilities.'
      },
      {
        capability: 'Data Transformation & Integration',
        tools: ['Power Query', 'SQL Server', 'Excel'],
        purpose: 'Consolidating order lines ($550.23M), logistics waybills, warehouse stock registers, and carrier delay records.'
      },
      {
        capability: 'Financial & Operational DAX Metrics',
        tools: ['DAX', 'Power BI Data Engine'],
        purpose: 'Modeling delay cost exposure ($6.29M), net margin ($192.56M), vendor SLA percentages, and shortage unit totals (5.19M).'
      },
      {
        capability: 'Executive BI Cockpit & Warning Alerting',
        tools: ['Microsoft Power BI', 'Interactive Visuals'],
        purpose: 'Interactive executive radar layout with drill-through maps, vendor ranking grids, and automated shortage alert indicators.'
      }
    ],
    workflowSteps: [
      'Multi-Source Logistics Ingestion',
      'Power Query Cleaning & Reconciliation',
      'Supplier Risk Scoring Algorithm',
      'Delay Cost Financial Quantification',
      '30-Day Shortage Prediction Model',
      'Executive Power BI Risk Cockpit'
    ],
    predictsAndEnhanced: {
      predictsLabel: 'What We Predict & Monitor',
      enhancedLabel: 'Enterprise Risk Mitigated',
      whatWePredict: [
        {
          title: '30-Day Inventory Shortages (5.19M Units)',
          description: 'Identify critical inventory stockouts 30 days ahead based on production consumption and lead times.'
        },
        {
          title: 'Carrier Delay Costs ($6.29M)',
          description: 'Calculate monetary financial liability of shipping route bottlenecks and customs clearance delays.'
        },
        {
          title: 'Supplier Default Probability (27.39 Index)',
          description: 'Score tier-1 supplier SLA delivery reliability to preempt vendor-caused manufacturing shutdowns.'
        },
        {
          title: 'Fulfillment Order Velocity (73.1K Orders)',
          description: 'Track throughput capacity across global logistics corridors to optimize container loading.'
        }
      ],
      whatWeEnhanced: [
        {
          title: '5.19M Unit Shortage Prevention',
          description: 'Enabled proactive buffer stock transfers between regional hubs before production assembly lines stalled.'
        },
        {
          title: 'Delay Cost Containment',
          description: 'Provided legal and procurement teams with SLA non-compliance evidence to recover carrier delay penalties.'
        },
        {
          title: 'Vendor Contract Optimization',
          description: 'Ranked 25 suppliers by verified performance to allocate high-value POs to top-tier reliable partners.'
        },
        {
          title: 'Executive C-Suite Risk Visibility',
          description: 'Delivered unified real-time oversight of $550.23M in enterprise sales volume and $192.56M in profits.'
        }
      ]
    }
  }
};

export const DataAnalystProjectView: React.FC<DataAnalystProjectViewProps> = ({
  project,
  prevProject,
  nextProject,
  onOpenQuote,
  onNavigate
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'both' | 'page1' | 'page2'>('both');
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; subtitle?: string } | null>(null);
  const [visualCategoryFilter, setVisualCategoryFilter] = useState<string>('All');

  const content = dataAnalystRepository[project.id] || dataAnalystRepository['project-18'];
  const workflowSteps = content.workflowSteps || [];
  const kpiCards = content.kpiCards || [];
  const detailedVisuals = content.detailedVisuals || [];
  const availableCategories = ['All', ...Array.from(new Set(detailedVisuals.map(v => v.category)))];
  const filteredVisuals = visualCategoryFilter === 'All'
    ? detailedVisuals
    : detailedVisuals.filter(v => v.category === visualCategoryFilter);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-36 sm:pt-40 md:pt-48 lg:pt-52 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <SEOHead 
        title={`${project.title} - Data Analyst Case Study | DATAMINT AARVIX`}
        description={project.shortDesc}
        url={`https://datamintaarvix.com/portfolio/${project.id}`}
      />

      {/* Top Header Bar with Breadcrumb, PDF Download and Page Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <button
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-brand transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Data Analyst Portfolio</span>
        </button>

        <div className="flex flex-wrap items-center gap-3">
          {content.pdfDownloadUrl && (
            <a
              href={content.pdfDownloadUrl}
              download={content.pdfDownloadName || "Grokal_Sales_Outlet_Performance_Analysis.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/30 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold hover:bg-emerald-500/20 active:scale-95 transition-all cursor-pointer shadow-sm"
              title="Download Full Project PDF Report"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF Report</span>
            </a>
          )}

          {/* View Mode Switcher: 1st Page | 2nd Page | Continuous */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono">
            <button
              onClick={() => setActiveTab('page1')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'page1'
                  ? 'bg-white dark:bg-cyan-brand text-slate-900 dark:text-navy-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              1st Page
            </button>
            <button
              onClick={() => setActiveTab('page2')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'page2'
                  ? 'bg-white dark:bg-cyan-brand text-slate-900 dark:text-navy-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              2nd Page
            </button>
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'both'
                  ? 'bg-white dark:bg-cyan-brand text-slate-900 dark:text-navy-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Full View
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          1ST PAGE (MATCHING THE USER'S SKETCH STRUCTURE)
          - Project Name
          - Project Overview (Box)
          - Tools Used (Bar)
          - View Project (Button)
          - Process (Bullet Points) & Reference Image (Split Row)
         ======================================================== */}
      {(activeTab === 'page1' || activeTab === 'both') && (
        <section id="page-1" className="space-y-10 scroll-mt-36">
          
          {/* 1st Page Sheet Container */}
          <div className="p-6 sm:p-10 lg:p-12 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-xl space-y-8 relative overflow-hidden">
            
            {/* Sheet Badge */}
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-brand uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-brand" />
                <span>1st Page // Project Overview & Process</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Data Analyst Case Study
              </span>
            </div>

            {/* 01. PROJECT NAME */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-brand uppercase tracking-widest font-bold">
                Project Name
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {project.title}
              </h1>
            </div>

            {/* 01b. MAIN POWER BI DASHBOARD (FEATURED 1ST ON PAGE) */}
            {content.mainDashboardImage && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
                    <span className="text-slate-900 dark:text-white font-bold">Primary Power BI Reporting Engine</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-brand flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to view full-resolution</span>
                  </span>
                </div>

                <div
                  onClick={() => setLightboxImage({
                    url: content.mainDashboardImage!,
                    title: project.title,
                    subtitle: content.dashboards[0] ? `${content.dashboards[0].category} // ${content.dashboards[0].metric}` : project.metrics
                  })}
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-navy-950 border-2 border-slate-200 dark:border-white/15 p-2 sm:p-4 shadow-2xl hover:border-cyan-500/60 dark:hover:border-cyan-brand/60 transition-all duration-300 cursor-pointer"
                  title="Click to expand full Power BI dashboard in lightbox"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-slate-50 dark:bg-black/40 flex items-center justify-center p-1 sm:p-3">
                    <img
                      src={content.mainDashboardImage}
                      alt={`${project.title} Main Dashboard`}
                      className="w-full h-auto max-h-[620px] object-contain mx-auto rounded-xl group-hover:scale-[1.01] transition-transform duration-500 shadow-md"
                    />

                    {/* Interactive Zoom Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono font-bold flex items-center gap-2 shadow-2xl border border-white/20">
                        <Maximize2 className="w-4 h-4 text-cyan-400" />
                        <span>Expand Full Interactive Dashboard</span>
                      </div>
                    </div>
                  </div>

                  {/* Footbar under the image */}
                  <div className="pt-3 px-2 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-700 dark:text-yellow-400 border border-amber-500/30">
                        Power BI • DAX • Power Query
                      </span>
                      <span className="hidden sm:inline">Consolidated Executive Retail Telemetry</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      $1.20M Sales • 8,523 Items • 3.9 Rating
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 02. PROJECT OVERVIEW BOX */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                <FileSpreadsheet className="w-4 h-4 text-cyan-600 dark:text-cyan-brand" />
                <span>Project Overview</span>
              </div>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                {content.overview}
              </p>
            </div>

            {/* 02b. KPI CARDS (ONLY IF DEFINED — e.g., GROKAL) */}
            {kpiCards.length > 0 && (
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-brand" />
                    <span>Executive KPI Telemetry</span>
                  </div>
                  {content.kpiImage && (
                    <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-brand font-semibold">
                      Power BI Source Visual
                    </span>
                  )}
                </div>

                {content.kpiImage && (
                  <div
                    onClick={() => setLightboxImage({ url: content.kpiImage!, title: `${project.title} — Executive KPI Metrics`, subtitle: content.kpiCards?.map(k => `${k.label}: ${k.value}`).join(' | ') || project.metrics })}
                    className="group relative rounded-2xl overflow-hidden bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-3 sm:p-4 shadow-sm hover:border-yellow-500/40 dark:hover:border-yellow-400/40 transition-all cursor-pointer"
                    title="Click to view full-resolution KPI Cards"
                  >
                    <img
                      src={content.kpiImage}
                      alt="Grokal Executive KPI Metrics"
                      className="w-full h-auto max-h-[140px] object-contain mx-auto group-hover:scale-[1.01] transition-transform"
                    />
                    <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {kpiCards.map((kpi, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-center space-y-1 shadow-sm hover:border-cyan-500/40 dark:hover:border-cyan-brand/40 transition-colors"
                    >
                      <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
                        {kpi.value}
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 03. TOOLS USED (BAR / BADGES) */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-brand" />
                <span>Tools Used</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {content.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/20 dark:border-cyan-brand/20 text-cyan-800 dark:text-cyan-brand font-medium flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-brand" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* 04. VIEW PROJECT & DOWNLOAD PDF BUTTONS */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (activeTab === 'page1') setActiveTab('page2');
                  setTimeout(() => scrollToSection('page-2'), 100);
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-cyan-brand text-white dark:text-navy-950 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-slate-900/10 dark:shadow-glow-cyan cursor-pointer"
              >
                <span>View Project (Detailed Deep Dive)</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {content.pdfDownloadUrl && (
                <a
                  href={content.pdfDownloadUrl}
                  download={content.pdfDownloadName || "Grokal_Sales_Outlet_Performance_Analysis.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider active:scale-95 transition-all shadow-lg shadow-emerald-600/20 cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Analysis PDF</span>
                </a>
              )}
            </div>

            {/* 05. PROCESS & REFERENCE IMAGE (SPLIT ROW) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-stretch">
              
              {/* Process Column (with Bullet Points *) */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold mb-4">
                    <Activity className="w-4 h-4 text-cyan-600 dark:text-cyan-brand" />
                    <span>Process</span>
                  </div>

                  <div className="space-y-4">
                    {content.processSteps.map((step) => (
                      <div key={step.number} className="flex items-start gap-3.5">
                        <span className="text-cyan-600 dark:text-cyan-brand font-mono font-bold text-base leading-none pt-0.5">
                          *
                        </span>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {step.title}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>Structured 4-Stage Analytics Lifecycle</span>
                  <span className="text-cyan-600 dark:text-cyan-brand font-semibold">100% Data Integrity</span>
                </div>
              </div>

              {/* Reference Image Column */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-950/80 relative group min-h-[340px] flex items-center justify-center p-3 sm:p-5 shadow-lg">
                <img
                  src={content.referenceImage}
                  alt={project.title}
                  className="max-h-[440px] w-auto max-w-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500 shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                    Reference Image
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxImage({ url: content.referenceImage, title: project.title, subtitle: 'System Architecture & Telemetry' })}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/90 dark:bg-black/70 backdrop-blur-md text-slate-800 dark:text-white border border-white/20 hover:scale-105 transition-all cursor-pointer shadow-md"
                  title="Expand Reference Image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </section>
      )}

      {/* ========================================================
          2ND PAGE (MATCHING THE USER'S SKETCH STRUCTURE)
          - Project Name
          - Overview of the Project + Reference Image (Paired Row)
          - An Detail Explanation About Project (Comprehensive Section)
          - Dash Boards Images (2x2 Grid of 4 Dashboard Cards)
          - Tools Used For This (Categorized Breakdown)
          - What We Predict and What We Have Enhanced (Dual Impact Columns)
         ======================================================== */}
      {(activeTab === 'page2' || activeTab === 'both') && (
        <section id="page-2" className="space-y-10 scroll-mt-36">
          
          {/* 2nd Page Sheet Container */}
          <div className="p-6 sm:p-10 lg:p-12 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-xl space-y-12 relative overflow-hidden">
            
            {/* Sheet Badge */}
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-brand uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-brand" />
                <span>2nd Page // Detailed Analytical Deep Dive</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Executive Deliverable
              </span>
            </div>

            {/* 01. PROJECT NAME */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-brand uppercase tracking-widest font-bold">
                Project Name
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            {/* 02. OVERVIEW OF THE PROJECT & REFERENCE IMAGE (ROW) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Overview of the Project Box */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
                    <TrendingUp className="w-4 h-4 text-cyan-600 dark:text-cyan-brand" />
                    <span>Overview of the Project</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {content.overviewOfProject.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {content.overviewOfProject.content}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-3">
                  <div className="px-3.5 py-2 rounded-xl bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/20 dark:border-cyan-brand/20 text-xs font-mono text-cyan-700 dark:text-cyan-brand font-bold">
                    Target Impact: {project.metrics}
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-slate-200/60 dark:bg-white/5 text-xs font-mono text-slate-700 dark:text-slate-300">
                    Bilateral NDA Protected
                  </div>
                  {content.pdfDownloadUrl && (
                    <a
                      href={content.pdfDownloadUrl}
                      download={content.pdfDownloadName || "Grokal_Sales_Outlet_Performance_Analysis.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold hover:bg-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>Download PDF Report</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Reference Image Box */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-950/80 relative group min-h-[260px] flex items-center justify-center p-3 sm:p-4 shadow-md">
                <img
                  src={content.overviewOfProject.referenceImage}
                  alt="Reference System Architecture"
                  className="max-h-[340px] w-auto max-w-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500 shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                    Reference Image
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxImage({ url: content.overviewOfProject.referenceImage, title: project.title, subtitle: 'Analytical Reference Diagram' })}
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 dark:bg-black/70 backdrop-blur-md text-slate-800 dark:text-white border border-white/20 hover:scale-105 transition-all cursor-pointer"
                  title="Expand Reference Image"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* 02b. KPI HIGHLIGHTS FOR PAGE 2 */}
            {kpiCards.length > 0 && (
              <div className="space-y-4">
                {content.kpiImage && (
                  <div
                    onClick={() => setLightboxImage({ url: content.kpiImage!, title: `${project.title} — Executive KPI Metrics`, subtitle: content.kpiCards?.map(k => `${k.label}: ${k.value}`).join(' | ') || project.metrics })}
                    className="group relative rounded-2xl overflow-hidden bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-4 shadow-sm hover:border-yellow-500/40 transition-all cursor-pointer"
                    title="Click to view full-resolution KPI Cards"
                  >
                    <img
                      src={content.kpiImage}
                      alt="Verified KPI Telemetry"
                      className="w-full h-auto max-h-[140px] object-contain mx-auto group-hover:scale-[1.01] transition-transform"
                    />
                    <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {kpiCards.map((kpi, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-center space-y-1 shadow-sm hover:border-yellow-500/40 dark:hover:border-yellow-400/40 transition-colors"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
                        {kpi.value}
                      </div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 03. AN DETAIL EXPLANATION ABOUT PROJECT */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
                <BarChart3 className="w-4 h-4 text-cyan-600 dark:text-cyan-brand" />
                <span>An Detail Explanation About Project</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {content.detailedExplanation.heading}
              </h3>
              <div className="space-y-4 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {content.detailedExplanation.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* 04. DASH BOARDS IMAGES (2x2 GRID OF 4 DASHBOARDS) */}
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-brand">
                  <Gauge className="w-4 h-4" />
                  <span>Dash Boards Images</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Interactive Dashboards & Analytical Cockpits
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                  Click any dashboard screen to view full-resolution telemetry
                </p>
              </div>

              {/* 2x2 Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.dashboards.map((dash, idx) => (
                  <div
                    key={dash.id}
                    onClick={() => setLightboxImage({ url: dash.image, title: dash.title, subtitle: `${dash.category} // ${dash.metric}` })}
                    className="group rounded-2xl overflow-hidden bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-md hover:shadow-2xl hover:border-cyan-500/50 dark:hover:border-cyan-brand/50 transition-all duration-300 cursor-pointer flex flex-col"
                  >
                    {/* Dashboard Visual Frame */}
                    <div className="relative aspect-[16/10] bg-slate-100/80 dark:bg-navy-950 overflow-hidden flex items-center justify-center p-3 sm:p-5">
                      <img
                        src={dash.image}
                        alt={dash.title}
                        className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500 shadow-sm"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20">
                          Dashboard {idx + 1}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-cyan-600/80 backdrop-blur-md text-white">
                          {dash.category}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs font-mono text-white">
                        <span className="font-bold text-cyan-300">{dash.metric}</span>
                      </div>
                    </div>

                    {/* Dashboard Caption Box */}
                    <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors">
                          {dash.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {dash.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        <span>Click to expand</span>
                        <Eye className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-brand" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 04B. DETAILED REPORT COMPONENT DEEP-DIVES (SCANNED FROM INNER FOLDERS) */}
            {detailedVisuals.length > 0 && (
              <div className="space-y-6 pt-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-brand">
                      <Activity className="w-4 h-4" />
                      <span>Report Component Deep-Dives ({detailedVisuals.length} Visuals)</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      Granular Report Visuals & Metric Crops
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                      Every scanned chart, KPI card, and diagnostic table extracted from the project analysis
                    </p>
                  </div>

                  {/* Filter category pills */}
                  {availableCategories.length > 2 && (
                    <div className="flex flex-wrap items-center gap-2">
                      {availableCategories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setVisualCategoryFilter(cat)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                            visualCategoryFilter === cat
                              ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20'
                              : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
                          }`}
                        >
                          {cat} {cat === 'All' ? `(${detailedVisuals.length})` : `(${detailedVisuals.filter(v => v.category === cat).length})`}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Visuals Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                  {filteredVisuals.map((vis) => (
                    <div
                      key={vis.id}
                      onClick={() => setLightboxImage({ url: vis.image, title: vis.title, subtitle: `${vis.category} ${vis.metric ? `// ${vis.metric}` : ''}` })}
                      className="group rounded-2xl overflow-hidden bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-cyan-500/50 dark:hover:border-cyan-brand/50 transition-all duration-300 cursor-pointer flex flex-col"
                    >
                      <div className="relative aspect-[16/11] bg-slate-100/90 dark:bg-navy-950 overflow-hidden flex items-center justify-center p-3">
                        <img
                          src={vis.image}
                          alt={vis.title}
                          className="max-h-full max-w-full object-contain rounded-md group-hover:scale-105 transition-transform duration-500 shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 max-w-[80%]">
                          <span className="px-2 py-0.5 rounded-md text-[9px] font-mono tracking-wider bg-black/75 backdrop-blur-md text-cyan-300 border border-white/15 truncate">
                            {vis.category}
                          </span>
                        </div>

                        <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-lg bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-3 h-3" />
                        </div>

                        {vis.metric && (
                          <div className="absolute bottom-2 left-2.5 right-2.5 z-10 text-[10px] font-mono font-bold text-white truncate drop-shadow-md">
                            {vis.metric}
                          </div>
                        )}
                      </div>

                      <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors line-clamp-1">
                            {vis.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                            {vis.description}
                          </p>
                        </div>

                        <div className="pt-2.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span>Inspect scan</span>
                          <Eye className="w-3 h-3 text-cyan-500 dark:text-cyan-brand" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 05. TOOLS USED FOR THIS (CATEGORIZED TABLE/CARDS) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
                <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-brand" />
                <span>Tools Used for This</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {content.toolsUsedForThis.map((toolGroup, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-brand font-bold">
                        Layer 0{idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {toolGroup.capability}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {toolGroup.purpose}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/80 dark:border-white/5">
                      {toolGroup.tools.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 06. DETAILED BUSINESS ANALYSIS (WHAT WE ANALYZE / WHAT WE PREDICT & BUSINESS VALUE) */}
            <div className="space-y-6 pt-2">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-brand">
                  {content.predictsAndEnhanced.predictsLabel ? 'Section 5 // Business Impact' : 'Outcome Verification'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {content.predictsAndEnhanced.predictsLabel 
                    ? 'Detailed Business Analysis' 
                    : 'What We Predicts and What We Have Enhanced'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                  {content.predictsAndEnhanced.predictsLabel
                    ? 'Structured evaluation of core analytical dimensions and verified enterprise value'
                    : 'Comparative analysis of algorithmic foresight vs tangible operational improvements'}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Column 1: What We Analyze / What We Predict */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent border border-cyan-500/20 dark:border-cyan-brand/20 space-y-5">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-cyan-500/20 dark:border-cyan-brand/20">
                    <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-brand shrink-0" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wide">
                        {content.predictsAndEnhanced.predictsLabel || 'What We Predict'}
                      </h4>
                      <p className="text-[11px] font-mono text-cyan-700 dark:text-cyan-brand">
                        {content.predictsAndEnhanced.predictsLabel 
                          ? 'Product, Outlet & Category Dimensions' 
                          : 'Machine Learning & Statistical Foresight Models'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {content.predictsAndEnhanced.whatWePredict.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-brand shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                            {idx + 1}. {item.title}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Business Value / What We Have Enhanced */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent border border-emerald-500/20 dark:border-emerald-400/20 space-y-5">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-emerald-500/20 dark:border-emerald-400/20">
                    <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wide">
                        {content.predictsAndEnhanced.enhancedLabel || 'What We Have Enhanced'}
                      </h4>
                      <p className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                        {content.predictsAndEnhanced.enhancedLabel 
                          ? 'Strategic & Operational Benefits' 
                          : 'Verifiable Business & Operational Performance Gains'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {content.predictsAndEnhanced.whatWeEnhanced.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                            {idx + 1}. {item.title}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* 07. PROJECT ARCHITECTURE WORKFLOW DIAGRAM (SECTION 6) */}
            {workflowSteps.length > 0 && (
              <div className="space-y-6 pt-4 border-t border-slate-200/80 dark:border-white/10">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-brand">
                    Section 6 // Workflow Architecture
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Project Architecture & End-to-End Pipeline
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                    Linear data engineering and analytics transformation lifecycle
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4">
                    {workflowSteps.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <div className="flex-1 w-full text-center p-4 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 shadow-sm hover:border-cyan-500/40 dark:hover:border-cyan-brand/40 transition-all group">
                          <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-brand font-bold uppercase tracking-wider mb-1">
                            Step 0{idx + 1}
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors">
                            {step}
                          </div>
                        </div>

                        {idx < workflowSteps.length - 1 && (
                          <div className="hidden lg:flex items-center justify-center text-cyan-600 dark:text-cyan-brand shrink-0">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                        {idx < workflowSteps.length - 1 && (
                          <div className="flex lg:hidden items-center justify-center text-cyan-600 dark:text-cyan-brand py-1">
                            <ArrowDown className="w-4 h-4" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </section>
      )}

      {/* ========================================================
          PREVIOUS / NEXT PROJECT NAVIGATION BAR (SECTION 7)
         ======================================================== */}
      <section className="flex flex-col sm:flex-row items-center justify-between border-t border-b border-slate-200 dark:border-white/10 py-6 gap-4">
        {prevProject ? (
          <button
            onClick={() => navigate(`/portfolio/${prevProject.id}`)}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-brand cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev: {prevProject.title}</span>
            <span className="sm:hidden">Prev Project</span>
          </button>
        ) : <div />}

        <button
          onClick={() => navigate('/portfolio')}
          className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-brand font-bold hover:underline cursor-pointer flex items-center gap-1.5"
        >
          <span>Back to Data Analyst Portfolio</span>
        </button>

        {nextProject ? (
          <button
            onClick={() => navigate(`/portfolio/${nextProject.id}`)}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-brand cursor-pointer transition-colors"
          >
            <span className="hidden sm:inline">Next: {nextProject.title}</span>
            <span className="sm:hidden">Next Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : <div />}
      </section>

      {/* ========================================================
          BOTTOM CONSULTATION CALLOUT / CALLS TO ACTION (SECTION 7)
         ======================================================== */}
      <section className="glass-panel p-8 sm:p-12 lg:p-16 rounded-[2.5rem] border border-slate-200 dark:border-white/15 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/30 dark:border-cyan-brand/30 text-cyan-700 dark:text-cyan-brand text-xs font-mono uppercase tracking-widest font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>ENTERPRISE DATA ARCHITECTURE</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Want a similar decision intelligence engine built for your business?
        </h3>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          Tell us about your retail data sources and reporting bottlenecks. We will design the ingestion pipelines, data warehouse schemas, and tailored executive cockpits.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          {content.dashboardUrl && (
            <a
              href={content.dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-lg shadow-emerald-600/20 flex items-center gap-2 hover:bg-emerald-500 transition-all"
            >
              <span>View Dashboard</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {content.pdfDownloadUrl && (
            <a
              href={content.pdfDownloadUrl}
              download={content.pdfDownloadName || "Grokal_Sales_Outlet_Performance_Analysis.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-lg shadow-emerald-600/20 flex items-center gap-2 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Case Study (PDF)</span>
            </a>
          )}

          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-full bg-cyan-600 dark:bg-cyan-brand text-white dark:text-navy-950 text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-lg shadow-cyan-600/20 dark:shadow-glow-cyan flex items-center gap-2 hover:opacity-95 transition-all"
          >
            <span>Contact Us / Discuss Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ========================================================
          FULL-SCREEN LIGHTBOX MODAL FOR DASHBOARDS & REFERENCE
         ======================================================== */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-slate-950/80">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {lightboxImage.title}
                </h4>
                {lightboxImage.subtitle && (
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    {lightboxImage.subtitle}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-3 sm:p-6 overflow-auto flex items-center justify-center bg-black/50">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DataAnalystProjectView;
