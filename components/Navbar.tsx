
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setLangOpen(false);
  }, [location]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.house, path: '/house' },
    { name: t.nav.experience, path: '/experience' },
    { name: t.nav.location, path: '/location' },
    { name: t.nav.reviews, path: '/reviews' },
  ];

  const isNavSolid = scrolled || isOpen || !isHome;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isNavSolid
          ? 'py-3 glass border-b border-gray-100/50 shadow-sm'
          : 'py-6'
        }`}
    >
      {/* Gradient overlay for transparent state */}
      {isHome && !scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none h-32" />
      )}

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-10">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-serif text-sm transition-all duration-500 ${isNavSolid
              ? 'border-ocean text-ocean group-hover:bg-ocean group-hover:text-white'
              : 'border-white/80 text-white group-hover:border-white'
            }`}>
            C
          </div>
          <h1 className={`font-serif text-lg md:text-xl tracking-tight transition-all duration-500 ${isNavSolid ? 'text-ocean-900' : 'text-white text-shadow-subtle'
            }`}>
            Casa Carolina <span className="italic font-normal opacity-70">Moreré</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 underline-anim pb-1 ${isNavSolid ? 'text-ocean-800' : 'text-white/90'
                } ${location.pathname === link.path
                  ? 'opacity-100'
                  : 'opacity-60 hover:opacity-100'
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${isNavSolid ? 'text-ocean-800' : 'text-white/80'
                } opacity-60 hover:opacity-100`}
            >
              {language.toUpperCase()}
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            <div className={`absolute right-0 pt-3 w-40 transition-all duration-300 ${langOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
              <div className="glass border border-gray-200/50 rounded-lg shadow-premium overflow-hidden">
                {[Language.PT, Language.EN, Language.FR, Language.ES].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setLangOpen(false); }}
                    className={`block w-full text-left px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${language === lang
                        ? 'text-ocean bg-ocean-50'
                        : 'text-gray-500 hover:bg-sand-50 hover:text-ocean-800'
                      }`}
                  >
                    {lang === Language.PT ? 'Português' : lang === Language.EN ? 'English' : lang === Language.FR ? 'Français' : 'Español'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/booking')}
            className={`px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] rounded-sm transition-all duration-500 hover-lift ${isNavSolid
                ? 'bg-ocean text-white hover:bg-ocean-800'
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-ocean-900'
              }`}
          >
            {t.nav.book}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-all duration-300 ${isNavSolid ? 'text-ocean' : 'text-white'
            }`}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute left-0 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 top-2 rotate-45' : 'w-6 top-0'
              }`} />
            <span className={`absolute left-0 top-2 w-4 h-0.5 bg-current transition-all duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'
              }`} />
            <span className={`absolute left-0 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 top-2 -rotate-45' : 'w-5 top-4'
              }`} />
          </div>
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-500 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="h-full flex flex-col justify-center px-10 stagger-children">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-4xl md:text-5xl font-serif text-ocean-900 py-3 hover:text-sunlight transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-10 mt-10 border-t border-gray-100 flex gap-6">
            {Object.values(Language).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-sm uppercase font-semibold tracking-[0.15em] transition-all duration-300 ${language === lang
                    ? 'text-ocean border-b-2 border-sunlight pb-1'
                    : 'text-gray-400 hover:text-ocean-800'
                  }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            onClick={() => navigate('/booking')}
            className="mt-10 w-full bg-ocean text-white py-5 text-center text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover-lift shadow-premium"
          >
            {t.nav.book}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;