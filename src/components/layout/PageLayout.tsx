import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-graphite antialiased selection:bg-brand-red selection:text-white">
      {/* Floating Liquid-Glass Navbar */}
      <Navbar />

      {/* Main Viewport Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Complete Branded Footer */}
      <Footer />
    </div>
  );
};
