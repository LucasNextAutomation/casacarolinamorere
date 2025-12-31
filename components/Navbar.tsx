
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.house, path: '/house' },
    { name: t.nav.experience, path: '/experience' },
    { name: t.nav.location, path: '/location' },
    { name: t.nav.reviews, path: '/reviews' },
  ];

  const isNavSolid = scrolled || isOpen || !isHome;
  const textColor = isNavSolid ? 'text-ocean' : 'text-white text-shadow-subtle';
  const bgColor = isNavSolid ? 'bg-white shadow-md' : 'bg-transparent';
  const btnColor = isNavSolid 
    ? 'bg-ocean text-white hover:bg-ocean-800' 
    : 'bg-white/10 text-white backdrop-blur-md border border-white/30 hover:bg-white hover:text-ocean';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
        isNavSolid ? 'py-4 ' + bgColor : 'py-8'
      }`}
    >
      {/* Enhanced top gradient for better contrast on images */}
      {isHome && !scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none h-48 opacity-100 transition-opacity duration-500" />
      )}

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-10">
        <Link to="/" className="group flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-serif text-sm transition-all duration-500 ${isNavSolid ? 'border-ocean text-ocean' : 'border-white text-white'}`}>
            C
          </div>
          <h1 className={`font-serif text-xl md:text-2xl tracking-tight transition-colors duration-500 ${textColor}`}>
            CASA CAROLINA <span className="italic font-normal opacity-80">MORERÉ</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-luxury hover:text-sunlight transition-all duration-300 ${textColor} ${
                location.pathname === link.path ? 'opacity-100' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="relative group">
            <button className={`flex items-center text-[10px] font-bold uppercase tracking-luxury ${textColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
              {language.toUpperCase()}
              <ChevronDown className="ml-1 w-3 h-3" />
            </button>
            <div className="absolute right-0 mt-3 w-44 bg-white shadow-2xl py-4 hidden group-hover:block border border-gray-100 rounded-sm animate-in fade-in slide-in-from-top-2">
              {[Language.PT, Language.EN, Language.FR, Language.ES].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`block w-full text-left px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-sand-50 transition-colors ${
                    language === lang ? 'text-ocean' : 'text-gray-400'
                  }`}
                >
                  {lang === Language.PT ? 'Português' : lang === Language.EN ? 'English' : lang === Language.FR ? 'Français' : 'Español'}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate('/booking')}
            className={`px-8 py-3.5 text-[10px] font-black uppercase tracking-luxury transition-all duration-500 hover:shadow-xl active:scale-95 ${btnColor}`}
          >
            {t.nav.book}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors ${textColor}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-700 ease-in-out pt-32 px-10 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              style={{ transitionDelay: `${i * 50}ms` }}
              className={`text-4xl font-serif text-ocean hover:italic transition-all ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-10 border-t border-gray-100 grid grid-cols-2 gap-y-6">
             {Object.values(Language).map((lang) => (
               <button 
                key={lang}
                onClick={() => setLanguage(lang)} 
                className={`text-xs uppercase font-bold tracking-luxury text-left ${language === lang ? 'text-ocean underline underline-offset-8' : 'text-gray-300'}`}
               >
                 {lang}
               </button>
             ))}
          </div>
          <button
            onClick={() => navigate('/booking')}
            className="w-full bg-ocean text-white py-6 mt-6 text-center text-xs font-black uppercase tracking-luxury shadow-2xl rounded-sm"
          >
            {t.nav.book}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;