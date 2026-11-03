import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: 'blur(8px)', scale: 0.99 }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, y: -16, filter: 'blur(8px)', scale: 0.99 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] // Luxury cubic bezier
      }}
      className="relative w-full"
    >
      {/* Top Liquid Glass Shutter Shimmer on Page Entry */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0.9 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red-deep via-brand-red to-brand-red-light z-[100] pointer-events-none shadow-soft-glow"
      />

      {children}
    </motion.div>
  );
};

