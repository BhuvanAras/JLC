import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TechEcosystemSection } from '../components/sections/TechEcosystemSection';
import { IntroSection } from '../components/sections/IntroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { MarqueeSection } from '../components/sections/MarqueeSection';
import { WhyUsSection } from '../components/sections/WhyUsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { TrustSection } from '../components/sections/TrustSection';
import { ContactCTASection } from '../components/sections/ContactCTASection';

export const HomePage: React.FC = () => {
  return (
    <div className="relative w-full bg-ivory">
      {/* Section 02: Cinematic Luxury Hero with 3D Liquid-Glass Sculpture */}
      <HeroSection />

      {/* Section 03 & 04: Mouse-Velocity Interactive Technology Ecosystem */}
      <TechEcosystemSection />

      {/* Section 05: The Contrast Chamber — Company Introduction */}
      <IntroSection />

      {/* Section 06: Six Premium Interactive Service Cards */}
      <ServicesSection />

      {/* Section 07: Featured Work & Systems */}
      <ProjectsSection />

      {/* Section 08: Technology & Client Marquee */}
      <MarqueeSection />

      {/* Section 09: Why Choose JL Corp (4 Core Differentiators) */}
      <WhyUsSection />

      {/* Section 10: 5-Stage Engineering Process Roadmap */}
      <ProcessSection />

      {/* Section 11: Client Quality Charter & NDA Commitment */}
      <TrustSection />

      {/* Section 12: High-Impact Red Luminescence Contact CTA */}
      <ContactCTASection />
    </div>
  );
};
