import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageLayout } from './components/layout/PageLayout';
import { PageTransition } from './components/common/PageTransition';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const location = useLocation();

  return (
    <PageLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransition>
                <ServicesPage />
              </PageTransition>
            }
          />
          <Route
            path="/services/:id"
            element={
              <PageTransition>
                <ServiceDetailPage />
              </PageTransition>
            }
          />
          <Route
            path="/work"
            element={
              <PageTransition>
                <PortfolioPage />
              </PageTransition>
            }
          />
          <Route path="/portfolio" element={<Navigate to="/work" replace />} />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </PageLayout>
  );
};

export default App;
