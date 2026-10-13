import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/founder', label: 'Founder' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-gold-500/15 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-c flex items-center justify-between h-20">
        <Link to="/" className="flex items-center group">
          <Logo size={48} className="w-[150px] h-12 transition-transform duration-300 group-hover:scale-[1.03]" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `link-nav relative ${isActive ? 'text-gold-300' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-px bg-gold-400 transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="hidden lg:inline-flex btn-primary text-xs px-6 py-2.5">
          Get Started
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gold-300 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out bg-navy-900/98 backdrop-blur-md ${
          open ? 'max-h-screen border-t border-gold-500/15' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                  isActive ? 'text-gold-300 bg-gold-500/10' : 'text-navy-100 hover:text-gold-300 hover:bg-navy-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary mt-4 self-start">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
