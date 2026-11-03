import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { COMPANY_DATA } from '../../data/company';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Floating Brand Capsule */}
        <div className="pointer-events-auto liquid-glass-nav px-4 py-2.5 rounded-2xl flex items-center shadow-liquid-md hover:shadow-liquid-lg transition-shadow duration-300">
          <Logo size="md" variant="light" />
        </div>

        {/* Center: Desktop Navigation Pill */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 p-1.5 rounded-full liquid-glass-nav shadow-liquid-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-5 py-2 text-xs font-semibold tracking-wide rounded-full transition-all duration-300 select-none ${
                  isActive
                    ? 'text-white bg-brand-red shadow-liquid-red'
                    : 'text-graphite/80 hover:text-graphite hover:bg-black/[0.04]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Quick Call & Magnetic CTA Capsule */}
        <div className="pointer-events-auto hidden lg:flex items-center gap-3">
          {/* Quick Direct Line */}
          <a
            href={`tel:${COMPANY_DATA.contact.phone}`}
            className="liquid-glass-nav px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs font-mono font-medium text-graphite hover:text-brand-red shadow-liquid-sm hover:shadow-liquid-md transition-all group"
            title="Direct Engineering Access"
          >
            <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform">
              <Phone className="w-3 h-3" />
            </div>
            <span className="tracking-tight">{COMPANY_DATA.contact.displayPhone}</span>
          </a>

          {/* Primary Action Button */}
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white text-xs font-bold tracking-wide shadow-liquid-red hover:shadow-soft-glow transition-all duration-300 active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="pointer-events-auto flex md:hidden items-center gap-2">
          <Link
            to="/contact"
            className="px-3.5 py-2 rounded-xl bg-brand-red text-white text-xs font-bold shadow-liquid-red"
          >
            Inquire
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="liquid-glass-nav p-2.5 rounded-xl text-graphite hover:text-brand-red shadow-liquid-sm transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu (Liquid Glass) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-3 max-w-lg mx-auto liquid-glass-nav p-6 rounded-3xl shadow-2xl space-y-4 border border-white/80 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-2xl text-sm font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-brand-red text-white shadow-liquid-red'
                      : 'text-graphite hover:bg-black/[0.04]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-softgrey flex flex-col space-y-3">
            <a
              href={`tel:${COMPANY_DATA.contact.phone}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-black/[0.03] text-xs font-mono font-bold text-graphite"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>{COMPANY_DATA.contact.displayPhone}</span>
            </a>

            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-brand-red text-white font-bold text-sm shadow-liquid-red"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
