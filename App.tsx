import React, { useState, createContext, useContext, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TheHouse from './pages/TheHouse';
import Experience from './pages/Experience';
import Location from './pages/Location';
import Reviews from './pages/Reviews';
import Booking from './pages/Booking';

// --- Context Setup ---
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof TRANSLATIONS[Language.EN];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.PT); // Default to PT based on context

  const value = {
    language,
    setLanguage,
    t: TRANSLATIONS[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans text-gray-800 antialiased selection:bg-ocean selection:text-white">
          <Navbar />
          <main className="flex-grow pt-16 lg:pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/house" element={<TheHouse />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/location" element={<Location />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;