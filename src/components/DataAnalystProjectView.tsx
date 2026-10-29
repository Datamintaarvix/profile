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

  const content = dataAnalystRepository[project.id] || dataAnalystRepository['project-09'];
  const workflowSteps = content.workflowSteps || [];
  const kpiCards = content.kpiCards || [];

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
                    title: 'Grokal — Retail Sales & Outlet Performance Intelligence',
                    subtitle: 'Full Power BI Executive Analytics Dashboard ($1.20M Total Sales)'
                  })}
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-navy-950 border-2 border-slate-200 dark:border-white/15 p-2 sm:p-4 shadow-2xl hover:border-cyan-500/60 dark:hover:border-cyan-brand/60 transition-all duration-300 cursor-pointer"
                  title="Click to expand full Power BI dashboard in lightbox"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-slate-50 dark:bg-black/40 flex items-center justify-center p-1 sm:p-3">
                    <img
                      src={content.mainDashboardImage}
                      alt="Grokal Retail Sales & Outlet Performance Intelligence Main Dashboard"
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
                    onClick={() => setLightboxImage({ url: content.kpiImage!, title: 'Grokal Executive KPI Cards', subtitle: '$1.20M Total Sales | $141 Avg Sales | 8,523 Items | 3.9 Rating' })}
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
                    onClick={() => setLightboxImage({ url: content.kpiImage!, title: 'Executive KPI Telemetry', subtitle: 'Total Sales $1.20M | Average Sales $141 | Items 8,523 | Rating 3.9' })}
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
