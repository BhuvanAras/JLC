import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { COMPANY_DATA } from '../../data/company';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-base/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Identity */}
          <div className="flex items-center">
            <Logo size="md" variant="dark" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-dark-surface1/80 border border-dark-border backdrop-blur-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-brand-red shadow-red-sm'
                      : 'text-light-muted hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Direct Phone Dial */}
            <a
              href={`tel:${COMPANY_DATA.contact.phone}`}
              className="inline-flex items-center gap-2 text-xs font-mono text-light-secondary hover:text-white transition-colors duration-200"
              title="Direct Engineering Line"
            >
              <div className="w-7 h-7 rounded-full bg-dark-surface2 border border-dark-border flex items-center justify-center text-brand-red">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{COMPANY_DATA.contact.displayPhone}</span>
            </a>

            {/* Primary Action Button */}
            <Button
              to="/contact"
              variant="glow"
              size="sm"
              icon={ArrowUpRight}
              iconPosition="right"
              className="font-bold tracking-wide"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              Inquire
            </Button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-surface2 border border-dark-border text-light-primary hover:text-white hover:border-brand-red/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-surface1/98 border-b border-dark-border backdrop-blur-2xl transition-all duration-300 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-brand-red text-white'
                      : 'text-light-secondary hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-dark-border flex flex-col space-y-3">
            <a
              href={`tel:${COMPANY_DATA.contact.phone}`}
              className="flex items-center gap-2.5 text-sm font-mono text-light-secondary"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>{COMPANY_DATA.contact.displayPhone}</span>
            </a>
            <Button
              to="/contact"
              variant="glow"
              size="md"
              className="w-full"
            >
              Start a Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

