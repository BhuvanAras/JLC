import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Zap, Layers, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface EstimatorState {
  architecture: string;
  scale: string;
  timeline: string;
}

interface ProjectEstimatorProps {
  onApplyEstimate?: (summary: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimate }) => {
  const [estimate, setEstimate] = useState<EstimatorState>({
    architecture: 'web-platform',
    scale: 'growth',
    timeline: 'standard'
  });

  const architectures = [
    { id: 'web-platform', label: 'Web Platform', sub: 'React, Next.js, Node.js' },
    { id: 'mobile-app', label: 'Mobile Apps', sub: 'iOS & Android Native / Cross' },
    { id: 'crm-automation', label: 'CRM & Automation', sub: 'Custom Pipelines & APIs' },
    { id: 'cloud-devops', label: 'Cloud Architecture', sub: 'AWS, Docker, K8s' },
  ];

  const scales = [
    { id: 'mvp', label: 'MVP Baseline', sub: 'Rapid to market' },
    { id: 'growth', label: 'Growth Scale', sub: '10k–50k MAU target' },
    { id: 'enterprise', label: 'Enterprise Concurrency', sub: 'High throughput & HA' },
  ];

  const timelines = [
    { id: 'express', label: 'Sprint Express', duration: '4–6 Weeks' },
    { id: 'standard', label: 'Standard Lifecycle', duration: '8–12 Weeks' },
    { id: 'continuous', label: 'Enterprise SLA Pod', duration: 'Quarterly Dedicated' },
  ];

  // Calculated estimates
  const getCalculation = () => {
    let team = '1 Architect + 2 Full-Stack Engineers';
    let deliverables = 'Production code, automated CI/CD, 100% IP transfer';
    let duration = '8–12 Weeks';

    if (estimate.scale === 'enterprise') {
      team = '1 Principal Architect + 3 Senior Engineers + 1 DevOps Lead + 1 QA';
      deliverables = 'Multi-region cloud infrastructure, zero-trust APIs, full load test audit';
    } else if (estimate.scale === 'mvp') {
      team = '1 Senior Full-Stack Engineer + 1 UI/UX Specialist';
      deliverables = 'Functional core MVP, clean architecture, staging deployment';
    }

    if (estimate.timeline === 'express') {
      duration = '4–6 Weeks (Accelerated Milestone Sprint)';
    } else if (estimate.timeline === 'continuous') {
      duration = 'Ongoing Dedicated Engineering Pod';
    }

    return { team, deliverables, duration };
  };

  const currentCalc = getCalculation();

  const handleApply = () => {
    const selectedArch = architectures.find((a) => a.id === estimate.architecture)?.label;
    const selectedScale = scales.find((s) => s.id === estimate.scale)?.label;
    const selectedTimeline = timelines.find((t) => t.id === estimate.timeline)?.label;

    const summary = `Selected Scope: ${selectedArch} | Scale: ${selectedScale} | Timeline: ${selectedTimeline} (${currentCalc.duration})\nRecommended Pod: ${currentCalc.team}\nTarget Deliverables: ${currentCalc.deliverables}`;
    
    if (onApplyEstimate) {
      onApplyEstimate(summary);
    }
  };

  return (
    <div className="liquid-glass-card p-8 sm:p-10 rounded-3xl border border-white/95 shadow-liquid-md">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shadow-sm">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-graphite">
            Interactive Project Scope & Timeline Estimator
          </h3>
          <span className="text-xs text-body-muted font-sans">
            Configure your technical parameters to calculate pod size, duration, and architecture deliverables.
          </span>
        </div>
      </div>

      <div className="space-y-6 pt-2">
        {/* Step 1: Architecture Choice */}
        <div>
          <label className="block text-xs font-mono font-bold text-graphite uppercase tracking-wider mb-2.5">
            1. Select Primary Architecture
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {architectures.map((arch) => (
              <button
                key={arch.id}
                type="button"
                onClick={() => setEstimate({ ...estimate, architecture: arch.id })}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  estimate.architecture === arch.id
                    ? 'bg-brand-red text-white border-brand-red shadow-liquid-red'
                    : 'liquid-glass-chip border-softgrey text-graphite hover:bg-white'
                }`}
              >
                <span className="font-display text-xs font-bold block">{arch.label}</span>
                <span className={`text-[10px] block mt-1 ${estimate.architecture === arch.id ? 'text-white/80' : 'text-body-muted'}`}>
                  {arch.sub}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Scale Choice */}
        <div>
          <label className="block text-xs font-mono font-bold text-graphite uppercase tracking-wider mb-2.5">
            2. Expected Concurrency & Scale
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {scales.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setEstimate({ ...estimate, scale: s.id })}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  estimate.scale === s.id
                    ? 'bg-brand-red text-white border-brand-red shadow-liquid-red'
                    : 'liquid-glass-chip border-softgrey text-graphite hover:bg-white'
                }`}
              >
                <span className="font-display text-xs font-bold block">{s.label}</span>
                <span className={`text-[10px] block mt-1 ${estimate.scale === s.id ? 'text-white/80' : 'text-body-muted'}`}>
                  {s.sub}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Timeline Choice */}
        <div>
          <label className="block text-xs font-mono font-bold text-graphite uppercase tracking-wider mb-2.5">
            3. Target Delivery Window
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {timelines.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setEstimate({ ...estimate, timeline: t.id })}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  estimate.timeline === t.id
                    ? 'bg-brand-red text-white border-brand-red shadow-liquid-red'
                    : 'liquid-glass-chip border-softgrey text-graphite hover:bg-white'
                }`}
              >
                <span className="font-display text-xs font-bold block">{t.label}</span>
                <span className={`text-[10px] block mt-1 font-mono ${estimate.timeline === t.id ? 'text-white/80' : 'text-brand-red font-bold'}`}>
                  {t.duration}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Calculated Architectural Brief Box */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-softgrey space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-softgrey">
            <span className="text-xs font-mono font-bold text-graphite uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              <span>Calculated Pod Specification</span>
            </span>
            <span className="text-xs font-mono font-bold text-brand-red">
              {currentCalc.duration}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-body-muted block font-mono">Recommended Engineering Pod:</span>
              <span className="font-semibold text-graphite block mt-0.5">{currentCalc.team}</span>
            </div>
            <div>
              <span className="text-body-muted block font-mono">Deliverables Baseline:</span>
              <span className="font-semibold text-graphite block mt-0.5">{currentCalc.deliverables}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleApply}
          className="w-full py-3.5 rounded-2xl bg-graphite hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
        >
          <span>Apply Specification to Consultation Form Below</span>
          <ArrowRight className="w-4 h-4 text-brand-red" />
        </button>
      </div>
    </div>
  );
};
