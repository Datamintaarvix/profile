import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects, Project } from '../data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Zap, 
  ExternalLink,
  Code2,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { DataAnalystProjectView } from '../components/DataAnalystProjectView';

interface ProjectDetailViewProps {
  onOpenQuote: (serviceCategory?: string) => void;
  onNavigate: (tabId: string) => void;
}

interface ProjectModule {
  name: string;
  description: string;
}

interface DetailedProjectInfo {
  overview: string;
  problemStatement: string;
  whatWeMade: {
    sectionTitle: string;
    modules: ProjectModule[];
  }[];
  keyDeliverables: string[];
  architecturePattern: string;
  deploymentModel: string;
}

const detailedProjectData: Record<string, DetailedProjectInfo> = {
  'project-01': {
    overview: 'A unified enterprise operations cockpit designed to coordinate multi-branch inventory, role-based workforce permissions, and financial compliance into a single cohesive system.',
    problemStatement: 'The client struggled with fragmented spreadsheets across branches, lack of real-time inventory visibility, and manual billing reconciliation errors that delayed monthly audits.',
    whatWeMade: [
      {
        sectionTitle: 'Core Systems & Operations',
        modules: [
          {
            name: 'Multi-Branch Resource Planning Cockpit',
            description: 'Centralized command center consolidating real-time stock levels, employee staffing, and asset allocation across regional hubs.'
          },
          {
            name: 'Granular Role-Based Access Control (RBAC)',
            description: 'Multi-tier permission hierarchy securing financial ledgers, administrative functions, and operational data with complete audit logs.'
          },
          {
            name: 'Real-Time Multi-Warehouse Inventory Ledger',
            description: 'Automated stock tracking engine with minimum-threshold alerts, barcode identification, and transfer reconciliation.'
          }
        ]
      },
      {
        sectionTitle: 'Finance & Regulatory Compliance',
        modules: [
          {
            name: 'Automated Billing & Tax Calculation Engine',
            description: 'Automated GST/tax invoice generation, exportable financial summaries, and automated multi-currency reconciliation.'
          },
          {
            name: 'Real-Time Executive KPI Telemetry',
            description: 'Interactive analytics dashboard visualizing gross margins, operational velocity, branch throughput, and variance metrics.'
          }
        ]
      }
    ],
    keyDeliverables: [
      'Multi-branch resource planning dashboard',
      'Audit-logged RBAC security layer',
      'Automated multi-warehouse inventory engine',
      'Exportable financial & tax billing generator',
      'Executive KPI visualization portal'
    ],
    architecturePattern: 'Enterprise Modular Architecture with Event-Driven Synchronization',
    deploymentModel: 'High-availability private cloud VPC with automated daily failover backups'
  },
  'project-02': {
    overview: 'A high-performance corporate brand portal crafted to elevate digital brand authority, technical SEO discovery, and conversion velocity with sub-second page rendering.',
    problemStatement: 'The company needed to transition from an outdated static web presence to a modern corporate platform that showcases their capabilities with fluid animations and rapid content updates.',
    whatWeMade: [
      {
        sectionTitle: 'Digital Experience & Interface',
        modules: [
          {
            name: 'Modern Brand Identity & Experience Portal',
            description: 'Fluid responsive layout built with glassmorphic aesthetics, modern typography, and optimized asset pipelines for instantaneous first paint.'
          },
          {
            name: 'Zero-Shift Responsive Layout Engine',
            description: 'Perfect 100/100 performance score with zero Cumulative Layout Shift (CLS 0.0) across desktop, tablet, and mobile displays.'
          },
          {
            name: 'Interactive Service & Showcase Catalog',
            description: 'Engaging interactive showcase detailing capability tiers, technology coverage, and enterprise portfolio case studies.'
          }
        ]
      },
      {
        sectionTitle: 'Content & Lead Acquisition',
        modules: [
          {
            name: 'Headless Content Management Workflow',
            description: 'Intuitive editorial publishing system allowing marketing teams to update service content, insights, and media without engineering dependencies.'
          },
          {
            name: 'Technical SEO & Lead Funnel System',
            description: 'Structured JSON-LD schema, dynamic OpenGraph assets, canonical hierarchy, and interactive quotation capture forms.'
          }
        ]
      }
    ],
    keyDeliverables: [
      'Modern glassmorphic brand showcase portal',
      'Sub-second page rendering with 100/100 Lighthouse score',
      'Headless CMS integration for dynamic updates',
      'Technical SEO architecture & schema markup',
      'Integrated quotation & consultation funnel'
    ],
    architecturePattern: 'Edge-Optimized Rendering with Dynamic Content Architecture',
    deploymentModel: 'Global Edge Delivery Network with automated SSL and multi-region caching'
  },
  'project-03': {
    overview: 'A scalable omnichannel commerce platform engineered for high-concurrency checkouts, seamless payment failover, and automated warehouse synchronization during peak promotion periods.',
    problemStatement: 'During promotional flash sales, the client faced server slowdowns, payment timeouts, and inventory overselling caused by delays between checkout and warehouse systems.',
    whatWeMade: [
      {
        sectionTitle: 'Storefront & Discovery',
        modules: [
          {
            name: 'High-Throughput Omnichannel Storefront',
            description: 'Blazing fast customer-facing storefront optimized for mobile shopping, sub-second page transitions, and friction-free browsing.'
          },
          {
            name: 'Sub-Second Product Search & Filtering',
            description: 'In-memory search engine offering instant search-as-you-type, multi-attribute filtering, and automated out-of-stock badge suppression.'
          }
        ]
      },
      {
        sectionTitle: 'Transactions & Fulfillment',
        modules: [
          {
            name: 'Resilient Multi-Gateway Checkout Engine',
            description: 'Automated gateway fallback between primary and secondary payment providers ensuring zero lost transactions during gateway outages.'
          },
          {
            name: 'Live Inventory Reservation System',
            description: 'Atomic stock locking upon cart entry preventing dual checkout conflicts during high-volume sales events.'
          },
          {
            name: 'Automated Fulfillment & Order Dispatch',
            description: 'Real-time webhook bridge linking orders to 3PL logistics, dispatching automated SMS/email customer notifications.'
          }
        ]
      }
    ],
    keyDeliverables: [
      'High-speed responsive commerce storefront',
      'Sub-50ms instant product search and filters',
      'Redundant multi-gateway checkout engine',
      'Real-time atomic stock reservation system',
      '3PL warehouse webhook integration & notifications'
    ],
    architecturePattern: 'Distributed High-Throughput Storefront & Real-Time Sync',
    deploymentModel: 'Auto-scaling container cluster with high-availability load balancers'
  },
  'project-04': {
    overview: 'A domain-specific AI automation assistant capable of indexing enterprise documentation, resolving technical inquiries, and deflecting customer support volume 24/7.',
    problemStatement: 'Customer support teams were overwhelmed with repetitive technical questions, while internal documentation was scattered across separate wikis and PDF manuals.',
    whatWeMade: [
      {
        sectionTitle: 'Knowledge Ingestion & Intelligence',
        modules: [
          {
            name: 'Enterprise Knowledge Ingestion Pipeline',
            description: 'Automated ingestion system parsing internal manuals, technical PDFs, and policy guidelines into high-dimensional semantic indices.'
          },
          {
            name: 'Contextual AI Query Resolution Engine',
            description: 'Intelligent conversational assistant delivering precise technical answers with direct paragraph citations and source verifications.'
          }
        ]
      },
      {
        sectionTitle: 'Operations & Human Handoff',
        modules: [
          {
            name: 'Seamless Human Escalation Workflow',
            description: 'Automated fallback routing transferring conversations to human support agents whenever confidence scores dip below defined thresholds.'
          },
          {
            name: 'Admin Insights & Query Trend Analytics',
            description: 'Real-time management dashboard highlighting common unanswered topics, documentation gaps, and customer sentiment.'
          }
        ]
      }
    ],
    keyDeliverables: [
      'Multi-format enterprise knowledge parsing pipeline',
      'Semantic vector search and answer generation engine',
      'Hallucination prevention with source citations',
      'Automated human escalation & ticketing bridge',
      'Executive analytics dashboard on customer query trends'
    ],
    architecturePattern: 'Intelligent Knowledge Pipeline with Semantic Search & Automation',
    deploymentModel: 'Private Enterprise Cloud with strictly isolated tenant data enclaves'
  },
  'project-05': {
    overview: 'A resilient cross-platform mobile client designed for field personnel to log telemetry, complete work orders, and inspect plant equipment with full offline capability.',
    problemStatement: 'Engineers working in remote or underground industrial facilities frequently experienced total connectivity loss, leading to missing inspection records and delayed handovers.',
    whatWeMade: [
      {
        sectionTitle: 'Field Client & Offline Capability',
        modules: [
          {
            name: 'Offline-First Field Work Order Engine',
            description: 'Full offline database functionality enabling field engineers to record machine inspections, checklists, and signatures without internet.'
          },
          {
            name: 'Background Two-Way Synchronization',
            description: 'Automatic data sync mechanism resolving conflict rules and pushing cached telemetry immediately upon regaining cellular signal.'
          }
        ]
      },
      {
        sectionTitle: 'Hardware & Sensor Integration',
        modules: [
          {
            name: 'Barcode & QR Asset Scanner',
            description: 'High-speed camera scanner validating equipment serial numbers and fetching service history in milliseconds.'
          },
          {
            name: 'Geo-Tagged Telemetry & Photo Attachment',
            description: 'Hardware GPS verification stamping exact location coordinates, timestamps, and compressed photographic proofs.'
          }
        ]
      }
    ],
    keyDeliverables: [
      'Cross-platform iOS and Android field application',
      'Zero-connectivity offline database & work order editor',
      'Two-way conflict-free background reconciliation engine',
      'High-speed barcode & equipment QR scanner',
      'GPS geo-tagging & photo inspection upload suite'
    ],
    architecturePattern: 'Cross-Platform Enterprise Client with Offline-First Engine',
    deploymentModel: 'Enterprise mobile distribution with continuous over-the-air updates'
  },
  'project-06': {
    overview: 'A modern self-service client dashboard providing transparent milestone progress, contract e-signing, ticket management, and billing reconciliation.',
    problemStatement: 'Clients lacked unified visibility into project status, requiring frequent back-and-forth emails for invoice copies, project documents, and support requests.',
    whatWeMade: [
      {
        sectionTitle: 'Client Interface & Collaboration',
        modules: [
          {
            name: 'Real-Time Project Milestone Tracker',
            description: 'Live interactive roadmap displaying sprint deliverables, completion percentages, and release changelogs.'
          },
          {
            name: 'Encrypted Document & Contract Vault',
            description: 'Secure client repository for digital contract e-signing, NDA exchange, and downloadable technical specifications.'
          }
        ]
      },
      {
        sectionTitle: 'Billing & Lifecycle Management',
        modules: [
          {
            name: 'Direct Billing & Invoice Reconciliation',
            description: 'Comprehensive financial dashboard enabling instant statement downloads, payment history tracking, and digital payments.'
          },
          {
            name: 'Integrated Support Ticket Lifecycle',
            description: 'Built-in customer service desk with severity flagging, SLA tracking, and instant notifications upon developer updates.'
          }
        ]
      }
    ],
    keyDeliverables: [
      'Responsive self-service client dashboard',
      'Interactive sprint roadmap & deliverable tracker',
      'Encrypted digital contract & document vault',
      'Billing management with invoice downloads',
      'Support ticketing system with SLA tracking'
    ],
    architecturePattern: 'Reactive Cloud Portal with Secure Storage & Microservices',
    deploymentModel: 'Cloud-native infrastructure with end-to-end data encryption in transit & rest'
  },
  'project-07': {
    overview: 'A research-driven accessibility design system, interactive micro-prototypes, and frictionless financial onboarding flows for a growing fintech organization.',
    problemStatement: 'The client had inconsistent UI components across web and mobile apps, poor user onboarding retention, and failed accessibility audits.',
    whatWeMade: [
      {
        sectionTitle: 'Design System & Component Library',
        modules: [
          {
            name: 'Enterprise Tokenized Design System',
            description: 'Scalable library of 150+ atomic components with typography, color, spacing, and semantic tokens synced between Figma and code.'
          },
          {
            name: 'Frictionless Customer Onboarding Funnel',
            description: 'Re-engineered KYC registration flow reducing identity verification steps and improving completion rates.'
          }
        ]
      },
      {
        sectionTitle: 'Accessibility & User Research',
        modules: [
          {
            name: 'Full WCAG 2.1 AA Accessibility Overhaul',
            description: 'Screen reader optimization, high-contrast states, and keyboard navigation testing across all critical transaction paths.'
          },
          {
            name: 'Interactive Motion & Micro-Interaction Prototypes',
            description: 'High-fidelity animated prototypes validating complex financial interactions prior to production engineering.'
          }
        ]
      }
    ],
    keyDeliverables: [
      'Tokenized multi-platform design system',
      'High-conversion KYC onboarding flow',
      'WCAG 2.1 AA accessibility audit certification',
      'Interactive Figma component repository',
      'Design handoff documentation for engineering pods'
    ],
    architecturePattern: 'Design Token Architecture & Micro-Component Design System',
    deploymentModel: 'Enterprise Design System repository with automated versioning'
  },
  'project-08': {
    overview: 'A zero-downtime multi-region cloud topology with automated continuous delivery, container clustering, and proactive monitoring for enterprise web workloads.',
    problemStatement: 'Manual deployment releases frequently caused downtime during updates, server load spikes resulted in 502 gateway errors, and lack of automated failover risked data loss.',
    whatWeMade: [
      {
        sectionTitle: 'Infrastructure & Orchestration',
        modules: [
          {
            name: 'Multi-Region Auto-Scaling Cloud Cluster',
            description: 'Resilient cloud topology with auto-scaling compute pools, geo-distributed traffic routing, and automated health checks.'
          },
          {
            name: 'Zero-Downtime Rolling Deployment Pipeline',
            description: 'Automated CI/CD workflows executing automated linting, test suites, container builds, and blue-green zero-downtime releases.'
          }
        ]
      },
      {
        sectionTitle: 'Security & Telemetry',
        modules: [
          {
            name: '24/7 Proactive Observability & Incident Alerting',
            description: 'Centralized log aggregation, real-time APM telemetry, and anomaly alerts dispatched instantly to on-call engineering pods.'
          },
          {
            name: 'Automated Disaster Recovery & WAL Archiving',
            description: 'Continuous point-in-time database snapshotting and automated failover routing across isolated regional zones.'
          }
        ]
      }
    ],
    keyDeliverables: [
      'Multi-region container cluster architecture',
      'Automated CI/CD blue-green release pipeline',
      'Real-time infrastructure APM monitoring dashboard',
      'Automated point-in-time disaster recovery plan',
      'Infrastructure as Code (IaC) configuration repository'
    ],
    architecturePattern: 'Multi-Region Cloud Infrastructure & Automated CI/CD',
    deploymentModel: 'Multi-region cloud infrastructure with container orchestration'
  },
  'project-09': {
    overview: 'An interactive executive decision engine with predictive forecasting models, live ETL pipelines, and real-time revenue telemetry.',
    problemStatement: 'Leadership was waiting weeks for end-of-month manual Excel reports, leaving them unable to react quickly to regional margin trends and supply bottlenecks.',
    whatWeMade: [
      {
        sectionTitle: 'Data Pipeline & Warehousing',
        modules: [
          {
            name: 'Real-Time Streaming ETL Pipeline',
            description: 'High-throughput data ingestion pipeline capturing and cleaning transactions, supply events, and client activity in real time.'
          },
          {
            name: 'Unified Analytical Data Warehouse',
            description: 'Columnar storage schema optimized for complex multi-dimensional aggregation queries across millions of historical records.'
          }
        ]
      },
      {
        sectionTitle: 'Intelligence & Executive Dashboards',
        modules: [
          {
            name: 'Interactive Executive Business Intelligence Cockpit',
            description: 'Role-based visualization portal showing real-time gross margin, regional churn, customer lifetime value, and growth trajectories.'
          },
          {
            name: 'Predictive Demand & Revenue Forecasting Models',
            description: 'Statistical forecasting algorithms identifying seasonal buying patterns and inventory restock requirements.'
          }
        ]
      }
    ],
    keyDeliverables: [
      'Real-time streaming ETL data pipeline',
      'Unified cloud analytical data warehouse',
      'Executive interactive BI analytics portal',
      'Predictive forecasting & trend analysis algorithms',
      'Automated scheduled executive email reports'
    ],
    architecturePattern: 'Real-Time ETL Pipeline & Interactive Business Intelligence Suite',
    deploymentModel: 'Secure isolated analytical cloud with role-scoped access control'
  },
  'project-10': {
    overview: 'A comprehensive multi-channel digital brand strategy, proactive community engagement workflows, targeted brand campaigns, and conversion analytics.',
    problemStatement: 'The brand had stagnant follower engagement, inconsistent messaging across platforms, and no clear system to track social channel ROI into actual customer sales.',
    whatWeMade: [
      {
        sectionTitle: 'Content Strategy & Distribution',
        modules: [
          {
            name: 'Multi-Channel Brand Content System',
            description: 'Cohesive monthly content calendar featuring custom motion graphics, carousels, and thought leadership articles tailored per platform.'
          },
          {
            name: 'Targeted High-Conversion Paid Ad Campaigns',
            description: 'Audience-segmented ad campaigns with automated A/B creative testing to maximize return on ad spend (ROAS).'
          }
        ]
      },
      {
        sectionTitle: 'Community & Performance Telemetry',
        modules: [
          {
            name: 'Proactive Community Management Engine',
            description: 'Fast-response inquiry triage workflows resolving incoming comments and direct messages into qualified sales leads.'
          },
          {
            name: 'Full-Funnel Social Attribution Dashboard',
            description: 'Transparent reporting connecting social impressions and clicks directly to website inquiries and closed revenue.'
          }
        ]
      }
    ],
    keyDeliverables: [
      'Comprehensive multi-channel brand content calendar',
      'Audience-segmented paid advertising campaigns',
      'Community engagement & lead qualification system',
      'Monthly ROI & attribution analytics reporting',
      'Custom visual asset & motion design library'
    ],
    architecturePattern: 'Omnichannel Content Delivery & Growth Intelligence Platform',
    deploymentModel: 'Cloud-hosted campaign distribution engine with automated webhooks'
  },
  'project-18': {
    overview: 'Developed an interactive Power BI dashboard to analyze retail sales performance across product categories, outlet types, outlet sizes, location tiers, and outlet establishment years.',
    problemStatement: 'Retail sales reporting was scattered across disparate Excel files, hindering outlet comparisons, category trend evaluations, and historical growth tracking.',
    whatWeMade: [
      {
        sectionTitle: 'Interactive BI Dashboards & KPIs',
        modules: [
          {
            name: 'Retail Executive KPI Suite',
            description: 'Real-time monitoring of Total Sales ($1.20M), Average Sales ($141), Item Count (8,523), and Average Rating (3.9).'
          },
          {
            name: 'Product Category & Fat Content Analysis',
            description: 'Item-type revenue breakdown and Low Fat vs. Regular sales distribution analysis.'
          },
          {
            name: 'Outlet Establishment Historical Trends',
            description: 'Historical growth trajectory chart tracking sales patterns across outlet establishment years.'
          },
          {
            name: 'Outlet Size & Tier Benchmarking Matrix',
            description: 'Comparative analytics across outlet sizes (Small, Medium, High), location tiers (Tier 1, 2, 3), and outlet types.'
          }
        ]
      }
    ],
    keyDeliverables: [
      'Interactive Power BI Retail Intelligence Dashboard',
      'Custom DAX measures for KPI tracking and benchmarking',
      'Power Query ETL data models and cleaning transformations',
      'Full-screen interactive dashboard gallery'
    ],
    architecturePattern: 'Power BI Star Schema Data Model with DAX Analytical Measures',
    deploymentModel: 'Power BI Cloud Service with role-level reporting and desktop distribution'
  }
};

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ onOpenQuote, onNavigate }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll to top upon mounting or id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Find project by id or fallback to first project
  const project = projects.find((p) => p.id === id) || projects[0];
  const projectIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const detail = detailedProjectData[project.id] || {
    overview: project.shortDesc,
    problemStatement: 'Custom client engagement designed to replace legacy manual processes with streamlined digital automation.',
    whatWeMade: [
      {
        sectionTitle: 'Core Capabilities Delivered',
        modules: [
          {
            name: project.title,
            description: project.shortDesc
          }
        ]
      }
    ],
    keyDeliverables: [
      'Custom solution architecture',
      'High-availability cloud setup',
      'Security & access controls',
      'Production deployment and ongoing support'
    ],
    architecturePattern: 'Modern Cloud Architecture',
    deploymentModel: 'High-availability private cloud VPC'
  };

  const getProjectImage = (projId: string) => {
    switch (projId) {
      case 'project-01': return '/service/softwaredevelopment.png';
      case 'project-02': return '/service/webdevelopment.png';
      case 'project-03': return '/service/ecom.png';
      case 'project-04': return '/service/ai.png';
      case 'project-05': return '/service/mobileappdevelopment.png';
      case 'project-06': return '/service/customsolutions.png';
      case 'project-07': return '/service/uiux.png';
      case 'project-08': return '/service/cloud-deployment.png';
      case 'project-09': return '/service/dataanalytics.png';
      case 'project-10': return '/service/socialmedia.png';
      case 'project-16': return '/project/moderncustomerportalworkspace.png';
      case 'project-17': return '/home/businessmanagementdashboardinterface.png';
      case 'project-18': return '/dataanalyst_project/grokal/grokal_main_dashboard.png';
      default: return '/service/webdevelopment.png';
    }
  };

  // If viewing a Data Analytics project, render the specialized two-page architecture matching user sketch
  if (project.category === 'Data Analytics') {
    return (
      <DataAnalystProjectView
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
        onOpenQuote={onOpenQuote}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div className="pt-36 sm:pt-40 md:pt-48 lg:pt-52 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <SEOHead 
        title={`${project.title} - Case Study | DATAMINT AARVIX`}
        description={project.shortDesc}
        url={`https://datamintaarvix.com/portfolio/${project.id}`}
      />

      {/* Top Back Navigation Bar */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <button
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-brand transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <span>PROJECT {project.number} OF {projects.length.toString().padStart(2, '0')}</span>
        </div>
      </div>

      {/* Project Hero Header */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/30 dark:border-cyan-brand/30 text-cyan-700 dark:text-cyan-brand">
            CASE STUDY // {project.number}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-cyan-mint flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Production Deployed
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          {detail.overview}
        </p>

        {/* Impact & Scope Metric Bar */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-cyan-500/5 dark:bg-cyan-brand/5 border border-cyan-500/20 dark:border-cyan-brand/20">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 dark:bg-cyan-brand/10 text-cyan-600 dark:text-cyan-brand flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Measured Impact</div>
              <div className="text-sm font-bold font-mono text-cyan-700 dark:text-cyan-brand">
                {project.metrics}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-brand shrink-0" />
            <span>Built to client specifications under bilateral enterprise NDA</span>
          </div>
        </div>
      </section>

      {/* Hero Showcase Image */}
      <section className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl border border-slate-200 dark:border-white/10 bg-navy-950">
        <img
          src={getProjectImage(project.id)}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
        
        {/* Floating Watermark & Category Tag */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs font-mono">
          <div className="flex items-center gap-2 bg-navy-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <Code2 className="w-3.5 h-3.5 text-cyan-brand" />
            <span>FULL PRODUCTION SYSTEM // {project.number}</span>
          </div>
          <span className="hidden sm:inline-block text-slate-300">
            {project.year} Release
          </span>
        </div>
      </section>

      {/* "WHAT WE MADE" // COMPREHENSIVE PROJECT DELIVERABLES LIST */}
      <section className="space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-brand font-bold">
            <Sparkles className="w-4 h-4" />
            <span>SYSTEM INVENTORY // WHAT WE MADE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Complete Project Deliverables
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            Below is the full breakdown of architecture modules, user interfaces, data engines, and administrative portals engineered specifically for this engagement.
          </p>
        </div>

        {/* Deliverables Modules Grid */}
        <div className="space-y-8">
          {detail.whatWeMade.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-white/10 pb-2">
                {group.sectionTitle}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.modules.map((mod, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-5 sm:p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-brand/40 transition-all space-y-2.5 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-cyan-500/10 dark:bg-cyan-brand/10 text-cyan-600 dark:text-cyan-brand flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {mod.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverable Checkpoints & System Architecture */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Core Checklist */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200 dark:border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
            <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-brand" />
            <span>Scope of Handover & Documentation</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Delivered Artifacts & Assets
          </h3>

          <div className="space-y-3 pt-2">
            {detail.keyDeliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Infrastructure Blueprint */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200 dark:border-white/10 space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
            <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-brand" />
            <span>System Architecture Specs</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Infrastructure & Topology
          </h3>

          <div className="space-y-4 pt-1 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 space-y-1">
              <div className="text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px]">
                Architecture Pattern
              </div>
              <div className="text-slate-900 dark:text-white font-medium">
                {detail.architecturePattern}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 space-y-1">
              <div className="text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px]">
                Deployment Model
              </div>
              <div className="text-slate-900 dark:text-white font-medium">
                {detail.deploymentModel}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-500/5 dark:bg-cyan-brand/5 border border-cyan-500/20 dark:border-cyan-brand/20 space-y-1">
              <div className="text-cyan-700 dark:text-cyan-brand uppercase tracking-wider text-[10px] font-bold">
                Technology Stacks Supported
              </div>
              <div className="text-slate-800 dark:text-slate-200">
                Technology-Agnostic: Engineered in the client’s preferred language, framework, and cloud ecosystem.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next / Previous Project Navigation */}
      <section className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
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
          className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
        >
          View Full Portfolio
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

      {/* Bottom Consultation Callout */}
      <section className="glass-panel p-8 sm:p-12 lg:p-16 rounded-[2.5rem] border border-slate-200 dark:border-white/15 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/30 dark:border-cyan-brand/30 text-cyan-700 dark:text-cyan-brand text-xs font-mono uppercase tracking-widest font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>TAILORED ENTERPRISE DELIVERY</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Want a similar platform engineered for your business?
        </h3>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          Tell us about your operational workflows. We will scope the system deliverables, provide an architectural breakdown, and outline a fixed-milestone timeline.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-full bg-cyan-600 dark:bg-cyan-brand text-white dark:text-navy-950 text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-lg shadow-cyan-600/20 dark:shadow-glow-cyan flex items-center gap-2 hover:opacity-95 transition-all"
          >
            <span>Contact Us / Request Scoping</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3.5 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 text-xs font-semibold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Speak With Engineering</span>
          </button>
        </div>
      </section>

    </div>
  );
};
