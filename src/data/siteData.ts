// TEMPORARY DATA — REPLACE BEFORE PRODUCTION
// All editable corporate information is centralized in this file.

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  phone: string;
  email: string;
  supportEmail: string;
  location: string;
  workingHours: string;
  foundedYear: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  badge?: string;
}

export interface Statistic {
  value: string;
  label: string;
  description: string;
  trend?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
  category: string;
}

export interface Solution {
  id: string;
  number: string;
  title: string;
  description: string;
  targetAudience: string;
  keyDeliverables: string[];
  icon: string;
  badge?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  tags: string[];
  metrics: string;
  year: string;
}

export interface PackagePlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  priceNote: string;
  features: string[];
  idealFor: string;
  ctaText: string;
  popular?: boolean;
}

export interface AddOnService {
  title: string;
  description: string;
  category: string;
}

export interface ValuePillar {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
}

// ==========================================
// 1. COMPANY INFORMATION
// ==========================================
export const companyInfo: CompanyInfo = {
  // TEMPORARY DATA — REPLACE BEFORE PRODUCTION
  name: "DATAMINT AARVIX",
  legalName: "Datamint Aarvix Technologies Private Limited",
  tagline: "Building Digital Solutions for What's Next",
  headline: "BUILDING DIGITAL SOLUTIONS FOR WHAT'S NEXT.",
  subheadline: "DATAMINT AARVIX builds modern digital products, software platforms and technology solutions that help businesses operate, grow and scale.",
  phone: "+91 9787076296",
  email: "info@datamintaarvix.com",
  supportEmail: "hr@datamintaarvix.com",
  location: "Bangalore, Karnataka, India",
  workingHours: "Monday - Friday: 9:00 AM - 6:30 PM IST",
  foundedYear: "2026"
};

// ==========================================
// 2. PRIMARY NAVIGATION
// ==========================================
export const navigationItems: NavigationItem[] = [
  { id: "home", label: "HOME", path: "/" },
  { id: "about", label: "ABOUT", path: "/about" },
  { id: "services", label: "SERVICES", path: "/services" },
  { id: "solutions", label: "SOLUTIONS", path: "/solutions" },
  { id: "packages", label: "PACKAGES", path: "/packages" },
  { id: "projects", label: "PROJECTS", path: "/projects" },
  { id: "careers", label: "CAREERS", path: "/careers" },
  { id: "contact", label: "CONTACT", path: "/contact" }
];

// ==========================================
// 3. HERO STATISTICS
// ==========================================
export const statistics: Statistic[] = [
  // TEMPORARY DATA — REPLACE BEFORE PRODUCTION
  {
    value: "25+",
    label: "Projects Delivered",
    description: "Enterprise software, digital portals, and cloud web architectures deployed.",
    trend: "+35% YoY"
  },
  {
    value: "15+",
    label: "Business Solutions",
    description: "Custom automated enterprise systems and operational workflow platforms.",
    trend: "Proven Scalability"
  },
  {
    value: "10+",
    label: "Technology Skills",
    description: "Core proficiencies across modern frontend, cloud backends, AI & DevOps.",
    trend: "Full-Stack Native"
  },
  {
    value: "99%",
    label: "Commitment to Quality",
    description: "Rigorous test coverage, security audits, and SLA uptime maintenance.",
    trend: "Enterprise SLA"
  }
];

// ==========================================
// 4. CORE SERVICES (02 / OUR EXPERTISE)
// ==========================================
export const services: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    shortDesc: "Responsive websites, corporate platforms, portals and high-performance web applications.",
    fullDesc: "We design and develop high-speed, enterprise-grade web applications built with modern frontend architectures, robust serverless backends, and responsive UI engineering. Every digital touchpoint is fine-tuned for Core Web Vitals, accessibility, and frictionless user flows.",
    features: [
      "Enterprise Corporate Portals & Web Apps",
      "Next.js / React High-Performance SPA & SSR",
      "SEO-Optimized Semantic Architecture",
      "Micro-frontend & Headless CMS Integration"
    ],
    icon: "Globe",
    category: "Engineering"
  },
  {
    id: "software-development",
    number: "02",
    title: "Software Development",
    shortDesc: "Custom software systems designed around specific business workflows and operational requirements.",
    fullDesc: "Purpose-built business software that automates operations, reduces manual bottlenecks, and centralizes critical company data. We build scalable microservices, resilient databases, and secure administrative dashboards tailored to your exact organizational hierarchy.",
    features: [
      "Custom Workflow & ERP Platforms",
      "Robust REST & GraphQL API Architecture",
      "Role-Based Access Control (RBAC)",
      "High-Volume Data Processing Engines"
    ],
    icon: "Code2",
    category: "Engineering"
  },
  {
    id: "ui-ux-design",
    number: "03",
    title: "UI/UX Design",
    shortDesc: "Research-driven interfaces, wireframes, prototypes and design systems focused on usability.",
    fullDesc: "We craft thoughtful digital product experiences that harmonize brand identity with intuitive user psychology. From initial stakeholder discovery and user journey mapping to comprehensive Figma design systems, our interfaces delight users and convert visitors into clients.",
    features: [
      "Comprehensive Design Systems & Tokens",
      "Interactive High-Fidelity Prototypes",
      "User Journey & Usability Research",
      "Accessibility (WCAG 2.1 AA) Compliance"
    ],
    icon: "Palette",
    category: "Design"
  },
  {
    id: "mobile-app-development",
    number: "04",
    title: "Mobile App Development",
    shortDesc: "Modern Android and iOS applications using scalable mobile architectures.",
    fullDesc: "High-performance native and cross-platform mobile apps engineered for fluid 60fps responsiveness, offline synchronization, and frictionless biometric security. We deliver intuitive apps ready for Google Play and Apple App Store compliance.",
    features: [
      "Cross-Platform React Native & Flutter Apps",
      "Native iOS & Android Performance Tuning",
      "Offline-First SQLite / Caching Engines",
      "Push Notifications & Biometric Auth"
    ],
    icon: "Smartphone",
    category: "Mobile"
  },
  {
    id: "ecommerce-solutions",
    number: "05",
    title: "E-Commerce",
    shortDesc: "Online stores, product catalogues, payment integrations and commerce platforms.",
    fullDesc: "Robust omnichannel commerce ecosystems designed to drive conversions and scale transaction volume seamlessly. We build custom multi-vendor marketplaces, headless storefronts, and integrated inventory logistics.",
    features: [
      "Custom Storefronts & Headless Commerce",
      "Multi-Currency & Secure Payment Gateways",
      "Automated Order & Inventory Pipelines",
      "Conversion Rate Optimization (CRO)"
    ],
    icon: "ShoppingBag",
    category: "Commerce"
  },
  {
    id: "ai-automation",
    number: "06",
    title: "AI & Automation",
    shortDesc: "AI-powered workflows, chatbot solutions, business automation and intelligent digital tools.",
    fullDesc: "Practical artificial intelligence integrations that elevate enterprise productivity. From custom Retrieval-Augmented Generation (RAG) knowledge assistants to automated document parsing and robotic process automation (RPA).",
    features: [
      "Intelligent Chatbots & Conversational Agents",
      "Automated Document & Invoice Parsing",
      "Custom LLM Fine-Tuning & Knowledge Bases",
      "Operational Workflow Automation"
    ],
    icon: "Cpu",
    category: "Intelligence"
  },
  {
    id: "cloud-deployment",
    number: "07",
    title: "Cloud & Deployment",
    shortDesc: "Cloud deployment, hosting architecture, APIs, databases and infrastructure setup.",
    fullDesc: "Zero-downtime cloud infrastructure engineered for automated CI/CD pipelines, container orchestration, and multi-region disaster recovery. We partner with AWS, Azure, GCP, and modern serverless platforms.",
    features: [
      "Docker & Kubernetes Containerization",
      "AWS / GCP / Cloudflare Edge Infrastructure",
      "Automated GitHub Actions CI/CD Pipelines",
      "Proactive Monitoring & Incident Alerting"
    ],
    icon: "Cloud",
    category: "Infrastructure"
  },
  {
    id: "custom-solutions",
    number: "08",
    title: "Custom Solutions",
    shortDesc: "Tailored technology platforms based on unique business requirements.",
    fullDesc: "When off-the-shelf software falls short, we engineer bespoke technology frameworks from the ground up. Whether integrating legacy mainframe systems, creating IoT telemetry dashboards, or building proprietary proprietary analytics.",
    features: [
      "Legacy Software Modernization",
      "Third-Party System & Webhook Bridges",
      "Custom Data Visualization Dashboards",
      "Dedicated Engineering Pod Collaboration"
    ],
    icon: "Layers",
    category: "Consulting"
  },
  {
    id: "data-analytics",
    number: "09",
    title: "Data Analytics",
    shortDesc: "Business intelligence, predictive modeling, data visualization, and comprehensive data strategy.",
    fullDesc: "We transform raw data into actionable business intelligence. Through advanced analytics, interactive dashboards, and predictive modeling, we empower leadership teams to make informed, data-driven decisions that drive growth.",
    features: [
      "Interactive Data Visualization Dashboards",
      "Predictive Analytics & Forecasting",
      "Data Warehousing & ETL Pipelines",
      "Business Intelligence (BI) Integration"
    ],
    icon: "BarChart3",
    category: "Intelligence"
  }
];

// ==========================================
// 5. WHY DATAMINT AARVIX (VALUE PILLARS)
// ==========================================
export const valuePillars: ValuePillar[] = [
  {
    number: "01",
    title: "Business First",
    description: "Technology decisions aligned with actual business requirements and return on investment, not trend-chasing.",
    icon: "Briefcase"
  },
  {
    number: "02",
    title: "Modern Engineering",
    description: "Clean architecture, scalable modular systems, test-driven pipelines, and future-proof maintainable code.",
    icon: "Terminal"
  },
  {
    number: "03",
    title: "User Focused",
    description: "Simple, intuitive, accessible digital experiences designed to engage end-users and maximize retention.",
    icon: "Users"
  },
  {
    number: "04",
    title: "Long-Term Thinking",
    description: "Solutions engineered to evolve gracefully with your growing business, avoiding costly architectural rewrites.",
    icon: "ShieldCheck"
  }
];

// ==========================================
// 6. PROCESS SECTION (FROM IDEA TO LAUNCH)
// ==========================================
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business context, target audience, technical constraints, and strategic success metrics.",
    deliverable: "Project Scope & Requirement Document"
  },
  {
    number: "02",
    title: "Strategy",
    description: "Define architecture, data models, technology selection, and milestone-driven project delivery roadmap.",
    deliverable: "System Architecture Blueprint"
  },
  {
    number: "03",
    title: "Design",
    description: "Create interactive wireframes, user journeys, responsive visual prototypes, and component design tokens.",
    deliverable: "High-Fidelity Interactive Prototype"
  },
  {
    number: "04",
    title: "Develop",
    description: "Build scalable, responsive, and production-ready solutions using clean code and automated testing.",
    deliverable: "Feature-Complete Production Build"
  },
  {
    number: "05",
    title: "Test",
    description: "Rigorous automated and manual QA testing functionality, cross-browser responsiveness, performance, and security.",
    deliverable: "Quality & Security Audit Report"
  },
  {
    number: "06",
    title: "Launch",
    description: "Execute smooth cloud deployment, domain DNS setup, SSL security verification, and provide ongoing support.",
    deliverable: "Production Release & Handover Guide"
  }
];

// ==========================================
// 7. DIGITAL SOLUTIONS (03 / DIGITAL SOLUTIONS)
// ==========================================
export const solutions: Solution[] = [
  {
    id: "corporate-websites",
    number: "01",
    title: "Corporate Websites",
    description: "Modern, high-credibility digital presence built for established enterprises seeking to project authoritative market leadership.",
    targetAudience: "Growing enterprises, industrial manufacturers, B2B consultancies",
    keyDeliverables: ["High-speed CMS integration", "Lead generation funnels", "Interactive service catalogues"],
    icon: "Building2",
    badge: "Enterprise Standard"
  },
  {
    id: "business-portals",
    number: "02",
    title: "Business Portals",
    description: "Secure, authenticated web portals facilitating seamless interaction between partners, vendors, distributors, and internal teams.",
    targetAudience: "Franchise networks, wholesale distributors, supply chain operators",
    keyDeliverables: ["Role-based authorization", "Real-time document sharing", "Self-service billing interfaces"],
    icon: "KeyRound"
  },
  {
    id: "ecommerce-platforms",
    number: "03",
    title: "E-Commerce Platforms",
    description: "Conversion-optimized digital storefronts and marketplace engines with automated order processing and secure payment rails.",
    targetAudience: "D2C brands, retail chains, subscription services",
    keyDeliverables: ["Multi-tier checkout flows", "Inventory synchronization", "Automated marketing webhooks"],
    icon: "ShoppingBag"
  },
  {
    id: "custom-software",
    number: "04",
    title: "Custom Software",
    description: "Specialized software architectures built precisely to solve proprietary operational challenges and complex logic.",
    targetAudience: "Fintech, logistics, healthcare operations, specialized services",
    keyDeliverables: ["Custom microservices", "Audited data compliance", "Automated report generators"],
    icon: "Binary"
  },
  {
    id: "mobile-applications",
    number: "05",
    title: "Mobile Applications",
    description: "Native-grade iOS and Android experiences empowering customers and field employees with on-the-go digital capabilities.",
    targetAudience: "On-demand services, consumer utilities, mobile workforce",
    keyDeliverables: ["Offline caching engine", "Biometric face/fingerprint auth", "Real-time GPS tracking"],
    icon: "Smartphone"
  },
  {
    id: "internal-management",
    number: "06",
    title: "Internal Management Systems",
    description: "Custom admin dashboards, employee operations consoles, CRM tools, and real-time inventory tracking portals.",
    targetAudience: "Operations teams, project managers, executive leadership",
    keyDeliverables: ["Executive KPI scorecards", "Automated timesheet & billing", "Granular audit logs"],
    icon: "LayoutDashboard"
  },
  {
    id: "ai-applications",
    number: "07",
    title: "AI-Powered Applications",
    description: "Next-generation applications leveraging machine intelligence to automate complex cognitive workflows and customer support.",
    targetAudience: "Customer support departments, data analysts, content teams",
    keyDeliverables: ["Custom context AI assistants", "Intelligent semantic search", "Automated classification pipelines"],
    icon: "Bot",
    badge: "AI Frontier"
  },
  {
    id: "automation-systems",
    number: "08",
    title: "Automation Systems",
    description: "Robotic workflow bridges connecting disparate software tools, eliminating repetitive manual data entry completely.",
    targetAudience: "Finance departments, human resources, administrative units",
    keyDeliverables: ["Multi-app webhook synchronizers", "Automated email & SMS triggers", "Daily reconciliation bots"],
    icon: "Workflow"
  }
];

// ==========================================
// 8. SELECTED PROJECTS (PORTFOLIO)
// ==========================================
export const projects: Project[] = [
  // TEMPORARY DATA — REPLACE BEFORE PRODUCTION
  {
    id: "project-01",
    number: "01",
    title: "Business Management Platform",
    category: "Software Development",
    shortDesc: "Unified enterprise operations cockpit managing multi-branch resource planning, role permissions, and financial audits.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    metrics: "40% Ops Efficiency Gain",
    year: "2026"
  },
  {
    id: "project-02",
    number: "02",
    title: "Modern Corporate Website",
    category: "Web Development",
    shortDesc: "High-performance corporate brand portal featuring fluid glassmorphic UI, dynamic CMS, and technical SEO structure.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    metrics: "100/100 Lighthouse Performance",
    year: "2026"
  },
  {
    id: "project-03",
    number: "03",
    title: "E-Commerce Platform",
    category: "E-Commerce",
    shortDesc: "High-conversion commerce platform supporting multi-gateway payment processing, instant checkout, and live inventory sync.",
    tags: ["Headless Commerce", "Stripe / Razorpay", "Redis"],
    metrics: "Sub-second Page Loads",
    year: "2026"
  },
  {
    id: "project-04",
    number: "04",
    title: "AI Business Assistant",
    category: "AI & Automation",
    shortDesc: "Domain-specific conversational artificial intelligence capable of answering technical enterprise queries from documentation.",
    tags: ["Python", "FastAPI", "Vector Embeddings", "LLM"],
    metrics: "85% Support Ticket Deflection",
    year: "2026"
  },
  {
    id: "project-05",
    number: "05",
    title: "Mobile Business Application",
    category: "Mobile Development",
    shortDesc: "Cross-platform mobile client for field engineers with offline telemetry recording, instant geo-tagging, and secure uploads.",
    tags: ["React Native", "SQLite", "Push Notifications"],
    metrics: "99.9% Sync Reliability",
    year: "2026"
  },
  {
    id: "project-06",
    number: "06",
    title: "Digital Customer Portal",
    category: "Web Application",
    shortDesc: "Self-service client dashboard providing transparent invoice tracking, support ticket lifecycle, and contract signing.",
    tags: ["Vue / React", "REST APIs", "AWS S3 Cloud"],
    metrics: "Zero-Downtime Architecture",
    year: "2026"
  }
];

// ==========================================
// 9. PACKAGES
// ==========================================
export const packages: PackagePlan[] = [
  {
    id: "starter",
    name: "STARTER",
    tagline: "Suitable for individuals, professionals, and emerging small businesses.",
    priceNote: "Custom Quote",
    idealFor: "Single product launch, local business showcase, boutique consultancy",
    features: [
      "3–5 Custom Designed Pages",
      "Fully Responsive Mobile Layout",
      "WhatsApp Chat Integration",
      "Interactive Google Maps Embed",
      "Functional Contact Form with Email Notification",
      "Basic On-Page SEO & Meta Tags",
      "Social Media Links & Feed Integration",
      "Standard Performance Optimization"
    ],
    ctaText: "Get a Quote →"
  },
  {
    id: "business",
    name: "BUSINESS",
    badge: "POPULAR",
    popular: true,
    tagline: "Suitable for established companies aiming for commanding digital presence.",
    priceNote: "Custom Quote",
    idealFor: "Corporate firms, commercial service providers, growing agencies",
    features: [
      "5–8 Custom Crafted Pages",
      "Premium UI/UX System & Glass Elements",
      "Interactive Product / Project Showcase",
      "Detailed Services Catalogue & Filtering",
      "Custom Enquiry & Lead Capture System",
      "WhatsApp & Direct CRM Webhook Integration",
      "Advanced Performance & Speed Tuning",
      "1 Month Dedicated Technical Support & Bug Fixing",
      "Basic Analytics & Google Search Console Setup"
    ],
    ctaText: "Get a Quote →"
  },
  {
    id: "professional",
    name: "PROFESSIONAL",
    tagline: "Suitable for high-growth businesses requiring advanced digital platforms.",
    priceNote: "Custom Quote",
    idealFor: "Scaling technology companies, B2B enterprises, funded startups",
    features: [
      "8–15 Custom Pages & Template Architecture",
      "Custom Design System with Design Tokens",
      "Advanced Dynamic Product Catalogue",
      "Sophisticated Micro-Animations & Interactivity",
      "Multi-Step Lead Capture & Qualification Funnel",
      "Comprehensive Analytics & Event Tracking",
      "Full Technical SEO & Structured Schema Data",
      "3 Months Extended Maintenance & Support",
      "Priority SLA Response Guarantee"
    ],
    ctaText: "Get a Quote →"
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    tagline: "Suitable for complex business workflows and mission-critical software systems.",
    priceNote: "Custom Quote",
    idealFor: "Large corporations, multi-department institutions, SaaS products",
    features: [
      "Custom Enterprise Software Platform Architecture",
      "Advanced Application Features & Complex Logic",
      "Dedicated CMS / Role-Based Admin Panel",
      "Custom Booking, Order or Workflow Management",
      "Third-Party API & Webhook Integrations",
      "Cloud Infrastructure Setup (AWS / GCP / Cloudflare)",
      "Automated CI/CD Pipeline Deployment",
      "6 Months Comprehensive Dedicated Support & Monitoring",
      "Enterprise Security Hardening & Regular Backups"
    ],
    ctaText: "Request Custom Quote →"
  }
];

// ==========================================
// 10. ADD-ON SERVICES
// ==========================================
export const addOnServices: AddOnService[] = [
  {
    title: "Domain & DNS Management",
    description: "Domain reservation, DNS record routing, DNSSEC security, and automated SSL certificate renewals.",
    category: "Infrastructure"
  },
  {
    title: "Cloud Hosting Setup",
    description: "High-performance cloud provisioning on AWS, Vercel, or DigitalOcean with CDN edge caching.",
    category: "Cloud"
  },
  {
    title: "Brand & Logo Design",
    description: "Corporate visual identity systems, typography guidelines, vector mark sets, and brand kits.",
    category: "Creative"
  },
  {
    title: "Technical Content",
    description: "Crisp, business-oriented copywriting for services, technical specifications, and corporate case studies.",
    category: "Content"
  },
  {
    title: "Catalogue Data Entry",
    description: "Structured digitization and uploading of expansive product portfolios, image tagging, and categories.",
    category: "Operations"
  },
  {
    title: "Monthly Maintenance",
    description: "Scheduled code dependency upgrades, security patching, uptime health checkups, and database optimization.",
    category: "Support"
  },
  {
    title: "Backup & Security",
    description: "Automated daily offsite cloud backups, Web Application Firewall (WAF) configuration, and DDoS protection.",
    category: "Security"
  },
  {
    title: "SEO & Analytics",
    description: "In-depth keyword targeting, Google Tag Manager event tracking, heatmaps, and ranking health reports.",
    category: "Growth"
  },
  {
    title: "Website Redesign",
    description: "Complete modern architectural overhaul of legacy websites with zero data loss and improved conversion metrics.",
    category: "Engineering"
  },
  {
    title: "API Integration",
    description: "Bi-directional data bridges linking external CRMs, ERPs, SMS gateways, payment rails, and marketing suites.",
    category: "Integration"
  }
];

// ==========================================
// 11. CAREERS (OPEN POSITIONS)
// ==========================================
export const careers: CareerOpening[] = [
  // TEMPORARY DATA — REPLACE BEFORE PRODUCTION
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-Time",
    experience: "1–3 Years",
    description: "We are seeking a Frontend Developer passionate about building pixel-perfect, accessible, and ultra-fast user interfaces using modern React and TypeScript.",
    responsibilities: [
      "Develop responsive, high-performance web applications using React, Next.js, and modern CSS/Tailwind.",
      "Collaborate with UI/UX designers to translate Figma design systems into production-ready components.",
      "Optimize applications for maximum speed, responsiveness, and cross-browser reliability.",
      "Write clean, modular, and maintainable TypeScript code with unit and integration tests."
    ],
    requirements: [
      "Demonstrated proficiency with React, TypeScript, and modern CSS frameworks.",
      "Understanding of state management, REST APIs, and asynchronous programming.",
      "Strong attention to detail regarding typography, visual spacing, and micro-interactions.",
      "Familiarity with Git version control and collaborative developer workflows."
    ]
  },
  {
    id: "backend-dev",
    title: "Backend Developer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-Time",
    experience: "2–4 Years",
    description: "Build robust, scalable backend services, microservices, and databases that power mission-critical corporate platforms.",
    responsibilities: [
      "Architect secure RESTful and GraphQL APIs with Node.js/Express, Python, or Go.",
      "Design and maintain relational (PostgreSQL) and NoSQL database schemas with high indexing efficiency.",
      "Implement robust authentication systems (OAuth2, JWT) and role-based permissions.",
      "Ensure backend systems meet rigorous security, encryption, and audit logging standards."
    ],
    requirements: [
      "Experience with Node.js/TypeScript or Python web backends.",
      "Deep understanding of database modeling, query optimization, and connection pooling.",
      "Knowledge of Docker containerization and cloud hosting environments.",
      "Familiarity with automated API documentation tools such as Swagger/OpenAPI."
    ]
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Bangalore / Remote",
    type: "Full-Time",
    experience: "2+ Years",
    description: "Shape the visual and interactive identity of enterprise software and corporate digital experiences.",
    responsibilities: [
      "Conduct user research, formulate user personas, and map out intuitive user journey flows.",
      "Create high-fidelity wireframes, interactive prototypes, and modular Figma design systems.",
      "Establish coherent visual hierarchies with sophisticated dark/light palettes, glassmorphism, and typography.",
      "Conduct design critiques and partner closely with frontend engineers during UI implementation."
    ],
    requirements: [
      "Strong portfolio demonstrating end-to-end digital product design (web and mobile).",
      "Mastery of Figma, component variants, auto-layout, and interactive prototyping.",
      "Sound comprehension of Web Content Accessibility Guidelines (WCAG).",
      "Ability to articulate design rationale clearly to non-design stakeholders."
    ]
  },
  {
    id: "full-stack-dev",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-Time",
    experience: "3–5 Years",
    description: "Bridge frontend elegance with backend durability to deliver complete end-to-end digital software platforms.",
    responsibilities: [
      "Take ownership of full-lifecycle product development from technical scoping to cloud deployment.",
      "Develop responsive client interfaces and link them with high-throughput backend services.",
      "Set up CI/CD automation and manage cloud environments for staging and production releases.",
      "Mentor junior team members through pair programming and code reviews."
    ],
    requirements: [
      "Full-stack proficiency across TypeScript, React/Next.js, Node.js, and SQL/NoSQL databases.",
      "Experience architecting scalable software structures and microservice integrations.",
      "Hands-on experience deploying to AWS, GCP, or modern edge platforms.",
      "Pragmatic problem solver with strong communication skills."
    ]
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    department: "Applied AI",
    location: "Bangalore / Remote",
    type: "Full-Time",
    experience: "2–4 Years",
    description: "Harness modern LLMs, vector search, and automation algorithms to create practical enterprise AI features.",
    responsibilities: [
      "Develop custom retrieval-augmented generation (RAG) pipelines and conversational AI agents.",
      "Integrate vector databases (Pinecone, ChromaDB, pgvector) with business knowledge repositories.",
      "Fine-tune lightweight open-weight models for specific domain classification tasks.",
      "Monitor AI inference latency, cost efficiency, token budgeting, and output hallucination guards."
    ],
    requirements: [
      "Strong Python coding skills with PyTorch, LangChain, LlamaIndex, or native LLM APIs.",
      "Understanding of embeddings, semantic search, prompt engineering, and evaluation benchmarks.",
      "Experience deploying ML models or API microservices into production containers.",
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    department: "Data & Analytics",
    location: "Bangalore / Remote",
    type: "Full-Time",
    experience: "2–4 Years",
    description: "Transform raw enterprise data into actionable business intelligence through advanced visualization and statistical modeling.",
    responsibilities: [
      "Analyze complex business data sets to identify actionable trends, patterns, and performance metrics.",
      "Design, build, and maintain interactive business intelligence dashboards (Power BI, Tableau).",
      "Partner with leadership teams to define KPIs and deliver regular analytical reports.",
      "Build robust ETL pipelines to clean, structure, and aggregate data from diverse sources."
    ],
    requirements: [
      "Strong proficiency in SQL and Python (Pandas, NumPy) or R for data manipulation.",
      "Demonstrated experience with modern BI platforms (Tableau, PowerBI, Looker).",
      "Solid understanding of statistical analysis and predictive modeling fundamentals.",
      "Excellent communication skills to translate complex data insights for non-technical stakeholders."
    ]
  }
];

// ==========================================
// 12. FREQUENTLY ASKED QUESTIONS (FAQ)
// ==========================================
export const faqs: FAQItem[] = [
  {
    question: "What is DATAMINT AARVIX's primary specialization?",
    answer: "DATAMINT AARVIX specializes in engineering modern corporate websites, custom enterprise software platforms, mobile applications, e-commerce systems, and practical AI automation solutions designed to solve concrete operational challenges.",
    category: "General"
  },
  {
    question: "How do you determine project pricing and timelines?",
    answer: "Every business requirement is unique. We examine your goals, technical complexity, feature scope, and target deadline to provide a transparent, fixed-scope quote or flexible sprint-based estimate with zero hidden surprises.",
    category: "Pricing"
  },
  {
    question: "Can DATAMINT AARVIX redesign our existing legacy software or website?",
    answer: "Yes. We specialize in legacy modernization—upgrading legacy codebases, outdated CMS portals, and slow web systems to modern, fast, and scalable architectures with zero data disruption.",
    category: "Engineering"
  },
  {
    question: "Do you provide post-launch maintenance and technical support?",
    answer: "Absolutely. All our development packages include dedicated post-launch support periods ranging from 1 to 6 months, along with ongoing monthly maintenance agreements for infrastructure monitoring, security updates, and performance tuning.",
    category: "Support"
  },
  {
    question: "Who owns the intellectual property (IP) and code of the completed project?",
    answer: "Upon full project completion and final settlement, 100% of the proprietary source code, assets, design files, and intellectual property belong exclusively to your organization.",
    category: "Legal"
  },
  {
    question: "Where is DATAMINT ARVIX located?",
    answer: "We are headquartered in Bangalore, Karnataka, India, operating with a hybrid team that collaborates seamlessly with clients across global timezones.",
    category: "General"
  }
];

// ==========================================
// 13. SOCIAL & EXTERNAL LINKS
// ==========================================
export const socialLinks: SocialLink[] = [
  // TEMPORARY DATA — REPLACE BEFORE PRODUCTION
  { platform: "LinkedIn", url: "https://linkedin.com/company/datamint-arvix", handle: "datamint-arvix" },
  { platform: "GitHub", url: "https://github.com/datamint-arvix", handle: "datamint-arvix" },
  { platform: "X", url: "https://x.com/datamintarvix", handle: "@datamintarvix" },
  { platform: "Instagram", url: "https://instagram.com/datamintarvix", handle: "@datamintarvix" }
];
