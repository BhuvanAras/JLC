import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Logo } from '../common/Logo';
import { COMPANY_DATA } from '../../data/company';
import { SERVICES_DATA } from '../../data/services';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-base border-t border-dark-border overflow-hidden pt-20 pb-12">
      {/* Subtle top ambient red gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-dark-border">
          
          {/* Brand & Corporate Narrative (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="lg" variant="dark" />
            <p className="text-light-muted text-sm leading-relaxed max-w-sm">
              {COMPANY_DATA.heroSubtitle}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-surface2 border border-dark-border text-xs font-mono text-light-secondary">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                <span>Enterprise Verified</span>
              </div>
              <span className="text-xs text-light-dim font-mono">HQ Bengaluru, IN</span>
            </div>
          </div>

          {/* Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-bold tracking-widest text-light-primary uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-light-muted hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light-muted hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light-muted hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-light-muted hover:text-white transition-colors duration-200">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-muted hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Dedicated Service Routes (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold tracking-widest text-light-primary uppercase">
              Engineering Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-1.5 text-light-muted hover:text-brand-red-light transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Verified Contact Coordinates (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold tracking-widest text-light-primary uppercase">
              Bengaluru Headquarters
            </h4>
            <ul className="space-y-3.5 text-sm text-light-muted">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a 
                  href={`tel:${COMPANY_DATA.contact.phone}`} 
                  className="hover:text-white transition-colors font-mono text-xs"
                >
                  {COMPANY_DATA.contact.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a 
                  href={`mailto:${COMPANY_DATA.contact.email}`} 
                  className="hover:text-white transition-colors font-mono text-xs"
                >
                  {COMPANY_DATA.contact.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-light-dim block">
                {COMPANY_DATA.contact.supportHours}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-light-dim font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {COMPANY_DATA.legalName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Static Vite Build (cPanel Ready)</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-light-secondary hover:text-brand-red transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

