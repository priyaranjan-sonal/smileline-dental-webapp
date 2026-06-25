import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Locations', path: '/locations' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-500 relative z-20 ${scrolled
          ? 'bg-white/10 backdrop-blur-2xl shadow-sm py-3 border-b border-primary-800'
          : 'bg-white/10 backdrop-blur-2xl py-5 border-b border-primary-800/30'
          }`}
        style={{ WebkitBackdropFilter: 'blur(32px)', backdropFilter: 'blur(32px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                Smile<span className="text-primary-800">Line</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 lg:gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all px-2 py-2 lg:px-4 rounded-full hover:bg-white/10 ${location.pathname === link.path
                    ? 'text-primary-800 bg-white/20 shadow-sm'
                    : 'text-slate-600 hover:text-primary-800'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary-800 text-white px-3 py-2 lg:px-5 lg:py-3 rounded-full text-xs lg:text-sm font-semibold shadow-lg shadow-primary-800/20 hover:bg-primary-900 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Calendar size={16} className="shrink-0" />
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-primary-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-2xl border-b border-slate-200/50 shadow-2xl overflow-hidden z-10"
            style={{ WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' }}
          >
            <div className="px-4 py-6 flex flex-col">
              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block text-base font-medium transition-all px-4 py-3.5 rounded-2xl ${location.pathname === link.path
                      ? 'bg-primary-800/10 text-primary-800 font-semibold'
                      : 'text-slate-600 hover:text-primary-800 hover:bg-slate-50/50'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="pt-6">
                <Link
                  to="/contact"
                  className="w-full bg-primary-800 text-white px-6 py-3 rounded-xl text-center font-semibold shadow-lg shadow-primary-800/20 block"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
