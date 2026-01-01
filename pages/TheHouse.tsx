
import React from 'react';
import { useLanguage } from '../App';
import { Home, Layout, Coffee, Wifi, Shield, Sun, Check, ArrowDown } from 'lucide-react';

const TheHouse: React.FC = () => {
  const { t } = useLanguage();
  const baseUrl = "https://casacarolinamorere-media.s3.fr-par.scw.cloud/";

  const sections = [
    {
      id: "social",
      title: "Social Spaces",
      subtitle: "The Living Experience",
      description: "The ground floor is designed as a vast open-air pavilion. It seamlessly connects the gourmet kitchen and the main lounge directly to the beach deck, allowing the sea breeze to flow freely throughout.",
      images: [
        { url: "salonprincipal.jpeg", label: "Main Lounge", span: "col-span-2 row-span-2 md:col-span-3 md:row-span-2" },
        { url: "cuisine.jpg", label: "Chef's Kitchen", span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { url: "TerrasseEnBas.jpeg", label: "Beach Deck", span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { url: "deuxiemesalon.jpeg", label: "Second Lounge", span: "col-span-2 row-span-1 md:col-span-2 md:row-span-1" },
        { url: "salon2.jpeg", label: "Lounge Detail", span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { url: "panorama%20rdc.jpg", label: "Open Architecture", span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" }
      ]
    },
    {
      id: "suites",
      title: "Sanctuaries",
      subtitle: "The Master Suites & Bedrooms",
      description: "Five distinct sleeping areas crafted with local wood and natural fibers. Each room is positioned to catch the Atlantic trade winds, providing natural cooling and the sound of waves.",
      images: [
        { url: "Chambre%201.jpg", label: "Suite One", span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2" },
        { url: "Chambre%202.JPG", label: "Suite Two", span: "col-span-2 row-span-1 md:col-span-2 md:row-span-1" },
        { url: "chambre%204.jpg", label: "Ocean View Room", span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { url: "chambre%205.JPG", label: "Garden Suite", span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { url: "Chambre%203.JPG", label: "Guest Wing", span: "col-span-2 row-span-1 md:col-span-4 md:row-span-1" }
      ]
    },
    {
      id: "details",
      title: "The Details",
      subtitle: "Craftsmanship & Bathrooms",
      description: "Luxury is in the details. Hand-finished wood, stone bathrooms, and solar-heated water ensure comfort in harmony with the environment.",
      images: [
        { url: "SDB.jpg", label: "Master Bathroom", span: "col-span-2 row-span-2 md:col-span-3 md:row-span-2" },
        { url: "SDB%202.jpg", label: "Guest Bath", span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { url: "sdb%20nous.jpg", label: "Personal Touches", span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { url: "sddouche%20rdc.JPG", label: "Rain Showers", span: "col-span-2 row-span-1 md:col-span-4 md:row-span-1" }
      ]
    },
    {
      id: "upper",
      title: "The Outlook",
      subtitle: "First Floor & Terraces",
      description: "The upper deck offers a unique vantage point over the Moreré reef. It is the perfect spot for morning yoga or evening stargazing.",
      images: [
        { url: "Vue%20depuis%20la%20terrasse%20du%201er%20e%CC%81tage.jpg", label: "Infinite Horizon", span: "col-span-2 row-span-2 md:col-span-4 md:row-span-2" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Premium Header */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={`${baseUrl}Maison%20depuis%20la%20plage.jpg`}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Casa Carolina from the beach"
        />
        <div className="relative z-20 text-center px-6">
          <span className="text-sand font-black text-[11px] md:text-xs uppercase tracking-luxury mb-8 block text-shadow-subtle">The Property</span>
          <h1 className="font-serif text-6xl md:text-9xl lg:text-[10rem] text-white mb-10 drop-shadow-2xl text-shadow-premium leading-tightest font-black tracking-tightest">The House</h1>
          <div className="w-px h-40 bg-gradient-to-b from-white to-transparent mx-auto mt-24 animate-bounce"></div>
        </div>
      </section>

      {/* Nav Jump Links */}
      <div className="sticky top-16 md:top-20 bg-white/95 backdrop-blur-md z-30 border-b border-gray-100 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-10 flex justify-center space-x-20">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className="text-[10px] uppercase font-black tracking-luxury text-gray-400 hover:text-ocean transition-all duration-300 relative group pb-2">
              {s.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ocean group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Dynamic Sections */}
      {sections.map((section, sIdx) => (
        <section key={section.id} id={section.id} className={`py-56 md:py-72 ${sIdx % 2 === 0 ? 'bg-white' : 'bg-offwhite border-y border-gray-100/50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-20 md:gap-32 mb-24 items-start ${sIdx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`lg:col-span-5 lg:sticky lg:top-64 ${sIdx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-12">
                  <span className="text-sunlight font-black text-[11px] uppercase tracking-luxury block border-l-2 border-sunlight pl-6">{section.subtitle}</span>
                  <h2 className="font-serif text-5xl md:text-8xl text-ocean-900 leading-tightest font-black tracking-tightest">{section.title}</h2>
                  <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed-extra max-w-lg">
                    {section.description}
                  </p>
                  <div className="w-20 h-1 bg-sand/60"></div>
                </div>
              </div>
              <div className={`lg:col-span-7 ${sIdx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 auto-rows-[300px] md:auto-rows-[450px]">
                  {section.images.map((img, iIdx) => (
                    <div
                      key={iIdx}
                      className={`group relative overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18)] hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out border border-black/5 ${img.span}`}
                    >
                      <img
                        src={`${baseUrl}${img.url}`}
                        alt={img.label}
                        className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute bottom-12 left-12 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                        <span className="text-white text-[11px] uppercase font-black tracking-luxury border-b border-white/40 pb-4 block">{img.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-72 bg-ocean-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <span className="text-sand font-black text-[12px] uppercase tracking-luxury mb-12 block">Your Journey Starts Here</span>
          <h2 className="font-serif text-5xl md:text-8xl mb-20 leading-tightest font-black tracking-tightest">Ready to experience Moreré?</h2>
          <p className="text-white/60 mb-24 text-xl md:text-3xl font-light leading-relaxed-extra max-w-3xl mx-auto">
            The house is open year-round, following the rhythm of the tides and the bahian sun. Experience authentic luxury where nature is the main architect.
          </p>
          <button
            onClick={() => window.location.hash = '#/booking'}
            className="px-24 py-8 bg-white text-ocean font-black text-[12px] uppercase tracking-luxury hover:bg-sand transition-all duration-500 shadow-2xl active:scale-95 transform hover:-translate-y-2"
          >
            Book your stay
          </button>
        </div>
      </section>
    </div>
  );
};

export default TheHouse;
