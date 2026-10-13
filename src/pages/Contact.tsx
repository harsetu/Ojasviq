import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  MapPin,
  User,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { siteContent } from '@/data/siteContent';

interface FormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  message?: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) {
      e.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address';
    }
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number';
    } else if (!/^[+]?[\d\s\-()]{8,15}$/.test(form.phone)) {
      e.phone = 'Please enter a valid phone number';
    }
    if (!form.category) e.category = 'Please select who you are';
    if (!form.message.trim()) {
      e.message = 'Please enter a message';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const url = import.meta.env.VITE_APPS_SCRIPT_URL;
      if (url) {
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      }
      // With no-cors, we can't read the response — assume success
      setStatus('success');
      setForm({ name: '', email: '', phone: '', category: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong while submitting your message. Please try again or email us directly.');
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-36 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-gold-500/6 rounded-full blur-[120px]" />
        <div className="container-c relative z-10 text-center">
          <Reveal>
            <p className="eyebrow mb-4">Contact Us</p>
            <h1 className="heading-lg mb-6 text-glow">Let's Start a Conversation</h1>
            <div className="gold-divider mb-8" />
            <p className="body-text mx-auto text-center max-w-2xl">
              Whether you're a student exploring your potential or a professional seeking deeper self-understanding, we'd love to hear from you. Fill out the form below and we'll get back to you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16">
        <div className="container-c max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Info column */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal>
                <div className="card p-7">
                  <h3 className="font-serif text-xl text-white mb-5">Reach Us Directly</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center">
                        <Mail size={20} className="text-gold-400" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-navy-300 mb-1">Email</p>
                        <a href={`mailto:${siteContent.contactEmail}`} className="text-navy-100 hover:text-gold-300 transition-colors text-sm">
                          {siteContent.contactEmail}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center">
                        <MapPin size={20} className="text-gold-400" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-navy-300 mb-1">Location</p>
                        <p className="text-navy-100 text-sm">India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="card p-7 border-gold-500/15">
                  <h3 className="font-serif text-lg text-gold-200 mb-3">Who Is Ojasviq For?</h3>
                  <p className="text-navy-200 text-sm leading-relaxed">
                    Ojasviq is designed for both students and working professionals who want to discover their unique strengths, capabilities, and potential through iris scanning and AI-powered analysis.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <Reveal delay={100}>
                <div className="card p-8 sm:p-10">
                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/15 border border-gold-500/40 flex items-center justify-center mb-6">
                        <CheckCircle2 size={32} className="text-gold-400" />
                      </div>
                      <h3 className="font-serif text-2xl text-white mb-3">Message Sent!</h3>
                      <p className="text-navy-200 text-sm max-w-md mx-auto mb-8">
                        Thank you for reaching out. We've received your message and will get back to you soon.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="btn-outline"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <h3 className="font-serif text-xl text-white mb-2">Send Us a Message</h3>

                      {status === 'error' && (
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                          <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                          <p className="text-red-300 text-sm">{errorMsg}</p>
                        </div>
                      )}

                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-navy-100 mb-2">
                          Name <span className="text-gold-400">*</span>
                        </label>
                        <div className="relative">
                          <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-300" />
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Your full name"
                            className={`w-full pl-12 pr-4 py-3 rounded-xl bg-navy-900/60 border text-white placeholder:text-navy-400 text-sm transition-all focus:outline-none focus:border-gold-500/60 ${
                              errors.name ? 'border-red-500/50' : 'border-navy-600'
                            }`}
                          />
                        </div>
                        {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-navy-100 mb-2">
                          Email <span className="text-gold-400">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-300" />
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="you@example.com"
                            className={`w-full pl-12 pr-4 py-3 rounded-xl bg-navy-900/60 border text-white placeholder:text-navy-400 text-sm transition-all focus:outline-none focus:border-gold-500/60 ${
                              errors.email ? 'border-red-500/50' : 'border-navy-600'
                            }`}
                          />
                        </div>
                        {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-navy-100 mb-2">
                          Phone <span className="text-gold-400">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-300" />
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+91 98765 43210"
                            className={`w-full pl-12 pr-4 py-3 rounded-xl bg-navy-900/60 border text-white placeholder:text-navy-400 text-sm transition-all focus:outline-none focus:border-gold-500/60 ${
                              errors.phone ? 'border-red-500/50' : 'border-navy-600'
                            }`}
                          />
                        </div>
                        {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
                      </div>

                      {/* Category */}
                      <div>
                        <label className="block text-sm font-medium text-navy-100 mb-2">
                          I am a <span className="text-gold-400">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Student', 'Professional'].map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => handleChange('category', cat)}
                              className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                                form.category === cat
                                  ? 'bg-gold-500/15 border-gold-500/60 text-gold-200'
                                  : errors.category
                                  ? 'bg-navy-900/60 border-red-500/50 text-navy-200 hover:border-gold-500/40'
                                  : 'bg-navy-900/60 border-navy-600 text-navy-200 hover:border-gold-500/40'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                        {errors.category && <p className="text-red-400 text-xs mt-1.5">{errors.category}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-navy-100 mb-2">
                          Message <span className="text-gold-400">*</span>
                        </label>
                        <div className="relative">
                          <MessageSquare size={18} className="absolute left-4 top-4 text-navy-300" />
                          <textarea
                            value={form.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            placeholder="Tell us what you'd like to know..."
                            rows={5}
                            className={`w-full pl-12 pr-4 py-3 rounded-xl bg-navy-900/60 border text-white placeholder:text-navy-400 text-sm transition-all focus:outline-none focus:border-gold-500/60 resize-none ${
                              errors.message ? 'border-red-500/50' : 'border-navy-600'
                            }`}
                          />
                        </div>
                        {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-c text-center">
          <Reveal>
            <p className="text-navy-200 mb-4">Prefer email? Reach us directly at</p>
            <a
              href={`mailto:${siteContent.contactEmail}`}
              className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 font-medium transition-colors"
            >
              {siteContent.contactEmail} <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
