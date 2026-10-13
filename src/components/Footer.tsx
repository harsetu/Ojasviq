import { Link } from 'react-router-dom';
import { Mail, MapPin, Shield, FileText } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-gold-500/15 pt-16 pb-8">
      <div className="container-c">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-5">
              <Logo size={52} className="w-[166px] h-[52px]" />
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed max-w-xs">
              AI-powered personality and human potential assessment using iris scanning and AI technology to help you discover your unique strengths.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-lg text-gold-300 mb-5">Explore</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/founder', label: 'Founder' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/privacy-policy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms & Conditions' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-navy-200 hover:text-gold-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-gold-300 mb-5">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-navy-200 text-sm">
                <Mail size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <a href="mailto:contact@ojasviq.com" className="hover:text-gold-300 transition-colors">
                  contact@ojasviq.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-navy-200 text-sm">
                <MapPin size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <span>India</span>
              </li>
              <li className="flex items-start gap-3 text-navy-200 text-sm">
                <Shield size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <Link to="/privacy-policy" className="hover:text-gold-300 transition-colors">
                  Your privacy, protected
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mb-8" />

        {/* Disclaimer */}
        <p className="text-navy-300 text-xs leading-relaxed text-center max-w-4xl mx-auto mb-6">
          Disclaimer: Ojasviq provides insights for self-awareness, personal development, and guidance purposes only.
          Our assessments are not a medical, psychological, or clinical diagnosis, and we do not guarantee specific outcomes.
          For professional advice regarding health, education, or career decisions, please consult a qualified professional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-navy-700/50">
          <p className="text-navy-300 text-xs">
            © {year} Ojasviq. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-navy-300">
            <Link to="/privacy-policy" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
              <Shield size={13} /> Privacy
            </Link>
            <Link to="/terms" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
              <FileText size={13} /> Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
