export interface AIProjectModule {
  id: string;
  name: string;
  purpose: string;
  description: string;
  inputOutput: string;
  aiProcess: string;
  userInteraction: string;
  keyFeatures: string[];
  image: string;
  badge: string;
}

export interface AIDeliverableGroup {
  groupName: string;
  groupTag: string;
  items: {
    iconName: string;
    title: string;
    description: string;
  }[];
}

export interface AIScreenshotItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  aspectBadge: string;
}

export interface AIProjectData {
  meta: {
    slug: string;
    aliases: string[];
    projectNumber: string;
    title: string;
    shortTitle: string;
    brandName: string;
    category: string;
    aiClassification: string;
    status: string;
    liveUrl?: string;
    pdfDocUrl: string;
    heroImage: string;
    seoTitle: string;
    seoDescription: string;
    tagline: string;
  };
  overview: {
    introduction: string;
    businessProblem: string;
    proposedSolution: string;
    aiObjectives: string[];
    targetAudience: string[];
    valueProposition: string;
    projectScope: string;
  };
  architecture: {
    pattern: string;
    description: string;
    layers: {
      number: string;
      name: string;
      role: string;
      tech: string;
      details: string;
    }[];
    pipelineSteps: {
      step: string;
      title: string;
      desc: string;
      tech: string;
    }[];
  };
  deliverables: AIDeliverableGroup[];
  modules: AIProjectModule[];
  workflow: {
    title: string;
    description: string;
    stages: {
      stageNumber: string;
      name: string;
      action: string;
      output: string;
    }[];
  };
  screenshots: AIScreenshotItem[];
  techStack: {
    category: string;
    technologies: {
      name: string;
      role: string;
      verified: boolean;
    }[];
  }[];
  apiAndIntegration: {
    description: string;
    endpoints: {
      method: string;
      path: string;
      desc: string;
    }[];
    integrations: {
      name: string;
      purpose: string;
      details: string;
    }[];
  };
  security: {
    description: string;
    measures: {
      title: string;
      details: string;
    }[];
  };
  testing: {
    documentedQualityAssurance: {
      area: string;
      tests: string;
    }[];
  };
  projectInfo: {
    projectName: string;
    industry: string;
    category: string;
    projectType: string;
    mainFunctionalities: string[];
    verifiedAiTechnologies: string[];
    automationCapabilities: string[];
    applicationUrl?: string;
    projectStatus: string;
  };
  relatedProjects: {
    title: string;
    category: string;
    desc: string;
    slug: string;
    image: string;
  }[];
}

// ============================================================================
// PROJECT 01: Plant Health Scanner App (Flutter + MobileNetV3-Small CNN TFLite)
// ============================================================================
export const plantHealthScannerData: AIProjectData = {
  meta: {
    slug: 'plant-health-scanner',
    aliases: ['ai-project-01', 'plant-health-app'],
    projectNumber: '09',
    title: 'Plant Health Scanner – AI Crop Disease Diagnosis App',
    shortTitle: 'Plant Health Scanner',
    brandName: 'Plant Health Scanner',
    category: 'AI & AUTOMATION // COMPUTER VISION & EDGE AI',
    aiClassification: 'Edge AI • Computer Vision • Convolutional Neural Network (CNN)',
    status: 'PRODUCTION DEPLOYED // MOBILE & OFFLINE TFLITE',
    pdfDocUrl: '/projects/ai-automation/plant-health-scanner/Plant_Health_Scanner_Documentation.pdf',
    heroImage: '/projects/ai-automation/plant-health-scanner/hero/plant_health_hero.jpeg',
    seoTitle: 'Plant Health Scanner – Edge AI Crop Disease Diagnostic Case Study | DATAMINT AARVIX',
    seoDescription: 'Case study of Plant Health Scanner: An on-device MobileNetV3-Small CNN computer vision mobile app built with Flutter and TensorFlow Lite float16, diagnosing 19 crop disease classes offline.',
    tagline: 'On-Device MobileNetV3-Small CNN Foliage Diagnosis Across 19 Crop Disease Classes'
  },
  overview: {
    introduction: 'The Plant Health Scanner is an edge-native AI agricultural diagnostic mobile application engineered with Flutter, TensorFlow/Keras, and TensorFlow Lite (float16). Designed to empower farmers and agricultural field operators, the app runs an optimized Convolutional Neural Network directly on the mobile device, identifying crop varieties, detecting plant pathology, and calculating prediction confidence scores without requiring an internet connection.',
    businessProblem: 'Smallholder farmers and commercial greenhouse growers lose up to 40% of their crop yields annually to plant diseases and leaf blights. Conventional agricultural extension services are slow, expensive, and unavailable in remote rural fields with poor cellular connectivity, leading to delayed pesticide intervention or catastrophic crop damage.',
    proposedSolution: 'A zero-latency, on-device mobile vision scanner that runs a compressed MobileNetV3-Small deep learning model locally on Android and iOS hardware. Farmers capture a leaf photo, receive instantaneous disease classification with confidence metrics and agronomic care tips, and automatically dispatch diagnostic summaries via EmailJS.',
    aiObjectives: [
      'Deliver offline edge AI inference using float16 quantized MobileNetV3-Small weights.',
      'Achieve sub-second diagnostic classification across 4 major food crops (Tomato, Potato, Corn, Pepper).',
      'Classify 19 distinct botanical classes of healthy foliage and fungal/bacterial leaf infections.',
      'Enforce an 80% (0.80) minimum confidence threshold to eliminate false positives in field operations.',
      'Provide automated email reporting via EmailJS and offline scan history caching up to 100 records.'
    ],
    targetAudience: [
      'Commercial Crop Producers & Agronomists',
      'Smallholder Farmers & Agricultural Field Agents',
      'Hydroponic & Greenhouse Facility Operators',
      'Horticultural Researchers & Home Gardeners'
    ],
    valueProposition: 'Immediate, offline agricultural disease intelligence in the palm of a farmer’s hand—protecting crop yields, eliminating network dependency, and delivering instant agronomic treatment advice in real time.',
    projectScope: 'Delivered as a cross-platform Flutter application for Android and iOS, integrated with Firebase Authentication, local JSON device caching, EmailJS automated notification, and an embedded TFLite neural inference engine.'
  },
  architecture: {
    pattern: '4-Tier Edge-Native Mobile Vision Architecture (Presentation, Application, On-Device AI, Local Data)',
    description: 'The Plant Health Scanner isolates compute-heavy neural inference from cloud dependencies. Model execution happens locally inside the device CPU/NPU using TensorFlow Lite, with Firebase and EmailJS invoked only when online account synchronization or report dispatch is triggered.',
    layers: [
      {
        number: '01',
        name: 'Presentation Layer',
        role: 'Flutter Multiplatform User Interface',
        tech: 'Flutter (Dart), Camera Controller, Cupertino / Material Widgets',
        details: 'Renders the live camera viewfinder with bounding alignment reticle, photo gallery picker, diagnostic result modal, and swipeable scan history screens.'
      },
      {
        number: '02',
        name: 'Application / Logic Layer',
        role: 'Orchestration & Validation Engine',
        tech: 'Dart Services, Image Pre-processing Pipeline, EmailJS Bridge',
        details: 'Validates input photos, executes pixel resizing, triggers TFLite inference, enforces the 0.80 confidence threshold rule, and dispatches automated email reports.'
      },
      {
        number: '03',
        name: 'AI / Model Layer',
        role: 'Edge Neural Inference Core',
        tech: 'MobileNetV3-Small CNN Quantized to TensorFlow Lite (Float16)',
        details: 'Processes normalized tensor pixels (0 to 255 scaling) and computes probability distribution vectors across 19 botanical crop and disease classes directly on the smartphone.'
      },
      {
        number: '04',
        name: 'Data & Persistence Layer',
        role: 'Local Cache & Cloud Account Store',
        tech: 'Local JSON Storage (Device Sandboxed) + Firebase Authentication',
        details: 'Maintains an offline FIFO cache of up to 100 historical scan logs and images, while Firebase securely manages user identity and authentication tokens.'
      }
    ],
    pipelineSteps: [
      { step: '1', title: 'Live Camera Capture', desc: 'Farmer captures leaf foliage photo within the viewfinder frame.', tech: 'Flutter Camera' },
      { step: '2', title: 'Image Pre-processing', desc: 'Raw bitmap resized to model input dimension with 0–255 pixel normalization.', tech: 'OpenCV / Dart' },
      { step: '3', title: 'TFLite Model Inference', desc: 'MobileNetV3-Small CNN executes on-device float16 inference in <50ms.', tech: 'TensorFlow Lite' },
      { step: '4', title: 'Confidence Gating', desc: 'Evaluates top softmax probability against the 0.80 threshold gate.', tech: 'Decision Logic' },
      { step: '5', title: 'Care Advice & Storage', desc: 'Binds verified disease to agronomic tip, saves locally, and triggers EmailJS.', tech: 'JSON / EmailJS' }
    ]
  },
  deliverables: [
    {
      groupName: 'Edge AI Vision & Inference',
      groupTag: 'COMPUTER VISION ENGINE',
      items: [
        {
          iconName: 'Cpu',
          title: 'Embedded TFLite MobileNetV3-Small Engine',
          description: 'Optimized Convolutional Neural Network quantized to float16, delivering fast offline inference directly on the mobile device.'
        },
        {
          iconName: 'ShieldAlert',
          title: '19-Class Crop & Pathology Classifier',
          description: 'Comprehensive recognition matrix covering 4 major crops (Tomato, Potato, Corn, Pepper) across healthy leaves and fungal/bacterial blights.'
        },
        {
          iconName: 'Sliders',
          title: '0.80 Confidence Gating Logic',
          description: 'Rigorous decision filter that prevents false diagnoses by demanding at least 80% statistical certainty before presenting results.'
        }
      ]
    },
    {
      groupName: 'Mobile User Experience & Workflows',
      groupTag: 'FLUTTER CLIENT',
      items: [
        {
          iconName: 'Camera',
          title: 'Real-Time Camera & Gallery Scanner',
          description: 'Intuitive viewfinder interface with a framing guide and gallery upload toggle for analyzing previously photographed crops.'
        },
        {
          iconName: 'FileCheck',
          title: 'Diagnostic Result & Agronomic Care Tips',
          description: 'Clear diagnostic cards displaying crop species, health status, disease name, confidence score, and treatment tips.'
        },
        {
          iconName: 'History',
          title: '100-Record Offline Scan History',
          description: 'Local device archive storing up to 100 historical scans with leaf thumbnails, timestamps, and swipe-to-delete management.'
        }
      ]
    },
    {
      groupName: 'Cloud Services & Notification Bridges',
      groupTag: 'INTEGRATIONS',
      items: [
        {
          iconName: 'Mail',
          title: 'Automated EmailJS Report Dispatch',
          description: 'Zero-backend email bridge sending diagnostic summaries, disease names, and care instructions straight to the farmer’s inbox.'
        },
        {
          iconName: 'Lock',
          title: 'Firebase Authentication Gateway',
          description: 'Secure email/password authentication ensuring operator privacy and access governance for agricultural records.'
        }
      ]
    }
  ],
  modules: [
    {
      id: 'camera-scan',
      name: '01. Camera & Gallery Scan Module',
      purpose: 'Capture high-clarity foliage imagery for computer vision inference.',
      description: 'Provides a live camera preview screen with a rectangular framing reticle ("Fill the frame with one leaf in good light"). The module allows operators to capture an instant leaf photo or select an existing picture from the smartphone photo library.',
      inputOutput: 'Input: Optical camera sensor feed or gallery JPEG/PNG → Output: Raw bitmap buffer resized to neural model dimensions.',
      aiProcess: 'Applies hardware-accelerated image scaling and passes normalized pixel tensors (0–255) to the MobileNetV3 inference queue.',
      userInteraction: 'Farmer points the camera at an affected crop leaf, aligns it within the framing box, and taps the circular green capture button.',
      keyFeatures: [
        'Hardware camera preview with framing guide reticle',
        'Gallery photo picker integration',
        'Automatic lighting and orientation normalization',
        'Sub-50ms handoff to the TFLite inference engine'
      ],
      image: '/projects/ai-automation/plant-health-scanner/screenshots/01_camera_scan.jpeg',
      badge: 'LIVE VIEW'
    },
    {
      id: 'ai-detection',
      name: '02. Edge Neural Inference Engine',
      purpose: 'Execute on-device disease classification without cellular or internet connectivity.',
      description: 'The core AI module loads the trained MobileNetV3-Small CNN converted to TensorFlow Lite (float16). It processes the pre-processed tensor, calculates probability distributions across 19 crop and disease classes, and checks against the 0.80 confidence threshold.',
      inputOutput: 'Input: 3-channel RGB image tensor → Output: Top-1 predicted class label and float confidence probability.',
      aiProcess: 'Feed-forward Convolutional Neural Network with depthwise separable convolutions, hard-swish activations, and global pooling layers.',
      userInteraction: 'Fully automated background process that completes in under 50 milliseconds upon photo capture.',
      keyFeatures: [
        '19 botanical classes covering Tomato, Potato, Corn, and Pepper',
        'Offline float16 quantized TFLite inference',
        '0.80 minimum confidence validation gate',
        'Robust resilience against outdoor shadow variations'
      ],
      image: '/projects/ai-automation/plant-health-scanner/hero/plant_health_hero.jpeg',
      badge: 'EDGE AI CNN'
    },
    {
      id: 'diagnostic-results',
      name: '03. Diagnostic Result & Care Tips Studio',
      purpose: 'Deliver clear, actionable agronomic advice based on AI findings.',
      description: 'Presents the farmer with a clean diagnostic card highlighting the crop name, disease classification (e.g. Leaf Scorch, Early Blight, Healthy), and exact confidence score (e.g. 100% confidence). Crucially, each disease is mapped to targeted treatment instructions (e.g. "Remove badly affected leaves, avoid wetting foliage, improve airflow, and take a close-up photo to your local agriculture extension office").',
      inputOutput: 'Input: Predicted disease class ID → Output: Formatted diagnostic card with treatment recommendations.',
      aiProcess: 'Deterministic lookup table linking 19 neural class outputs to verified agronomic extension care guidelines.',
      userInteraction: 'Farmer reads the diagnosis, reviews the confidence rating, and implements the suggested agronomic actions.',
      keyFeatures: [
        'High-contrast visual result card with crop leaf image',
        'Confidence score display percentage',
        'Actionable treatment and cultural care recommendations',
        'Automatic trigger for EmailJS report dispatch'
      ],
      image: '/projects/ai-automation/plant-health-scanner/hero/plant_health_hero.jpeg',
      badge: 'AGRONOMIC ADVICE'
    },
    {
      id: 'scan-history',
      name: '04. Scan History & Archive Ledger',
      purpose: 'Provide temporal tracking of plant health across multiple fields and harvest dates.',
      description: 'Stores up to 100 historical inspection scans locally on the smartphone in sandboxed JSON storage. Each entry records the leaf thumbnail, crop name, diagnosis, confidence score, and timestamp.',
      inputOutput: 'Input: Completed diagnostic result record → Output: Scrollable chronological inspection ledger.',
      aiProcess: 'Local FIFO storage cache keeping a rolling log of up to 100 on-device records.',
      userInteraction: 'Farmers scroll through past scans, tap individual entries to review historical care tips, or swipe to delete obsolete records.',
      keyFeatures: [
        'Local JSON storage preserving up to 100 scans',
        'Leaf thumbnail preview with timestamp logging',
        'Swipe-to-delete individual records or one-tap Clear All',
        'Zero network requirement for browsing history'
      ],
      image: '/projects/ai-automation/plant-health-scanner/screenshots/03_scan_history.jpeg',
      badge: 'LOCAL LEDGER'
    },
    {
      id: 'email-dispatch',
      name: '05. Automated EmailJS Report Dispatch',
      purpose: 'Send instant digital records of crop diagnoses directly to the farmer’s inbox.',
      description: 'Whenever a leaf scan is performed with active connectivity, the application automatically formats the crop name, disease diagnosis, confidence score, and treatment tip into an email dispatched to the user’s registered account.',
      inputOutput: 'Input: Diagnostic JSON payload + User email → Output: Formatted HTML/Plain text email notification.',
      aiProcess: 'Automated post-inference webhook dispatch executing through EmailJS API.',
      userInteraction: 'Farmer receives a notification in their email app (e.g. "Plant scan result: Strawberry // Leaf Scorch 100% Confidence") for permanent digital archiving.',
      keyFeatures: [
        'Automated trigger upon successful leaf classification',
        'Includes disease name, timestamp, and full treatment advice',
        'Zero-backend serverless integration via EmailJS',
        'Enables remote agronomist review via forwarded emails'
      ],
      image: '/projects/ai-automation/plant-health-scanner/screenshots/04_email_notification.jpeg',
      badge: 'AUTOMATED EMAIL'
    },
    {
      id: 'user-auth',
      name: '06. User Authentication & Access',
      purpose: 'Secure user accounts and associate diagnostic records with registered operators.',
      description: 'Governs login and account creation using Firebase Authentication. Operators log in with their email address and password before accessing the scanning viewfinder.',
      inputOutput: 'Input: Email and password credentials → Output: Authenticated user token and session state.',
      aiProcess: 'Security access gate guarding the camera scanner and history repository.',
      userInteraction: 'User enters credentials on the clean mobile sign-in screen and taps Sign In to enter the scanner.',
      keyFeatures: [
        'Firebase Authentication integration',
        'Secure password validation and token storage',
        'Session persistence across app relaunches',
        'One-tap sign out from the camera interface'
      ],
      image: '/projects/ai-automation/plant-health-scanner/screenshots/02_login_firebase.jpeg',
      badge: 'FIREBASE AUTH'
    }
  ],
  workflow: {
    title: 'Edge AI Inference & Notification Pipeline',
    description: 'The end-to-end operational journey from pointing the smartphone camera at an infected leaf to receiving an automated diagnostic report.',
    stages: [
      { stageNumber: '01', name: 'Optical Image Capture', action: 'Farmer aligns leaf inside camera viewfinder and taps scan button.', output: 'Raw high-res photo buffer' },
      { stageNumber: '02', name: 'On-Device Pre-processing', action: 'App resizes bitmap to model dimension and scales pixels 0–255.', output: 'Normalized input tensor' },
      { stageNumber: '03', name: 'MobileNetV3 TFLite Inference', action: 'Float16 quantized CNN calculates probabilities across 19 classes.', output: 'Class probability vector' },
      { stageNumber: '04', name: 'Confidence Gating', action: 'App checks if highest probability is ≥ 0.80 (80%).', output: 'Verified diagnosis or reject' },
      { stageNumber: '05', name: 'Care Tip Binding & History', action: 'System maps disease to care instructions and caches in local JSON.', output: 'Local archive updated' },
      { stageNumber: '06', name: 'EmailJS Dispatch', action: 'Summary payload dispatched to the signed-in user’s email address.', output: 'Delivered diagnostic email' }
    ]
  },
  screenshots: [
    {
      id: 'p1-hero',
      title: 'Real-Time Edge Diagnostic View',
      category: 'Inference',
      image: '/projects/ai-automation/plant-health-scanner/gallery/01_live_camera_detection.jpeg',
      caption: 'Live diagnosis displaying crop leaf image, disease classification, 100% confidence, and cultural care advice.',
      aspectBadge: '430 × 932 // FLUTTER VIEW'
    },
    {
      id: 'p1-scan',
      title: 'Optical Viewfinder & Camera Scanner',
      category: 'Capture',
      image: '/projects/ai-automation/plant-health-scanner/screenshots/01_camera_scan.jpeg',
      caption: 'Viewfinder screen with rectangular framing reticle instructing operator to fill frame with one leaf.',
      aspectBadge: '430 × 932 // CAMERA UI'
    },
    {
      id: 'p1-auth',
      title: 'Firebase Authentication Gateway',
      category: 'Authentication',
      image: '/projects/ai-automation/plant-health-scanner/gallery/02_auth_portal.jpeg',
      caption: 'Secure mobile sign-in portal governing operator credentials and session authorization.',
      aspectBadge: '430 × 932 // FIREBASE AUTH'
    },
    {
      id: 'p1-history',
      title: 'Local Scan History Ledger',
      category: 'Records',
      image: '/projects/ai-automation/plant-health-scanner/gallery/03_offline_history.jpeg',
      caption: 'Chronological offline log tracking up to 100 scans with leaf thumbnails, dates, and swipe actions.',
      aspectBadge: '430 × 932 // JSON ARCHIVE'
    },
    {
      id: 'p1-email',
      title: 'Automated EmailJS Diagnostic Report',
      category: 'Automation',
      image: '/projects/ai-automation/plant-health-scanner/gallery/04_automated_email_alert.jpeg',
      caption: 'Automated email dispatch received on farmer smartphone with full disease diagnosis and care tips.',
      aspectBadge: '430 × 932 // EMAIL ALERT'
    }
  ],
  techStack: [
    {
      category: 'Mobile Application Framework',
      technologies: [
        { name: 'Flutter (Dart)', role: 'Cross-Platform Android & iOS Framework', verified: true },
        { name: 'Camera Plugin', role: 'Live Viewfinder & Shutter Hardware Control', verified: true },
        { name: 'Image Picker', role: 'Photo Gallery Media Ingestion', verified: true }
      ]
    },
    {
      category: 'Edge AI & Deep Learning',
      technologies: [
        { name: 'MobileNetV3-Small', role: 'Lightweight Convolutional Neural Network', verified: true },
        { name: 'TensorFlow / Keras', role: 'Model Training & Neural Architecture Design', verified: true },
        { name: 'TensorFlow Lite (TFLite)', role: 'On-Device Mobile Inference Engine', verified: true },
        { name: 'Float16 Quantization', role: 'Reduced Model Size & Accelerated CPU Inference', verified: true }
      ]
    },
    {
      category: 'Cloud Services & Persistence',
      technologies: [
        { name: 'Firebase Authentication', role: 'User Identity & Credential Governance', verified: true },
        { name: 'EmailJS API', role: 'Serverless Automated Email Report Dispatch', verified: true },
        { name: 'Local JSON Storage', role: 'On-Device FIFO Cache (100 Record Capacity)', verified: true }
      ]
    }
  ],
  apiAndIntegration: {
    description: 'The Plant Health Scanner operates as an edge-native application requiring no external inference API server. External cloud integrations are focused strictly on identity and notification dispatch.',
    endpoints: [
      { method: 'POST', path: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword', desc: 'Firebase Auth endpoint validating email/password credentials.' },
      { method: 'POST', path: 'https://api.emailjs.com/api/v1.0/email/send', desc: 'EmailJS REST endpoint dispatching automated diagnosis and care advice to user inbox.' }
    ],
    integrations: [
      { name: 'TensorFlow Lite C++ Runtime', purpose: 'Edge ML Inference', details: 'Executes MobileNetV3-Small float16 tensors natively on device hardware.' },
      { name: 'EmailJS Webhook', purpose: 'Automated Diagnostic Email', details: 'Bridges mobile diagnosis directly to email service without requiring dedicated backend server.' },
      { name: 'Firebase Auth SDK', purpose: 'User Identity', details: 'Manages user registration, secure session tokens, and sign-out lifecycle.' }
    ]
  },
  security: {
    description: 'Security is enforced through edge data isolation, sandboxed local storage, and secure tokenized authentication.',
    measures: [
      { title: 'Local Device Data Isolation', details: 'Foliage photos and scan history are stored in sandboxed local application storage, preventing unauthorized access by other third-party apps.' },
      { title: 'Offline Inference Privacy', details: 'Leaf images are classified on-device and never uploaded to public cloud vision servers, ensuring zero biometric or location leakage.' },
      { title: 'Firebase TLS Encryption', details: 'All authentication exchanges and token refreshes occur over encrypted HTTPS/TLS channels.' },
      { title: '0.80 Confidence Safety Gate', details: 'Prevents erratic misdiagnoses by discarding predictions with low certainty, protecting farmers from inappropriate chemical treatments.' }
    ]
  },
  testing: {
    documentedQualityAssurance: [
      { area: 'On-Device TFLite Inference Latency', tests: 'Verified float16 MobileNetV3 execution latency averaging <50ms on modern smartphone processors.' },
      { area: '19-Class Disease Accuracy', tests: 'Benchmarked recognition across 4 crops (Tomato, Potato, Corn, Pepper). Verified classification precision on healthy vs. diseased samples.' },
      { area: 'Offline Mode Verification', tests: 'Tested application in airplane mode. Confirmed camera capture, model prediction, and history caching function without internet.' },
      { area: 'Confidence Threshold Gating', tests: 'Submitted ambiguous non-leaf imagery. Confirmed the 0.80 threshold gate successfully rejected low-confidence predictions.' },
      { area: 'Automated EmailJS Dispatch', tests: 'Validated real-time email delivery with correct disease name and care guidelines upon reconnecting to network.' }
    ]
  },
  projectInfo: {
    projectName: 'Plant Health Scanner App',
    industry: 'Agricultural Technology & Smart Farming',
    category: 'AI & Automation / Computer Vision',
    projectType: 'Cross-Platform Mobile Application (Flutter for Android & iOS)',
    mainFunctionalities: [
      'On-Device CNN Foliage Scanning',
      '19-Class Crop & Disease Classification',
      'Offline Inference without Internet',
      '0.80 Minimum Confidence Threshold Rule',
      'Actionable Agronomic Care Tips',
      '100-Record Local Scan History',
      'Automated EmailJS Result Dispatch',
      'Firebase Authentication'
    ],
    verifiedAiTechnologies: ['MobileNetV3-Small CNN', 'TensorFlow / Keras', 'TensorFlow Lite (TFLite Float16)'],
    automationCapabilities: ['Automated Post-Scan Email Dispatch via EmailJS', 'Automated History FIFO Pruning'],
    projectStatus: 'Production Deployed // Mobile Application'
  },
  relatedProjects: [
    {
      title: 'VisionQ AI – Industrial Quality Inspection',
      category: 'Computer Vision & Grad-CAM',
      desc: 'Automated surface defect detection engine with Grad-CAM heatmaps identifying 10+ industrial defect types.',
      slug: 'visionq-inspection',
      image: '/projects/ai-automation/visionq-industrial-inspection/hero/visionq_dashboard_hero.png'
    },
    {
      title: 'SK Software – Smart Energy Management',
      category: 'Software Development',
      desc: 'Enterprise industrial energy management software and IoT telemetry cockpit with Spring Boot & MySQL.',
      slug: 'sk-software',
      image: '/projects/software-development/hero/smart_energy_dashboard_hero.png'
    },
    {
      title: 'DIGITAL TWIN',
      category: '3D WebGL Telemetry',
      desc: 'Interactive 3D factory floor digital twin platform featuring real-time sensor streams and predictive maintenance.',
      slug: 'digital-twin',
      image: '/projects_showcase/digital-twin/desktop_hero.png'
    }
  ]
};

// ============================================================================
// PROJECT 02: VisionQ AI – Industrial Quality Inspection System (ABQIS)
// ============================================================================
export const visionQInspectionData: AIProjectData = {
  meta: {
    slug: 'visionq-inspection',
    aliases: ['ai-project-02', 'quality-inspection', 'abqis'],
    projectNumber: '10',
    title: 'VisionQ AI – Industrial Quality Inspection System (ABQIS)',
    shortTitle: 'VisionQ AI Quality Inspection',
    brandName: 'VisionQ AI',
    category: 'AI & AUTOMATION // INDUSTRIAL COMPUTER VISION & EXPLAINABLE AI',
    aiClassification: 'Deep Learning CNN • Explainable AI (Grad-CAM) • Industrial Automation',
    status: 'PRODUCTION DEPLOYED // WEB & ANDROID PWA',
    pdfDocUrl: '/projects/ai-automation/visionq-industrial-inspection/Quality_Inspection_System_Documentation.pdf',
    heroImage: '/projects/ai-automation/visionq-industrial-inspection/hero/visionq_dashboard_hero.png',
    seoTitle: 'VisionQ AI – Industrial Quality Inspection & Grad-CAM Case Study | DATAMINT AARVIX',
    seoDescription: 'Case study of VisionQ AI (ABQIS): An automated industrial surface defect inspection system powered by Deep CNN, Grad-CAM heatmaps, Python/Flask REST APIs, and SQLite.',
    tagline: 'Deep CNN Surface Defect Classification & Grad-CAM Spatial Heatmap Localization'
  },
  overview: {
    introduction: 'The AI-Based Industrial Quality Inspection System (ABQIS), branded as VisionQ AI, is an automated computer vision quality control platform engineered with Python, Flask, TensorFlow/Keras, OpenCV, and SQLite. Designed for high-speed manufacturing environments, VisionQ AI inspects industrial components (such as machined bearing rings, cast metal parts, and structural surfaces), classifies pass/fail decisions, identifies 10+ specific defect classes, and utilizes Grad-CAM (Gradient-weighted Class Activation Mapping) to highlight the exact spatial coordinates of surface defects.',
    businessProblem: 'Manual quality inspection on manufacturing assembly lines suffers from human inspector fatigue, subjective judgment, slow throughput, and inability to maintain 100% inspection coverage during peak shifts. Undetected micro-cracks, porosity, and scratches slip into customer shipments, leading to severe warranty penalties, product recalls, and brand reputation loss.',
    proposedSolution: 'A dual-platform automated inspection solution (responsive web interface and Android mobile client) powered by a Convolutional Neural Network and Grad-CAM explainability pipeline. VisionQ AI automates single-piece and batch inspections, generates heatmaps pinpointing defect boundaries, triggers automated alert rules for consecutive failures, and exports compliance reports in PDF (ReportLab) and CSV (Pandas).',
    aiObjectives: [
      'Automate visual surface inspection with sub-160ms inference latency per component.',
      'Classify 10+ distinct defect categories including Scratch, Crack, Porosity, Pinhole, Inclusion, Shrinkage, Surface Roughness, Dent, Cold Shut, Flash, and Mixed Defects.',
      'Generate visual Grad-CAM explainability heatmaps showing inspectors exactly where and why a defect was detected.',
      'Support high-throughput batch inspection and real-time live camera capture.',
      'Provide automated alert rules for consecutive production failures and automated ReportLab PDF quality auditing.'
    ],
    targetAudience: [
      'Quality Assurance (QA) & Quality Control (QC) Managers',
      'Industrial Manufacturing Plant Supervisors',
      'Assembly Line Operators & Mechanical Inspectors',
      'Continuous Improvement & Six Sigma Process Engineers'
    ],
    valueProposition: 'Transforms subjective manual inspection into a 154ms deterministic AI process—reducing defect escape rates to near zero, providing transparent visual Grad-CAM evidence for every rejection, and delivering real-time statistical process control.',
    projectScope: 'Delivered as a responsive web application and Android mobile PWA powered by a Python Flask REST API backend, TensorFlow/Keras CNN classifier, OpenCV Grad-CAM visualizer, and SQLite database.'
  },
  architecture: {
    pattern: '4-Tier Industrial AI Vision Architecture (Presentation, Flask Application, Deep Learning & XAI, Relational Data)',
    description: 'VisionQ AI implements a decoupled architecture where browser and mobile clients communicate via RESTful JSON endpoints with a Python Flask service. The backend coordinates image pre-processing, CNN forward passes, and Grad-CAM heatmap overlays via OpenCV before persisting records to SQLite.',
    layers: [
      {
        number: '01',
        name: 'Presentation Tier',
        role: 'Industrial Operator & Inspector Interface',
        tech: 'HTML5, CSS3, JavaScript, Web App Manifest, Live Camera Viewfinder',
        details: 'Renders executive dashboards, single and batch inspection uploaders, interactive defect bounding frames, analytics charts, and responsive mobile screens.'
      },
      {
        number: '02',
        name: 'Application / API Tier',
        role: 'Flask RESTful Service & Business Rule Engine',
        tech: 'Python 3.9+, Flask, Flask-RESTful, Pandas, ReportLab',
        details: 'Handles image ingest, input validation, execution of quality rules, consecutive failure counters, user authentication, and report PDF/CSV compilation.'
      },
      {
        number: '03',
        name: 'AI & Computer Vision Tier',
        role: 'Deep Learning Classification & Grad-CAM Localization',
        tech: 'TensorFlow / Keras CNN (128x128 Input) + OpenCV Grad-CAM Module',
        details: 'Extracts features through convolution, batch normalization, and pooling layers. Generates class activation heatmaps from final conv gradients and overlays them on source parts.'
      },
      {
        number: '04',
        name: 'Data & Storage Tier',
        role: 'Quality Traceability & Model Weights Registry',
        tech: 'SQLite Relational Database & Local File System Storage',
        details: 'Stores inspection logs, defect coordinates, timestamps, user accounts, alert rule thresholds, and serialized model weight files (.h5 / SavedModel).'
      }
    ],
    pipelineSteps: [
      { step: '1', title: 'Image Upload / Camera', desc: 'Operator uploads surface photo or captures part via live camera stream.', tech: 'Browser / OpenCV' },
      { step: '2', title: 'Normalization & Resize', desc: 'Image is resized to 128×128 pixels with pixel values normalized to 0–1.', tech: 'OpenCV / NumPy' },
      { step: '3', title: 'CNN Classification', desc: 'Deep CNN computes defect probability distribution and pass/fail decision.', tech: 'TensorFlow / Keras' },
      { step: '4', title: 'Grad-CAM Localization', desc: 'Gradients from final conv layer produce spatial heatmap marking defect.', tech: 'Grad-CAM + OpenCV' },
      { step: '5', title: 'Traceability & Storage', desc: 'Inspection result, score, and annotated image saved in SQLite database.', tech: 'SQLite / File Storage' },
      { step: '6', title: 'Alerts & Reports', desc: 'Consecutive failure alarms dispatched and PDF/CSV audit logs generated.', tech: 'ReportLab / Pandas' }
    ]
  },
  deliverables: [
    {
      groupName: 'AI Vision & Explainability (XAI)',
      groupTag: 'NEURAL DEFECT DETECTION',
      items: [
        {
          iconName: 'Cpu',
          title: 'Deep Convolutional Neural Network (CNN)',
          description: 'Multi-layer deep CNN trained on industrial surface defect datasets, accepting 128×128 normalized inputs to classify 10+ defect varieties.'
        },
        {
          iconName: 'Flame',
          title: 'Grad-CAM Spatial Defect Heatmaps',
          description: 'Explainable AI module overlaying color-coded heatmaps on defective parts, highlighting exact defect regions for human verification.'
        },
        {
          iconName: 'ShieldCheck',
          title: 'Deterministic Pass / Fail Decision Engine',
          description: 'Automated threshold grading evaluating top-class confidence against quality standards to output green PASS or red FAIL flags.'
        }
      ]
    },
    {
      groupName: 'Industrial Inspection Interfaces',
      groupTag: 'OPERATOR COCKPIT',
      items: [
        {
          iconName: 'LayoutDashboard',
          title: 'Executive Quality Telemetry Dashboard',
          description: 'Real-time overview tracking total inspections (284+), pass rate (30.6%), defect rate (69.4%), and average latency (154 ms).'
        },
        {
          iconName: 'Camera',
          title: 'Single Part & Live Camera Inspection',
          description: 'Real-time camera feed inspection interface displaying live bounding frames and instantaneous classification metrics.'
        },
        {
          iconName: 'Layers',
          title: 'High-Throughput Batch Inspection',
          description: 'Batch upload processor inspecting dozens of parts simultaneously with progressive queue status and aggregate pass/fail tallies.'
        }
      ]
    },
    {
      groupName: 'Process Analytics & Alarm Automation',
      groupTag: 'QUALITY GOVERNANCE',
      items: [
        {
          iconName: 'BarChart3',
          title: 'Statistical Quality Analytics & Pareto Charts',
          description: 'Time-series defect trend analysis visualizing defect distribution (Scratch, Crack, Porosity) and hourly rejection rates.'
        },
        {
          iconName: 'AlertTriangle',
          title: 'Automated Alarm Rules & Notifications',
          description: 'Configurable alarm triggers alerting engineers to consecutive production line failures, low-confidence predictions, and critical defects.'
        },
        {
          iconName: 'FileText',
          title: 'ReportLab PDF & Pandas CSV Studio',
          description: 'Automated quality compliance generator compiling formal inspection certificates, defect counts, and shift audit logs.'
        },
        {
          iconName: 'Sliders',
          title: 'AI Model Registry & Version Management',
          description: 'Model lifecycle portal tracking active weights, training timestamps, accuracy (92%), precision (89%), recall (91%), and F1-score.'
        }
      ]
    }
  ],
  modules: [
    {
      id: 'dashboard',
      name: '01. Executive Quality Telemetry Dashboard',
      purpose: 'Provide plant leadership with instantaneous visibility into production pass/fail rates and latency.',
      description: 'The primary command cockpit displays real-time quality telemetry: Total Inspections (284), Pass Rate (30.6%), Defect Rate (69.4%), and Average AI Inference Latency (154 ms). It features a multi-day quality analytics trend chart, a defect-type distribution pie chart, and a live recent inspections table.',
      inputOutput: 'Input: Aggregated SQLite inspection records → Output: High-level executive KPI cards and dynamic trend charts.',
      aiProcess: 'Real-time statistical aggregation of CNN inference outputs and defect classifications.',
      userInteraction: 'QA supervisors monitor live shift metrics, review defect distribution percentages, and click quick shortcuts to launch inspections or export reports.',
      keyFeatures: [
        'Real-time KPI metrics (284 inspections, 30.6% pass, 69.4% defect, 154ms latency)',
        'Multi-day quality trend graph comparing passed vs. defective parts',
        'Defect type distribution breakdown (Scratch, Crack, Porosity, Dent, etc.)',
        'Recent inspection feed with live pass/fail status pills'
      ],
      image: '/projects/ai-automation/visionq-industrial-inspection/screenshots/01_executive_dashboard.png',
      badge: 'EXECUTIVE OVERVIEW'
    },
    {
      id: 'image-inspection',
      name: '02. Single Part Inspection & Grad-CAM Heatmap',
      purpose: 'Inspect individual components and visually locate surface defects with Explainable AI.',
      description: 'Allows operators to upload a surface image or stream live video from an inspection camera. The CNN evaluates the part in 154ms, outputs a green PASS (Good Quality) or red FAIL decision, and renders a Grad-CAM heatmap over the exact defect coordinates.',
      inputOutput: 'Input: High-resolution component image (e.g. bearing ring) → Output: Pass/fail badge, defect category, confidence score, and Grad-CAM heatmap overlay.',
      aiProcess: '128×128 pixel normalization → CNN feature extraction → Grad-CAM gradient calculation on final conv layer → OpenCV alpha-blended heatmap.',
      userInteraction: 'Inspector positions part under camera, clicks "Inspect Product", and reviews the highlighted defect region on screen.',
      keyFeatures: [
        'Sub-160ms single-image AI inference',
        'Grad-CAM heatmap defect localization overlay',
        'High-contrast PASS / FAIL visual indicator',
        'Parameter telemetry (confidence percentage, defect classification)'
      ],
      image: '/projects/ai-automation/visionq-industrial-inspection/screenshots/02_defect_detection_gradcam.png',
      badge: 'LIVE AI DETECTION'
    },
    {
      id: 'batch-inspection',
      name: '03. High-Throughput Batch Inspection Module',
      purpose: 'Inspect dozens of manufactured parts concurrently to support high-speed production lines.',
      description: 'Enables operators to drag-and-drop multiple product surface images simultaneously. The system executes a queue-based inference pipeline, evaluating each item sequentially, updating progress bars, and generating aggregate batch pass/fail metrics.',
      inputOutput: 'Input: Multi-file image batch → Output: Tabular batch inspection summary with individual pass/fail results.',
      aiProcess: 'Automated batch tensor queue execution with parallel pre-processing and sequential CNN scoring.',
      userInteraction: 'Operator selects a folder of manufactured part images, clicks Start Batch Inspection, and monitors the real-time processing queue.',
      keyFeatures: [
        'Multi-file batch upload support',
        'Automated progress tracking and queue visualization',
        'Batch summary statistics (total, passed, rejected)',
        'One-click export of batch results'
      ],
      image: '/projects/ai-automation/visionq-industrial-inspection/screenshots/03_batch_inspection_queue.png',
      badge: 'BATCH PROCESSING'
    },
    {
      id: 'inspection-history',
      name: '04. Inspection History & Traceability Ledger',
      purpose: 'Maintain an immutable digital record of every manufactured item inspected.',
      description: 'A searchable, filterable traceability log storing every inspection record with part ID, timestamp, component image thumbnail, PASS/FAIL result, confidence score, classified defect type, and severity rating (e.g. Major, Critical).',
      inputOutput: 'Input: Filter criteria (date range, defect type, result) → Output: Filtered inspection table with full defect metadata.',
      aiProcess: 'Relational query execution against SQLite inspection logs.',
      userInteraction: 'Quality auditors filter past records by defect type (e.g. Cold Shut, Dent, Surface Roughness) to investigate vendor batches or shift anomalies.',
      keyFeatures: [
        'Complete traceability ledger with part thumbnail previews',
        'Multi-parameter filtering (date, defect type, confidence, severity)',
        'Detailed inspection metadata (ID, timestamp, confidence %, severity)',
        'Direct links to full-size annotated inspection images'
      ],
      image: '/projects/ai-automation/visionq-industrial-inspection/screenshots/04_inspection_history_records.png',
      badge: 'TRACEABILITY'
    },
    {
      id: 'analytics',
      name: '05. Statistical Quality Analytics Studio',
      purpose: 'Identify systemic manufacturing defects and optimize production line tooling.',
      description: 'Compiles statistical quality control (SQC) metrics over selectable timeframes (7 days, 30 days, custom). It renders defect type distributions, daily defect volume curves, and Pareto charts identifying the root causes of line rejections.',
      inputOutput: 'Input: Historical inspection database → Output: Interactive defect analytics charts and trend curves.',
      aiProcess: 'Statistical data aggregation using Python Pandas.',
      userInteraction: 'Manufacturing engineers analyze defect spikes (e.g. sudden increase in Porosity or Cracks) to recalibrate CNC tooling or casting temperatures.',
      keyFeatures: [
        'Defect volume trend curves over selectable time intervals',
        'Pareto analysis of top-occurring defect categories',
        'Shift-by-shift quality comparison',
        'Actionable insights for root-cause tooling maintenance'
      ],
      image: '/projects/ai-automation/visionq-industrial-inspection/screenshots/05_quality_analytics_trends.png',
      badge: 'STATISTICAL QC'
    },
    {
      id: 'alerts-rules',
      name: '06. Smart Alerts & Notification Rules Engine',
      purpose: 'Protect production lines from runaway defect rates through automated alarms.',
      description: 'A dual-component notification engine that continuously evaluates incoming inspection results against configured quality rules. If a critical defect is identified, if low-confidence predictions occur, or if consecutive failures exceed thresholds (e.g. 3 consecutive fails), the system triggers real-time visual alerts and logs incidents.',
      inputOutput: 'Input: Real-time inspection outcomes → Output: Priority alert cards (Critical, High, Warning) and audio/visual alarms.',
      aiProcess: 'Rule-based event evaluation against sliding window defect buffers.',
      userInteraction: 'Maintenance leads review the alert feed, acknowledge incidents (e.g. "Consecutive failures: 3 consecutive FAIL results – check production line"), and log corrective maintenance actions.',
      keyFeatures: [
        'Consecutive failure detection triggers',
        'Low-confidence warning alerts recommending manual review',
        'Critical defect immediate notification flags',
        'Configurable threshold rule editor'
      ],
      image: '/projects/ai-automation/visionq-industrial-inspection/screenshots/06_smart_alerts_notifications.png',
      badge: 'ALERT ENGINE'
    },
    {
      id: 'ai-model-management',
      name: '07. AI Model Registry & Retraining Management',
      purpose: 'Manage deep learning model versions, track evaluation metrics, and retrain on new defect data.',
      description: 'The model management registry displays active neural network weights, creation dates, training dataset sizes, and formal verification metrics: Accuracy (92.0%), Precision (89.0%), Recall (91.2%), and F1-Score (90.1%). It provides an interface for uploading new defect datasets and initiating retraining runs.',
      inputOutput: 'Input: Labeled defect dataset → Output: Serialized model artifact with validated evaluation metrics.',
      aiProcess: 'Model versioning, transfer learning retraining script, and dynamic weight hot-reloading.',
      userInteraction: 'ML engineers inspect model performance metrics, upload new edge-case images, and trigger model retraining.',
      keyFeatures: [
        'Active model registry with versioning (e.g. `defect_cnn_20261104_1500M`)',
        'Verified evaluation metrics: 92% Accuracy, 89% Precision, 91.2% Recall, 90.1% F1-Score',
        'One-click retraining pipeline on newly acquired defect samples',
        'Model hot-swapping without server downtime'
      ],
      image: '/projects/ai-automation/visionq-industrial-inspection/screenshots/08_ai_model_management.png',
      badge: 'MODEL REGISTRY'
    },
    {
      id: 'reports-documentation',
      name: '08. Automated Reports & Documentation Studio',
      purpose: 'Generate regulatory quality certificates and downloadable audit spreadsheets.',
      description: 'A comprehensive documentation studio that compiles quality inspection telemetry into formal PDF reports generated via Python ReportLab, or structured tabular data exported via Pandas into CSV format.',
      inputOutput: 'Input: Date range selection → Output: Formatted PDF inspection summary and CSV audit dataset.',
      aiProcess: 'Automated document synthesis combining statistical tables with inspection metrics.',
      userInteraction: 'QA managers select a date range, choose PDF or CSV format, and click Generate to download official compliance records.',
      keyFeatures: [
        'Automated PDF report synthesis powered by Python ReportLab',
        'CSV raw inspection dataset export via Pandas',
        'Archived report download history table',
        'Executive summaries of pass/fail ratios and defect categories'
      ],
      image: '/projects/ai-automation/visionq-industrial-inspection/screenshots/09_reports_documentation.png',
      badge: 'PDF / CSV EXPORT'
    },
    {
      id: 'user-access-management',
      name: '09. User Access Control & System Settings',
      purpose: 'Enforce enterprise role permissions and govern system configuration.',
      description: 'Governs operator accounts and permissions across Administrator, Inspector, and Viewer tiers. The system includes seed script demo generators, password reset utilities, and operator profile management.',
      inputOutput: 'Input: User creation form → Output: Role-restricted user record stored in SQLite.',
      aiProcess: 'Role-based access gating across sensitive inspection endpoints and model retraining interfaces.',
      userInteraction: 'Administrators create inspector accounts, assign role privileges, and inspect operator login histories.',
      keyFeatures: [
        'Role-Based Access Control (Administrator, Inspector, Viewer)',
        'Built-in demo user seeding for demonstration testing',
        'Password governance and account activation toggles',
        'User profile and audit trail management'
      ],
      image: '/projects/ai-automation/visionq-industrial-inspection/screenshots/10_rbac_user_management.png',
      badge: 'RBAC SECURITY'
    }
  ],
  workflow: {
    title: 'Automated Defect Inspection & Grad-CAM Pipeline',
    description: 'The complete computer vision journey from part image acquisition to explainable Grad-CAM heatmap generation and automated alerting.',
    stages: [
      { stageNumber: '01', name: 'Image Acquisition', action: 'Part photo acquired via camera stream or single/batch upload.', output: 'Raw optical image' },
      { stageNumber: '02', name: 'OpenCV Pre-processing', action: 'Image resized to 128×128 pixels and normalized to 0–1 range.', output: 'Normalized RGB tensor' },
      { stageNumber: '03', name: 'Deep CNN Inference', action: 'Convolutional neural network extracts features and predicts defect class.', output: 'Defect probabilities & PASS/FAIL' },
      { stageNumber: '04', name: 'Grad-CAM Heatmap Generation', action: 'Gradients of target class flowing into final conv layer mapped to spatial heatmap.', output: 'Spatial defect activation map' },
      { stageNumber: '05', name: 'OpenCV Alpha Blending', action: 'Color-coded heatmap overlaid onto original part image.', output: 'Annotated inspection visual' },
      { stageNumber: '06', name: 'Traceability & Storage', action: 'Inspection result, confidence, and annotated image saved in SQLite.', output: 'Archived inspection record' },
      { stageNumber: '07', name: 'Alert & Report Automation', action: 'Rule engine checks for consecutive failures and updates ReportLab/Pandas logs.', output: 'Alarm notification & PDF report' }
    ]
  },
  screenshots: [
    {
      id: 'p2-dash',
      title: 'VisionQ AI Executive Quality Dashboard',
      category: 'Dashboard',
      image: '/projects/ai-automation/visionq-industrial-inspection/gallery/01_dashboard.png',
      caption: 'Full-screen executive dashboard with 284 inspections, 154ms inference, quality analytics chart, and defect pie chart.',
      aspectBadge: '1920 × 900 // EXECUTIVE HD'
    },
    {
      id: 'p2-gradcam',
      title: 'Grad-CAM Defect Detection & Localization',
      category: 'Inspection',
      image: '/projects/ai-automation/visionq-industrial-inspection/gallery/02_gradcam_heatmaps.png',
      caption: 'Single part inspection interface highlighting PASS/FAIL decision, defect category, and spatial Grad-CAM heatmap.',
      aspectBadge: '1920 × 900 // GRAD-CAM VIEW'
    },
    {
      id: 'p2-batch',
      title: 'High-Throughput Batch Inspection Queue',
      category: 'Batch',
      image: '/projects/ai-automation/visionq-industrial-inspection/gallery/03_batch_processing.png',
      caption: 'Batch upload processor inspecting multi-part queues with live progress status and aggregate counts.',
      aspectBadge: '1920 × 900 // BATCH QUEUE'
    },
    {
      id: 'p2-history',
      title: 'Inspection History & Traceability Ledger',
      category: 'Records',
      image: '/projects/ai-automation/visionq-industrial-inspection/gallery/04_traceability_ledger.png',
      caption: 'Complete traceability log recording part ID, timestamp, thumbnail, pass/fail status, confidence, and defect type.',
      aspectBadge: '1920 × 900 // AUDIT LOG'
    },
    {
      id: 'p2-analytics',
      title: 'Statistical Process Control Analytics',
      category: 'Analytics',
      image: '/projects/ai-automation/visionq-industrial-inspection/gallery/05_statistical_trends.png',
      caption: 'Quality analytics charts tracking multi-day defect trends and Pareto distribution percentages.',
      aspectBadge: '1920 × 900 // ANALYTICS'
    },
    {
      id: 'p2-alerts',
      title: 'Consecutive Failure & Critical Defect Alarms',
      category: 'Alerts',
      image: '/projects/ai-automation/visionq-industrial-inspection/gallery/06_consecutive_failure_alerts.png',
      caption: 'Real-time alert queue notifying engineers of consecutive line failures and low-confidence predictions.',
      aspectBadge: '1920 × 900 // ALARMS'
    },
    {
      id: 'p2-rules',
      title: 'Automated Alert Rules Management',
      category: 'Rules',
      image: '/projects/ai-automation/visionq-industrial-inspection/gallery/07_defect_rules.png',
      caption: 'Configurable quality threshold editor governing consecutive failure counts and alarm priorities.',
      aspectBadge: '1920 × 900 // RULE ENGINE'
    },
    {
      id: 'p2-models',
      title: 'AI Model Registry & Performance Metrics',
      category: 'Model Management',
      image: '/projects/ai-automation/visionq-industrial-inspection/gallery/08_model_weights_registry.png',
      caption: 'Model registry displaying active weights, 92% accuracy, 89% precision, 91.2% recall, and 90.1% F1-score.',
      aspectBadge: '1920 × 900 // MODEL REGISTRY'
    },
    {
      id: 'p2-reports',
      title: 'ReportLab PDF & Pandas CSV Generator',
      category: 'Reporting',
      image: '/projects/ai-automation/visionq-industrial-inspection/gallery/09_pdf_csv_reports.png',
      caption: 'Automated compliance studio generating formal PDF inspection reports and CSV audit tables.',
      aspectBadge: '1920 × 900 // REPORT STUDIO'
    },
    {
      id: 'p2-rbac',
      title: 'User Access Control & Operator Roles',
      category: 'Security',
      image: '/projects/ai-automation/visionq-industrial-inspection/gallery/10_rbac_access.png',
      caption: 'Role-based access management portal managing Admin, Inspector, and Viewer credentials.',
      aspectBadge: '1920 × 900 // RBAC SECURITY'
    }
  ],
  techStack: [
    {
      category: 'AI & Deep Learning Core',
      technologies: [
        { name: 'Convolutional Neural Network (CNN)', role: 'Deep Feature Extractor & Defect Classifier', verified: true },
        { name: 'TensorFlow / Keras', role: 'Neural Architecture Training & Weight Serialization', verified: true },
        { name: 'OpenCV (Computer Vision)', role: 'Image Pre-processing & Matrix Normalization', verified: true },
        { name: 'Grad-CAM (Explainable AI)', role: 'Gradient-Weighted Defect Spatial Heatmaps', verified: true }
      ]
    },
    {
      category: 'Backend & Microservices',
      technologies: [
        { name: 'Python 3.9+', role: 'Core Backend Language', verified: true },
        { name: 'Flask & Flask-RESTful', role: 'REST API Microservice Framework', verified: true },
        { name: 'Pandas', role: 'Statistical Data Aggregation & Quality Analytics', verified: true },
        { name: 'ReportLab', role: 'Automated PDF Quality Certificate Generation', verified: true }
      ]
    },
    {
      category: 'Database & Storage',
      technologies: [
        { name: 'SQLite', role: 'Relational Inspection Ledger & Defect Metadata', verified: true },
        { name: 'Local File System Storage', role: 'Raw & Annotated Image Asset Repository', verified: true }
      ]
    },
    {
      category: 'Frontend & Operator Interface',
      technologies: [
        { name: 'HTML5 & CSS3', role: 'Responsive Industrial UI Layout', verified: true },
        { name: 'JavaScript (ESNext)', role: 'Client-Side Camera & Batch Upload Handling', verified: true },
        { name: 'Web App Manifest', role: 'Progressive Web App (PWA) Mobile Deployment', verified: true }
      ]
    }
  ],
  apiAndIntegration: {
    description: 'VisionQ AI exposes RESTful JSON endpoints over HTTP/HTTPS connecting the browser interface and Android PWA directly to the Flask backend.',
    endpoints: [
      { method: 'POST', path: '/api/auth/login', desc: 'Authenticate operator credentials and initialize session.' },
      { method: 'POST', path: '/api/inspect/single', desc: 'Upload single product image and return defect class, confidence, and Grad-CAM heatmap.' },
      { method: 'POST', path: '/api/inspect/batch', desc: 'Process multi-image batch queue with progressive progress feedback.' },
      { method: 'GET', path: '/api/dashboard/summary', desc: 'Fetch aggregated quality telemetry: total inspections, pass rate, defect rate, and latency.' },
      { method: 'GET', path: '/api/history', desc: 'Query historical inspection records with date, defect type, and severity filters.' },
      { method: 'GET', path: '/api/analytics/trends', desc: 'Retrieve time-series quality trend datasets and Pareto distribution metrics.' },
      { method: 'GET', path: '/api/alerts', desc: 'Fetch active quality alarms triggered by consecutive failures or critical defects.' },
      { method: 'POST', path: '/api/reports/generate', desc: 'Trigger automated ReportLab PDF or Pandas CSV report generation.' },
      { method: 'GET', path: '/api/models', desc: 'Retrieve active model weights metadata, accuracy, precision, recall, and F1-score.' }
    ],
    integrations: [
      { name: 'Industrial Camera SDK / WebRTC', purpose: 'Live Part Ingestion', details: 'Streams camera video directly into browser canvas for single-click inspection.' },
      { name: 'ReportLab PDF Synthesis', purpose: 'Quality Certifications', details: 'Generates print-ready formal defect audit documents.' },
      { name: 'Pandas CSV Pipeline', purpose: 'Traceability Data Exports', details: 'Compiles raw tabular records for external ERP / MES integration.' }
    ]
  },
  security: {
    description: 'Enterprise operational security is maintained through role-based access control, input validation, and secure session management.',
    measures: [
      { title: 'Role-Based Access Control (RBAC)', details: 'Strict division of privileges between Administrators (model management, rule editing) and Inspectors (run inspections, log results).' },
      { title: 'Image Dimension & Type Validation', details: 'Strict backend verification ensuring incoming files are valid optical image formats (JPEG/PNG) within size bounds.' },
      { title: 'Deterministic Audit Traceability', details: 'Every inspection commits an immutable timestamped record with unique ID, guaranteeing zero tampering in ISO audits.' },
      { title: 'Protected API Endpoints', details: 'All inspection and report generation endpoints require authenticated session tokens.' }
    ]
  },
  testing: {
    documentedQualityAssurance: [
      { area: 'AI Model Benchmark Accuracy', tests: 'Verified 92.0% Accuracy, 89.0% Precision, 91.2% Recall, and 90.1% F1-score on industrial surface test datasets.' },
      { area: 'Inference Latency Benchmark', tests: 'Clocked end-to-end single-part inspection averaging 154 ms from image receipt to Grad-CAM heatmap generation.' },
      { area: 'Grad-CAM Spatial Alignment', tests: 'Verified heatmap localization accuracy against manually annotated defect regions (scratches, cracks, porosity).' },
      { area: 'Consecutive Failure Trigger Test', tests: 'Simulated 3 sequential defective parts; confirmed immediate generation of Critical alarm in notification queue.' },
      { area: 'Cross-Device Responsiveness', tests: 'Validated responsive UI across desktop monitors, shop-floor tablets, and Android mobile browser PWA.' }
    ]
  },
  projectInfo: {
    projectName: 'VisionQ AI – Industrial Quality Inspection System (ABQIS)',
    industry: 'Advanced Manufacturing & Industrial Quality Control',
    category: 'AI & Automation / Industrial Computer Vision',
    projectType: 'Dual-Platform System (Web Application + Android Mobile PWA)',
    mainFunctionalities: [
      'Sub-160ms Deep CNN Surface Defect Detection',
      'Explainable AI (Grad-CAM) Defect Heatmaps',
      '10+ Surface Defect Classifications (Crack, Porosity, Scratch, etc.)',
      'High-Throughput Batch Inspection Queue',
      'Executive Telemetry Dashboard (284 inspections, 154ms latency)',
      'Consecutive Failure Automated Alarm Engine',
      'Statistical Quality Analytics & Pareto Charts',
      'ReportLab PDF & Pandas CSV Report Generation',
      'AI Model Registry (92% Accuracy, 90.1% F1)',
      'Role-Based Access Control (RBAC)'
    ],
    verifiedAiTechnologies: ['Deep Convolutional Neural Network (CNN)', 'TensorFlow / Keras', 'OpenCV', 'Grad-CAM (Explainable AI)'],
    automationCapabilities: ['Consecutive Failure Automated Alarms', 'ReportLab Automated PDF Synthesis', 'Batch Queue Processing'],
    projectStatus: 'Production Deployed // Web & Android Application'
  },
  relatedProjects: [
    {
      title: 'Plant Health Scanner App',
      category: 'Computer Vision & Edge AI',
      desc: 'On-device MobileNetV3-Small CNN computer vision scanner diagnosing 19 foliage disease classes with offline TFLite.',
      slug: 'plant-health-scanner',
      image: '/projects/ai-automation/plant-health-scanner/hero/plant_health_hero.jpeg'
    },
    {
      title: 'SK Software – Smart Energy Management',
      category: 'Software Development',
      desc: 'Enterprise industrial energy management software and IoT telemetry cockpit with Spring Boot & MySQL.',
      slug: 'sk-software',
      image: '/projects/software-development/hero/smart_energy_dashboard_hero.png'
    },
    {
      title: 'DIGITAL TWIN',
      category: '3D WebGL Telemetry',
      desc: 'Interactive 3D factory floor digital twin platform featuring real-time sensor streams and predictive maintenance.',
      slug: 'digital-twin',
      image: '/projects_showcase/digital-twin/desktop_hero.png'
    }
  ]
};

