import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Custom-crafted, high-performance responsive web applications engineered for speed, conversion, and global reach.",
    fullDesc: "Our web development practice combines avant-garde front-end architectures with bulletproof back-end infrastructure. We engineer custom corporate websites, complex client portals, and mission-critical web platforms using modern reactive frameworks, sub-second page loads, and enterprise-grade security.",
    iconName: "Globe",
    features: [
      "Custom responsive design engineered across all mobile, tablet, and 4K displays",
      "Sub-second load times optimized for perfect Core Web Vitals and Lighthouse scores",
      "Headless CMS integration and dynamic real-time data pipelines",
      "Enterprise security compliance, SSL/TLS hardening, and DDoS mitigation"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Vite"],
    deliverables: [
      "Production-ready, minified static/dynamic build assets",
      "Complete component documentation and design token library",
      "Automated CI/CD build scripts and deployment manifests",
      "Cross-browser and multi-device compliance audit report"
    ],
    metrics: [
      { label: "Core Web Vitals", value: "98+" },
      { label: "Responsive Parity", value: "100%" },
      { label: "Asset Compression", value: "Up to 80%" }
    ]
  },
  {
    id: "application-development",
    slug: "application-development",
    title: "Application Development",
    shortDesc: "Scalable, resilient cloud-native application architectures tailored to solve complex enterprise business challenges.",
    fullDesc: "We build bespoke software applications designed to handle high transaction throughput, sophisticated internal workflows, and distributed system architectures. From initial system design to continuous deployment, our engineering ensures fault tolerance, clean modular code, and linear scalability.",
    iconName: "Layers",
    features: [
      "Microservices and event-driven back-end architectures",
      "Zero-downtime distributed databases and caching layers (Redis, PostgreSQL)",
      "Role-based access control (RBAC), multi-tenant isolation, and OAuth 2.0 / SSO",
      "Comprehensive RESTful and GraphQL API design with automated documentation"
    ],
    technologies: ["TypeScript", "Node.js", "Go", "Python", "Docker", "Kubernetes", "AWS / GCP"],
    deliverables: [
      "Modular source code repository with comprehensive unit and integration tests",
      "Interactive Swagger / OpenAPI 3.0 API documentation",
      "Containerized deployment recipes (Dockerfiles & Compose/Kube specs)",
      "Architecture diagram and data flow specification"
    ],
    metrics: [
      { label: "Uptime Target", value: "99.99%" },
      { label: "API Latency", value: "< 45ms" },
      { label: "Test Coverage", value: "> 90%" }
    ]
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform iOS & Android mobile applications offering fluid 120fps interactions and enterprise offline reliability.",
    fullDesc: "We craft seamless mobile experiences that engage users and streamline operations. Leveraging React Native and native iOS/Android development paradigms, we deliver mobile apps with fluid gesture-driven UI, real-time push synchronization, biometric authentication, and robust offline-first synchronization.",
    iconName: "Smartphone",
    features: [
      "Single-codebase cross-platform deployment or high-performance native engines",
      "Biometric security (FaceID / TouchID) and end-to-end encrypted local storage",
      "Real-time notifications, background tasks, and location-aware services",
      "Full app store submission support (Apple App Store & Google Play Store)"
    ],
    technologies: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "SQLite", "Firebase"],
    deliverables: [
      "Production-signed iOS (.ipa) and Android (.aab / .apk) binaries",
      "App Store & Google Play metadata, asset packages, and compliance approvals",
      "Over-The-Air (OTA) update pipeline configuration",
      "Crashlytics and real-time performance telemetry setup"
    ],
    metrics: [
      { label: "Target Frame Rate", value: "120 FPS" },
      { label: "Crash-free Sessions", value: "99.8%" },
      { label: "Multi-OS Parity", value: "100%" }
    ]
  },
  {
    id: "seo-optimization",
    slug: "seo-optimization",
    title: "Search Engine Optimization",
    shortDesc: "Data-driven organic search strategy, technical SEO audits, and structured content models that dominate search rankings.",
    fullDesc: "Visibility is the lifeblood of modern enterprise. JL Corp's SEO methodology goes beyond generic keyword packing: we engineer semantic HTML, schema.org JSON-LD microdata, server-side caching, crawl budget optimization, and content velocity strategies that secure top-tier organic search placement.",
    iconName: "TrendingUp",
    features: [
      "Complete technical SEO audits resolving crawl errors, redirect loops, and layout shifts",
      "Structured data implementation (Organization, Service, FAQ, BreadcrumbList)",
      "High-intent keyword architecture and competitive landscape analysis",
      "International SEO, multi-locale hreflang targeting, and local map pack dominance"
    ],
    technologies: ["Google Search Console", "Schema.org JSON-LD", "Ahrefs", "Semrush", "Lighthouse"],
    deliverables: [
      "Comprehensive Technical SEO Health & Audit Scorecard",
      "Custom JSON-LD structured data schema implementation",
      "Targeted keyword roadmap with intent classification",
      "Monthly search visibility and organic acquisition dashboard"
    ],
    metrics: [
      { label: "Lighthouse SEO", value: "100/100" },
      { label: "Indexation Rate", value: "100%" },
      { label: "Organic Authority", value: "Accelerated" }
    ]
  },
  {
    id: "crm-solutions",
    slug: "crm-solutions",
    title: "CRM Development & Automation",
    shortDesc: "Custom CRM architectures and automated workflow pipelines designed to accelerate customer conversion and lifecycle management.",
    fullDesc: "Standard off-the-shelf CRMs often saddle growing companies with bloated feature sets and high recurring fees. JL Corp develops custom, lightweight CRM systems and bespoke integrations that precisely mirror your business processes: automated lead triage, instant SMS/Email triggers, and unified customer profiles.",
    iconName: "Users",
    features: [
      "Custom pipeline dashboards tailored to your exact sales and support workflows",
      "Instant SMS, WhatsApp, and email trigger automation for incoming leads",
      "Centralized customer interaction history, deal stages, and document vaults",
      "Bespoke integrations with third-party billing, ERP, and marketing platforms"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "SendGrid", "Twilio", "Webhooks", "REST APIs"],
    deliverables: [
      "Bespoke CRM web application with responsive dashboard interfaces",
      "Automated lead capture webhook endpoints and notification queues",
      "Customer data migration scripts and verification audit",
      "Staff training documentation and role onboarding guides"
    ],
    metrics: [
      { label: "Lead Response Time", value: "< 2 mins" },
      { label: "Pipeline Transparency", value: "100%" },
      { label: "Workflow Efficiency", value: "+40%" }
    ]
  },
  {
    id: "it-consulting",
    slug: "it-consulting",
    title: "Strategic IT Consulting",
    shortDesc: "Strategic technology advisory, infrastructure roadmapping, and cloud modernization to convert IT into a growth multiplier.",
    fullDesc: "We partner with corporate leadership to align technology investments directly with business objectives. From legacy modernization and cloud migration to DevOps pipeline automation and software vendor auditing, JL Corp acts as your high-level technical advisory arm.",
    iconName: "Compass",
    features: [
      "Enterprise IT architecture evaluations and legacy modernization roadmaps",
      "Cloud migration strategy (AWS, GCP, Azure, or hybrid private cloud)",
      "DevOps, CI/CD pipeline automation, and automated testing implementations",
      "Vendor evaluation, technical due diligence, and cost-optimization audits"
    ],
    technologies: ["AWS", "Google Cloud", "Linux", "Terraform", "CI/CD Pipelines", "Docker"],
    deliverables: [
      "Comprehensive IT Landscape & Technical Debt Assessment",
      "Cloud Architecture & Migration Blueprint with phased milestones",
      "Disaster Recovery & Business Continuity Strategy (RTO/RPO defined)",
      "Vendor audit and infrastructure cost-reduction recommendations"
    ],
    metrics: [
      { label: "Infrastructure ROI", value: "Maximized" },
      { label: "System Redundancy", value: "Multi-Zone" },
      { label: "DevOps Acceleration", value: "3x Faster" }
    ]
  }
];

