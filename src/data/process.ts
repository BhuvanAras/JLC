import { ProcessStage } from '../types';

export const PROCESS_DATA: ProcessStage[] = [
  {
    step: "01",
    title: "Strategy & Discovery",
    tagline: "Precision Planning",
    description: "We interrogate business requirements, user journeys, data security mandates, and architectural constraints to formulate an airtight roadmap.",
    activities: [
      "Technical stakeholder workshops & scope baseline",
      "System architecture & tech stack selection",
      "Security compliance & SLA definition",
      "Risk mitigation & timeline milestones"
    ],
    duration: "Phase 01"
  },
  {
    step: "02",
    title: "Architecture & Schema",
    tagline: "Foundation Engineering",
    description: "Designing resilient data models, microservice boundaries, API contracts, and infrastructure topologies built for linear scalability.",
    activities: [
      "Database schema modeling (Relational & Key-Value)",
      "RESTful & GraphQL API contract blueprints",
      "Cloud infrastructure topology & VPC security",
      "DevOps pipeline & branch strategy design"
    ],
    duration: "Phase 02"
  },
  {
    step: "03",
    title: "UI/UX & Prototyping",
    tagline: "Cinematic Interaction",
    description: "Translating architectural workflows into intuitive, high-fidelity visual interfaces and interactive prototypes that eliminate user friction.",
    activities: [
      "Design tokens & dark-mode typography hierarchy",
      "Component library & responsive layout specs",
      "Micro-interaction & state choreography",
      "Accessibility & touch ergonomics review"
    ],
    duration: "Phase 03"
  },
  {
    step: "04",
    title: "Development & Testing",
    tagline: "Clean-Code Execution",
    description: "Sprint-driven implementation with clean modular TypeScript, automated continuous testing, peer code audits, and strict code hygiene.",
    activities: [
      "Clean modular frontend & backend implementation",
      "Automated unit, integration, and E2E testing",
      "Continuous integration (CI) build validation",
      "Performance benchmarking & Core Web Vitals checks"
    ],
    duration: "Phase 04"
  },
  {
    step: "05",
    title: "Delivery & Evolution",
    tagline: "Seamless Deployment",
    description: "Zero-downtime production cutover, telemetry monitoring, documentation handover, and ongoing architectural evolution.",
    activities: [
      "Staging sign-off & zero-downtime production deployment",
      "SSL/TLS security hardening & DNS optimization",
      "Real-time telemetry, error monitoring, & logging",
      "Code handover, warranty support, & SLA backing"
    ],
    duration: "Phase 05"
  }
];

