import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { Logo } from '../common/Logo';
import { COMPANY_DATA } from '../../data/company';
import { SERVICES_DATA } from '../../data/services';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-graphite text-ivory border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Top signature red hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Corporate Summary (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="lg" variant="dark" />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              {COMPANY_DATA.heroSubtitle}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-red-light" />
                <span>Enterprise Verified Firm</span>
              </div>
              <span className="text-xs text-white/50 font-mono">HQ Bengaluru, IN</span>
            </div>
          </div>

          {/* Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-bold tracking-widest text-white uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-white/70 hover:text-white transition-colors duration-200">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Dedicated Service Routes (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold tracking-widest text-white uppercase">
              Core Practices
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-1.5 text-white/70 hover:text-brand-red-light transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-red-light" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Verified Coordinates (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold tracking-widest text-white uppercase">
              Bengaluru Headquarters
            </h4>
            <ul className="space-y-3.5 text-sm text-white/70">
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
              <span className="text-[11px] font-mono text-white/50 block">
                {COMPANY_DATA.contact.supportHours}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {COMPANY_DATA.legalName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Static Vite Build (cPanel/WHM Ready)</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-brand-red-light transition-colors"
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
