import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
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
    <div className="relative w-full">
      {/* Section B: Cinematic Hero with 3D Abstract Sculpture */}
      <HeroSection />

      {/* Section C: Company Introduction (Split Editorial) */}
      <IntroSection />

      {/* Section D: Six Interactive Service Cards */}
      <ServicesSection />

      {/* Section E: Featured Projects with Image Reveals */}
      <ProjectsSection />

      {/* Section F: Partner & Client Tech Marquee */}
      <MarqueeSection />

      {/* Section G: Why Choose JL Corp (4 Differentiators) */}
      <WhyUsSection />

      {/* Section H: 5-Stage Engineering Process Timeline */}
      <ProcessSection />

      {/* Section I: Client Quality Charter & Verified Results */}
      <TrustSection />

      {/* Section J: High-Impact Red Luminescence Contact CTA */}
      <ContactCTASection />
    </div>
  );
};

