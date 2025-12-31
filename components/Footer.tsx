import React from 'react';
import { useLanguage } from '../App';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ocean text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl mb-4">Casa Carolina Moreré</h2>
            <p className="text-white/80 max-w-md leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-ocean transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@casacarolinamorere.com" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-ocean transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-ocean transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 text-sunlight">{t.nav.location}</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Moreré Beach<br />
              Ilha de Boipeba<br />
              Bahia, Brazil
            </p>
            <Link to="/location" className="underline underline-offset-4 text-sm text-white/60 hover:text-white">
              View on map
            </Link>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 text-sunlight">Menu</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/house" className="hover:text-white transition-colors">{t.nav.house}</Link></li>
              <li><Link to="/experience" className="hover:text-white transition-colors">{t.nav.experience}</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">{t.nav.reviews}</Link></li>
              <li><Link to="/booking" className="hover:text-white transition-colors">{t.nav.book}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Casa Carolina Moreré.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-white/5 rounded text-center text-xs text-white/50">
          Originally hosted on Airbnb, now directly bookable on casacarolinamorere.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;