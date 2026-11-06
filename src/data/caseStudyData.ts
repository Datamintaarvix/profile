export interface DeliverableItem {
  iconName: string;
  title: string;
  description: string;
}

export interface DeliverableGroup {
  groupName: string;
  groupTag: string;
  items: DeliverableItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  viewportBadge: string;
}

export interface FeatureItem {
  iconName: string;
  title: string;
  category: string;
  description: string;
}

export interface TechStackCategory {
  category: string;
  technologies: {
    name: string;
    role: string;
    verified: boolean;
  }[];
}

export interface CaseStudyData {
  slug: string;
  caseStudyNumber: string;
  totalCount: string;
  category: string;
  deploymentStatus: string;
  title: string;
  shortDesc: string;
  highlights: string;
  deliveryClassification: string;
  liveUrl: string;
  seoTitle: string;
  seoDescription: string;
  accentColor: string; // e.g. '#22c55e' or '#06b6d4'
  
  // Section 02 - Hero showcase
  heroImage: string;
  heroCaption: string;
  
  // Section 03 - Deliverable groups
  deliverableGroups: DeliverableGroup[];
  
  // Section 04 - Scope & Documentation
  scopeOfWork: {
    artifacts: string[];
    technicalSpecifications: {
      frontend: string;
      stylingEngine: string;
      routingArchitecture: string;
      stateAndCommerce: string;
      hostingTopology: string;
      performanceAndSEO: string;
      securityControls: string;
    };
  };
  
  // Section 05 - Preview
  previewTitle: string;
  previewDescription: string;
  previewUrl: string;
  fallbackImage: string;
  
  // Section 06 - Gallery
  gallery: GalleryItem[];
  
  // Section 07 - Core Features
  features: FeatureItem[];
  
  // Section 08 - Tech Stack
  techStack: TechStackCategory[];
  
  // Section 09 - Project Information Panel
  projectInfo: {
    projectName: string;
    industry: string;
    projectCategory: string;
    websiteUrl: string;
    servicesDelivered: string[];
    projectStatus: string;
    technologiesUsed: string[];
  };
  
  // Section 10 - Navigation
  navigation: {
    prevSlug: string;
    prevTitle: string;
    prevNumber: string;
    nextSlug: string;
    nextTitle: string;
    nextNumber: string;
  };
}

export const caseStudies: Record<string, CaseStudyData> = {
  'endloop': {
    slug: 'endloop',
    caseStudyNumber: '01',
    totalCount: '07',
    category: 'E-COMMERCE // FASHION & STREETWEAR',
    deploymentStatus: 'PRODUCTION DEPLOYED',
    title: 'ENDLOOP – Premium Streetwear E-commerce Platform',
    shortDesc: 'A contemporary streetwear commerce platform engineered to deliver a distinctive fashion shopping experience through immersive visual storytelling, bold editorial typography, and intuitive product discovery.',
    highlights: 'Underground Streetwear Identity • High-Conversion Storefront • Instant Bag Interactions',
    deliveryClassification: 'Full End-to-End Digital Commerce Delivery',
    liveUrl: 'https://endloop-ecom.vercel.app/',
    seoTitle: 'ENDLOOP – Premium Streetwear E-commerce Case Study | DATAMINT AARVIX',
    seoDescription: 'Case study of ENDLOOP: A dark editorial streetwear commerce platform built with modern React, fluid fashion collections, and high-performance product browsing.',
    accentColor: '#84cc16', // Neon lime
    heroImage: '/projects_showcase/endloop/desktop_hero.png',
    heroCaption: 'ENDLOOP Production Storefront // Urban Streetwear Catalog Interface',
    deliverableGroups: [
      {
        groupName: 'Digital Experience & Interface',
        groupTag: 'STOREFRONT UX',
        items: [
          {
            iconName: 'Sparkles',
            title: 'Dark Editorial Storefront',
            description: 'High-contrast black canvas visual identity with neon lime accents tailored to modern streetwear enthusiasts.'
          },
          {
            iconName: 'Layout',
            title: 'Cinematic Homepage Presentation',
            description: 'Immersive lookbook hero spread with bold typography and editorial brand narrative.'
          },
          {
            iconName: 'ShieldCheck',
            title: 'Bold Streetwear Brand Identity',
            description: 'Distinctive visual language that elevates underground urban culture into a premium luxury retail experience.'
          },
          {
            iconName: 'Compass',
            title: 'Fashion-Focused Navigation',
            description: 'Streamlined header with instant collection switching, quick search, and reactive bag drawers.'
          }
        ]
      },
      {
        groupName: 'Commerce Experience & Modules',
        groupTag: 'SHOPPING ENGINE',
        items: [
          {
            iconName: 'ShoppingBag',
            title: 'Interactive Product Listing Interface',
            description: 'Dynamic product grid with instant image hover states, quick-add triggers, and size selectors.'
          },
          {
            iconName: 'Tag',
            title: 'Transparent Pricing & Currency Display',
            description: 'Clean typographic price tags, tax indicators, and real-time inventory badge status.'
          },
          {
            iconName: 'Layers',
            title: 'Structured Clothing Collections',
            description: 'Curated browsing across Latest Drops, Graphic Tees, Heavyweight Hoodies, and Cargo Pants.'
          },
          {
            iconName: 'Search',
            title: 'Frictionless Product Discovery',
            description: 'Instant multi-attribute filtering by size, color, collection, and price tiers.'
          }
        ]
      },
      {
        groupName: 'Brand & Content Storytelling',
        groupTag: 'EDITORIAL ASSETS',
        items: [
          {
            iconName: 'Flame',
            title: 'Latest Drops Showcase',
            description: 'Limited edition release countdowns and seasonal campaign spotlight carousels.'
          },
          {
            iconName: 'Feather',
            title: 'Oversized Fit Collection Guides',
            description: 'Dedicated silhouette showcases highlighting garment weight, fabric composition, and model sizing.'
          },
          {
            iconName: 'BookOpen',
            title: 'Brand Philosophy & Urban Archive',
            description: 'Editorial brand manifesto integrating street culture stories and community lookbooks.'
          },
          {
            iconName: 'Share2',
            title: 'Social Proof & Community Feed',
            description: 'Customer community styling showcases and tagged Instagram street style integration.'
          }
        ]
      },
      {
        groupName: 'Performance & Responsive Engineering',
        groupTag: 'TECHNICAL ARCHITECTURE',
        items: [
          {
            iconName: 'Smartphone',
            title: 'Mobile-First Touch Interactions',
            description: 'Frictionless touch gestures, sticky bottom action bars, and swipeable product image carousels.'
          },
          {
            iconName: 'Zap',
            title: 'Sub-Second Page Transitions',
            description: 'Zero layout shift, lightweight vector icons, and optimized WebP fashion assets.'
          },
          {
            iconName: 'Cloud',
            title: 'Global Edge Deployment',
            description: 'Deployed to high-availability Vercel Edge Network with worldwide content caching.'
          },
          {
            iconName: 'Activity',
            title: '99+ Lighthouse Optimization',
            description: 'Pristine Core Web Vitals, accessible color contrast ratios, and semantic markup.'
          }
        ]
      }
    ],
    scopeOfWork: {
      artifacts: [
        'Complete UI/UX Design System in Figma (Typography, Colors, Tokens)',
        'Responsive E-commerce Web Application (Desktop, Tablet, Mobile)',
        'Reusable Component Library (Product Cards, Cart Drawer, Slicers)',
        'Shopping Bag & State Management Implementation',
        'Multi-Collection Product Catalog Integration',
        'High-Resolution Fashion Image CDN Integration',
        'SEO Metadata Architecture & Social Share Tags',
        'Continuous Integration & Vercel Edge Hosting Configuration'
      ],
      technicalSpecifications: {
        frontend: 'React 18 / Next-Gen SPA with Modern Hooks Architecture',
        stylingEngine: 'Tailwind CSS with Custom Dark Palette & Neon Accents',
        routingArchitecture: 'Client-Side Declarative Routing with Direct Deep-Links',
        stateAndCommerce: 'Lightweight Reactive Shopping State with Local Storage Cache',
        hostingTopology: 'Vercel Global Edge Network with SSL & HTTP/3',
        performanceAndSEO: 'Automated Image Optimization, Semantic HTML5, Zero CLS',
        securityControls: 'Content Security Policy, HTTPS Strict Transport, Sanitized Inputs'
      }
    },
    previewTitle: 'Explore the Live Experience',
    previewDescription: 'Interact with the live ENDLOOP production deployment. Test the fluid responsive layouts across Desktop, Tablet, and Mobile viewports.',
    previewUrl: 'https://endloop-ecom.vercel.app/',
    fallbackImage: '/projects_showcase/endloop/desktop_hero.png',
    gallery: [
      {
        id: 'gal-el-1',
        title: 'Desktop Storefront Hero',
        category: 'Desktop Experience',
        image: '/projects_showcase/endloop/desktop_hero.png',
        description: 'Cinematic hero lookbook introducing the latest seasonal drops with bold typographic hierarchy.',
        viewportBadge: 'Desktop 1600x1000'
      },
      {
        id: 'gal-el-2',
        title: 'Full Extended Showcase',
        category: 'Catalog & Lookbook',
        image: '/projects_showcase/endloop/showcase_main.png',
        description: 'Complete collection view demonstrating garment cards, quick view triggers, and price badges.',
        viewportBadge: 'Showcase 1440x900'
      },
      {
        id: 'gal-el-3',
        title: 'Tablet Lookbook Viewport',
        category: 'Tablet Responsive',
        image: '/projects_showcase/endloop/gallery_experience.png',
        description: 'Adaptive two-column layout optimized for iPad and tablet devices with balanced proportions.',
        viewportBadge: 'Tablet 820x1180'
      },
      {
        id: 'gal-el-4',
        title: 'Mobile Streetwear Boutique',
        category: 'Mobile First',
        image: '/projects_showcase/endloop/mobile_view.png',
        description: 'Smartphone shopping experience featuring thumb-zone navigation and sticky add-to-bag controls.',
        viewportBadge: 'Mobile 430x932'
      }
    ],
    features: [
      {
        iconName: 'ShoppingBag',
        title: 'Interactive Bag Drawer',
        category: 'Commerce Core',
        description: 'Frictionless slide-out bag with real-time subtotal updates, free shipping progress, and instant checkout link.'
      },
      {
        iconName: 'Layers',
        title: 'Collection Filter Engine',
        category: 'Catalog Discovery',
        description: 'Instant multi-tag category filtering allowing customers to toggle between Oversized, Graphic Tees, and Hoodies.'
      },
      {
        iconName: 'Eye',
        title: 'High-Res Garment Zoom',
        category: 'Visual Experience',
        description: 'Interactive garment image preview with dual-shot hover reveal for front and back streetwear graphics.'
      },
      {
        iconName: 'Smartphone',
        title: 'Bottom-Bar Mobile Navigation',
        category: 'Mobile UX',
        description: 'Dedicated mobile action dock ensuring thumb-friendly access to Home, Catalog, Wishlist, and Cart.'
      },
      {
        iconName: 'ShieldCheck',
        title: 'Production SSL & Edge Caching',
        category: 'Infrastructure',
        description: 'Served through Vercel Edge nodes worldwide for sub-100ms asset delivery and 99.99% uptime.'
      },
      {
        iconName: 'Zap',
        title: 'Fluid Spring Micro-Interactions',
        category: 'UI Animation',
        description: 'Refined hover feedback, glowing neon pill indicators, and subtle magnetic button effects.'
      }
    ],
    techStack: [
      {
        category: 'Frontend Architecture',
        technologies: [
          { name: 'React 18', role: 'Component UI Library', verified: true },
          { name: 'TypeScript', role: 'Type Safety & Contracts', verified: true },
          { name: 'Tailwind CSS', role: 'Utility-First Styling Engine', verified: true },
          { name: 'Lucide React', role: 'Vector Iconography', verified: true }
        ]
      },
      {
        category: 'State & Client Data',
        technologies: [
          { name: 'React Context API', role: 'Global Shopping State', verified: true },
          { name: 'Local Storage Sync', role: 'Persistent Client Bag', verified: true },
          { name: 'Modern Fetch API', role: 'Asynchronous Catalog Queries', verified: true }
        ]
      },
      {
        category: 'Infrastructure & Deployment',
        technologies: [
          { name: 'Vercel Edge Network', role: 'Global CDN & Web Hosting', verified: true },
          { name: 'Automated CI/CD', role: 'Git Commit Push Deployment', verified: true },
          { name: 'SSL / TLS 1.3', role: 'Enterprise HTTPS Encryption', verified: true }
        ]
      }
    ],
    projectInfo: {
      projectName: 'ENDLOOP Streetwear',
      industry: 'Fashion & Apparel Retail',
      projectCategory: 'E-commerce Platform',
      websiteUrl: 'https://endloop-ecom.vercel.app/',
      servicesDelivered: ['UI/UX Design', 'E-commerce Frontend', 'Responsive Engineering', 'Vercel Deployment'],
      projectStatus: 'Live & Operational',
      technologiesUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel Edge']
    },
    navigation: {
      prevSlug: 'digital-twin',
      prevTitle: 'DIGITAL TWIN 3D Portal',
      prevNumber: '07',
      nextSlug: 'jbr-builders',
      nextTitle: 'JBR Builders & Architecture',
      nextNumber: '02'
    }
  },

  'jbr-builders': {
    slug: 'jbr-builders',
    caseStudyNumber: '02',
    totalCount: '07',
    category: 'CONSTRUCTION // CORPORATE & ARCHITECTURE',
    deploymentStatus: 'PRODUCTION DEPLOYED',
    title: 'JBR Builders – Construction & Architectural Digital Platform',
    shortDesc: 'A professional digital platform for an engineering and construction firm, communicating trust, structural expertise, residential architectural quality, and seamless client consultation.',
    highlights: 'Corporate Engineering Excellence • Residential Architecture Showcase • Quality Trust Metrics',
    deliveryClassification: 'Full Corporate Platform & Project Showcase',
    liveUrl: 'https://www.jbrbuilders.in/',
    seoTitle: 'JBR Builders – Construction & Architecture Case Study | DATAMINT AARVIX',
    seoDescription: 'Case study of JBR Builders: An architectural digital platform built for a premier construction and engineering company with project galleries and customer consultation.',
    accentColor: '#0ea5e9', // Sky blue
    heroImage: '/projects_showcase/jbr-builders/desktop_hero.png',
    heroCaption: 'JBR Builders Corporate Platform // Engineering Excellence & Residential Projects',
    deliverableGroups: [
      {
        groupName: 'Corporate Experience & Trust',
        groupTag: 'BRAND PLATFORM',
        items: [
          {
            iconName: 'Building2',
            title: 'Premium Corporate Homepage',
            description: 'Spacious hero presentation highlighting civil engineering legacy, completed project metrics, and client trust.'
          },
          {
            iconName: 'ShieldCheck',
            title: 'Corporate Brand Presentation',
            description: 'Professional architectural color palette uniting deep corporate blues, architectural white, and elegant typography.'
          },
          {
            iconName: 'CheckCircle2',
            title: 'Company Philosophy & Standards',
            description: 'Dedicated sections communicating adherence to national building codes, structural longevity, and transparent pricing.'
          },
          {
            iconName: 'Compass',
            title: 'Intuitive Navigation Framework',
            description: 'Structured header guiding prospective homeowners across Services, Portfolio, Specifications, and Consultations.'
          }
        ]
      },
      {
        groupName: 'Architectural Project Presentation',
        groupTag: 'PROJECT PORTFOLIO',
        items: [
          {
            iconName: 'Home',
            title: 'Residential Architecture Showcase',
            description: 'High-resolution showcases of contemporary luxury villas, multi-story duplexes, and turnkey residential spaces.'
          },
          {
            iconName: 'Hammer',
            title: 'Civil Construction Service Catalog',
            description: 'Comprehensive breakdown of structural engineering, interior planning, turnkey building contracts, and renovations.'
          },
          {
            iconName: 'Layers',
            title: 'Architectural Photography Gallery',
            description: 'Curated gallery featuring elevation views, floor layouts, spatial photography, and structural frameworks.'
          },
          {
            iconName: 'Award',
            title: 'Completed Project Case Studies',
            description: 'Detailed project specs highlighting square footage, architectural style, location, and structural highlights.'
          }
        ]
      },
      {
        groupName: 'Trust, Credibility & Consultation',
        groupTag: 'CLIENT CONVERSION',
        items: [
          {
            iconName: 'Users',
            title: 'Leadership & Engineering Team',
            description: 'Profiles of chief civil engineers, licensed architects, and project managers overseeing on-site quality control.'
          },
          {
            iconName: 'BadgeCheck',
            title: 'Verified Quality Standards',
            description: 'Certifications, material specifications, soil testing protocols, and earthquake-resistant design standards.'
          },
          {
            iconName: 'MessageSquare',
            title: 'Interactive Consultation Booking',
            description: 'Direct contact touchpoints enabling prospective clients to request site visits and architectural blueprint estimates.'
          },
          {
            iconName: 'MapPin',
            title: 'Regional Office & Project Locations',
            description: 'Interactive location maps showcasing active construction zones and regional branch contact details.'
          }
        ]
      },
      {
        groupName: 'Performance & Engineering',
        groupTag: 'SYSTEM STABILITY',
        items: [
          {
            iconName: 'Smartphone',
            title: 'Responsive Cross-Device Layout',
            description: 'Seamless viewing experience across mobile smartphones, tablets, and widescreen desktop monitors.'
          },
          {
            iconName: 'Zap',
            title: 'Fast Asset Delivery',
            description: 'Optimized architectural image loading with lazy rendering to ensure rapid initial page speed.'
          },
          {
            iconName: 'Lock',
            title: 'Enterprise Security & Domain Config',
            description: 'Hosted on enterprise servers with custom domain DNS routing, SSL certificates, and DDoS shielding.'
          },
          {
            iconName: 'Search',
            title: 'Local SEO & Schema Markup',
            description: 'Configured local business schema markup to dominate regional search results for residential construction.'
          }
        ]
      }
    ],
    scopeOfWork: {
      artifacts: [
        'Corporate Brand Identity & Color System',
        'Custom High-Resolution Architectural Layouts',
        'Residential & Commercial Project Gallery Engine',
        'Interactive Construction Services Grid',
        'Client Enquiry & Site-Visit Request Forms',
        'Local SEO Configuration & Google Search Console Verification',
        'Custom Domain DNS & High-Availability Web Hosting Setup',
        'Technical Documentation & CMS Administration Guide'
      ],
      technicalSpecifications: {
        frontend: 'Modern Responsive Web Stack with Optimized Semantic HTML5',
        stylingEngine: 'Architectural Corporate Blue Design System with Glass Cards',
        routingArchitecture: 'Direct Deep-Linking Across Construction Services & Galleries',
        stateAndCommerce: 'Client-Side Form Validation with Telemetry Handling',
        hostingTopology: 'High-Availability Cloud Hosting with 99.9% Uptime SLA',
        performanceAndSEO: 'Structured JSON-LD Construction Business Schema & Image CDN',
        securityControls: 'SSL 256-Bit Encryption, Spam-Protected Form Handlers'
      }
    },
    previewTitle: 'Explore the Live Experience',
    previewDescription: 'Inspect the live JBR Builders corporate platform. Experience the responsive architectural gallery and customer consultation flows.',
    previewUrl: 'https://www.jbrbuilders.in/',
    fallbackImage: '/projects_showcase/jbr-builders/desktop_hero.png',
    gallery: [
      {
        id: 'gal-jbr-1',
        title: 'Corporate Hero & Brand Banner',
        category: 'Desktop Homepage',
        image: '/projects_showcase/jbr-builders/desktop_hero.png',
        description: 'Commanding corporate introduction highlighting construction track record, customer trust, and civil engineering capabilities.',
        viewportBadge: 'Desktop 1600x1000'
      },
      {
        id: 'gal-jbr-2',
        title: 'Full Architectural Project Showcase',
        category: 'Project Showcase',
        image: '/projects_showcase/jbr-builders/showcase_main.png',
        description: 'Comprehensive overview of ongoing and completed residential villas, elevation renders, and construction services.',
        viewportBadge: 'Showcase 1440x900'
      },
      {
        id: 'gal-jbr-3',
        title: 'Tablet Architectural Presentation',
        category: 'Tablet Responsive',
        image: '/projects_showcase/jbr-builders/gallery_experience.png',
        description: 'Balanced tablet layout allowing engineering clients to review floor plans and material specs on iPad devices.',
        viewportBadge: 'Tablet 820x1180'
      },
      {
        id: 'gal-jbr-4',
        title: 'Mobile Consultation Viewport',
        category: 'Mobile Touch',
        image: '/projects_showcase/jbr-builders/mobile_view.png',
        description: 'One-touch mobile interface with click-to-call, WhatsApp consultation links, and quick enquiry triggers.',
        viewportBadge: 'Mobile 430x932'
      }
    ],
    features: [
      {
        iconName: 'Building2',
        title: 'Architectural Portfolio Engine',
        category: 'Core Feature',
        description: 'Interactive project gallery presenting residential elevations, square footage metrics, and construction stages.'
      },
      {
        iconName: 'FileCheck',
        title: 'Turnkey Contract Transparency',
        category: 'Trust & Standards',
        description: 'Clear phase-by-phase breakdown of site clearing, foundation, brickwork, plastering, plumbing, and finishing.'
      },
      {
        iconName: 'MessageSquare',
        title: 'Instant Consultation Dispatch',
        category: 'Customer Conversion',
        description: 'Integrated enquiry form capturing customer location, plot dimensions, budget preferences, and contact details.'
      },
      {
        iconName: 'PhoneCall',
        title: 'One-Touch Mobile Hotline',
        category: 'Mobile Utility',
        description: 'Fixed bottom dialer connecting prospective home builders directly to senior engineering consultants.'
      },
      {
        iconName: 'Award',
        title: 'Building Code Compliance Metrics',
        category: 'Credibility',
        description: 'Prominently surfaced safety accreditations, structural durability standards, and client testimonials.'
      },
      {
        iconName: 'Globe',
        title: 'Fast Regional CDN Delivery',
        category: 'Performance',
        description: 'Optimized image caching ensuring instantaneous loading of high-resolution architectural photography.'
      }
    ],
    techStack: [
      {
        category: 'Frontend Architecture',
        technologies: [
          { name: 'HTML5 / Modern JS', role: 'Accessible Semantic Structure', verified: true },
          { name: 'CSS3 / Modern Grid', role: 'Architectural Responsive Layout', verified: true },
          { name: 'Bootstrap / Custom UI', role: 'Cross-Device Component System', verified: true }
        ]
      },
      {
        category: 'Integration & Forms',
        technologies: [
          { name: 'Enquiry Dispatch API', role: 'Automated Lead Notification', verified: true },
          { name: 'WhatsApp Click-to-Chat', role: 'Real-Time Client Messaging', verified: true }
        ]
      },
      {
        category: 'Infrastructure & SEO',
        technologies: [
          { name: 'Custom Domain DNS', role: 'jbrbuilders.in Production Domain', verified: true },
          { name: 'SSL Security Certificate', role: 'Encrypted Browser Traffic', verified: true },
          { name: 'Google Local Business', role: 'Regional Construction SEO', verified: true }
        ]
      }
    ],
    projectInfo: {
      projectName: 'JBR Builders & Engineers',
      industry: 'Civil Engineering & Construction',
      projectCategory: 'Corporate Platform',
      websiteUrl: 'https://www.jbrbuilders.in/',
      servicesDelivered: ['Corporate Web Platform', 'UI/UX Design', 'Project Portfolio Engine', 'Local SEO Setup'],
      projectStatus: 'Live & Operational',
      technologiesUsed: ['Modern HTML5', 'CSS3 Grid', 'JavaScript', 'Custom Domain DNS']
    },
    navigation: {
      prevSlug: 'endloop',
      prevTitle: 'ENDLOOP Streetwear',
      prevNumber: '01',
      nextSlug: 'floral-elegance',
      nextTitle: 'Floral Elegance Boutique',
      nextNumber: '03'
    }
  },

  'floral-elegance': {
    slug: 'floral-elegance',
    caseStudyNumber: '03',
    totalCount: '07',
    category: 'E-COMMERCE // RETAIL & FLORAL BOUTIQUE',
    deploymentStatus: 'PRODUCTION DEPLOYED',
    title: 'Floral Elegance – Premium Floral E-commerce Boutique',
    shortDesc: 'An artisanal online flower boutique designed to present curated floral arrangements, fresh luxury bouquets, and bespoke gifting collections through a refined, soft-toned digital shopping experience.',
    highlights: 'Artisanal Florist Identity • Occasion-Based Filtering • Add-to-Cart Shopping Experience',
    deliveryClassification: 'Full Floral E-commerce Storefront & Custom Bouquet Booking',
    liveUrl: 'https://floral-elegance-xi.vercel.app/',
    seoTitle: 'Floral Elegance – Artisan Flower Boutique Case Study | DATAMINT AARVIX',
    seoDescription: 'Case study of Floral Elegance: A luxury florist e-commerce boutique featuring curated floral collections, occasion filtering, and custom bouquet requests.',
    accentColor: '#f43f5e', // Rose
    heroImage: '/projects_showcase/floral-elegance/desktop_hero.png',
    heroCaption: 'Floral Elegance Boutique // Artisanal Flowers & Handcrafted Floral Arrangements',
    deliverableGroups: [
      {
        groupName: 'Digital Storefront & Visual Brand',
        groupTag: 'BOUTIQUE UX',
        items: [
          {
            iconName: 'Flower2',
            title: 'Artisan Floral Homepage',
            description: 'Refined visual layout combining soft blush, cream, and ivory tones with high-fashion floral photography.'
          },
          {
            iconName: 'Sparkles',
            title: 'Hero Bouquet Spotlight',
            description: 'Cinematic hero banner presenting bestselling seasonal blooms with elegant serif typography.'
          },
          {
            iconName: 'ShieldCheck',
            title: 'Boutique Brand Identity',
            description: 'Sophisticated aesthetic communicating floral artistry, stem freshness, and bespoke packaging.'
          },
          {
            iconName: 'Compass',
            title: 'Occasion & Flower Navigation',
            description: 'Clean header navigation guiding shoppers across Roses, Lilies, Orchids, and Special Occasions.'
          }
        ]
      },
      {
        groupName: 'Product Discovery & Taxonomy',
        groupTag: 'CURATED CATALOG',
        items: [
          {
            iconName: 'Filter',
            title: 'Floral Category Filters',
            description: 'Instant multi-attribute filtering by flower variety, bouquet size, and color harmony.'
          },
          {
            iconName: 'Search',
            title: 'Fast Floral Search',
            description: 'Quick keyword search connecting users with anniversary, birthday, romance, and corporate arrangements.'
          },
          {
            iconName: 'Heart',
            title: 'Rose & Exotic Lily Collections',
            description: 'Dedicated showcases for Ecuadorian long-stem roses, Casablanca lilies, and Phalaenopsis orchids.'
          },
          {
            iconName: 'Gift',
            title: 'Occasion-Driven Bundles',
            description: 'Curated gift sets combining fresh flowers with artisanal chocolates, candles, and greeting cards.'
          }
        ]
      },
      {
        groupName: 'Shopping Interactions & Custom Requests',
        groupTag: 'COMMERCE ENGINE',
        items: [
          {
            iconName: 'ShoppingBag',
            title: 'Fluid Product Cards & Pricing',
            description: 'Detailed cards displaying bouquet dimensions, stem count, transparent pricing, and freshness guarantees.'
          },
          {
            iconName: 'CheckCircle2',
            title: 'Reactive Add-to-Cart Drawer',
            description: 'Interactive slide-out shopping bag allowing customers to adjust quantities and add personalized card messages.'
          },
          {
            iconName: 'FileText',
            title: 'Custom Bouquet Request Form',
            description: 'Bespoke florist consultation form for wedding arrangements, private events, and customized stem combinations.'
          },
          {
            iconName: 'Truck',
            title: 'Delivery Scheduling & Time Slots',
            description: 'Same-day delivery notices and date selection modules for planned celebrations.'
          }
        ]
      },
      {
        groupName: 'Performance & Mobile Optimization',
        groupTag: 'ENGINEERING',
        items: [
          {
            iconName: 'Smartphone',
            title: 'Delicate Mobile Touch Experience',
            description: 'Smartphone-optimized touch targets, high-contrast text readability, and smooth product scrolling.'
          },
          {
            iconName: 'Zap',
            title: 'High-Resolution Visual CDN',
            description: 'Compressed WebP image delivery preserving floral petal detail while maintaining sub-second load times.'
          },
          {
            iconName: 'Cloud',
            title: 'Vercel Edge High Availability',
            description: 'Distributed cloud deployment ensuring 99.9% uptime during high-volume Valentine’s and Mother’s Day peaks.'
          },
          {
            iconName: 'Activity',
            title: 'Accessible WCAG Compliance',
            description: 'Refined typography contrast, aria attributes, and keyboard-navigable shopping modal interfaces.'
          }
        ]
      }
    ],
    scopeOfWork: {
      artifacts: [
        'Artisan Boutique Design System (Palette, Serif Fonts, Glass Borders)',
        'Responsive Florist Storefront Web Application',
        'Interactive Product Catalog & Filtering Architecture',
        'Client-Side Shopping Bag & Checkout Dispatch Pipeline',
        'Bespoke Bouquet Request & Event Consultation Form',
        'Customer Testimonial Carousel & Floral Storytelling Modules',
        'Edge Network Deployment & Continuous Integration Pipeline',
        'Comprehensive SEO Setup & Social Graph Asset Integration'
      ],
      technicalSpecifications: {
        frontend: 'Modern React Application with Componentized Architecture',
        stylingEngine: 'Tailwind CSS with Custom Soft-Rose Palette & Serif Typography',
        routingArchitecture: 'Single Page Application Routing with Deep Category Anchors',
        stateAndCommerce: 'React State Management with Local Storage Cart Persistence',
        hostingTopology: 'Vercel Edge Network with Automated Global Edge Routing',
        performanceAndSEO: 'Unsplash CDN Image Optimization, Open Graph Metadata',
        securityControls: 'HTTPS End-to-End Encryption, Sanitized Form Processing'
      }
    },
    previewTitle: 'Explore the Live Experience',
    previewDescription: 'Interact directly with the live Floral Elegance storefront. Experience the fluid bouquet discovery and shopping interactions.',
    previewUrl: 'https://floral-elegance-xi.vercel.app/',
    fallbackImage: '/projects_showcase/floral-elegance/desktop_hero.png',
    gallery: [
      {
        id: 'gal-fe-1',
        title: 'Boutique Hero & Featured Bloom',
        category: 'Storefront Hero',
        image: '/projects_showcase/floral-elegance/desktop_hero.png',
        description: 'Atmospheric hero presentation highlighting artisanal floristry, handcrafted stems, and seasonal arrangements.',
        viewportBadge: 'Desktop 1600x1000'
      },
      {
        id: 'gal-fe-2',
        title: 'Complete Bouquet Collection',
        category: 'Catalog Grid',
        image: '/projects_showcase/floral-elegance/showcase_main.png',
        description: 'Multi-category floral showcase featuring pricing cards, stem counts, and instant add-to-bag triggers.',
        viewportBadge: 'Showcase 1440x900'
      },
      {
        id: 'gal-fe-3',
        title: 'Tablet Curated Experience',
        category: 'Tablet Responsive',
        image: '/projects_showcase/floral-elegance/gallery_experience.png',
        description: 'Fluid two-column floral showcase tailored to iPad and tablet touchscreens with graceful card proportions.',
        viewportBadge: 'Tablet 820x1180'
      },
      {
        id: 'gal-fe-4',
        title: 'Mobile Boutique Shopping',
        category: 'Mobile Touch',
        image: '/projects_showcase/floral-elegance/mobile_view.png',
        description: 'Compact mobile commerce interface facilitating effortless single-hand flower gifting on the go.',
        viewportBadge: 'Mobile 430x932'
      }
    ],
    features: [
      {
        iconName: 'Flower2',
        title: 'Artisanal Bouquet Cards',
        category: 'Product Experience',
        description: 'Visual cards showcasing flower type, bouquet dimensions, stem freshness rating, and delivery options.'
      },
      {
        iconName: 'Filter',
        title: 'Occasion & Bloom Filter',
        category: 'Catalog Navigation',
        description: 'Instant category filtering across Anniversaries, Romance, Sympathy, Birthdays, and Luxury Stems.'
      },
      {
        iconName: 'ShoppingBag',
        title: 'Reactive Slide-Out Cart',
        category: 'Commerce Core',
        description: 'Live cart drawer tracking item totals, custom card messages, and instant checkout dispatch.'
      },
      {
        iconName: 'Sparkles',
        title: 'Bespoke Floral Consultation',
        category: 'Personalization',
        description: 'Custom inquiry module for wedding celebrations, corporate banquet decor, and tailored stem combinations.'
      },
      {
        iconName: 'Truck',
        title: 'Freshness SLA Delivery Guarantee',
        category: 'Customer Trust',
        description: 'Clearly highlighted same-day delivery windows, temperature-controlled transit, and hydration packaging.'
      },
      {
        iconName: 'Heart',
        title: 'Customer Stories & Testimonials',
        category: 'Social Proof',
        description: 'Interactive reviews section celebrating milestone anniversaries and gifting experiences.'
      }
    ],
    techStack: [
      {
        category: 'Frontend Architecture',
        technologies: [
          { name: 'React 18', role: 'Component Framework', verified: true },
          { name: 'JavaScript / ES6+', role: 'Modern Client Runtime', verified: true },
          { name: 'Tailwind CSS', role: 'Soft Rose & Cream Styling', verified: true },
          { name: 'Lucide Icons', role: 'Boutique Vector Graphics', verified: true }
        ]
      },
      {
        category: 'Client State & Storage',
        technologies: [
          { name: 'React Hooks API', role: 'Cart & Filter State', verified: true },
          { name: 'Local Storage', role: 'Shopping Bag Persistence', verified: true }
        ]
      },
      {
        category: 'Cloud & Infrastructure',
        technologies: [
          { name: 'Vercel Edge', role: 'Worldwide Cloud Hosting', verified: true },
          { name: 'CDN Asset Acceleration', role: 'Fast Floral Photography', verified: true },
          { name: 'SSL / TLS Security', role: 'Encrypted Checkout Traffic', verified: true }
        ]
      }
    ],
    projectInfo: {
      projectName: 'Floral Elegance Boutique',
      industry: 'Artisanal Retail & Floristry',
      projectCategory: 'E-commerce Storefront',
      websiteUrl: 'https://floral-elegance-xi.vercel.app/',
      servicesDelivered: ['Boutique UI/UX Design', 'E-commerce Development', 'Product Filtering Engine', 'Vercel Deployment'],
      projectStatus: 'Live & Operational',
      technologiesUsed: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel Edge']
    },
    navigation: {
      prevSlug: 'jbr-builders',
      prevTitle: 'JBR Builders & Architecture',
      prevNumber: '02',
      nextSlug: 'veloura',
      nextTitle: 'VELOURA Bespoke Hampers',
      nextNumber: '04'
    }
  },

  'veloura': {
    slug: 'veloura',
    caseStudyNumber: '04',
    totalCount: '07',
    category: 'E-COMMERCE // BESPOKE GIFTING & PERSONALIZATION',
    deploymentStatus: 'PRODUCTION DEPLOYED',
    title: 'VELOURA – Bespoke Gift Hamper Customization Platform',
    shortDesc: 'A luxury gifting platform that transforms personalized gift creation into an interactive digital experience, combining curated hampers with a guided step-by-step box builder.',
    highlights: 'Interactive Custom Hamper Builder • Occasion Personalization • Real-Time Price Calculation',
    deliveryClassification: 'Full Personalization Platform & Guided Gifting Builder',
    liveUrl: 'https://demo01-ap8k.vercel.app/',
    seoTitle: 'VELOURA – Bespoke Gift Hamper Platform Case Study | DATAMINT AARVIX',
    seoDescription: 'Case study of VELOURA: A luxury gifting and personalization platform with an interactive hamper builder, custom messaging, and curated celebration boxes.',
    accentColor: '#eab308', // Warm champagne gold
    heroImage: '/projects_showcase/veloura/desktop_hero.png',
    heroCaption: 'VELOURA Luxury Gifting // Bespoke Hamper Customization & Curation Engine',
    deliverableGroups: [
      {
        groupName: 'Luxury Gifting Storefront',
        groupTag: 'PREMIUM BRAND',
        items: [
          {
            iconName: 'Gift',
            title: 'Warm Champagne Brand Identity',
            description: 'Refined visual design featuring warm champagne, cream, beige, and gold tones with elegant typography.'
          },
          {
            iconName: 'Sparkles',
            title: 'Featured Celebration Collections',
            description: 'Curated gifting themes across Birthday Hampers, Couples Retreats, Self-Care Wellness, and Corporate Tokens.'
          },
          {
            iconName: 'Crown',
            title: 'Luxury Editorial Presentation',
            description: 'Cinematic product staging highlighting gold foil packaging, satin ribbon finishes, and artisan contents.'
          },
          {
            iconName: 'Compass',
            title: 'Intuitive Gifting Navigation',
            description: 'Seamless navigation guiding visitors between pre-curated bestsellers and the interactive hamper builder.'
          }
        ]
      },
      {
        groupName: 'Interactive Hamper Builder Engine',
        groupTag: 'CUSTOMIZATION ENGINE',
        items: [
          {
            iconName: 'Calendar',
            title: 'Occasion & Recipient Selection',
            description: 'Step 1: Choose the celebration theme from Birthdays, Anniversaries, Corporate Milestones, and Festive Gatherings.'
          },
          {
            iconName: 'Package',
            title: 'Bespoke Box & Ribbon Selection',
            description: 'Step 2: Select luxury packaging finishes: Matte Noir, Champagne Gold, Velvet Crimson with matching satin ties.'
          },
          {
            iconName: 'PlusCircle',
            title: 'Artisan Product Add-Ons',
            description: 'Step 3: Handpick gourmet treats, organic skincare, scented soy candles, and personalized keepsake items.'
          },
          {
            iconName: 'FileText',
            title: 'Handwritten Message & Calligraphy',
            description: 'Step 4: Compose custom dedication messages rendered on embossed hot-stamped stationery.'
          }
        ]
      },
      {
        groupName: 'Commerce Experience & Pricing Logic',
        groupTag: 'CALCULATION CORE',
        items: [
          {
            iconName: 'Calculator',
            title: 'Real-Time Price Recalculation',
            description: 'Dynamic price tally instantly adjusting as premium items, custom ribbons, and personalized cards are added.'
          },
          {
            iconName: 'Eye',
            title: 'Live Virtual Hamper Preview',
            description: 'Visual feedback container updating the rendered gift bundle contents before checkout.'
          },
          {
            iconName: 'Award',
            title: 'Pre-Curated Bestseller Hampers',
            description: 'One-click purchasing for signature collections designed by master gift stylists.'
          },
          {
            iconName: 'ShieldCheck',
            title: 'Safe Checkout & Shipping Scheduler',
            description: 'Frictionless checkout dispatch with delivery date reservation and secure payment support.'
          }
        ]
      },
      {
        groupName: 'Performance & Responsive Engineering',
        groupTag: 'PLATFORM SPEED',
        items: [
          {
            iconName: 'Smartphone',
            title: 'Smooth Mobile Multi-Step Wizard',
            description: 'Optimized touch wizard guiding mobile users through box, product, and message selection without clutter.'
          },
          {
            iconName: 'Zap',
            title: 'Instant Step Transitions',
            description: 'Lightweight client-side state machine ensuring zero lag between customization steps.'
          },
          {
            iconName: 'Cloud',
            title: 'Vercel Edge High-Speed Caching',
            description: 'Sub-second asset loading across international gifting corridors.'
          },
          {
            iconName: 'Activity',
            title: 'Flawless Visual Fidelity',
            description: 'Retina-ready product photography with responsive srcset scaling for all screen densities.'
          }
        ]
      }
    ],
    scopeOfWork: {
      artifacts: [
        'Luxury Gifting Design System (Champagne, Gold, Velvet Tokens)',
        'Multi-Step Interactive Hamper Customization Wizard',
        'Real-Time Dynamic Pricing & Item Sizing Engine',
        'Curated Bestseller Hamper Catalog & Product Detail Views',
        'Stationery Calligraphy & Custom Message Input Module',
        'Shopping Bag Integration with Custom Gift Configurations',
        'Vercel Cloud Deployment & Performance Optimization',
        'Responsive Testing across Mobile, Tablet, and Desktop Viewports'
      ],
      technicalSpecifications: {
        frontend: 'React 18 SPA with Custom State Machine for Wizard Steps',
        stylingEngine: 'Tailwind CSS with Custom Champagne & Gold Luxury Theme',
        routingArchitecture: 'Client-Side Routing with Preserved Builder State',
        stateAndCommerce: 'Compound State Store Managing Dynamic Hamper Bundles',
        hostingTopology: 'Vercel Edge Hosting with Worldwide SSL & Asset CDN',
        performanceAndSEO: 'High-Fidelity Image Optimization, Zero Layout Shift',
        securityControls: 'HTTPS Everywhere, Sanitized Text Message Fields'
      }
    },
    previewTitle: 'Explore the Live Experience',
    previewDescription: 'Test the live VELOURA gifting platform. Walk through the interactive hamper builder, select luxury packaging, and customize products.',
    previewUrl: 'https://demo01-ap8k.vercel.app/',
    fallbackImage: '/projects_showcase/veloura/desktop_hero.png',
    gallery: [
      {
        id: 'gal-vl-1',
        title: 'Luxury Storefront Hero',
        category: 'Desktop Experience',
        image: '/projects_showcase/veloura/desktop_hero.png',
        description: 'Champagne and gold visual showcase inviting customers to explore curated celebration hampers.',
        viewportBadge: 'Desktop 1600x1000'
      },
      {
        id: 'gal-vl-2',
        title: 'Full Hamper Builder & Catalog',
        category: 'Customization Suite',
        image: '/projects_showcase/veloura/showcase_main.png',
        description: 'Complete view of the guided hamper builder interface, product options, and live price accumulator.',
        viewportBadge: 'Showcase 1440x900'
      },
      {
        id: 'gal-vl-3',
        title: 'Tablet Customization View',
        category: 'Tablet Responsive',
        image: '/projects_showcase/veloura/gallery_experience.png',
        description: 'Spacious tablet wizard enabling users to drag, drop, and configure gift collections with fluid ease.',
        viewportBadge: 'Tablet 820x1180'
      },
      {
        id: 'gal-vl-4',
        title: 'Mobile Personalization Wizard',
        category: 'Mobile Touch',
        image: '/projects_showcase/veloura/mobile_view.png',
        description: 'Streamlined smartphone wizard allowing quick occasion and gift selection with thumb-friendly controls.',
        viewportBadge: 'Mobile 430x932'
      }
    ],
    features: [
      {
        iconName: 'Package',
        title: '4-Step Hamper Customizer',
        category: 'Core Innovation',
        description: 'Guided sequential wizard: Occasion -> Box Style -> Gourmet Contents -> Personalized Calligraphy Card.'
      },
      {
        iconName: 'Calculator',
        title: 'Dynamic Real-Time Totaling',
        category: 'Commerce Logic',
        description: 'Instant recalculation of gift bundle pricing as items are added or upgraded without page reloads.'
      },
      {
        iconName: 'Eye',
        title: 'Live Visual Bundle Preview',
        category: 'Interactive UX',
        description: 'Visual confirmation box reflecting selected box material, ribbon color, and curated items in real-time.'
      },
      {
        iconName: 'Gift',
        title: 'Curated Signature Collections',
        category: 'Pre-Built Bestsellers',
        description: 'Ready-to-ship hampers assembled by professional gift stylists for immediate checkout.'
      },
      {
        iconName: 'FileText',
        title: 'Embossed Stationery Message',
        category: 'Personalization',
        description: 'Customer greeting message field with character count validation and font preview.'
      },
      {
        iconName: 'Truck',
        title: 'Scheduled Gifting Calendar',
        category: 'Logistics',
        description: 'Calendar module allowing customers to select specific arrival dates for anniversaries and birthdays.'
      }
    ],
    techStack: [
      {
        category: 'Frontend Architecture',
        technologies: [
          { name: 'React 18', role: 'Component UI & Wizard State', verified: true },
          { name: 'JavaScript / ESNext', role: 'Reactive Logic Runtime', verified: true },
          { name: 'Tailwind CSS', role: 'Champagne Luxury Styling', verified: true },
          { name: 'Lucide Icons', role: 'Clean Vector Visuals', verified: true }
        ]
      },
      {
        category: 'State Machine & Calculations',
        technologies: [
          { name: 'Custom React Hooks', role: 'Step Wizard State Machine', verified: true },
          { name: 'Dynamic Price Engine', role: 'Real-Time Bundle Accumulator', verified: true },
          { name: 'Local Storage Sync', role: 'Custom Hamper Persistence', verified: true }
        ]
      },
      {
        category: 'Infrastructure & Cloud',
        technologies: [
          { name: 'Vercel Edge Network', role: 'High-Availability Hosting', verified: true },
          { name: 'Asset Optimization CDN', role: 'Sub-Second Image Delivery', verified: true },
          { name: 'SSL / TLS Security', role: 'Encrypted Gifting Transactions', verified: true }
        ]
      }
    ],
    projectInfo: {
      projectName: 'VELOURA Bespoke Gifting',
      industry: 'Luxury Gifting & Personalization',
      projectCategory: 'Interactive E-commerce',
      websiteUrl: 'https://demo01-ap8k.vercel.app/',
      servicesDelivered: ['UI/UX Design', 'Custom Hamper Builder Engine', 'Interactive Frontend', 'Vercel Deployment'],
      projectStatus: 'Live & Operational',
      technologiesUsed: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel Edge']
    },
    navigation: {
      prevSlug: 'floral-elegance',
      prevTitle: 'Floral Elegance Boutique',
      prevNumber: '03',
      nextSlug: 'nextgen-dma',
      nextTitle: 'NEXTGEN DMA VENTURES',
      nextNumber: '05'
    }
  },

  'nextgen-dma': {
    slug: 'nextgen-dma',
    caseStudyNumber: '05',
    totalCount: '07',
    category: 'TECHNOLOGY // CORPORATE & PROFESSIONAL EDUCATION',
    deploymentStatus: 'PRODUCTION DEPLOYED',
    title: 'NEXTGEN DMA VENTURES – Technology & Digital Learning Platform',
    shortDesc: 'A technology-driven enterprise platform built to present digital engineering capabilities, corporate software solutions, AI innovations, and industry-accredited professional technology education programs.',
    highlights: 'Premier Tech Academy Bangalore • Enterprise Capabilities Grid • Program Curriculum Explorer',
    deliveryClassification: 'Full Corporate Web Platform & Technology Training Portal',
    liveUrl: 'https://nextgen-virid-five.vercel.app/',
    seoTitle: 'NEXTGEN DMA VENTURES – Technology & Academy Case Study | DATAMINT AARVIX',
    seoDescription: 'Case study of NEXTGEN DMA VENTURES: A technology and digital learning platform presenting AI engineering, software development, cloud, and professional training programs.',
    accentColor: '#06b6d4', // Cyan
    heroImage: '/projects_showcase/nextgen-dma/desktop_hero.png',
    heroCaption: 'NEXTGEN DMA VENTURES // Engineering Tomorrow • Technology Services & Premier Academy',
    deliverableGroups: [
      {
        groupName: 'Corporate Digital Experience',
        groupTag: 'TECHNOLOGY IDENTITY',
        items: [
          {
            iconName: 'Cpu',
            title: 'Technology-Focused Homepage',
            description: 'Futuristic dark interface featuring cyan and teal accents, interactive particle backdrops, and modern typography.'
          },
          {
            iconName: 'ShieldCheck',
            title: 'Corporate Brand & Vision',
            description: 'Articulates NEXTGEN DMA’s dual mission: engineering enterprise digital products and training next-generation tech leaders.'
          },
          {
            iconName: 'Zap',
            title: 'Innovation Messaging Framework',
            description: 'Highlights technical expertise across Artificial Intelligence, Cloud Infrastructure, Full-Stack Engineering, and Cybersecurity.'
          },
          {
            iconName: 'Compass',
            title: 'Dual-Audience Navigation',
            description: 'Header architecture guiding enterprise business clients toward Services and students toward Academy Programs.'
          }
        ]
      },
      {
        groupName: 'Digital Capabilities & Services Grid',
        groupTag: 'ENTERPRISE SERVICES',
        items: [
          {
            iconName: 'Globe',
            title: 'Web & Enterprise Software Development',
            description: 'Architecting high-performance SaaS platforms, responsive corporate websites, and scalable microservices.'
          },
          {
            iconName: 'Layers',
            title: 'UI/UX Design Systems & Prototyping',
            description: 'Designing intuitive enterprise digital experiences, accessibility frameworks, and component design tokens.'
          },
          {
            iconName: 'Smartphone',
            title: 'Cross-Platform Mobile App Engineering',
            description: 'Developing high-availability iOS and Android applications with offline synchronization and native performance.'
          },
          {
            iconName: 'Bot',
            title: 'AI & Workflow Automation',
            description: 'Building custom LLM agents, predictive machine learning pipelines, and cognitive process automations.'
          },
          {
            iconName: 'Cloud',
            title: 'Cloud Architecture & DevOps',
            description: 'Zero-downtime multi-region cloud topology, container orchestration, and continuous delivery pipelines.'
          },
          {
            iconName: 'BarChart3',
            title: 'Data Analytics & Business Intelligence',
            description: 'ETL streaming pipelines, executive telemetry dashboards, and predictive forecasting engines.'
          }
        ]
      },
      {
        groupName: 'Professional Academy & Program Curriculum',
        groupTag: 'TECH EDUCATION',
        items: [
          {
            iconName: 'GraduationCap',
            title: 'Technology Program Catalogue',
            description: 'Comprehensive curriculum directory detailing course hours, live project modules, and certification paths.'
          },
          {
            iconName: 'BrainCircuit',
            title: 'AI & Machine Learning Specialization',
            description: 'Hands-on curriculum covering Deep Learning, NLP transformers, Computer Vision, and production model deployment.'
          },
          {
            iconName: 'Code',
            title: 'Full-Stack Web Development Bootcamp',
            description: 'Rigorous engineering training across React, Node.js, TypeScript, PostgreSQL, and cloud deployments.'
          },
          {
            iconName: 'ShieldAlert',
            title: 'Cybersecurity & Ethical Hacking Track',
            description: 'Network defense, vulnerability assessments, penetration testing, and security compliance training.'
          },
          {
            iconName: 'Briefcase',
            title: 'Guaranteed Internship & Placement Support',
            description: 'Dedicated presentation of industry mentorship, capstone project reviews, and corporate hiring partners.'
          },
          {
            iconName: 'FileCheck',
            title: 'Syllabus Download & Direct Enrollment',
            description: 'Interactive course inquiry module enabling prospective engineers to download syllabus PDFs and apply.'
          }
        ]
      },
      {
        groupName: 'Performance & Engineering Standards',
        groupTag: 'ARCHITECTURE',
        items: [
          {
            iconName: 'Smartphone',
            title: 'Responsive Multi-Device Layout',
            description: 'Balanced presentation tailored to widescreen coding displays, laptops, tablets, and smartphones.'
          },
          {
            iconName: 'Zap',
            title: 'Sub-Second Asset Delivery',
            description: 'Optimized high-contrast images and vector icons delivering instantaneous page response times.'
          },
          {
            iconName: 'Server',
            title: 'High-Availability Edge Hosting',
            description: 'Deployed to Vercel Global Edge nodes with 99.99% availability and automatic SSL certification.'
          },
          {
            iconName: 'Search',
            title: 'Education & Technical SEO Schema',
            description: 'Configured Course Schema and EducationalOrganization JSON-LD markup to boost search engine indexing.'
          }
        ]
      }
    ],
    scopeOfWork: {
      artifacts: [
        'Dark Futuristic Design System (Cyan, Teal, Slate Tokens)',
        'Dual-Purpose Web Architecture (Corporate Services + Academy)',
        'Complete Course Directory & Interactive Curriculum Views',
        'Enterprise Capabilities Breakdown Grid (8 Service Disciplines)',
        'Course Syllabus PDF Download Integration',
        'Student Enrollment & Corporate Consultation Ingestion Forms',
        'Vercel Edge Cloud Deployment with Automated CI/CD',
        'Comprehensive Educational & Organization SEO Metadata'
      ],
      technicalSpecifications: {
        frontend: 'Next-Gen React Application with Accessible Component Hierarchy',
        stylingEngine: 'Tailwind CSS with Dark Technology Theme & Neon Glow Accents',
        routingArchitecture: 'Declarative Routing with Smooth Scroll Anchors across Courses',
        stateAndCommerce: 'Client-Side Form Handling & Dynamic Curriculum Accordions',
        hostingTopology: 'Vercel Edge Infrastructure with Worldwide Edge Caching',
        performanceAndSEO: 'Course Schema JSON-LD Markup, Lightweight Vector Assets',
        securityControls: 'DDoS Shielding, HTTPS Strict Transport Security, Input Sanitization'
      }
    },
    previewTitle: 'Explore the Live Experience',
    previewDescription: 'Interact directly with the live NEXTGEN DMA VENTURES platform. Explore technology services, inspect course curricula, and test responsive interactions.',
    previewUrl: 'https://nextgen-virid-five.vercel.app/',
    fallbackImage: '/projects_showcase/nextgen-dma/desktop_hero.png',
    gallery: [
      {
        id: 'gal-ng-1',
        title: 'Technology & Academy Hero',
        category: 'Desktop Homepage',
        image: '/projects_showcase/nextgen-dma/desktop_hero.png',
        description: 'Commanding hero introduction uniting corporate engineering services and Bangalore premier tech academy.',
        viewportBadge: 'Desktop 1600x1000'
      },
      {
        id: 'gal-ng-2',
        title: 'Complete Services & Academy Showcase',
        category: 'Platform Showcase',
        image: '/projects_showcase/nextgen-dma/showcase_main.png',
        description: 'Comprehensive overview of software engineering capabilities, AI modules, and certification courses.',
        viewportBadge: 'Showcase 1440x900'
      },
      {
        id: 'gal-ng-3',
        title: 'Tablet Course Catalog Viewport',
        category: 'Tablet Responsive',
        image: '/projects_showcase/nextgen-dma/gallery_experience.png',
        description: 'Tablet-optimized curriculum grid allowing students to review syllabus modules comfortably on iPads.',
        viewportBadge: 'Tablet 820x1180'
      },
      {
        id: 'gal-ng-4',
        title: 'Mobile Academy & Enrollment',
        category: 'Mobile Touch',
        image: '/projects_showcase/nextgen-dma/mobile_view.png',
        description: 'One-touch mobile interface enabling quick course syllabus downloads and instant enrollment applications.',
        viewportBadge: 'Mobile 430x932'
      }
    ],
    features: [
      {
        iconName: 'GraduationCap',
        title: 'Comprehensive Course Catalog',
        category: 'Academy Core',
        description: 'Detailed breakdowns for AI/ML, Full-Stack, Cloud DevOps, Cybersecurity, Data Analytics, and Mobile Apps.'
      },
      {
        iconName: 'Cpu',
        title: 'Enterprise Services Directory',
        category: 'Corporate Core',
        description: 'End-to-end software engineering, digital product design, AI automation pipelines, and cloud migrations.'
      },
      {
        iconName: 'FileDown',
        title: 'Syllabus PDF Ingestion',
        category: 'Student Conversion',
        description: 'Direct downloads of verified course curriculum documents matching official Bangalore academy syllabi.'
      },
      {
        iconName: 'Briefcase',
        title: 'Placement & Internship Showcase',
        category: 'Career Value',
        description: 'Prominently features real client projects, corporate hackathons, and mock interview preparations.'
      },
      {
        iconName: 'Users',
        title: 'Industry Mentorship Network',
        category: 'Faculty Credibility',
        description: 'Profiles of lead software architects and AI researchers instructing practical weekend and weekday cohorts.'
      },
      {
        iconName: 'Zap',
        title: 'Global Edge Speed',
        category: 'Infrastructure',
        description: 'Built for lightning-fast responsiveness across desktop and mobile devices worldwide.'
      }
    ],
    techStack: [
      {
        category: 'Frontend Architecture',
        technologies: [
          { name: 'React 18', role: 'Component Framework', verified: true },
          { name: 'TypeScript', role: 'Type Safety & Contracts', verified: true },
          { name: 'Tailwind CSS', role: 'Futuristic Dark & Cyan Styling', verified: true },
          { name: 'Lucide Icons', role: 'High-Tech Vector Graphics', verified: true }
        ]
      },
      {
        category: 'Interactive Modules',
        technologies: [
          { name: 'Curriculum Accordion API', role: 'Modular Course Breakdown', verified: true },
          { name: 'Form Ingestion Service', role: 'Student Application Intake', verified: true }
        ]
      },
      {
        category: 'Infrastructure & SEO',
        technologies: [
          { name: 'Vercel Edge Network', role: 'High-Speed Global CDN', verified: true },
          { name: 'Educational JSON-LD', role: 'Course Search Engine Schema', verified: true },
          { name: 'SSL / TLS Encryption', role: 'End-to-End Secure Traffic', verified: true }
        ]
      }
    ],
    projectInfo: {
      projectName: 'NEXTGEN DMA VENTURES',
      industry: 'Technology & Tech Education',
      projectCategory: 'Corporate & Learning Platform',
      websiteUrl: 'https://nextgen-virid-five.vercel.app/',
      servicesDelivered: ['Brand & Corporate Design', 'Academy Web Platform', 'Course Curriculum UI', 'Vercel Deployment'],
      projectStatus: 'Live & Operational',
      technologiesUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel Edge']
    },
    navigation: {
      prevSlug: 'veloura',
      prevTitle: 'VELOURA Bespoke Hampers',
      prevNumber: '04',
      nextSlug: 'ironforge',
      nextTitle: 'IRONFORGE Fitness Club',
      nextNumber: '06'
    }
  },

  'ironforge': {
    slug: 'ironforge',
    caseStudyNumber: '06',
    totalCount: '07',
    category: 'FITNESS // SPORTS, GYM & ATHLETIC PERFORMANCE',
    deploymentStatus: 'PRODUCTION DEPLOYED',
    title: 'IRONFORGE – Premium Fitness & Performance Platform',
    shortDesc: 'A premium athletic performance platform created to communicate strength training, personal coaching expertise, modern fitness facilities, and transformative body recomposition through bold cinematic visuals.',
    highlights: 'Elite Athletic Identity • Structured Program Tiers • Coach Profiles & Consultation',
    deliveryClassification: 'Full Athletic Club Platform & Membership Gateway',
    liveUrl: 'https://iron-psi-eight.vercel.app/',
    seoTitle: 'IRONFORGE – Elite Performance & Fitness Club Case Study | DATAMINT AARVIX',
    seoDescription: 'Case study of IRONFORGE: An athletic performance and luxury fitness platform featuring strength programs, coach profiles, and membership consultation.',
    accentColor: '#f59e0b', // Amber / Gold
    heroImage: '/projects_showcase/ironforge/desktop_hero.png',
    heroCaption: 'IRONFORGE Elite Club // Athletic Strength Conditioning & High-Performance Training',
    deliverableGroups: [
      {
        groupName: 'Fitness Brand Experience',
        groupTag: 'ATHLETIC IDENTITY',
        items: [
          {
            iconName: 'Dumbbell',
            title: 'Cinematic Fitness Homepage',
            description: 'Aggressive, high-energy black background paired with gold and amber accents and powerful geometric typography.'
          },
          {
            iconName: 'Flame',
            title: 'Hero Performance Banner',
            description: 'Dramatic athletic hero imagery communicating discipline, elite conditioning, and transformative results.'
          },
          {
            iconName: 'ShieldCheck',
            title: 'Fitness Philosophy & Standards',
            description: 'Detailed manifesto outlining science-backed training protocols, progressive overload, and recovery hygiene.'
          },
          {
            iconName: 'Award',
            title: 'Gym Introduction & Equipment Tour',
            description: 'Showcase of Olympic lifting platforms, calibrated steel plates, functional turf tracks, and recovery saunas.'
          }
        ]
      },
      {
        groupName: 'Structured Training Programs',
        groupTag: 'PROGRAM TIERS',
        items: [
          {
            iconName: 'Zap',
            title: 'Strength & Power Conditioning',
            description: 'Barbell fundamentals, compound lift progression, and maximal power output cycles for athletes.'
          },
          {
            iconName: 'Activity',
            title: 'Muscle Building & Hypertrophy',
            description: 'Volume-focused resistance programs tailored to targeted muscle growth and aesthetic balance.'
          },
          {
            iconName: 'HeartPulse',
            title: 'Metabolic Conditioning & Fat Loss',
            description: 'High-density interval training (HIIT), sled pushing, and cardiovascular endurance programming.'
          },
          {
            iconName: 'UserCheck',
            title: 'One-on-One Private Coaching',
            description: 'Bespoke fitness prescriptions with daily biometric tracking, technique auditing, and nutrition protocols.'
          }
        ]
      },
      {
        groupName: 'Trainer Profiles & Coaching Credibility',
        groupTag: 'FACULTY & STAFF',
        items: [
          {
            iconName: 'Users',
            title: 'Elite Coach Directory',
            description: 'Detailed bios, competitive athletic backgrounds, CSCS certifications, and specialized disciplines.'
          },
          {
            iconName: 'Trophy',
            title: 'Transformation Track Record',
            description: 'Quantifiable client results showing body composition improvements, strength gains, and athletic milestones.'
          },
          {
            iconName: 'Calendar',
            title: 'Private Training Consultation CTA',
            description: 'Direct booking modal enabling prospective members to schedule a 1-on-1 fitness assessment.'
          },
          {
            iconName: 'CheckCircle2',
            title: 'Membership Tiers & Facilities Access',
            description: 'Transparent tier comparison: Standard Gym Access, Performance Club, and All-Inclusive VIP Coaching.'
          }
        ]
      },
      {
        groupName: 'Performance & Responsive Engineering',
        groupTag: 'SYSTEM EXCELLENCE',
        items: [
          {
            iconName: 'Smartphone',
            title: 'High-Impact Mobile UI',
            description: 'Athletic typography and touch-optimized buttons tailored to mobile athletes on gym floors.'
          },
          {
            iconName: 'Zap',
            title: 'Rapid High-Res Media Loading',
            description: 'Compressed cinematic photography optimized for instantaneous rendering on 4G and 5G cellular networks.'
          },
          {
            iconName: 'Cloud',
            title: 'Vercel Cloud High-Availability',
            description: 'Global cloud edge hosting ensuring 99.99% uptime and zero server latency.'
          },
          {
            iconName: 'Lock',
            title: 'Secure Lead Transmission',
            description: 'SSL-encrypted consultation inquiry pipelines protecting customer health goals and personal data.'
          }
        ]
      }
    ],
    scopeOfWork: {
      artifacts: [
        'Cinematic Athletic Design System (Gold, Amber, Deep Charcoal)',
        'Responsive High-Performance Web Platform',
        'Structured Fitness Programs Directory (Strength, Hypertrophy, Cardio)',
        'Elite Coach Profiles & Certifications Showcase',
        'Interactive Membership Comparison & Inquiry Form',
        'Facility Photography & Recovery Suite Presentation',
        'Vercel Edge Cloud Deployment & CI/CD Pipeline',
        'Sports Club & Fitness Center SEO Metadata Configuration'
      ],
      technicalSpecifications: {
        frontend: 'Next-Gen React SPA with Componentized Athletic Layouts',
        stylingEngine: 'Tailwind CSS with Custom Charcoal & Gold Performance Theme',
        routingArchitecture: 'Declarative Routing with Direct Anchors into Program Tiers',
        stateAndCommerce: 'Client-Side Membership Inquiry State & Modal Controls',
        hostingTopology: 'Vercel Edge Network with Worldwide Edge Routing',
        performanceAndSEO: 'Optimized Cinematic Photography, SportsClub JSON-LD Schema',
        securityControls: 'HTTPS End-to-End Encryption, Sanitized Form Handlers'
      }
    },
    previewTitle: 'Explore the Live Experience',
    previewDescription: 'Interact directly with the live IRONFORGE fitness club platform. Explore training programs, review coach credentials, and test responsive interactions.',
    previewUrl: 'https://iron-psi-eight.vercel.app/',
    fallbackImage: '/projects_showcase/ironforge/desktop_hero.png',
    gallery: [
      {
        id: 'gal-if-1',
        title: 'Athletic Club Hero & Philosophy',
        category: 'Desktop Experience',
        image: '/projects_showcase/ironforge/desktop_hero.png',
        description: 'Powerful hero presentation introducing elite performance standards, coaching, and facility aesthetics.',
        viewportBadge: 'Desktop 1600x1000'
      },
      {
        id: 'gal-if-2',
        title: 'Full Programs & Coaching Showcase',
        category: 'Programs Showcase',
        image: '/projects_showcase/ironforge/showcase_main.png',
        description: 'Comprehensive overview of strength programs, hypertrophy cycles, and coach certifications.',
        viewportBadge: 'Showcase 1440x900'
      },
      {
        id: 'gal-if-3',
        title: 'Tablet Performance Overview',
        category: 'Tablet Responsive',
        image: '/projects_showcase/ironforge/gallery_experience.png',
        description: 'High-contrast tablet view ideal for consultation desks and front-of-house gym check-in tablets.',
        viewportBadge: 'Tablet 820x1180'
      },
      {
        id: 'gal-if-4',
        title: 'Mobile Athlete Portal',
        category: 'Mobile Touch',
        image: '/projects_showcase/ironforge/mobile_view.png',
        description: 'Mobile interface giving athletes quick access to program schedules, coach booking, and gym hours.',
        viewportBadge: 'Mobile 430x932'
      }
    ],
    features: [
      {
        iconName: 'Dumbbell',
        title: 'Targeted Training Programs',
        category: 'Athletic Core',
        description: 'Science-backed regimens: Strength & Conditioning, Hypertrophy Muscle Gain, and High-Intensity Fat Loss.'
      },
      {
        iconName: 'Users',
        title: 'Certified Master Coaches',
        category: 'Coaching Roster',
        description: 'Comprehensive trainer credentials, Olympic lifting qualifications, and dedicated specialization tags.'
      },
      {
        iconName: 'Award',
        title: 'Olympic-Grade Facilities',
        category: 'Facility Amenities',
        description: 'Showcasing calibrated barbells, deadlift platforms, custom racks, turf sprint tracks, and contrast therapy.'
      },
      {
        iconName: 'Calendar',
        title: '1-on-1 Assessment Booking',
        category: 'Conversion',
        description: 'Frictionless consultation form scheduling posture audits, movement screens, and nutrition goal setting.'
      },
      {
        iconName: 'CheckCircle2',
        title: 'Tiered Membership Access',
        category: 'Membership',
        description: 'Clear pricing tiers: General Club Access, Performance Athlete, and All-Inclusive VIP Training.'
      },
      {
        iconName: 'Zap',
        title: 'Ultra-Fast Edge Performance',
        category: 'Platform Architecture',
        description: 'Sub-second page speeds ensuring seamless video and image loading on all athlete devices.'
      }
    ],
    techStack: [
      {
        category: 'Frontend Architecture',
        technologies: [
          { name: 'React 18', role: 'Component Framework', verified: true },
          { name: 'JavaScript / ESNext', role: 'Athletic UI Logic', verified: true },
          { name: 'Tailwind CSS', role: 'Gold & Charcoal Design System', verified: true },
          { name: 'Lucide Icons', role: 'Sports & Fitness Vector Graphics', verified: true }
        ]
      },
      {
        category: 'Client Interaction',
        technologies: [
          { name: 'Modal & Form State', role: 'Consultation Intake Engine', verified: true },
          { name: 'Scroll Spying Anchors', role: 'Smooth Program Navigation', verified: true }
        ]
      },
      {
        category: 'Cloud & Infrastructure',
        technologies: [
          { name: 'Vercel Edge Network', role: 'Global Low-Latency Hosting', verified: true },
          { name: 'Asset Optimization CDN', role: 'High-Res Athletic Photography', verified: true },
          { name: 'SSL / TLS Security', role: 'Encrypted Lead Ingestion', verified: true }
        ]
      }
    ],
    projectInfo: {
      projectName: 'IRONFORGE Fitness Club',
      industry: 'Athletic Performance & Fitness',
      projectCategory: 'Sports & Coaching Platform',
      websiteUrl: 'https://iron-psi-eight.vercel.app/',
      servicesDelivered: ['Athletic Brand Identity', 'Club Web Platform', 'Coaching UI System', 'Vercel Deployment'],
      projectStatus: 'Live & Operational',
      technologiesUsed: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel Edge']
    },
    navigation: {
      prevSlug: 'nextgen-dma',
      prevTitle: 'NEXTGEN DMA VENTURES',
      prevNumber: '05',
      nextSlug: 'digital-twin',
      nextTitle: 'DIGITAL TWIN 3D Portal',
      nextNumber: '07'
    }
  },

  'digital-twin': {
    slug: 'digital-twin',
    caseStudyNumber: '07',
    totalCount: '07',
    category: 'WEB DEVELOPMENT // 3D INDUSTRIAL IOT & DIGITAL TWIN',
    deploymentStatus: 'PRODUCTION DEPLOYED',
    title: 'DIGITAL TWIN – 3D Industrial IoT Monitoring & Telemetry Platform',
    shortDesc: 'An enterprise-grade 3D industrial IoT monitoring cockpit and digital factory platform engineered with WebGL / Three.js, real-time sensor telemetry, predictive fault alerts, and automated maintenance scheduling.',
    highlights: 'Interactive 3D Factory Floor • Real-Time Sensor Telemetry • Predictive Fault Detection',
    deliveryClassification: 'Full Industrial Digital Twin Platform Delivery',
    liveUrl: 'https://digital-twin-lovat-beta.vercel.app/',
    seoTitle: 'DIGITAL TWIN – 3D Industrial IoT Monitoring Platform Case Study | DATAMINT AARVIX',
    seoDescription: 'Case study of DIGITAL TWIN: An interactive 3D WebGL factory monitoring platform with real-time sensor streams, hydraulic pressure tracking, and automated maintenance management.',
    accentColor: '#06b6d4',
    heroImage: '/projects_showcase/digital-twin/desktop_hero.png',
    heroCaption: 'DIGITAL TWIN Production Cockpit // 3D Factory Floor & Real-Time Sensor Telemetry Interface',
    deliverableGroups: [
      {
        groupName: '3D Visualization & Industrial Interface',
        groupTag: 'WEBGL & TELEMETRY',
        items: [
          {
            iconName: 'Box',
            title: 'Interactive 3D Factory Floor Twin',
            description: 'WebGL-powered spatial canvas rendering real-time machine geometries, isometric camera controls, and dynamic status shaders (Running, Warning, Offline).'
          },
          {
            iconName: 'Activity',
            title: 'Multi-Sensor Telemetry Dashboards',
            description: 'Real-time telemetry feeds tracking Temperature (°C), Hydraulic Pressure (bar), Vibration (mm/s), Spindle RPM, and consumable fluid levels.'
          },
          {
            iconName: 'Layers',
            title: 'Machine Asset Inspection Cockpit',
            description: 'Interactive component drilldowns displaying operational status, active fault codes, running hours, and current tooling cycles.'
          }
        ]
      },
      {
        groupName: 'Intelligence, Telemetry & Operations',
        groupTag: 'ALERTS & OEE ANALYTICS',
        items: [
          {
            iconName: 'AlertTriangle',
            title: 'Predictive Threshold Alert Management',
            description: 'Automated anomaly detection triggering instant severity-based alerts for hydraulic pressure spikes, mold temperature drift, and sensor timeout.'
          },
          {
            iconName: 'TrendingUp',
            title: 'Overall Equipment Effectiveness (OEE)',
            description: 'Executive manufacturing analytics calculating plant throughput, availability rates, performance velocity, and quality metrics in real time.'
          },
          {
            iconName: 'Wrench',
            title: 'Preventative Maintenance Scheduler',
            description: 'Integrated work order management system for scheduling 500-hour hydraulic overhauls, thermocouple calibrations, and inspection sign-offs.'
          }
        ]
      }
    ],
    scopeOfWork: {
      artifacts: [
        'Interactive 3D WebGL Factory Model Canvas',
        'Real-Time Multi-Sensor Telemetry Pipeline',
        'Predictive Threshold Alert & Triage System',
        'Factory OEE Analytics & Performance Dashboard',
        'Preventative Maintenance Work Order Log',
        'Compliance Telemetry Export & Reporting Suite',
        'Role-Based Industrial Plant Operator Console'
      ],
      technicalSpecifications: {
        frontend: 'React 18, Vite, Three.js / WebGL 3D Canvas, Lucide Enterprise Icons',
        stylingEngine: 'Tailwind CSS, Glassmorphic Industrial Dark Mode, High-Contrast Status Indicators',
        routingArchitecture: 'Client-Side SPA Routing (/factory, /analytics, /alerts, /maintenance, /reports)',
        stateAndCommerce: 'Live Sensor State Hydration, Telemetry Buffer, Alert Queue Management',
        hostingTopology: 'Vercel Edge Network, Global CDN Asset Distribution, Sub-second TTFB',
        performanceAndSEO: 'Instanced Mesh Rendering, Hardware Accelerated Canvas, Optimized GPU Shaders',
        securityControls: 'Role-Based Authentication, Encrypted Telemetry Streams, Session Token Guard'
      }
    },
    previewTitle: 'Live 3D Digital Twin Platform Preview',
    previewDescription: 'Interact with the live production digital twin monitoring cockpit. Test the 3D factory visualization, switch viewport modes, and inspect machine telemetry.',
    previewUrl: 'https://digital-twin-lovat-beta.vercel.app/',
    fallbackImage: '/projects_showcase/digital-twin/desktop_hero.png',
    gallery: [
      {
        id: 'dt-hero',
        title: '3D Factory Floor Overview',
        category: 'Spatial Telemetry',
        image: '/projects_showcase/digital-twin/desktop_hero.png',
        description: 'Interactive Three.js factory floor with real-time status indicators, machine selection, and isometric camera perspective.',
        viewportBadge: '1440 × 900 // WEBGL CANVAS'
      },
      {
        id: 'dt-showcase',
        title: 'Production Telemetry & Metrics',
        category: 'Factory Cockpit',
        image: '/projects_showcase/digital-twin/showcase_main.png',
        description: 'Real-time telemetry meters monitoring temperature, pressure thresholds, and machine operating status.',
        viewportBadge: '1440 × 1080 // METRICS VIEW'
      },
      {
        id: 'dt-collections',
        title: 'Machine Asset Inspection & Alerts',
        category: 'Diagnostics',
        image: '/projects_showcase/digital-twin/gallery_collections.png',
        description: 'Automated alert triage resolving hydraulic pressure spikes, temperature warnings, and scheduled maintenance windows.',
        viewportBadge: '1440 × 1200 // ALERT COCKPIT'
      },
      {
        id: 'dt-experience',
        title: 'Factory Analytics & Performance',
        category: 'OEE Telemetry',
        image: '/projects_showcase/digital-twin/gallery_experience.png',
        description: 'Enterprise OEE analytics visualizing machine availability, throughput velocity, and quality variance.',
        viewportBadge: '1600 × 1000 // ANALYTICS DASHBOARD'
      },
      {
        id: 'dt-mobile',
        title: 'Field Tablet & Mobile Operations',
        category: 'Mobile Plant View',
        image: '/projects_showcase/digital-twin/mobile_view.png',
        description: 'Fully responsive mobile and tablet interface engineered for plant supervisors and on-floor engineers.',
        viewportBadge: '430 × 932 // MOBILE RESPONSIVE'
      }
    ],
    features: [
      {
        iconName: 'Box',
        title: '3D Spatial Factory Floor',
        category: 'Visualization',
        description: 'Three.js / WebGL canvas featuring interactive isometric views, machine status meshes, and zoom-to-equipment controls.'
      },
      {
        iconName: 'Activity',
        title: 'Sub-Second Sensor Telemetry',
        category: 'Real-Time Monitoring',
        description: 'Streamed monitoring of temperature, hydraulic pressure, vibration velocity, and fluid reservoirs.'
      },
      {
        iconName: 'AlertTriangle',
        title: 'Predictive Anomaly Detection',
        category: 'Fault Prevention',
        description: 'Real-time threshold evaluations generating automated warnings before hardware failures or pressure spikes occur.'
      },
      {
        iconName: 'TrendingUp',
        title: 'Plant OEE Telemetry',
        category: 'Analytics',
        description: 'Executive dashboards measuring equipment availability, run-rate efficiency, and total production yield.'
      },
      {
        iconName: 'Wrench',
        title: 'Maintenance Log & Overhaul Tracking',
        category: 'Asset Lifecycle',
        description: 'Preventative maintenance scheduler logging 500-hour overhauls, sensor calibrations, and inspection history.'
      },
      {
        iconName: 'ShieldCheck',
        title: 'Secure Industrial Edge Architecture',
        category: 'Security & Hosting',
        description: 'Enterprise deployment on Vercel Edge with zero-latency global delivery and encrypted session telemetry.'
      }
    ],
    techStack: [
      {
        category: 'Frontend & 3D WebGL Engine',
        technologies: [
          { name: 'React 18', role: 'Component Framework', verified: true },
          { name: 'Three.js / WebGL', role: '3D Digital Twin Engine', verified: true },
          { name: 'Vite', role: 'High-Performance Bundler', verified: true },
          { name: 'Lucide Icons', role: 'Industrial Vector Iconography', verified: true }
        ]
      },
      {
        category: 'Interface & Data Visualization',
        technologies: [
          { name: 'Tailwind CSS', role: 'Industrial Dark Theme System', verified: true },
          { name: 'Recharts / Canvas', role: 'Real-Time Telemetry Graphs', verified: true },
          { name: 'SPA Router', role: 'Factory View State Management', verified: true }
        ]
      },
      {
        category: 'Cloud & Infrastructure',
        technologies: [
          { name: 'Vercel Edge Network', role: 'Global High-Availability Hosting', verified: true },
          { name: 'Asset CDN', role: '3D Asset & Texture Delivery', verified: true },
          { name: 'SSL / TLS Security', role: 'Encrypted Telemetry Streams', verified: true }
        ]
      }
    ],
    projectInfo: {
      projectName: 'Digital Twin Monitoring Portal',
      industry: 'Industrial IoT & Smart Manufacturing',
      projectCategory: 'Web Development / 3D Digital Twin',
      websiteUrl: 'https://digital-twin-lovat-beta.vercel.app/',
      servicesDelivered: ['3D WebGL Architecture', 'Industrial IoT Portal', 'Sensor Telemetry Engine', 'Vercel Edge Deployment'],
      projectStatus: 'Live & Operational',
      technologiesUsed: ['React', 'Three.js / WebGL', 'Vite', 'Tailwind CSS', 'Vercel']
    },
    navigation: {
      prevSlug: 'ironforge',
      prevTitle: 'IRONFORGE Fitness Club',
      prevNumber: '06',
      nextSlug: 'endloop',
      nextTitle: 'ENDLOOP Streetwear',
      nextNumber: '01'
    }
  }
};

