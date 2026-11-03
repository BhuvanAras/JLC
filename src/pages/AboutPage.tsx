import React from 'react';
import { Shield, Target, Compass, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { COMPANY_DATA } from '../data/company';
import { PROCESS_DATA } from '../data/process';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <SectionHeader
          badgeText="ABOUT JL CORP"
          title="Architecting Future-Proof Systems for"
          titleHighlight="Global Enterprises."
          description="Headquartered in Bengaluru, JL Corp is a specialized software engineering firm delivering custom web applications, mobile ecosystems, enterprise CRM, and strategic IT advisory."
        />
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 sm:p-10 bg-dark-surface1 border-dark-border">
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-light-primary mb-4">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-light-muted leading-relaxed">
              {COMPANY_DATA.vision}
            </p>
          </Card>

          <Card className="p-8 sm:p-10 bg-dark-surface1 border-dark-border">
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-light-primary mb-4">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-light-muted leading-relaxed">
              {COMPANY_DATA.mission}
            </p>
          </Card>
        </div>
      </div>

      {/* Verified Process Lifecycle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeader
          badgeText="METHODOLOGY"
          title="The Standard 5-Stage"
          titleHighlight="Lifecycle."
          description="How we maintain zero technical debt and 100% on-time milestone delivery."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_DATA.map((p) => (
            <Card key={p.step} className="p-6 bg-dark-surface1 border-dark-border">
              <span className="font-mono text-xs font-bold text-brand-red">{p.step}</span>
              <h4 className="font-display text-base font-bold text-light-primary mt-2 mb-2">{p.title}</h4>
              <p className="text-xs text-light-muted leading-relaxed">{p.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Physical Coordinates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 sm:p-12 bg-dark-surface2 border-brand-red/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-brand-red uppercase tracking-wider">Physical Headquarters</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-light-primary">
                Bengaluru, Karnataka, India
              </h3>
              <p className="text-sm text-light-muted">
                {COMPANY_DATA.contact.address}
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-light-secondary pt-2">
                <span>Phone: {COMPANY_DATA.contact.displayPhone}</span>
                <span>•</span>
                <span>Email: {COMPANY_DATA.contact.email}</span>
              </div>
            </div>

            <Button to="/contact" variant="glow" size="lg">
              Contact Engineering HQ
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

