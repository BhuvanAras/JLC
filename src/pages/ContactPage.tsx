import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { COMPANY_DATA } from '../data/company';
import { SERVICES_DATA } from '../data/services';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web-development',
    budget: '$5k - $15k',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please describe your project (minimum 10 characters)';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending or send via mailto trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger pre-filled direct mail client backup
      const mailtoUrl = `mailto:${COMPANY_DATA.contact.email}?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Scope:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 700);
  };

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeader
          badgeText="START AN ENGAGEMENT"
          title="Direct Technical Consultation"
          titleHighlight="With Our Engineers."
          description="Speak with our principal software architects in Bengaluru. We analyze your requirements and return an initial architecture roadmap within 24–48 hours."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Headquarters (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 bg-dark-surface1 border-dark-border">
              <h3 className="font-display text-xl font-bold text-light-primary mb-6">
                Bengaluru Engineering Center
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-light-dim uppercase block">Office Address</span>
                    <span className="text-sm text-light-primary font-medium block mt-1">
                      {COMPANY_DATA.contact.address}
                    </span>
                    <span className="text-xs text-light-muted block mt-0.5">
                      Karnataka, India — PIN 560079
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-light-dim uppercase block">Direct Phone</span>
                    <a
                      href={`tel:${COMPANY_DATA.contact.phone}`}
                      className="text-sm font-mono font-bold text-light-primary hover:text-brand-red-light transition-colors block mt-1"
                    >
                      {COMPANY_DATA.contact.displayPhone}
                    </a>
                    <span className="text-xs text-light-muted block mt-0.5">
                      Direct engineering line
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-light-dim uppercase block">Official Email</span>
                    <a
                      href={`mailto:${COMPANY_DATA.contact.email}`}
                      className="text-sm font-mono font-bold text-light-primary hover:text-brand-red-light transition-colors block mt-1"
                    >
                      {COMPANY_DATA.contact.email}
                    </a>
                    <span className="text-xs text-light-muted block mt-0.5">
                      Direct executive response
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-light-dim uppercase block">Operational Hours</span>
                    <span className="text-sm text-light-primary block mt-1">
                      {COMPANY_DATA.contact.supportHours}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="p-6 rounded-2xl bg-dark-surface2 border border-dark-border text-xs text-light-muted space-y-2">
              <span className="font-mono text-brand-red-light uppercase font-bold block">
                NDA & Security Guarantee
              </span>
              <p>
                We execute mutual non-disclosure agreements prior to reviewing proprietary codebases or product specifications.
              </p>
            </div>
          </div>

          {/* Validated Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 bg-dark-surface1 border-brand-red/30">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-light-primary">
                    Inquiry Prepared Successfully!
                  </h3>
                  <p className="text-sm text-light-muted max-w-md mx-auto">
                    Your inquiry details have been drafted. If your mail client did not automatically open, please send directly to{' '}
                    <a href={`mailto:${COMPANY_DATA.contact.email}`} className="text-brand-red underline">
                      {COMPANY_DATA.contact.email}
                    </a>.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-light-primary">
                      Project Specification Form
                    </h3>
                    <p className="text-xs text-light-muted mt-1">
                      Fill out the parameters below to receive our technical feedback and architectural estimation.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-light-secondary mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Lakshman Rao"
                        className={`w-full px-4 py-2.5 rounded-lg bg-dark-surface2 border text-sm text-light-primary focus:outline-none transition-colors ${
                          errors.name ? 'border-brand-red' : 'border-dark-border focus:border-brand-red'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-brand-red mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-light-secondary mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="lakshman@company.com"
                        className={`w-full px-4 py-2.5 rounded-lg bg-dark-surface2 border text-sm text-light-primary focus:outline-none transition-colors ${
                          errors.email ? 'border-brand-red' : 'border-dark-border focus:border-brand-red'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-brand-red mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-light-secondary mb-1.5">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 89709 79689"
                        className={`w-full px-4 py-2.5 rounded-lg bg-dark-surface2 border text-sm text-light-primary focus:outline-none transition-colors ${
                          errors.phone ? 'border-brand-red' : 'border-dark-border focus:border-brand-red'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-brand-red mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-light-secondary mb-1.5">
                        Primary Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-dark-surface2 border border-dark-border text-sm text-light-primary focus:border-brand-red focus:outline-none"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.id} className="bg-dark-surface1 text-white">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Scope / Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-light-secondary mb-1.5">
                      Project Scope & Timeline Details *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your requirements, current architecture, target audience, and expected delivery milestone..."
                      className={`w-full px-4 py-3 rounded-lg bg-dark-surface2 border text-sm text-light-primary focus:outline-none transition-colors ${
                        errors.message ? 'border-brand-red' : 'border-dark-border focus:border-brand-red'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-brand-red mt-1">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    icon={Send}
                    iconPosition="right"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Transmitting Inquiries...' : 'Transmit Project Inquiry'}
                  </Button>

                  <div className="flex items-center justify-between text-[11px] font-mono text-light-dim pt-2">
                    <span>* Direct submission with mailto fallback</span>
                    <span>100% Privacy & Zero Spam</span>
                  </div>
                </form>
              )}
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

