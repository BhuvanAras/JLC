import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { COMPANY_DATA } from '../data/company';
import { SERVICES_DATA } from '../data/services';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: 'web-development',
      message: ''
    }
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger pre-filled direct mail client
      const mailtoUrl = `mailto:${COMPANY_DATA.contact.email}?subject=Project Consultation Inquiry from ${encodeURIComponent(data.fullName)}&body=${encodeURIComponent(
        `Client Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nService Interest: ${data.service}\n\nProject Scope & Objectives:\n${data.message}`
      )}`;
      window.location.href = mailtoUrl;
      reset();
    }, 600);
  };

  return (
    <div className="pt-32 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeader
          badgeText="START AN ENGAGEMENT"
          title="Direct Technical Consultation"
          titleHighlight="With Our Engineers."
          description="Speak directly with our principal software architects in Bengaluru. We analyze your requirements and return an initial architecture roadmap within 24–48 hours."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Headquarters (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="liquid-glass-card p-8 sm:p-9 rounded-3xl border border-white/90 shadow-liquid-sm">
              <h3 className="font-display text-xl font-bold text-graphite mb-6">
                Bengaluru Engineering Center
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-body-muted uppercase tracking-wider block font-bold">Office Address</span>
                    <span className="text-sm text-graphite font-semibold block mt-1">
                      {COMPANY_DATA.contact.address}
                    </span>
                    <span className="text-xs text-body-muted block mt-0.5">
                      Karnataka, India — PIN 560079
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-body-muted uppercase tracking-wider block font-bold">Direct Phone</span>
                    <a
                      href={`tel:${COMPANY_DATA.contact.phone}`}
                      className="text-sm font-mono font-bold text-graphite hover:text-brand-red transition-colors block mt-1"
                    >
                      {COMPANY_DATA.contact.displayPhone}
                    </a>
                    <span className="text-xs text-body-muted block mt-0.5">
                      Direct engineering access
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-body-muted uppercase tracking-wider block font-bold">Executive Email</span>
                    <a
                      href={`mailto:${COMPANY_DATA.contact.email}`}
                      className="text-sm font-mono font-bold text-graphite hover:text-brand-red transition-colors block mt-1"
                    >
                      {COMPANY_DATA.contact.email}
                    </a>
                    <span className="text-xs text-body-muted block mt-0.5">
                      Direct executive review
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-body-muted uppercase tracking-wider block font-bold">Engineering Hours</span>
                    <span className="text-sm text-graphite font-medium block mt-1">
                      {COMPANY_DATA.contact.supportHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl liquid-glass-chip border border-softgrey text-xs text-body-text space-y-2">
              <span className="font-mono text-brand-red uppercase font-bold block">
                NDA & Code Confidentiality
              </span>
              <p>
                We execute mutual non-disclosure agreements prior to reviewing proprietary codebases, database schemas, or product briefs.
              </p>
            </div>
          </div>

          {/* Validated Contact Form with React Hook Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="liquid-glass-card p-8 sm:p-12 rounded-3xl border border-white/90 shadow-liquid-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-graphite">
                    Consultation Drafted Successfully!
                  </h3>
                  <p className="text-sm text-body-text max-w-md mx-auto">
                    Your project details have been formatted. If your default mail client did not automatically launch, please send directly to{' '}
                    <a href={`mailto:${COMPANY_DATA.contact.email}`} className="text-brand-red font-bold underline">
                      {COMPANY_DATA.contact.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-graphite text-white text-xs font-mono font-bold uppercase tracking-wider"
                  >
                    Draft Another Consultation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-graphite">
                      Project Specification Form
                    </h3>
                    <p className="text-xs text-body-muted mt-1">
                      Provide your parameters below to receive our technical feedback and architectural estimation.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase font-bold text-graphite mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('fullName', { required: 'Full name is required' })}
                        placeholder="e.g. Lakshman Rao"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-graphite focus:outline-none transition-colors shadow-sm ${
                          errors.fullName ? 'border-brand-red' : 'border-softgrey focus:border-brand-red'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-brand-red font-mono mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-bold text-graphite mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'Work email is required',
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Please provide a valid corporate email'
                          }
                        })}
                        placeholder="lakshman@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-graphite focus:outline-none transition-colors shadow-sm ${
                          errors.email ? 'border-brand-red' : 'border-softgrey focus:border-brand-red'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-brand-red font-mono mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase font-bold text-graphite mb-1.5">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone number is required' })}
                        placeholder="+91 89709 79689"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-graphite focus:outline-none transition-colors shadow-sm ${
                          errors.phone ? 'border-brand-red' : 'border-softgrey focus:border-brand-red'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-brand-red font-mono mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-bold text-graphite mb-1.5">
                        Primary Practice
                      </label>
                      <select
                        {...register('service')}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-softgrey text-sm text-graphite focus:border-brand-red focus:outline-none shadow-sm cursor-pointer"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-graphite mb-1.5">
                      Project Scope & Expected Milestones *
                    </label>
                    <textarea
                      rows={4}
                      {...register('message', {
                        required: 'Please outline your project requirements',
                        minLength: {
                          value: 10,
                          message: 'Please provide at least 10 characters of project context'
                        }
                      })}
                      placeholder="Outline your requirements, current architecture, target audience, and expected delivery milestone..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-graphite focus:outline-none transition-colors shadow-sm ${
                        errors.message ? 'border-brand-red' : 'border-softgrey focus:border-brand-red'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-brand-red font-mono mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white font-bold text-sm tracking-wide shadow-liquid-red hover:shadow-soft-glow transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting Inquiries...' : 'Transmit Project Inquiry'}</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] font-mono text-body-muted pt-1">
                    <span>* Form verified with React Hook Form</span>
                    <span>100% Privacy & Zero Spam</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
