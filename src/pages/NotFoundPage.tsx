import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-mono text-brand-red mb-6">
        <span>ERROR 404 // RESOURCE NOT LOCATED</span>
      </div>

      <h1 className="font-display text-6xl sm:text-8xl font-black text-light-primary tracking-tight">
        404
      </h1>

      <p className="mt-4 text-base sm:text-lg text-light-muted max-w-md">
        The requested architectural route does not exist or has been relocated to another endpoint.
      </p>

      <div className="mt-8 flex gap-4">
        <Button to="/" variant="glow" size="md" icon={Home}>
          Return to Flagship
        </Button>
        <Button to="/services" variant="outline" size="md">
          Explore Services
        </Button>
      </div>
    </div>
  );
};

